const searchHistory = document.getElementById('search-history');

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// console.log('submit!! ', e);
});

const searchInput = document.getElementById('search')

searchInput.addEventListener('focus', (e) => {
	e.preventDefault();
	// console.log('focus!! ', e);
	searchHistory.style.width = searchForm.offsetWidth + 'px';
	searchHistory.style.display = 'inherit';
});

searchInput.addEventListener('blur' , (e) => {
	e.preventDefault();
	// console.log('blur!! ', e);
	searchHistory.style.display = 'none';
});

const locationSelected1 = document.getElementById('location-selected-1')

const locationSelector1 = document.getElementById('location-dropdown-1')

locationSelected1.addEventListener('click', (e) => {
	e.preventDefault();
	// console.log('click!! ', e);
	if (locationSelector1.style.display === 'none') {
		locationSelector1.style.display = 'inherit';
	} else {
		locationSelector1.style.display = 'none';
	}
})

const locationSelected2 = document.getElementById('location-selected-2')

const locationSelector2 = document.getElementById('location-dropdown-2')

locationSelected2.addEventListener('click', (e) => {
	e.preventDefault();
	// console.log('click!! ', e);
	if (locationSelector2.style.display === 'none') {
		locationSelector2.style.display = 'inherit';
	} else {
		locationSelector2.style.display = 'none';
	}
})

const cartContent = document.getElementById('cart-content');

const cartBtn = document.getElementById('cart-btn');

cartBtn.addEventListener('click', (e) => {
	cartContent.style.display === 'none' ?
		cartContent.style.display = 'block' :
		cartContent.style.display = 'none'
});

const cover = document.getElementById('cover');

const mainMenuComponent = document.getElementById('main-menu-component');

const burgerBtn = document.getElementById('burger-button');

const showMenu = (e) => {
	mainMenuComponent.classList.replace('hide', 'show');
	cover.classList.replace('hide', 'show');
}

const hideMenu =  (e) => {
	mainMenuComponent.classList.replace('show', 'hide');
	cover.classList.replace('show', 'hide');
}

burgerBtn.addEventListener('click', showMenu);

cover.addEventListener('click', hideMenu)
