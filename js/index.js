// Campfire-Coffee Index javascript

var header = {
  someVar: 4,
}

header.render = function() {

  divCenter = document.createElement('div'); // Create empty div for logo
  divCenter.className = 'logoDiv';
  document.body.appendChild(divCenter);

  logoImage = document.createElement('img');
  logoImage.setAttribute('src', 'logo.gif');
  logoImage.setAttribute('width', '35%')
  divCenter.appendChild(logoImage);

  divMenu = document.createElement('div'); // Create empty div for menu
  divMenu.className = 'logoDiv';
  document.body.appendChild(divMenu);

  menuImage1 = document.createElement('img');
  menuImage1.className = 'menuButton';
  menuImage1.setAttribute('src', 'images/home.gif');
  divMenu.appendChild(menuImage1);
  menuImage2 = document.createElement('img');
  menuImage2.className = 'menuButton';
  menuImage2.setAttribute('src', 'images/data.gif');
  divMenu.appendChild(menuImage2);
  menuImage3 = document.createElement('img');
  menuImage3.className = 'menuButton';
  menuImage3.setAttribute('src', 'images/contact.gif');
  divMenu.appendChild(menuImage3);
}

header.render();
