const pennsylvaniaCities = [
  "Silverdale", "Perkasie", "Reynoldsville", "Pocono Pines", "Scotrun",
  "Sellersville", "Stewartstown", "Verona", "Wexford", "Sumneytown",
  "Tamaqua", "Valencia", "Willow Street", "Troy", "South Park",
  "Volant", "Waynesburg", "Southeastern", "Trumbauersville", "Strattanville",
  "Smethport", "Spring Grove", "Villanova", "Transfer", "Whitehall",
  "Wrightsville", "Souderton", "Thornton", "Stockdale", "Wattsburg",
  "Weatherly", "Wendel", "State College", "Toughkenamon", "Warren",
  "Warriors Mark", "Tarrs", "Valley View", "Spring Church", "Tyrone",
  "Wellsboro", "Uwchland", "Thompson", "Tower City", "White Haven",
  "Worcester", "Woxall", "Thompsontown", "Tarentum", "Williamstown",
  "Trevorton", "Windber", "Tannersville", "Valley Forge", "Mar Lin",
  "Washington Boro", "Lykens", "Indiana", "Mahanoy City", "Kempton",
  "Jenners", "Lakeville", "Loysville", "Mcdonald", "Jeannette",
  "Lucinda", "Lewis Run", "Ickesburg", "Latrobe", "Kane",
  "Luzerne", "Marion Center", "Manheim", "Jonestown", "Jamison",
  "Marshalls Creek", "Lansdowne", "Leola", "Martinsburg", "Landenberg",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
