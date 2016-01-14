// Index page javascript

var announcements = {

  stories: [['Questions or comments for Campfire-Coffee? We\'d love to hear from you!', 'images/contactUs.gif', 'Email us at: noOneChecksThis@campfire-coffee.com', '2:38PM - January 13, 2016']],

  story: 0,
  i: 0

};

var theDiv = document.createElement('div');
theDiv.className = 'bodyDiv3';
document.body.appendChild(theDiv);

announcements.render = function() {

  for (this.story = 0; this.story < this.stories.length; this.story++) {
    var table = document.createElement('table');
    table.className = 'contactTable';
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

announcements.render();
