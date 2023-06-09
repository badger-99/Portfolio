// ************************* Pop-up Mobile Menu ************************* //

const btn = document.querySelector('#hamburger');
const img = document.querySelector('#hamburger img');
const mobileContainer = document.createElement('div');
const mobileMenu = document.createElement('div');
const menuLink = document.createElement('div');
const portfolio = document.getElementById('nav-link-1').cloneNode(true);
const about = document.getElementById('nav-link-2').cloneNode(true);
const contact = document.getElementById('nav-link-3').cloneNode(true);
menuLink.appendChild(portfolio);
menuLink.appendChild(about);
menuLink.appendChild(contact);
mobileMenu.appendChild(menuLink);
mobileContainer.id = 'mobile-menu-container';
mobileMenu.id = 'mobile-menu';
menuLink.id = 'mobile-menu-links';

btn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!mobileContainer.classList.contains('visible')) {
    img.src = './images/close-menu.svg';
    document.getElementById('logo').style.visibility = 'hidden';

    mobileContainer.style.display = 'block';

    mobileContainer.appendChild(mobileMenu);
    const siblingContainer = document.querySelector('#toolbar');
    siblingContainer.insertAdjacentElement('afterend', mobileContainer);
    mobileContainer.classList.add('visible');
  } else {
    img.src = './images/hamburger.svg';
    document.getElementById('logo').style.visibility = 'visible';
    mobileContainer.style.display = 'none';
    mobileContainer.classList.remove('visible');
  }
});

menuLink.addEventListener('click', () => {
  img.src = './images/hamburger.svg';
  document.getElementById('logo').style.visibility = 'visible';
  mobileContainer.style.display = 'none';
  mobileContainer.classList.remove('visible');
});

// ************************* Dynamic HTML for Featured Project ************************* //

// Featured projet object
const feature = {
  name: 'Multi-Post Stories',
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image1: './images/bookList-capture.jpg',
  image2: './images/bookList-capture.PNG',
  techStack: ['CSS', 'HTML'],
  live: 'https://badger-99.github.io/Book-List-ES6/',
  source: 'https://github.com/badger-99/Book-List-ES6',
};

// Featured project template
const featureTemplate = (featureCard) => `
  <img class="btm_margin mobile" id="feat_img" src="${
  featureCard.image1
}" alt="image placeholder">
        <img class="btm_margin desktop" id="feat_img_desktop" src="${
  featureCard.image2
}" alt="image placeholder">
        <div id="featured_project_right_block">
          <h3 class="btm_margin" id="featured_project_name">
            ${featureCard.name}
          </h3>
          <p class="btm_margin" id="featured_project_title">
            ${featureCard.description}
          </p>
          <ul class="btm_margin tech_stack">
            ${featureCard.techStack
    .map(
      (tech) => `
                <li class="tech">
                  <a class="link" href="">${tech}</a>
                </li>
              `,
    )
    .join('')}
          </ul>
          <span class="btm_margin">
            <a class="link btn see-more" href="https://badger-99.github.io/Book-List-ES6/" target="_blank">See project</a>
          </span>
        </div>
  `;

// Featured project dynamic HTML injection
const featureProject = document.getElementById('featured_project');
const spotlight = featureTemplate(feature);
featureProject.innerHTML = spotlight;

// ************************* Dynamic HTML for card-grid ************************* //

