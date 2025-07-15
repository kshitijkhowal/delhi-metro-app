const fs = require('fs');

const stops = JSON.parse(fs.readFileSync('app/data/gtfsJSON/stops.json', 'utf-8'));
stops.forEach(stop => {
  console.log(`${stop.stop_id},${stop.stop_name}`);
}); 