// Campfire-Coffee Shop

var headers = ['Hours', 'Total Lbs', 'Customers', 'Cups', 'Lbs for Cups', 'Lbs To-Go'];

function coffeeShop(id, location, minimum, maximum, cups, pounds) {
  this.ident = id; // ID of store
  this.loc = location; // Full location of store
  this.min = minimum; // Minimum number of customers per hour for location
  this.max = maximum; // Maximum number of customers per hour for location
  this.cups = cups; // Average number of cups sold per customer for location
  this.lbs = pounds; // Average pounds of coffee sold per customer for location
  this.cupsArray = []; // Empty array that will contain number of cups needed for all times
  this.hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00 Noon', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM'];
  this.lbsArray = []; // Empty array that will contain number of pounds needed for all times
  this.custNum = []; // Empty array that will contain number of customers for each time
  this.cupsLbs = []; // Empty array that contains the cups:lbs for each time
  this.totalLbs = []; // Empty array that contains the total lbs for each time
  this.hourValues = [this.hours, this.totalLbs, this.custNum, this.cupsArray, this.cupsLbs, this.lbsArray];
  this.findCust = function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.round(Math.random() * (this.max - this.min)) + this.min);
  };
  this.coffeeCount = function() { // Fills array with number of cups and total (round to tenths when printing for cleanliness)
    var sumLbs = 0;
    for (var i = 0; i < 15; i++) {
      this.findCust();
      this.cupsArray.push(Math.round((this.custNum[this.custNum.length - 1] * this.cups) * 10) / 10); // Round to nearest tenth
      this.lbsArray.push(Math.round((this.custNum[this.custNum.length - 1] * this.lbs) * 10) / 10); // Round to nearest tenth
      this.cupsLbs.push(Math.round(this.cupsArray[i] / 20 * 10) / 10); // Cups:lbs rounded to tenth
      this.totalLbs.push(Math.round((this.lbsArray[i] + this.cupsLbs[i]) * 10) / 10) // Total pounds needed for particular hour
      console.log('Found ' + this.cupsArray[i] + ' cups for hour ' + i + ' at the ' + this.loc + ' store.');
      console.log('Found ' + this.totalLbs[i] + ' pounds for hour ' + i + ' at the ' + this.loc + ' store.');
    };
    for (var i = 0; i < this.cupsArray.length; i++) { //
      sumLbs += this.totalLbs[i];
    };
    this.total = Math.round(sumLbs * 10) / 10
    console.log('A total of ' + this.total + ' pounds must be roasted for the ' + this.loc + ' store.');
  };
  this.printShop = function() {
    var headerEl = document.createElement('h3'); // Print out header for the current shop
    headerEl.textContent = this.loc + ' Store:';
    document.body.appendChild(headerEl);
    var table = document.createElement('table'); // Create empty table for content
    table.className = 'shopTable';
    document.body.appendChild(table);
    var row1 = document.createElement('tr'); // Create empty row for titles
    table.appendChild(row1);
    for (var i = 0; i < headers.length; i++) {
      var headerItem = document.createElement('td'); // Create empty column for Hours
      headerItem.textContent = headers[i];
      headerItem.className = 'headerItem';
      row1.appendChild(headerItem);
    }
    this.coffeeCount(); // Calculate number of cups/pounds needed
    for (var hour = 0; hour < this.hours.length; hour++) { // Print number of cups/pounds needed into unordered list within ul tags
      var contentRow = document.createElement('tr');
      table.appendChild(contentRow);
      for (var i = 0; i < headers.length; i++) {
        var entryColumn = document.createElement('td');
        entryColumn.textContent = this.hourValues[i][hour];
        entryColumn.className = 'tableItem';
        contentRow.appendChild(entryColumn);
      }
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
