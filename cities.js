const pennsylvaniaCities = [
  "Abington", "Allentown", "Altoona", "Ambler", "Ardmore",
  "Arnold", "Bangor", "Beaver", "Beaver Falls", "Bedford",
  "Bellefonte", "Berwick", "Bethlehem", "Bloomsburg", "Bradford",
  "Bristol", "Butler", "Carlisle", "Carnegie", "Chambersburg",
  "Chester", "Coatesville", "Collegeville", "Columbia", "Connellsville",
  "Conshohocken", "Doylestown", "DuBois", "Dunmore", "East Stroudsburg",
  "Easton", "Elizabethtown", "Emmaus", "Erie", "Gettysburg",
  "Greensburg", "Hanover", "Harrisburg", "Hatboro", "Hazleton",
  "Horsham", "Huntingdon", "Indiana", "Jenkintown", "Johnstown",
  "Kennett Square", "King of Prussia", "Kingston", "Lancaster", "Lansdale",
  "Lebanon", "Lewisburg", "Lewistown", "Lock Haven", "Malvern",
  "Meadville", "Media", "Monroeville", "New Castle", "Norristown",
  "Oil City", "Philadelphia", "Phoenixville", "Pittsburgh", "Pittston",
  "Pottstown", "Pottsville", "Quakertown", "Reading", "Scranton",
  "Sharon", "State College", "Stroudsburg", "Sunbury", "Uniontown",
  "Upper Darby", "Washington", "West Chester", "Wilkes-Barre", "York"
];

const batches = {
  1: pennsylvaniaCities.slice(0, 20),
  2: pennsylvaniaCities.slice(20, 40),
  3: pennsylvaniaCities.slice(40, 60),
  4: pennsylvaniaCities.slice(60, 80),
};

module.exports = { batches };
