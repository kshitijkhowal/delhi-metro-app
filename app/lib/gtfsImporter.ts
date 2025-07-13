import db from './db';
import * as FileSystem from 'expo-file-system';

// Helper to parse CSV
function parseCSV(text: string) {
  const [header, ...lines] = text.trim().split('\n');
  const keys = header.split(',');
  return lines.map(line => {
    const values = line.split(',');
    return Object.fromEntries(keys.map((k, i) => [k, values[i]]));
  });
}

// export async function importStops() {
//   const stopsPath = FileSystem.documentDirectory + 'app/data/gtfs/stops.txt';
//   const stopsText = await FileSystem.readAsStringAsync(stopsPath);
//   const stops = parseCSV(stopsText);

//   db.transaction(tx => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS stops (
//         stop_id TEXT PRIMARY KEY,
//         stop_code TEXT,
//         stop_name TEXT,
//         stop_desc TEXT,
//         stop_lat REAL,
//         stop_lon REAL
//       )`
//     );
//     stops.forEach(stop => {
//       tx.executeSql(
//         `INSERT OR REPLACE INTO stops (stop_id, stop_code, stop_name, stop_desc, stop_lat, stop_lon)
//          VALUES (?, ?, ?, ?, ?, ?)`,
//         [
//           stop.stop_id,
//           stop.stop_code,
//           stop.stop_name,
//           stop.stop_desc,
//           parseFloat(stop.stop_lat),
//           parseFloat(stop.stop_lon)
//         ]
//       );
//     });
//   });
// }