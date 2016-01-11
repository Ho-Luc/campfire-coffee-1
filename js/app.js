// Campfire-Coffee Shop

var pikePlace = {
  ident : 'pikePlace', // ID of store
  loc : 'Pike Place Market', // Full location of store
  min : 14, // Minimum number of customers per hour for location
  max : 55, // Maximum number of customers per hour for location
  cups : 1.2, // Average number of cups sold per customer for location
  lbs : 3.7, // Average pounds of coffee sold per customer for location
  cupsArray : [], // Empty array that will contain number of cups needed for all times
  lbsArray : [], // Empty array that will contain number of pounds needed for all times
  custNum : [], // Empty array that will contain number of customers for each time
  findCust : function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.ceil(Math.random() * (this.max - this.min)) + this.min);
  },
  coffeeCount : function() { // Fills array with number of cups and total (round to tenths for cleanliness)
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
  },
  printShop : function() {
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
  },
};

var capitolHill = {
  ident : 'capitolHill', // ID of store
  loc : 'Capitol Hill', // Full location of store
  min : 32, // Minimum number of customers per hour for location
  max : 48, // Maximum number of customers per hour for location
  cups : 3.2, // Average number of cups sold per customer for location
  lbs : 0.4, // Average pounds of coffee sold per customer for location
  cupsArray : [], // Empty array that will contain number of cups needed for all times
  lbsArray : [], // Empty array that will contain number of pounds needed for all times
  custNum : [], // Empty array that will contain number of customers for each time
  findCust : function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.ceil(Math.random() * (this.max - this.min)) + this.min);
  },
  coffeeCount : function() { // Fills array with number of cups and total (round to tenths when printing for cleanliness)
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
  },
  printShop : function() {
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
  },
};

var seattlePub = {
  ident : 'seattlePub', // ID of store
  loc : 'Seattle Public Library', // Full location of store
  min : 49, // Minimum number of customers per hour for location
  max : 75, // Maximum number of customers per hour for location
  cups : 2.6, // Average number of cups sold per customer for location
  lbs : 0.2, // Average pounds of coffee sold per customer for location
  cupsArray : [], // Empty array that will contain number of cups needed for all times
  lbsArray : [], // Empty array that will contain number of pounds needed for all times
  custNum : [], // Empty array that will contain number of customers for each time
  findCust : function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.ceil(Math.random() * (this.max - this.min)) + this.min);
  },
  coffeeCount : function() { // Fills array with number of cups and total (round to tenths when printing for cleanliness)
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
  },
  printShop : function() {
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
  },
};

var southLake = {
  ident : 'southLake', // ID of store
  loc : 'South Lake Union', // Full location of store
  min : 35, // Minimum number of customers per hour for location
  max : 88, // Maximum number of customers per hour for location
  cups : 1.3, // Average number of cups sold per customer for location
  lbs : 3.7, // Average pounds of coffee sold per customer for location
  cupsArray : [], // Empty array that will contain number of cups needed for all times
  lbsArray : [], // Empty array that will contain number of pounds needed for all times
  custNum : [], // Empty array that will contain number of customers for each time
  findCust : function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.ceil(Math.random() * (this.max - this.min)) + this.min);
  },
  coffeeCount : function() { // Fills array with number of cups and total (round to tenths when printing for cleanliness)
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
  },
  printShop : function() {
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
  },
};

var seaTac = {
  ident : 'seaTac', // ID of store
  loc : 'Sea-Tac Airport', // Full location of store
  min : 68, // Minimum number of customers per hour for location
  max : 124, // Maximum number of customers per hour for location
  cups : 1.1, // Average number of cups sold per customer for location
  lbs : 2.7, // Average pounds of coffee sold per customer for location
  cupsArray : [], // Empty array that will contain number of cups needed for all times
  lbsArray : [], // Empty array that will contain number of pounds needed for all times
  custNum : [], // Empty array that will contain number of customers for each time
  findCust : function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.ceil(Math.random() * (this.max - this.min)) + this.min);
  },
  coffeeCount : function() { // Fills array with number of cups and total (round to tenths when printing for cleanliness)
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
  },
  printShop : function() {
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
  },
};

var webSales = {
  ident : 'webSales', // ID of store
  loc : 'Website Sales', // Full location of store
  min : 3, // Minimum number of customers per hour for location
  max : 6, // Maximum number of customers per hour for location
  cups : 0, // Average number of cups sold per customer for location
  lbs : 6.7, // Average pounds of coffee sold per customer for location
  cupsArray : [], // Empty array that will contain number of cups needed for all times
  lbsArray : [], // Empty array that will contain number of pounds needed for all times
  custNum : [], // Empty array that will contain number of customers for each time
  findCust : function() { // Generates an estimated number of customers for store
    this.custNum.push(Math.ceil(Math.random() * (this.max - this.min)) + this.min);
  },
  coffeeCount : function() { // Fills array with number of cups and total (round to tenths when printing for cleanliness)
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
  },
  printShop : function() {
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
  },
};

pikePlace.printShop();
capitolHill.printShop();
seattlePub.printShop();
southLake.printShop();
seaTac.printShop();
webSales.printShop();
