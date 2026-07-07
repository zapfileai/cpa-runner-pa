const pennsylvaniaCities = [
  "Moscow", "Oley", "Mechanicsburg", "Oakdale", "Mercersburg",
  "Mount Gretna", "New Philadelphia", "Mount Joy", "New Berlin", "Mifflinburg",
  "Monongahela", "Moosic", "Millersville", "New Wilmington", "Newmanstown",
  "Mount Pleasant", "Needmore", "Monessen", "Northpoint", "Mount Carmel",
  "Olyphant", "Mount Holly Springs", "Oil City", "Nesquehoning", "Mercer",
  "Zionsville", "Wynnewood", "Wyncote", "Youngwood", "Wyoming",
  "Sarver", "Wysox", "Zion Grove", "Rockwood", "Reamstown",
  "Pennsylvania Furnace", "Ruffs Dale", "Punxsutawney", "Royersford", "Scottdale",
  "Prospect Park", "Pine Forge", "Roulette", "Richland", "Petersburg",
  "Pottsville", "Sheffield", "Silver Spring", "Rehrersburg", "Shermans Dale",
  "Sciota", "Seanor", "Shavertown", "Pocono Lake", "Sharpsville",
  "Pipersville", "Seneca", "Peckville", "Paxinos", "Reeders",
  "Red Hill", "Parkesburg", "Red Lion", "Saltsburg", "Pequea",
  "Rimersburg", "Riegelsville", "Sharon", "Saegertown", "Quarryville",
  "Saint Thomas", "Palmerton", "Ottsville", "Reinholds", "Perkiomenville",
  "Reedsville", "Paoli", "Shawnee On Delaware", "Preston Park", "Slatington",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
