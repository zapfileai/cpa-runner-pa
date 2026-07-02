const pennsylvaniaCities = [
  "Winfield", "Uniontown", "University Park", "Wampum", "Stroudsburg",
  "Sugarloaf", "Tunkhannock", "Warrington", "Swarthmore", "Westtown",
  "Summerdale", "Upper Darby", "Warminster", "Wind Gap", "Waynesboro",
  "Warrendale", "Stoystown", "Wilmerding", "Telford", "Waymart",
  "Unionville", "Waverly", "West Grove", "Trafford", "Trout Run",
  "Willow Grove", "Topton", "Tipton", "Springdale", "Spring City",
  "Tobyhanna", "Temple", "Worthington", "West Middlesex", "Spring Creek",
  "Smithfield", "Woodlyn", "Thorndale", "Sunbury", "Springfield",
  "Vandergrift", "Sweet Valley", "Union Dale", "Turtle Creek", "Womelsdorf",
  "Dresher", "Spring House", "Slippery Rock", "Wilkes Barre", "West Newton",
  "West Point", "Venetia", "Washington", "Titusville", "Walnutport",
  "West Sunbury", "Southampton", "Trexlertown", "Washington Crossing", "Wyalusing",
  "Somerset", "Wernersville", "Williamsport", "Stevens", "Towanda",
  "Strasburg", "Wapwallopen", "West Mifflin", "Karns City", "King Of Prussia",
  "Malvern", "Lehighton", "Laurys Station", "Imperial", "Lemont Furnace",
  "Irvona", "Jerome", "Mcconnellsburg", "Manchester", "Leetsdale",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < pennsylvaniaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(pennsylvaniaCities[i]);
}

module.exports = { batches };
