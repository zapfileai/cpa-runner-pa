const pennsylvaniaCities = [
  "Carnegie", "Camp Hill", "Audubon", "Bedford", "Bath",
  "Buena Vista", "Canonsburg", "Bristol", "Avondale", "Brackney",
  "Blandon", "Bala Cynwyd", "Boswell", "Bobtown", "Abington",
  "Bulger", "Bridgeville", "Blooming Glen", "Beaver", "Boyers",
  "Alum Bank", "Allenwood", "Bryn Athyn", "Brackenridge", "Adamstown",
  "Ambridge", "Berlin", "Bird In Hand", "Apollo", "Bartonsville",
  "Blossburg", "Bakerstown", "Carmichaels", "Beaver Falls", "Brookville",
  "Brownstown", "Cambridge Springs", "Bowmanstown", "Brodheadsville", "Berwick",
  "Abbottstown", "Avonmore", "Buckingham", "Greensburg", "Phoenixville",
  "Zelienople", "Lansdale", "Elkins Park", "Gap", "New Castle",
  "Kittanning", "Christiana", "Benton", "Ardmore", "Brockway",
  "Johnstown", "Jennerstown", "Jenkintown", "Wayne", "Ligonier",
  "Kingston", "Hawley", "Bernville", "Pottstown", "Lancaster",
  "Plymouth Meeting", "Easton", "York", "Richboro", "Reading",
  "Murrysville", "Elizabeth", "Emporium", "Doylestown", "Nanticoke",
  "Cheswick", "New Kensington", "Hanover", "Havertown", "Swiftwater",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
