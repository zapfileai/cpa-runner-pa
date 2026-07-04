const pennsylvaniaCities = [
  "Loyalhanna", "Mckean", "Mckees Rocks", "Kulpsville", "Lake Ariel",
  "Matamoras", "Kemblesville", "Lamar", "Martins Creek", "Leechburg",
  "Lititz", "Kutztown", "Lake Harmony", "Llewellyn", "Kennett Square",
  "Lackawaxen", "Macungie", "Littlestown", "Lock Haven", "Kunkletown",
  "Lafayette Hill", "Johnsonburg", "Kresgeville", "Ingomar", "Julian",
  "Loretto", "Landisville", "Irwin", "Kulpmont", "Levittown",
  "Indianola", "Jackson Center", "Lawrence", "Marietta", "Lyon Station",
  "Mcadoo", "Lenhartsville", "Lewisville", "Mather", "Mars",
  "Manns Choice", "Jermyn", "Kintnersville", "Laughlintown", "Langhorne",
  "Jessup", "Line Lexington", "Lampeter", "Leck Kill", "Lewistown",
  "Marysville", "Lewisburg", "Mcclure", "Lemoyne", "Limekiln",
  "Jim Thorpe", "Lewisberry", "Lehigh Valley", "La Plume", "Linden",
  "Lebanon", "Jersey Shore", "Kimberton", "Mansfield", "Ephrata",
  "Glen Riddle Lima", "Grampian", "Enon Valley", "Folsom", "Hidden Valley",
  "Houston", "Holtwood", "Everett", "Farmington", "Friedens",
  "Erie", "Hummelstown", "Houtzdale", "Hunlock Creek", "Etters",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
