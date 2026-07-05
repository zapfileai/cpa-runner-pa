const pennsylvaniaCities = [
  "Fleetwood", "Fairview", "Gwynedd", "Gettysburg", "Fort Loudon",
  "Export", "Hershey", "Factoryville", "Gilbertsville", "Grove City",
  "Hellertown", "Essington", "Hatboro", "Harrison City", "Harborcreek",
  "Hunker", "Fort Washington", "Henryville", "Halifax", "Glenolden",
  "Harrisville", "Hamlin", "Harveys Lake", "Hollidaysburg", "Glenville",
  "Hop Bottom", "Feasterville Trevose", "Franklin", "Finleyville", "Hopwood",
  "Fredericksburg", "Greenock", "Freeland", "Harleysville", "Georgetown",
  "Homer City", "Glen Rock", "Glenmoore", "Falls", "Furlong",
  "Fairless Hills", "Freedom", "Grantville", "Fayetteville", "Glenshaw",
  "Gallitzin", "Green Lane", "Horsham", "Hallstead", "Girard",
  "Gwynedd Valley", "Greentown", "Homestead", "Forest City", "Fairfield",
  "Germansville", "Harwick", "Honey Brook", "Glen Mills", "Enola",
  "Gladwyne", "Fountainville", "Greencastle", "Gouldsboro", "Holicong",
  "Hooversville", "Garnet Valley", "Hamburg", "Ford City", "Evans City",
  "Gibsonia", "Greenville", "Huntingdon", "Glenside", "Harmony",
  "Honesdale", "Dalton", "Corry", "Chicora", "Elysburg",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
