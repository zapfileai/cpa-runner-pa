const pennsylvaniaCities = [
  "Saylorsburg", "Point Marion", "Shickshinny", "Shippenville", "Palmyra",
  "Retired", "Shohola", "Pittston", "Roaring Spring", "Saint Marys",
  "Pen Argyl", "Rebersburg", "Schnecksville", "Portage", "Saxonburg",
  "Ridgway", "Sewickley", "Schuylkill Haven", "Paradise", "Shrewsbury",
  "Pittsfield", "Plymouth", "Rixford", "Schwenksville", "Richfield",
  "Shamokin Dam", "Schellsburg", "Rossville", "Rices Landing", "Shenandoah",
  "Oxford", "Perryopolis", "Presto", "Rochester", "Russell",
  "Richlandtown", "Seven Valleys", "Salisbury", "Quakertown", "Ridley Park",
  "Philipsburg",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
