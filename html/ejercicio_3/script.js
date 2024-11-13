/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
function openTab(evt, tabName) {
  // Hide all tabcontent by default
  let i; let tabcontent; let
    tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Remove "active" class from all buttons
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the clicked tab and add "active" class to the button
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// Show the "Ingredientes" tab by default
document.getElementById('Ingredientes').style.display = 'block';
