function Item(index, id, name, description, featureImg, tech, liveLink, srcLink) {
  this.index = index;
  this.id = id;
  this.name = name;
  this.description = description;
  this.featureImg = featureImg;
  this.tech = tech;
  this.liveLink = liveLink;
  this.srcLink = srcLink;
}

const myItems = [];

function createRow() {
  myItems[0] = new Item(0, 'project-img', 'Rental Cars APP', 'A very usefull app for car rental bussiness. It allows users to post a car for rent, reserve a car only if user is signed in. Back-end build as an api and front end made in React', 'assets/rentalCarsApp.png', ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Ruby On Rails'], 'https://hanjelscars.netlify.app/', 'https://github.com/Hamzaoutdoors/rentalcars_backend');
  myItems[1] = new Item(0, 'project-img', 'Budget App', 'It is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.', 'assets/budgetApp.png', ['HTML', 'CSS', 'Ruby On Rails'], 'https://pacific-thicket-87114.herokuapp.com/', 'https://github.com/JbirdL86/budget-app');
  myItems[2] = new Item(0, 'project-img', 'Recipe App', 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.', 'assets/recipeApp.png', ['HTML', 'CSS', 'Ruby On Rails'], 'https://jbirdl86.github.io/webpack-project/dist/', 'https://github.com/JbirdL86/webpack-project');
  myItems[3] = new Item(0, 'project-img', 'Blog App', 'A blogging app in which users will be able to register and have a profile with posts. Each user will have a route to every single instance and posts list will be routed too, as well as every single post.', 'assets/blogApp.png', ['HTML', 'CSS', 'Ruby On Rails'], 'https://github.com/JbirdL86/Blog-App', 'https://github.com/JbirdL86/Blog-App');
  myItems[4] = new Item(0, 'project-img', 'Covid Tracking App', 'The covid tracking App allows you to keep track of the covid-19 pandemic by country on the current date. You can check information by contry and some countries contain information for its cities. The app desing is ment for mobile devices only.', 'assets/covidApp.png', ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], 'https://agitated-pike-942a36.netlify.app/', 'https://github.com/JbirdL86/covid19-tracking');
  myItems[5] = new Item(0, 'project-img', 'To Do List', 'A very usefull tool to organize your daily tasks; No accounts or sign-ups required. Just load and use, no login required! The to do list is helpful to organize your daily tasks in a really simple way', 'assets/todolist1.png', ['HTML', 'CSS', 'JavaScript'], 'https://jbirdl86.github.io/webpack-project/dist/', 'https://github.com/JbirdL86/webpack-project');
}

function createMultiPost(index) {
  const multiButton = document.querySelector('.seeproject');

  multiButton.addEventListener('click', () => {
    const multiPost = myItems[index];
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
    const popuph2 = document.createElement('h2');
    const popupUl = document.createElement('ul');
    const linklive = document.createElement('a');
    const linkSrc = document.createElement('a');

    featureText.textContent = multiPost.description;
    featureImg.src = multiPost.featureImg;
    closeIcon.textContent = 'X';
    closeIcon.style.cursor = 'pointer';
    liveButton.style.cursor = 'pointer';
    srcButton.style.cursor = 'pointer';
    linklive.href = multiPost.liveLink;
    linklive.target = '_blank';
    liveButton.value = 'See Live';
    linkSrc.href = multiPost.srcLink;
    linkSrc.target = '_blank';
    srcButton.value = 'See Source';
    liveButton.textContent = 'See Live';
    srcButton.textContent = 'See Source';
    popuph2.textContent = multiPost.name;
    popupUl.classList.add('popTech');
    for (let i = 0; i < multiPost.tech.length; i += 1) {
      const li = document.createElement('li');
      li.textContent = multiPost.tech[i];
      li.classList.add('popTech');
      popupUl.appendChild(li);
    }

    closeIconContainer.classList.add('closePopupContainer');
    featureContainer.classList.add('feature-container');
    popup.classList.add('popup');
    liveButton.classList.add('popupButtons');
    srcButton.classList.add('popupButtons');
    wrapDiv.classList.add('popupWrapper');
    buttonContainer.classList.add('buttonContainer');
    featureTextContainer.classList.add('featureTextContainer');

    closeIconContainer.appendChild(popuph2);
    closeIconContainer.appendChild(closeIcon);
    featureContainer.appendChild(featureImg);
    featureContainer.appendChild(featureTextContainer);
    featureTextContainer.appendChild(featureText);
    featureTextContainer.appendChild(buttonContainer);
    linklive.appendChild(liveButton);
    buttonContainer.appendChild(linklive);
    linkSrc.appendChild(srcButton);
    buttonContainer.appendChild(linkSrc);
    wrapDiv.appendChild(closeIconContainer);
    wrapDiv.appendChild(popupUl);
    wrapDiv.appendChild(featureContainer);
    popup.appendChild(wrapDiv);
    works.appendChild(popup);
    closeIcon.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });
}

function createNumberOfRows(numberOfRows) {
  for (let i = 0; i < numberOfRows; i += 1) {
    createRow();
  }
}

function createHtmlForItem(myItems) {
  const worksCont = document.querySelector('#works-grid');

  for (let i = 0; i < myItems.length; i += 1) {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const ulTech = document.createElement('ul');
    const button = document.createElement('button');
    const featureImgSrc = myItems[i].featureImg;

    if (myItems[i].id !== 'left-img' && myItems[i].id !== 'mid-img' && myItems[i].id !== 'right-img') {
      article.style.backgroundImage = `url(${myItems[i].featureImg})`;
      article.style.backgroundSize = '100% 100%';
    }

    article.classList.add(myItems[i].id);
    for (let j = 0; j < myItems[i].tech.length; j += 1) {
      const li = document.createElement('li');

      li.textContent = myItems[i].tech[j];
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
      const popuph2 = document.createElement('h2');
      const popupUl = document.createElement('ul');
      const linklive = document.createElement('a');
      const linkSrc = document.createElement('a');

      featureText.textContent = myItems[i].description;
      featureImg.src = featureImgSrc;
      closeIcon.textContent = 'X';
      closeIcon.style.cursor = 'pointer';
      linklive.href = myItems[i].liveLink;
      linklive.target = '_blank';
      liveButton.style.cursor = 'pointer';
      linkSrc.href = myItems[i].srcLink;
      linkSrc.target = '_blank';
      srcButton.style.cursor = 'pointer';
      liveButton.value = 'See Live';
      srcButton.value = 'See Source';
      liveButton.textContent = 'See Live';
      srcButton.textContent = 'See Source';
      popuph2.innerHTML = h2.innerHTML;
      popupUl.innerHTML = ulTech.innerHTML;
      popupUl.classList = 'popTech';

      closeIconContainer.classList.add('closePopupContainer');
      featureContainer.classList.add('feature-container');
      popup.classList.add('popup');
      liveButton.classList.add('popupButtons');
      srcButton.classList.add('popupButtons');
      wrapDiv.classList.add('popupWrapper');
      buttonContainer.classList.add('buttonContainer');
      featureTextContainer.classList.add('featureTextContainer');

      closeIconContainer.appendChild(popuph2);
      closeIconContainer.appendChild(closeIcon);
      featureContainer.appendChild(featureImg);
      featureContainer.appendChild(featureTextContainer);
      featureTextContainer.appendChild(featureText);
      featureTextContainer.appendChild(buttonContainer);
      linklive.appendChild(liveButton);
      buttonContainer.appendChild(linklive);
      linkSrc.appendChild(srcButton);
      buttonContainer.appendChild(linkSrc);
      wrapDiv.appendChild(closeIconContainer);
      wrapDiv.appendChild(popupUl);
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
createMultiPost(0);
createHtmlForItem(myItems);