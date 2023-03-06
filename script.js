// const hamburger = document.querySelector('.hamburger-img');
// const closeHamburgerBtn = document.querySelector('.close_hamburger');
// const modalMenuContainer = document.querySelector('.modal_menu_container');
// const menuOption = document.querySelectorAll('.menu_option');
// const worksSection = document.querySelector('.works_section');

// const toggleMobileMenu = (e) => {
//     e.preventDefault();
//     modalMenuContainer.classList.toggle('hide1');
//   };

//   hamburger.addEventListener('click', toggleMobileMenu);
//   closeHamburgerBtn.addEventListener('click', toggleMobileMenu);

//   menuOption.forEach((e) => {
//     e.onclick = () => {
//       modalMenuContainer.classList.toggle('hide1');
//     };
//   });

//   let displayCard = '';
//   for (let i = 0; i < cardsData.length; i += 1) {
//     displayCard +=`

//     `

// worksSection.innerHTML = '';
// worksSection.innerHTML = displayCard;

const menu = document.querySelector('.modal_menu_container');
const menuItems = document.querySelectorAll('.font1c');
const hamburger = document.querySelector('.hamburger-img');
const closeIcon = document.querySelector('.close');
const menuIcon = document.querySelector('.open');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    hamburger.classList.remove('closingIcon');
    document.body.classList.remove('hide_y_scroll');
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    hamburger.classList.add('closingIcon');
    document.body.classList.add('hide_y_scroll');
  }
}

hamburger.addEventListener('click', toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});
