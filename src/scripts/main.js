const activeClass = "active";

// Переключение табов
// demo
// button(data-tab-id="tabId1", data-tab-control="tab1") 1
// button(data-tab-id="tabId1", data-tab-control="tab2") 2
// .tab-block(data-tab-id="tabId1", data-tab-block="tab1") 1
// .tab-block(data-tab-id="tabId1", data-tab-block="tab2") 2
const tabIdList = document.querySelectorAll("[data-tab-id]");
if (tabIdList) {
	let tabGroupList = new Set();
	for (const tabId of tabIdList) {
		tabGroupList.add(tabId.dataset.tabId);
	}

	function tabSwith(name, tab, tabGroup) {
		for (const control of tab.controlList) control.classList.remove(activeClass);
		for (const block of tab.blockList) block.style.display = "none";
		document.querySelector(`[data-tab-id="${tabGroup}"][data-tab-control="${name}"]`).classList.add(activeClass);
		document.querySelector(`[data-tab-id="${tabGroup}"][data-tab-block="${name}"]`).style.display = "";
	}

	for (const tabGroup of tabGroupList) {
		const tab = {
			controlList: document.querySelectorAll(`[data-tab-id="${tabGroup}"][data-tab-control]`),
			blockList: document.querySelectorAll(`[data-tab-id="${tabGroup}"][data-tab-block]`),
		};
		console.log(tab);
		tabSwith(tab.controlList[0].dataset.tabControl, tab, tabGroup);

		for (const control of tab.controlList) {
			control.addEventListener("click", () => {
				tabSwith(control.dataset.tabControl, tab, tabGroup);
			});
		}
	}
}

//sliders
const swiper = new Swiper('.swiper-oneslide', {
	// Optional parameters
	loop: true,
	speed: 500,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const cardsSwiper = new Swiper('.cards__slider .swiper-fourslide', {
	// Optional parameters
	loop: false,
	speed: 500,
	slidesPerView: 1,
	spaceBetween: 20,

	breakpoints: {
		500: {
			slidesPerView: 2,
		},
		700: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.cards__slider .swiper-button-next',
		prevEl: '.cards__slider .swiper-button-prev',
	},
})

const swiperWithoutPag = new Swiper('.sales__slider .swiper-container', {
	// Optional parameters
	loop: true,
	speed: 500,

	// Navigation arrows
	navigation: {
		nextEl: '.sales__slider .swiper-button-next',
		prevEl: '.sales__slider .swiper-button-prev',
	},
})

const thumbsSwiper = new Swiper('.swiper-thumbs', {
	// Optional parameters
	speed: 500,
	slidesPerView: 5,
	spaceBetween: 20,
})
const sliderWithThumbs = new Swiper('.swiper-with-thumbs', {
	// Optional parameters
	speed: 500,
	allowTouchMove: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-with-thumbs .swiper-button-next',
		prevEl: '.swiper-with-thumbs .swiper-button-prev',
	},
	thumbs: {
		swiper: thumbsSwiper,
	}
})

const toggleFullMenu = document.querySelectorAll('[data-catalog-toggle]');
const closeBtn = document.querySelector('[data-close]');
const searchBtn = document.querySelector('.search-form__btn');
const burgerBtn = document.querySelector('[data-burger]')
const moreBtn = document.querySelector('[data-more-text]');
const filterBtn = document.querySelector('[data-filter-menu]');

window.onclick = (event) => {
	//header
	const fullMenu = document.querySelector('[data-full-menu');
	const body = document.body;

	toggleFullMenu.forEach((item) => {
		if (event.target == item) {
			fullMenu.classList.add('show')
		}
	})

	if (event.target == closeBtn) {
		fullMenu.classList.remove('show')
	}

	if (event.target == searchBtn) {
		searchBtn.nextElementSibling.classList.add('show')
	} else if (event.target !== searchBtn.nextElementSibling.childNodes[1]) {
		searchBtn.nextElementSibling.classList.remove('show')
	}

	if (event.target == burgerBtn) {
		const header = document.querySelector('.header')
		header.classList.toggle('active')

		if (header.classList.contains('active')) {
			body.style.overflow = 'hidden'
		} else {
			body.removeAttribute('style')
		}
	}

	//about block
	if (event.target == moreBtn) {
		moreBtn.previousElementSibling.classList.toggle('isOpen');

		if (moreBtn.previousElementSibling.classList.contains('isOpen')) {
			moreBtn.innerHTML = 'Свернуть'
		} else {
			moreBtn.innerHTML = 'Развернуть'
		}
	}

	//open filter
	const fullFilter = document.querySelector('.full-filter');
	
	if (fullFilter) {
		const closeFilter = fullFilter.querySelector('[data-close]');
		if (event.target == filterBtn) {
			fullFilter.classList.add('active')
			openedWindow(fullFilter)
			// body.style.overflow = 'hidden'
	
		} else if (event.target == closeFilter) {
			fullFilter.classList.remove('active')
			closeWindow(fullFilter)
		}
	
		if (fullFilter.classList.contains('active')) {
			closeWindow(fullFilter)
		}
	}
	
}

function openedWindow(elem) {
	let overlayForClose = document.querySelector('.overlay')

	if (elem.classList.contains('active')) {
		overlayForClose.classList.add('active')
	}
}

function closeWindow(elem) {
	let overlayForClose = document.querySelector('.overlay')
	
	if (!elem.classList.contains('active')) {
		overlayForClose.classList.remove('active');
	}

	overlayForClose.addEventListener('click', function(event) {
		elem.classList.remove('active')
		overlayForClose.classList.remove('active')
		// body.removeAttribute('style')
	})
}