// Project object-array
const projects = [
  {
    title: 'art',
    name: '<h3 class="card_title">Profesional Art Printing Data</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'healthcare',
    name: '<h3 class="card_title mobile">Profesional Art Printing Data</h3>\n<h3 h3 class= "card_title destop" > Data Dashboard Healthcare</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'website',
    name: '<h3 class="card_title mobile">Profesional Art Printing Data</h3>\n<h3 class="card_title desktop">Website Portfolio</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'art',
    name: '<h3 class="card_title">Profesional Art Printing Data</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'healthcare',
    name: '<h3 class="card_title mobile">Profesional Art Printing Data</h3>\n<h3 h3 class= "card_title destop" > Data Dashboard Healthcare</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'website',
    name: '<h3 class="card_title mobile">Profesional Art Printing Data</h3>\n<h3 class="card_title desktop">Website Portfolio</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
];

// Gridcard template
const card = (projects) => `
        <div class="grid_card ${projects.title}">
          <div class="work">
            ${projects.name}
            <p class="card_text">${projects.description}</p>
            <ul class="card_list tech_stack">
              ${projects.techStack
    .map(
      (tech) => `
                <li class="tech card_link">
                  <a class="link" href="">${tech}</a>
                </li>
              `,
    )
    .join('')}
            </ul>
          </div>
          <a class="link btn grid-project-link more" href="">See project</a>
        </div>`;

// Gridcard dynamic HTML injection
const projectGrid = document.getElementById('projects_grid');
const gridCard = projects.map((project) => card(project)).join('');
projectGrid.innerHTML = gridCard;

// *****************Pop-Up Window***********************

// Pop-Up Window template
const popWindow = (project) => `
      <div class='pop-head'>
        <h3 class='mobile'>Multi Post Stories</h3>
        <h3 class='desktop'>Keeping track of hundreds  of components website</h3>
        <a class='close-popup' href="">
          <img src="./images/close-menu.svg" alt="close menu">
        </a>
      </div>

      <div class=popTech >
        <ul class="tech_stack">
              <li class="pop-tech">
                <a class="link" href="">HTML</a>
              </li>
              <li class="pop-tech">
                <a class="link" href="">Bootstrap</a>
              </li>
              <li class="pop-tech">
                <a class="link" href="">Ruby on Rails</a>
              </li>
            </ul>
      </div>
    </div>

    <div class='big-flex'>
      <div class='popup-pic'>
        <a class='mobile-max' href="">
          <img src="./images/bookList-capture.jpg" alt="popup image">
        </a>
        <a class='desktop-only' href="">
          <img src="./images/bookList-capture.jpg" alt="popup image">
        </a>
      </div>

      <div class='left-card'>
        <div class='popup-text'>
          <p class='hidden'>
          ${project.description}
          </p>
          <p class='mobile'>
            Book-List is a single-page web application that allows the user to maintain a list of books by their title and author name. It stores the list in the browser's local storage, making it possible for the data to persist beyond even a system reboot.
          </p>
          <p class='desktop'>
            Book-List is a single-page web application that allows the user to maintain a list of books by their title and author name. It stores the list in the browser's local storage, making it possible for the data to persist beyond even a system reboot.
          </p>
        </div>

        <div class='popup-links'>
          <span class="pop-btn">
                <a class="link btn live" href="https://badger-99.github.io/Book-List-ES6/" target="_blank">See live <img class='pop-icon' src="./images/live-server.svg" alt="icon">
                </a>              
          </span>
          <span class="pop-btn">
                <a class="link btn source" href="https://github.com/badger-99/Book-List-ES6" target="_blank">See source <img class='pop-icon' src="./images/git-pop.svg" alt="icon">
                </a>              
          </span>
        </div>
      </div>
    `;

// create pop-up container
const main = document.createElement('div');
main.id = 'popup-container';
const popUp = document.createElement('div');
popUp.id = 'popup';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>> Featured Project Pop-up <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const featureLink = featureProject.querySelector('.see-more');
featureLink.addEventListener('click', (event) => {
  event.preventDefault();
  const featureHTML = popWindow(feature);
  popUp.innerHTML = featureHTML;
  main.appendChild(popUp);
  main.style.display = 'block';
  main.style.visibility = 'visible';
  document.getElementById('body').appendChild(main);

  // Closing popup
  const closePopUps = document.getElementsByClassName('close-popup');
  Array.from(closePopUps).forEach((closePopUp) => {
    closePopUp.addEventListener('click', (event) => {
      event.preventDefault();
      main.style.display = 'none';
      main.style.visibility = 'hidden';
    });
  });
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Card-Grid Pop-up <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Select all the project cards
const projectCards = document.getElementsByClassName('grid_card');

// Make an array of the project cards and iterate over each card ehile keeping track of the index
Array.from(projectCards).forEach((specificCard, index) => {
  // select the See Project link on each card and attach an event listener to open the pop-up
  const seeMore = specificCard.querySelector('.more');
  seeMore.addEventListener('click', (event) => {
    event.preventDefault();

    // select the corresponding project object from the object array, and use it to make the popup
    const project = projects[index];
    const projectHTML = popWindow(project);
    popUp.innerHTML = projectHTML;
    main.appendChild(popUp);
    main.style.display = 'block';
    main.style.visibility = 'visible';
    document.getElementById('body').appendChild(main);

    // Select the close menu link(s) and add an event listener to close the popup
    const closePopUps = document.getElementsByClassName('close-popup');
    Array.from(closePopUps).forEach((closePopUp) => {
      closePopUp.addEventListener('click', (event) => {
        event.preventDefault();
        main.style.display = 'none';
        main.style.visibility = 'hidden';
      });
    });
  });
});

// ****************************** Email Validation ****************************** //

// Regex matches an email address with only lower-case letters and underscores,
// and allows for ornly one period enywhere between the first and last character
// of the personal pard of the address;

const regex = /^[a-z0-9_]+(\.[a-z0-9_]+)?@+[a-z0-9_]+(\.[a-z0-9_]+)*\.[a-z0-9_]+$/;
const form = document.getElementById('contact-form');
const fullName = form.querySelector('#name');
const email = form.querySelector('#email');
const msg = form.querySelector('small');
const message = form.querySelector('#txt-area');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailAddress = email.value.trim();

  if (!regex.test(emailAddress)) {
    msg.innerText = 'Please enter a correct email address format';
  } else {
    form.submit();
  }
});

// ************************* Local Storage Functionality ************************* //
const formData = { name: '', email: '', message: '' };

function record(formInput, destination) {
  formData[destination] = formInput.value;
}

const names = 'name';
const emailAddress = 'email';
const fullMessage = 'message';

fullName.addEventListener('keyup', record(fullName, names));
email.addEventListener('keyup', record(email, emailAddress));
message.addEventListener('keyup', record(message, fullMessage));

const dataString = JSON.stringify(formData);
localStorage.setItem('formData', dataString);

const formInfoString = localStorage.getItem('formData');
const formInfo = JSON.parse(formInfoString);

fullName.value = formInfo.name;
email.value = formInfo.email;
message.value = formInfo.message;