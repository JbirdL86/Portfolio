function Item(id, name, description, featureImg, tech, liveLink, srcLink) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.featureImg = featureImg;
  this.tech = tech;
  this.liveLink = liveLink;
  this.srcLink = srcLink;
}

const myItems = [];
const myTech = ['html', 'css', 'Ruby'];

function createRow() {
  for (let i = 0; i < 3; i += 1) {
    let myItem;
    if (i === 0) {
      myItem = new Item('left-img', 'Profesional Art Printing Data More', 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard', '/assets/leftimg.png', myTech, 'jbirdL86.github.com/Portfolio', 'https://github.com/JbirdL86/Portfolio');
      myItems.push(myItem);
    }
    if (i === 1) {
      myItem = new Item('mid-img', 'Data DashboardHealthcare', 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard', '/assets/midimg.png', myTech, null, null);
      myItems.push(myItem);
    }
    if (i === 2) {
      myItem = new Item('right-img', 'Website Protfolio', 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard', '/assets/rightimg.png', myTech, null, null);
      myItems.push(myItem);
    }
  }
}

function createNumberOfRows(numberOfRows) {
  for (let i = 0; i < numberOfRows; i += 1) {
    createRow();
  }
}

const worksCont = document.querySelector('#works-grid');

function createHtmlForItem(myItems) {
  for (let i = 0; i < myItems.length; i += 1) {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const ulTech = document.createElement('ul');
    const button = document.createElement('button');
    const featureImgSrc = myItems[i].featureImg;

    article.classList.add(myItems[i].id);
    for (let j = 0; j < myItems[j].tech.length; j += 1) {
      const li = document.createElement('li');

      li.textContent = myItems[i].tech[j];
      li.classList.add('textgrid');
      ulTech.appendChild(li);
    }
    p.textContent = myItems[i].description;
    h2.textContent = myItems[i].name;
    button.textContent = 'See Project';
    ulTech.classList.add('works-buttons');
    div.classList.add('item-container');
    article.classList.add('item');
    button.classList.add('streched');
    button.addEventListener('click', () => {
      const works = document.getElementById('works');
      const popup = document.createElement('article');
      const wrapDiv = document.createElement('div');
      const closeIconContainer = document.createElement('div');
      const closeIcon = document.createElement('a');
      const featureContainer = document.createElement('div');
      const featureImg = document.createElement('img');
      const buttonContainer = document.createElement('div');
      const featureText = document.createElement('p');
      const liveButton = document.createElement('button');
      const srcButton = document.createElement('button');
      const featureTextContainer = document.createElement('div');

      featureText.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.';
      featureImg.src = featureImgSrc;
      closeIcon.textContent = 'X';
      closeIcon.style.cursor = 'pointer';
      liveButton.style.cursor = 'pointer';
      srcButton.style.cursor = 'pointer';
      liveButton.value = 'See Live';
      srcButton.value = 'See Source';
      liveButton.textContent = 'See Live';
      srcButton.textContent = 'See Source';

      closeIconContainer.classList.add('closePopupContainer');
      featureContainer.classList.add('feature-container');
      popup.classList.add('popup');
      liveButton.classList.add('popupButtons');
      srcButton.classList.add('popupButtons');
      wrapDiv.classList.add('popupWrapper');
      buttonContainer.classList.add('buttonContainer');
      featureTextContainer.classList.add('featureTextContainer');

      closeIconContainer.appendChild(h2);
      closeIconContainer.appendChild(closeIcon);
      featureContainer.appendChild(featureImg);
      featureContainer.appendChild(featureTextContainer);
      featureTextContainer.appendChild(featureText);
      featureTextContainer.appendChild(buttonContainer);
      buttonContainer.appendChild(liveButton);
      buttonContainer.appendChild(srcButton);
      wrapDiv.appendChild(closeIconContainer);
      wrapDiv.appendChild(ulTech);
      wrapDiv.appendChild(featureContainer);
      popup.appendChild(wrapDiv);
      works.appendChild(popup);
      closeIcon.addEventListener('click', () => {
        popup.style.display = 'none';
      });
    });

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(ulTech);
    div.appendChild(button);
    article.appendChild(div);
    worksCont.appendChild(article);
  }
}

createNumberOfRows(2);
createHtmlForItem(myItems);