const pennsylvaniaCities = [
  "East Stroudsburg", "Crum Lynne", "Coplay", "Cranesville", "Edinboro",
  "East Mckeesport", "Elverson", "Cressona", "Conyngham", "Concordville",
  "Cheyney", "Emlenton", "Dalmatia", "East Berlin", "Colmar",
  "Coal Township", "East Greenville", "Dallas", "Emmaus", "Dubois",
  "Coopersburg", "Chalfont", "Clifton Heights", "Claysville", "Cowansville",
  "Coudersport", "Eagleville", "Duncannon", "Center Valley", "Cheltenham",
  "Coupon", "Clinton", "Elliottsburg", "Clearfield", "Coaldale",
  "Clairton", "Collegeville", "Darby", "Chambersburg", "Cochranville",
  "Devon", "Coral", "Cresson", "Clarion", "Cogan Station",
  "Ebensburg", "Cochranton", "Edgemont", "Denver", "Connellsville",
  "Coraopolis", "Clearville", "Croydon", "Clarks Summit", "Dauphin",
  "Edinburg", "Centre Hall", "Effort", "Conestoga", "Danielsville",
  "Chadds Ford", "Eighty Four", "Danboro", "Dilliner", "Dover",
  "Curwensville", "Cresco", "Chester", "Dublin", "Elizabethtown",
  "Cedars", "Douglassville", "Cranberry Township", "Clarksburg", "Creighton",
  "Coatesville", "Danville", "East Pittsburgh", "Conway", "Clifford",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
