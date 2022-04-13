"use strict"
const menuToggle = document.querySelector('.ToggleMenu');
const mainMenuParent = document.querySelector('.MainMenu');

menuToggle.addEventListener('click', () => {

	mainMenuParent.classList.toggle('Active');
});

/* mutation observer pentru ștergerea clasei Active de pe meniu */
const mediaQuery = window.matchMedia('(min-width:850px)');
mediaQuery.onchange = e => { if (e.matches) { document.querySelector('.MainMenu').classList.remove('Active'); } }


/* instanțierea service worker-ului */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}