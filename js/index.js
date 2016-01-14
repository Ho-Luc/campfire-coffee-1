// Index page javascript

var announcements = {

  stories: [['Campfire-Coffee found to be 10x more sustainable than competing brands.', 'images/sustain.jpg', 'Harvested fresh daily from extremely green, organic, fair-trade farms staffed in a socially conscious manner; free from pesticides, antibiotics, genetic tampering, or other scientific villainy; and sold with the customer\'s health and well-being as a top priority; it\'s no surprise to us that studies show Campfire-Coffee to be just plain better than other brands. Drink up!', '4:33PM  -  January 13, 2016'], ['Are you getting enough Campfire-Coffee? Our product may be vital for neural development.', 'images/family.jpg', 'Cutting edge research performed as a joint effort by experts at Harvard, Columbia and MIT shows that a lack of Campfire-Coffee may result in a number of developmental and behavioural issues in children and adults alike. Professor of Quackery Nick Senger from some prestigious university in Europe reports: \"Campfire-Coffee seems to trigger activity in the PKCR-B2 network - a portion of the central nervous system that we\'re only beginning to understand. In noob terms, the system is responsible for signaling in the brain that\'s vital for growth, intelligence, beauty, success and happy families. So far the studies have only been done in mice, so I\'d be hesitant to extend the results to humans, but I\'m not hesitant to recommend you buy a cup of Campfire-Coffee, because they are paying me so much.\"', '1:48PM  -  January 13, 2016'], ['Celebrating 10 years of Campfire-Coffee History!', 'images/cc-history.jpg', 'On January 13, 2006, web developer Nick Senger brewed the first cup of Campfire-Coffee while on a 500 mile trek through the Siberian wilderness. Isn\'t he a badass? Since then, hundreds of thousands of happy customers have enjoyed the signature smokey, rich, delectable taste of Campfire-Coffee. Join us today in celebrating the 10th anniversary of our delicious brew by having a rich, refreshing cup of Campfire-Coffee!', '1:33PM  -  January 13, 2016'], ['Campfire-Coffee reaches 1 million sales', 'images/million.gif', 'We sold a million cups of coffee! Yay, we\'re rich!', '4:00PM - January 13, 2016'], ['Hot models and celebrities drink Campfire-Coffee', 'images/celebs.gif', 'Stars, celebs, and other high-profile people continue to enjoy Campfire-Coffee! You should too!', '2:18PM  -  January 13, 2016'], ['Starbucks stock down: another reason to buy Campfire-Coffee.', 'images/stock.gif', 'Market research shows that as Campfire-Coffee continues to sell dumptrucks full of coffee daily at each of its locations, other coffee shops are struggling to keep up. Experts claim that the trend in sales may be due to the particularly amazing taste of Campfire-Coffee.', '9:24AM  -  January 13, 2016']],

  story: 0,
  i: 0

};

announcements.render = function() {

  for (this.story = 0; this.story < this.stories.length; this.story++) {
    var table = document.createElement('table');
    table.className = 'announceTable';
    theDiv.appendChild(table);
    for (this.i = 0; this.i < this.stories[this.story].length; this.i++) {
      var row = document.createElement('tr');
      table.appendChild(row);
      var column = document.createElement('td');

      if (this.i === 0) {
        column.className = 'headerItem';
      } else if (this.i === (this.stories[this.story].length - 1)) {
        column.className = 'footerItem';
      } else {
        column.className = 'announcement';
      }
      row.appendChild(column);

      if (this.i === 1) {
        image = document.createElement('img');
        image.setAttribute('src', this.stories[this.story][this.i]);
        image.className = 'announcementImg';
        column.appendChild(image);
      } else {
        column.textContent = this.stories[this.story][this.i];
      };
    };
  };
};

var contentGenerator = {
  button: document.createElement('input'),
  inputText: [],
  stories: [this.input],
  inputID: ['title', 'image', 'content', 'time'],
  labelContent: ['Title:', 'Image Location', 'Text Content:', 'Time:'],
};

contentGenerator.render = function() {
  var table = document.createElement('table');
  table.className = 'announceTable';
  theDiv.appendChild(table);
  var headRow = document.createElement('tr');
  table.appendChild(headRow);
  var headColumn = document.createElement('td');
  headColumn.setAttribute('colspan', '2');
  headColumn.className = 'headerItem';
  headColumn.textContent = 'Add Content:'
  headRow.appendChild(headColumn);
  for (var i = 0; i < this.labelContent.length; i++) {
    var row = document.createElement('tr');
    table.appendChild(row);
    var column1 = document.createElement('td');
    column1.className = 'tableItem';
    row.appendChild(column1);
    var label = document.createElement('label');
    label.textContent = this.labelContent[i];
    column1.appendChild(label);
    var column2 = document.createElement('td');
    column2.className = 'tableInput';
    row.appendChild(column2);
    this.inputText.push(document.createElement('input'));
    this.inputText[i].type = 'text';
    column2.appendChild(this.inputText[i]);
  };
  var footRow = document.createElement('tr');
  table.appendChild(footRow);
  var footColumn = document.createElement('td');
  footColumn.setAttribute('colspan', '2');
  footColumn.className = 'headerItem';
  footRow.appendChild(footColumn);
  this.button.setAttribute('type', 'submit');
  this.button.setAttribute('value', 'Submit');
  this.button.setAttribute('onclick', 'contentGenerator.submitForm()');
  footColumn.appendChild(this.button);
}

contentGenerator.submitForm = function() {

    var table = document.createElement('table');
    table.className = 'announceTable';
    theDiv.insertBefore(table, theDiv.childNodes[0]);
    for (this.i = 0; this.i < this.inputText.length; this.i++) {
      var row = document.createElement('tr');
      table.appendChild(row);
      var column = document.createElement('td');

      if (this.i === 0) {
        column.className = 'headerItem';
      } else if (this.i === (this.inputText.length - 1)) {
        column.className = 'footerItem';
      } else {
        column.className = 'announcement';
      }
      row.appendChild(column);

      if (this.i === 1) {
        image = document.createElement('img');
        image.setAttribute('src', this.inputText[this.i].value);
        image.className = 'announcementImg';
        column.appendChild(image);
      } else {
        column.textContent = this.inputText[this.i].value;
      };
    };
};

announcements.render();
contentGenerator.render();
