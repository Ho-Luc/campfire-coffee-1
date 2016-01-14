// Index page javascript

var announcements = {

  stories: [['Give the gift of Campfire-Coffee!', 'images/campfire.jpg', 'Strugging to find a valentine\'s day gift? Why not give that special someone the gift they really want? A fat giftcard for Campfire-Coffee! Available in $200 and $500 sizes.', '1:55PM  -  January 13, 2016'], ['Campfire-Coffee Tents now available!', 'images/tent.jpg', 'By popular demand, we\'ve added custom themed Campfire-Coffee tents to our catalogue! Order now and receive a $2 giftcard for Campfire-Coffee ABSOLUTELY FREE! Don\'t miss this amazing opportunity to drink Campfire-Coffee in your Campfire-Coffee tent whilst enjoying the great outdoors next to an actual campfire! (Campfire-Coffee sold separately)', '2:02PM  -  January 13, 2016']],

  story: 0,
  i: 0

};

var column1 = document.createElement('div');
column1.className = 'bodyDiv1';
document.body.appendChild(column1);

var column2 = document.createElement('div');
column2.className = 'bodyDiv2';
document.body.appendChild(column2);

announcements.render = function() {

  for (this.story = 0; this.story < this.stories.length; this.story++) {
    var table = document.createElement('table');
    table.className = 'announceTable';
    if (this.story % 2 === 0) {
      column1.appendChild(table);
    } else {
      column2.appendChild(table);
    }
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
  labelContent: ['Product Title:', 'Image Location', 'Description:', 'Time:'],
};

contentGenerator.render = function() {
  var table = document.createElement('table');
  table.className = 'announceTable';
  document.body.appendChild(table);
  var headRow = document.createElement('tr');
  table.appendChild(headRow);
  var headColumn = document.createElement('td');
  headColumn.setAttribute('colspan', '2');
  headColumn.className = 'headerItem';
  headColumn.textContent = 'Add Item to Store:'
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
  this.button.addEventListener('click', contentGenerator.submitForm, false);
  footColumn.appendChild(this.button);
}

contentGenerator.submitForm = function() {

    var table = document.createElement('table');
    table.className = 'announceTable';
    if (announcements.story % 2 === 0) {
      column1.insertBefore(table, column1.childNodes[0]);
      announcements.story++;
    } else {
      column2.insertBefore(table, column2.childNodes[0]);
      announcements.story++;
    };
    for (contentGenerator.i = 0; contentGenerator.i < contentGenerator.inputText.length; contentGenerator.i++) {
      var row = document.createElement('tr');
      table.appendChild(row);
      var column = document.createElement('td');

      if (contentGenerator.i === 0) {
        column.className = 'headerItem';
      } else if (contentGenerator.i === (contentGenerator.inputText.length - 1)) {
        column.className = 'footerItem';
      } else {
        column.className = 'announcement';
      }
      row.appendChild(column);

      if (contentGenerator.i === 1) {
        image = document.createElement('img');
        image.setAttribute('src', contentGenerator.inputText[contentGenerator.i].value);
        image.className = 'announcementImg';
        column.appendChild(image);
      } else {
        column.textContent = contentGenerator.inputText[contentGenerator.i].value;
      };
    };
};

announcements.render();
contentGenerator.render();
