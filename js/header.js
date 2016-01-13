// Campfire-Coffee Shop

var theDiv;

var header = {
  menu : [['index.html', 'images/home.gif', 'images/homeOver.gif'], ['data.html', 'images/data.gif', 'images/dataOver.gif'], ['contact.html', 'images/contact.gif', 'images/contactOver.gif']],
  menuImage : [],
}

header.render = function() {

  var divCenter = document.createElement('div'); // Create empty div for logo
  divCenter.className = 'logoDiv';
  document.body.appendChild(divCenter);

  var aLogo = document.createElement('a'); // Create link for menu
  aLogo.setAttribute('href', 'index.html');
  divCenter.appendChild(aLogo);

  var logoImage = document.createElement('img');
  logoImage.setAttribute('src', 'logo.gif');
  logoImage.setAttribute('width', '35%')
  aLogo.appendChild(logoImage);

  var divMenu = document.createElement('div'); // Create empty div for menu
  divMenu.className = 'logoDiv';
  document.body.appendChild(divMenu);

  for (var i = 0; i < this.menu.length; i++) {
    var a = document.createElement('a'); // Create link for menu
    a.setAttribute('href', this.menu[i][0])
    divMenu.appendChild(a);

    this.menuImage.push(document.createElement('img'));
    this.menuImage[i].className = 'menuButton';
    this.menuImage[i].setAttribute('src', this.menu[i][1]);
    a.appendChild(this.menuImage[i]);
  }
  header.menuImage[0].onmouseover = function() {
    header.menuImage[0].setAttribute('src', header.menu[0][2]);
  }
  header.menuImage[0].onmouseout = function() {
    header.menuImage[0].setAttribute('src', header.menu[0][1]);
  }
  header.menuImage[1].onmouseover = function() {
    header.menuImage[1].setAttribute('src', header.menu[1][2]);
  }
  header.menuImage[1].onmouseout = function() {
    header.menuImage[1].setAttribute('src', header.menu[1][1]);
  }
  header.menuImage[2].onmouseover = function() {
    header.menuImage[2].setAttribute('src', header.menu[2][2]);
  }
  header.menuImage[2].onmouseout = function() {
    header.menuImage[2].setAttribute('src', header.menu[2][1]);
  }

  spacer = document.createElement('br');
  document.body.appendChild(spacer);

  theDiv = document.createElement('div');
  theDiv.className = 'logoDiv';
  document.body.appendChild(theDiv);

}

header.render();
