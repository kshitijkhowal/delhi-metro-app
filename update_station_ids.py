import json
import re
from pathlib import Path
from difflib import get_close_matches

# Load data
stations_path = Path('app/data/stations/stations.json')
stops_path = Path('app/data/gtfsJSON/stops.json')

with stations_path.open(encoding='utf-8') as f:
    stations = json.load(f)
with stops_path.open(encoding='utf-8') as f:
    stops = json.load(f)

def normalize(name):
    return re.sub(r'[^a-z0-9 ]', '', name.strip().lower())

# Build stop name and synonym maps
stop_name_norm_map = {normalize(s['stop_name']): s['stop_id'] for s in stops}
stop_names = [s['stop_name'] for s in stops]
stop_name_to_id = {s['stop_name']: s['stop_id'] for s in stops}

# Manual mapping for unmatched stations
manual_map = {
    'Airport': 154,
    'Badarpur': 138,
    'Badkhal Mor': 143,
    'Chhatarpur': 63,
    'Civil Liness': 46,
    'Dabri Mor-Janakpuri South': 195,
    'Depot': 520,
    'Dwarka Sector 10': 118,
    'Dwarka Sector 11': 117,
    'Dwarka Sector 12': 116,
    'Dwarka Sector 13': 115,
    'Dwarka Sector 14': 114,
    'Dwarka Sector 21': 121,
    'Dwarka Sector 8': 120,
    'Dwarka Sector 9': 119,
    'ESI Hospital': 177,
    'Faridabad Old': 144,
    'Guru Dronacharya': 67,
    'Haiderpur': 38,
    'Harkesh Nagar': 133,
    'Hazrat Nizamuddin': 223,
    'Hindon': 226,
    'INA': 56,
    'Jaffrabad': 214,
    'Janakpuri East': 107,
    'Janakpuri West': 108,
    'Jasola Apollo': 134,
    'Jawaharlal Nehru Stadium': 125,
    'Kanhiya Nagar': 14,
    'Knowledge Park II': 515,
    'Lal Qila': 160,
    'Major Mohit Sharma': 230,
    'Mansarovar Park': 3,
    'Maujpur-Babarpur': 215,
    'Mayur Vihar – I': 87,
    'Mayur Vihar Extension': 86,
    'Mundka Industrial Area': 196,
    'Netaji Subhash Place': 16,
    'Noida Sector 15': 84,
    'Noida Sector 16': 83,
    'Noida Sector 18': 82,
    'Noida Sector 34': 233,
    'Noida Sector 52': 234,
    'Noida Sector 59': 236,
    'Noida Sector 61': 235,
    'Noida Sector 62': 237,
    'Pragati Maidan': 39,
    'Qutub Minar': 62,
    'Ramakrishna Ashram Marg': 94,
    'Rohini Sector 18': 37,
    'Sadar Bazaar Cantonment': 192,
    'Sant Surdas': 219,
    'Sector 28': 142,
    'Seelampur': 6,
    'Shaheed Sthal': 225,
    'Sikandarpur': 68,
    'Subhash Nagar': 105,
    'Surajmal Stadium': 26,
    'Tughlakabad': 137,
}

unmatched = []
for st in stations:
    found = False
    st_name = st['name']['english'].strip()
    st_norm = normalize(st_name)
    # Try direct match
    if st_norm in stop_name_norm_map:
        st['id'] = stop_name_norm_map[st_norm]
        found = True
    else:
        # Try synonyms
        if 'synonyms' in st:
            for syn in st['synonyms']:
                syn_norm = normalize(syn)
                if syn_norm in stop_name_norm_map:
                    st['id'] = stop_name_norm_map[syn_norm]
                    found = True
                    break
    # Manual mapping fallback
    if not found and st_name in manual_map:
        st['id'] = manual_map[st_name]
        found = True
    if not found:
        unmatched.append(st_name)

# Print fuzzy matches for manual mapping
def print_fuzzy_matches():
    print('\nManual mapping suggestions:')
    for name in unmatched:
        matches = get_close_matches(name, stop_names, n=3, cutoff=0.6)
        print(f'\nStation: {name}')
        if matches:
            for m in matches:
                print(f'  Candidate: {m} (stop_id: {stop_name_to_id[m]})')
        else:
            print('  No good candidate found.')

if __name__ == '__main__':
    print_fuzzy_matches()

# Write updated stations.json
with stations_path.open('w', encoding='utf-8') as f:
    json.dump(stations, f, ensure_ascii=False, indent=4)

# Report unmatched stations
if unmatched:
    print('Unmatched stations (manual review needed):')
    for name in unmatched:
        print('-', name)
else:
    print('All stations matched and updated.') 