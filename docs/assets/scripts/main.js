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

const swiper = new Swiper('[data-swiper="one-slide"]', {
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

//header

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function toggle() {
// 	document.querySelector('[data-full-menu]').classList.toggle("show");
// }
  
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
// 	if (!event.target.matches('.dropbtn')) {
// 	  	var dropdowns = document.getElementsByClassName("dropdown-content");
// 	  	var i;
// 	  	for (i = 0; i < dropdowns.length; i++) {
// 			var openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains('show')) {
// 		  		openDropdown.classList.remove('show');
// 			}
// 	  	}
// 	}
// }

const toggleFullMenu = document.querySelector('[data-catalog-toggle]');
const closeBtn = document.querySelector('[data-close]');

window.onclick = (event) => {
	const fullMenu = document.querySelector('[data-full-menu');

	if (event.target == toggleFullMenu) {
		fullMenu.classList.add('show')
	}

	if (event.target == closeBtn) {
		fullMenu.classList.remove('show')
	}
}




// /* Open */
// function openNav() {
// 	document.getElementById("myNav").style.height = "100%";
//   }
  
//   /* Close */
//   function closeNav() {
// 	document.getElementById("myNav").style.height = "0%";
//   }