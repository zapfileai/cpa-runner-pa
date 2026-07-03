const pennsylvaniaCities = [
  "Masontown", "Leesport", "Landisburg", "Listie", "Marcus Hook",
  "Lederach", "Marianna", "Huntingdon Valley", "Imler", "Hermitage",
  "Hatfield", "Herminie", "Grantham", "Flourtown", "Gardners",
  "Felton", "Fombell", "Freeport", "Heilwood", "Folcroft",
  "Glassport", "Haverford", "Frackville", "Hesston", "Fogelsville",
  "Hummels Wharf", "Highspire", "Hazleton", "Greensboro", "Dushore",
  "Columbia Cross Roads", "Conshohocken", "Downingtown", "Columbia", "Dravosburg",
  "Ellwood City", "Delmont", "Dallastown", "Confluence", "Devault",
  "Elton", "Chester Heights", "Dillsburg", "Muncy", "New Bethlehem",
  "New Ringgold", "Newport", "New Oxford", "Northumberland", "New Salem",
  "Millville", "Millerstown", "Morgan", "Mohnton", "Mount Bethel",
  "North Versailles", "Oakmont", "Ono", "Morton", "Meyersdale",
  "Media", "Newfoundland", "New Holland", "Milton", "New Kingstown",
  "Mont Alto", "Pine Grove", "Skippack", "Port Carbon", "Shamokin",
  "Robesonia", "Shoemakersville", "Pocono Summit", "Prosperity", "Sayre",
  "Selinsgrove", "Shippensburg", "Port Matilda", "Pennsburg", "Port Allegany",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
