const pennsylvaniaCities = [
  "Philadelphia", "Harrisburg", "Wallingford", "Altoona", "Orwigsburg",
  "Scranton", "Exton", "Carbondale", "Alburtis", "Boiling Springs",
  "Bradford", "West Chester", "Baden", "Bethel Park", "Auburn",
  "Acme", "Bensalem", "Cabot", "Bentleyville", "Carlisle",
  "Bainbridge", "Bushkill", "Akron", "Amity", "Boyertown",
  "Andreas", "Breinigsville", "Bellefonte", "Blanchard", "Butler",
  "Brownsville", "Buffalo Mills", "Alexandria", "Albion", "Aston",
  "Annville", "Bryn Mawr", "Campbelltown", "Belle Vernon", "Ambler",
  "Bangor", "Atglen", "Pittsburgh", "Broomall", "Aliquippa",
  "Atlasburg", "Berwyn", "Beavertown", "Birchrunville", "Biglerville",
  "Catasauqua", "Barto", "Callery", "Brookhaven", "Bethlehem",
  "Aristes", "Burgettstown", "Carrolltown", "Archbald", "Bloomsburg",
  "Bairdford", "Airville", "Carversville", "Bradfordwoods", "Beach Lake",
  "Amberson", "Bear Creek", "Bechtelsville", "Blairsville", "California",
  "Allison Park", "Bally", "Athens", "Blue Bell", "Blakeslee",
  "Boalsburg", "Cecil", "Birdsboro", "Burlington", "Allentown",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
