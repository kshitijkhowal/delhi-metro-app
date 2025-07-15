import json
from pathlib import Path

stations_path = Path('app/data/stations/stations.json')

with stations_path.open(encoding='utf-8') as f:
    stations = json.load(f)

# Sort stations by 'id' ascending
stations_sorted = sorted(stations, key=lambda s: s['id'])

with stations_path.open('w', encoding='utf-8') as f:
    json.dump(stations_sorted, f, ensure_ascii=False, indent=4)

print('stations.json sorted by id in ascending order.') 