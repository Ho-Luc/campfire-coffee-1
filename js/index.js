// Index page javascript

var announcements = {

  stories: [['Campfire-Coffee reaches 1 million sales', 'images/million.gif', 'We sold a million cups of coffee! Yay, we\'re rich!', '4:00PM - January 13, 2016'], ['Hot celebrities drink Campfire-Coffee', 'images/celebs.gif', 'Stars, celebs, and other high-profile people continue to enjoy Campfire-Coffee! You should too!', '2:18PM  -  January 13, 2016'], ['Starbucks stock down: another reason to buy Campfire-Coffee.', 'images/stock.gif', 'Market research shows that as Campfire-Coffee continues to sell dumptrucks full of coffee daily at each of its locations, other coffee shops are struggling to keep up. Experts claim that the trend in sales may be due to the particularly amazing taste of Campfire-Coffee.', '9:24AM  -  January 13, 2016']],

  story: 0,
  i: 0

};

announcements.render = function() {

  for (this.story = 0; this.story < 3; this.story++) {
    var table = document.createElement('table');
    table.className = 'announceTable';
    theDiv.appendChild(table);
    for (this.i = 0; this.i < 4; this.i++) {
      var row = document.createElement('tr');
      table.appendChild(row);
      var column = document.createElement('td');

      if (this.i === 0 || this.i === (this.stories[this.story].length - 1)) {
        column.className = 'headerItem';
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

announcements.render();
