const menu = document.querySelector('.link-desktop');
const menuItems = document.querySelectorAll('.links-style');
const hamburger = document.querySelector('.hamburger-img');
const closeIcon = document.querySelector('.close');
const menuIcon = document.querySelector('.open');
const worksSection = document.getElementById('cards');

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

const cardsData = [
  {
    name: 'Multi-Post Stories',
    image: 'media/placholder.jpg',
    technologies: [' CSS ', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/Ferizad/Portfolio',
    liveLink: 'https://github.com/Ferizad/Portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'media/placholder.jpg',
    technologies: [' CSS ', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/Ferizad/Portfolio',
    liveLink: 'https://github.com/Ferizad/Portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'media/placholder.jpg',
    technologies: [' CSS ', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/Ferizad/Portfolio',
    liveLink: 'https://github.com/Ferizad/Portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'media/placholder.jpg',
    technologies: [' CSS ', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/Ferizad/Portfolio',
    liveLink: 'https://github.com/Ferizad/Portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'media/placholder.jpg',
    technologies: [' CSS ', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/Ferizad/Portfolio',
    liveLink: 'https://github.com/Ferizad/Portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'media/placholder.jpg',
    technologies: [' CSS ', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/Ferizad/Portfolio',
    liveLink: 'https://github.com/Ferizad/Portfolio',

  },
];

function display() {
  let displayCard = '';
  for (let i = 0; i < 6; i += 1) {
    displayCard += `

              <div class="card">
                <img class="card-media" src="${cardsData[i].image}" alt="placeholder">
                <div class="sub-card"> <h2>${cardsData[i].name} <br> Gain+Glory</h2>
                    <div class="categories">
                        <ul>
                        <li>${cardsData[i].technologies[0]}</li>
                        <li>${cardsData[i].technologies[1]}</li>
                        <li>${cardsData[i].technologies[2]}</li>
                        </ul>
                    </div>
                    <button class="see-btn seepopup">See project</button>
            </div>
        </div>

   `;
  }
  worksSection.innerHTML = displayCard;
}

display();

const showPopupBtn = document.querySelectorAll('.seepopup');
const popUpContainer = document.createElement('section');
popUpContainer.className = 'popup_section';
popUpContainer.classList.add('bg_color6');
showPopupBtn.forEach((e, i) => {
  e.addEventListener('click', () => {
    const popupEle = `
    <article class="popup_article">

        <div class="popup_articlediv show1">

        
        <button type="button" class="close_popup2"><img src="media/closemenu.png" alt=""></button>
    
        <header class="popup_flex1">
        <img class="bg-popup" src="media/Snapshoot Portfolio.png" alt="">
        <button type="button" class="close_popup"><img src="media/closemenu.png" alt=""></button>
        
        
        </header>
        </div>

        <div class="flex-container modal-flex">

           <div class="mod-div-1">
           <h4> Keeping track of hundreds of <br>components</h2>
           <ul>
           <li><a class="textdecoration font4" href="#">${cardsData[i].technologies[0]}</a></li>
           <li><a class="textdecoration font4" href="#">${cardsData[i].technologies[1]}</a></li>
           <li><a class="textdecoration font4" href="#">${cardsData[i].technologies[2]}</a></li>
           </ul>
           </div>

           <div class="mod-div-2">
            <button  class="footer_btn textdecoration" id="see-projects-btn" type="submit"><a href="${cardsData[i].liveLink}"><span>See Live</span><img src="media/Icon.png" alt="see-live">
            </a></button>
            <button class="footer_btn textdecoration" id="see-projects-btn" type="submit"><a href="${cardsData[i].Source}"><span>See Source</span><img src="media/Vector.png" alt="see-source">
            </a></button>
            </div>

            <div class="mod-div-3"><p class="details">${cardsData[i].description}</p></div>

          </div>
        
    </article>  

    `;

    const body = document.querySelector('body');
    body.appendChild(popUpContainer);
    const popUpBox = document.querySelector('.popup_section');
    popUpBox.innerHTML = popupEle;
    const closePopup = document.querySelectorAll('.close_popup');
    const closePopup2 = document.querySelectorAll('.close_popup2');
    closePopup.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
    closePopup2.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
  });
});
