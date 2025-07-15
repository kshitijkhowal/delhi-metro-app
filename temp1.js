const fs = require('fs');

const stations = JSON.parse(fs.readFileSync('app/data/stations/stations.json', 'utf-8'));
stations.forEach(station => {
  console.log(`${station.id},${station.name.english}`);
}); 