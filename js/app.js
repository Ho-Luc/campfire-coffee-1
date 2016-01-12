// Campfire-Coffee Shop

var headers = ['Hours', 'Total Lbs', 'Customers', 'Cups (Lbs)', 'Lbs To-Go'];
var globalHeaders = ['Location', 'Total Lbs', 'Total Customers', 'Total Cups (Lbs)', 'Total Lbs To-Go'];
var globalHeaders1 = ['Location', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', 'Noon', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', 'Total Lbs'];
var coffeeShops = [];
var globTable;
var globTable1;

function globalRender1() {
  globTable1 = document.createElement('table'); // Create empty table for content
  globTable1.className = 'shopTable';
  document.body.appendChild(globTable1);
  var row1 = document.createElement('tr'); // Create empty row for titles
  globTable1.appendChild(row1);
  for (var i = 0; i < globalHeaders1.length; i++) { // Populate header row
    var headerItem = document.createElement('td'); // Create empty column for Hours
    headerItem.textContent = globalHeaders1[i];
    headerItem.className = 'headerItem';
    row1.appendChild(headerItem);
  };
};

function globalRender() {
  globTable = document.createElement('table'); // Create empty table for content
  globTable.className = 'shopTable';
  document.body.appendChild(globTable);
  var row1 = document.createElement('tr'); // Create empty row for titles
  globTable.appendChild(row1);
  for (var i = 0; i < globalHeaders.length; i++) { // Populate header row
    var headerItem = document.createElement('td'); // Create empty column for Hours
    headerItem.textContent = globalHeaders[i];
    headerItem.className = 'headerItem';
    row1.appendChild(headerItem);
  };
};

function coffeeShop(id, location, minimum, maximum, cups, pounds) {
  this.identity = id; // Store name for use in global render
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
  this.cupsClmn = []; // Array containing strings to be used in the render function for the cups column
  this.globals = []; // Array storing values for the globalRender function
  this.globals1 = [];
  this.hourValues = [this.hours, this.totalLbs, this.custNum, this.cupsClmn, this.lbsArray];
  this.findCust = function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.round(Math.random() * (this.max - this.min)) + this.min);
  };
  this.coffeeCount = function() { // Fills array with number of cups and total (round to tenths when printing for cleanliness)
    var sumLbs = 0;
    var sumCust = 0;
    var sumCups = 0;
    var sumCupsLbs = 0;
    var sumLbstoGo = 0;
    this.globals1.push(this.loc);
    for (var i = 0; i < 15; i++) {
      this.findCust();
      this.cupsArray.push(Math.round((this.custNum[this.custNum.length - 1] * this.cups) * 10) / 10); // Round to nearest tenth
      this.lbsArray.push(Math.round((this.custNum[this.custNum.length - 1] * this.lbs) * 10) / 10); // Round to nearest tenth
      this.cupsLbs.push(Math.round(this.cupsArray[i] / 20 * 10) / 10); // Cups:lbs rounded to tenth
      this.totalLbs.push(Math.round((this.lbsArray[i] + this.cupsLbs[i]) * 10) / 10) // Total pounds needed for particular hour
      this.globals1.push(Math.round((this.lbsArray[i] + this.cupsLbs[i]) * 10) / 10) /* Total pounds needed for particular hour pushed to global table array */
      this.cupsClmn.push(this.cupsArray[this.cupsArray.length - 1] + ' (' + this.cupsLbs[this.cupsLbs.length - 1] + ')'); /* Push string for the cups column into an array */
      console.log('Found ' + this.cupsArray[i] + ' cups for hour ' + i + ' at the ' + this.loc + ' store.');
      console.log('Found ' + this.totalLbs[i] + ' pounds for hour ' + i + ' at the ' + this.loc + ' store.');
    };
    for (var i = 0; i < this.cupsArray.length; i++) { // Add up values for global variables
      sumLbs += this.totalLbs[i];
      sumCust += this.custNum[i];
      sumCups += this.cupsArray[i];
      sumCupsLbs += this.cupsLbs[i];
      sumLbstoGo += this.lbsArray[i];
    };
    this.globals1.push(Math.round(sumLbs * 10) / 10); // Push total pounds to the globals1 array, then fill the global table array
    this.globals.push(this.loc);
    this.globals.push(Math.round(sumLbs * 10) / 10);
    this.globals.push(Math.round(sumCust * 10) / 10);
    this.globals.push(Math.round(sumCups * 10) / 10 + ' (' + Math.round(sumCupsLbs * 10) / 10 + ')');
    this.globals.push(Math.round(sumLbstoGo * 10) / 10);
    console.log('A total of ' + this.globals[0] + ' pounds must be roasted for the ' + this.loc + ' store.');
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
    for (var i = 0; i < headers.length; i++) { // Populate Headers
      var headerItem = document.createElement('td'); // Create empty column for Hours
      headerItem.textContent = headers[i];
      headerItem.className = 'headerItem';
      row1.appendChild(headerItem);
    }
    this.coffeeCount(); // Calculate number of cups/pounds needed
    for (var hour = 0; hour < this.hours.length; hour++) { // Populate table
      var contentRow = document.createElement('tr'); // Rows first
      table.appendChild(contentRow);
      for (var i = 0; i < headers.length; i++) { // Then columns
        var entryColumn = document.createElement('td');
        entryColumn.textContent = this.hourValues[i][hour];
        entryColumn.className = 'tableItem';
        contentRow.appendChild(entryColumn);
      }
    };
    var contentRow = document.createElement('tr'); // now populate the global table
    globTable.appendChild(contentRow);             // rows first
    for (var i = 0; i < this.globals.length; i++) { // Then columns
      var entryColumn = document.createElement('td');
      entryColumn.textContent = this.globals[i];
      entryColumn.className = 'tableItem';
      contentRow.appendChild(entryColumn);
    }
    var contentRow = document.createElement('tr'); // now populate the global table
    globTable1.appendChild(contentRow);             // rows first
    for (var i = 0; i < this.globals1.length; i++) { // Then columns
      var entryColumn = document.createElement('td');
      entryColumn.textContent = this.globals1[i];
      entryColumn.className = 'tableItem';
      contentRow.appendChild(entryColumn);
    }
    var total = document.createElement('li'); // Print total number of cups needed to unordered list
    total.textContent = 'A total of ' + this.globals[1] + ' pounds must be roasted for the ' + this.loc + ' store today.';
    document.body.appendChild(total);
  }
  console.log('Created new shop at ' + location + '.');
  coffeeShops.push(this.identity);
};

globalRender1();
globalRender();

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
