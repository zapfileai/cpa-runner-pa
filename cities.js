const pennsylvaniaCities = [
  "East Petersburg", "Drexel Hill", "Dornsife", "Clarksville", "Duquesne",
  "Clarendon", "Drums", "Elizabethville", "Chester Springs", "Dingmans Ferry",
  "Derry", "Duncansville", "Charleroi", "New Hope", "New Tripoli",
  "Nicholson", "Milford Square", "Old Forge", "Montgomery", "Newtown",
  "Meadville", "Newtown Square", "Mertztown", "Morgantown", "North East",
  "Montoursville", "Middlebury Center", "North Apollo", "Orefield", "Oreland",
  "New Cumberland", "Middleburg", "Midland", "Montgomeryville", "Myerstown",
  "Morrisville", "New Providence", "Norristown", "Millersburg", "Mont Clare",
  "Natrona Heights", "Montrose", "New Bloomfield", "New Park", "Nazareth",
  "Nottingham", "Narvon", "New Eagle", "Mount Wolf", "Mount Union",
  "Northampton", "New Alexandria", "Mckeesport", "Norvelt", "Mountain Top",
  "New Freedom", "Mcknightstown", "Mcsherrystown", "Middletown", "Norwood",
  "Oaks", "Meadow Lands", "Monroeville", "North Wales", "Millerton",
  "Northern Cambria", "New Baltimore", "Narberth", "Mohrsville", "Merion Station",
  "Newville", "Mount Pocono", "Mehoopany", "North Bend", "Monaca",
  "Mifflintown", "New Brighton", "New Galilee", "Milford", "New Stanton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
