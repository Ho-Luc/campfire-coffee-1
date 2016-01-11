// Campfire-Coffee Shop

function coffeeShop(id, location, minimum, maximum, cups, pounds) {
  this.ident = id; // ID of store
  this.loc = location; // Full location of store
  this.min = minimum; // Minimum number of customers per hour for location
  this.max = maximum; // Maximum number of customers per hour for location
  this.cups = cups; // Average number of cups sold per customer for location
  this.lbs = pounds; // Average pounds of coffee sold per customer for location
  this.cupsArray = []; // Empty array that will contain number of cups needed for all times
  this.lbsArray = []; // Empty array that will contain number of pounds needed for all times
  this.custNum = []; // Empty array that will contain number of customers for each time
  this.findCust = function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.ceil(Math.random() * (this.max - this.min)) + this.min);
  };
  this.coffeeCount = function() { // Fills array with number of cups and total (round to tenths when printing for cleanliness)
    var sumc = 0;
    var sumlb = 0;
    for (i = 0; i < 8; i++) {
      this.findCust();
      this.cupsArray.push(Math.round((this.custNum[this.custNum.length - 1] * this.cups) * 10) / 10); // Round to nearest tenth
      this.lbsArray.push(Math.round((this.custNum[this.custNum.length - 1] * this.lbs) * 10) / 10); // Round to nearest tenth
      console.log('Found ' + this.cupsArray[i] + ' cups for hour ' + i + ' at the ' + this.loc + ' store.');
      console.log('Found ' + this.lbsArray[i] + ' pounds for hour ' + i + ' at the ' + this.loc + ' store.');
    };
    for (i = 0; i < this.cupsArray.length; i++) {
      sumc += this.cupsArray[i];
      sumlb += this.lbsArray[i];
    };
    this.cupsArray.push(Math.round(sumc * 10)/10);
    this.lbsArray.push(Math.round(sumlb * 10)/10);
    this.total = Math.round(((this.cupsArray[this.cupsArray.length - 1] / 20) + this.lbsArray[this.lbsArray.length - 1]) * 10) / 10
    console.log('A total of ' + Math.round(sumc * 10) / 10 + ' cups must be made for the ' + this.loc + ' store.');
    console.log('A total of ' + Math.round(sumlb * 10) / 10 + ' pounds must be roasted for the ' + this.loc + ' store.');
  };
  this.printShop = function() {
    var headerEl = document.createElement('h3');
    headerEl.textContent = this.loc + ' Store:';
    document.body.appendChild(headerEl);
    var list = document.createElement('ul')
    document.body.appendChild(list);
    this.coffeeCount(); // Calculate number of cups/pounds needed
    for (i = 10; i < (10 + this.cupsArray.length - 1); i++) { // Print number of cups/pounds needed into unordered list within ul tags
      var entry = document.createElement('li');
      if (i < 12) {
        entry.textContent = i + ':00AM - ' + (Math.round(((this.cupsArray[i - 10] / 20) + this.lbsArray[i - 10]) * 10) / 10) + ' lbs [' + this.custNum[i - 10] + ' customers, ' + this.cupsArray[i - 10] + ' cups (' + Math.round((this.cupsArray[i - 10] / 20) * 10) / 10 + ' lbs), ' + this.lbsArray[i - 10] + ' lbs to-go]';
        document.body.appendChild(entry);
      } else {
        entry.textContent = i - 10 + ':00PM - ' + (Math.round(((this.cupsArray[i - 10] / 20) + this.lbsArray[i - 10]) * 10) / 10) + ' lbs [' + this.custNum[i - 10] + ' customers, ' + this.cupsArray[i - 10] + ' cups (' + Math.round((this.cupsArray[i - 10] / 20) * 10) / 10 + ' lbs), ' + this.lbsArray[i - 10] + ' lbs to-go]';
        document.body.appendChild(entry);
      };
    };
    var total = document.createElement('li'); // Print total number of cups needed to unordered list
    total.textContent = 'A total of ' + this.total + ' pounds must be roasted for the ' + this.loc + ' store today.';
    document.body.appendChild(total);
  }
  console.log('Created new shop at ' + location + '.');
};


var pikePlace = new coffeeShop('pikePlace', 'Pike Place Market', 14, 55, 1.2, 3.7);
pikePlace.printShop();

var capitolHill = new coffeeShop('capitolHill', 'Capitol Hill', 32, 38, 3.2, 0.7);
capitolHill.printShop();

var seattlePub = new coffeeShop('seattlePub', 'Seattle Public Library', 49, 75, 2.6, 0.2);
seattlePub.printShop();

var southLake = new coffeeShop('southLake', 'South Lake Union', 35, 88, 1.3, 3.7);
southLake.printShop();

var seaTac = new coffeeShop('seaTac', 'SeaTac Airport', 68, 124, 1.1, 2.7);
seaTac.printShop();

var webSales = new coffeeShop('webSales', 'Website Sales', 3, 6, 0, 6.7);
webSales.printShop();
