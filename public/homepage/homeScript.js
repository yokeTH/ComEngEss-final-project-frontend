import { getPost } from '../controller/api.js';
document.addEventListener('DOMContentLoaded', async () => {
  // start////////////////////////////////////////////////////////
  let next = 1;
  const scrollableContainer = document.getElementById('container');
  // for (let i = 0; i <= 3; i++) {
  //   const url = await getPost().photoUrl;
  //   scrollableContainer.appendChild(appendNewPage(url));
  //   next += 1;
  // }

  const post = await getPost();
  if (post.status.code != 200) {
    window.location.href = '/authentication/authen.html';
  }
  const postarray = post.data;
  for (let i = 0; i <= postarray.length; i++) {
    let num = generateUniqueRandomNumbers(1, postarray.length - 1);
    console.log(num);
    console.log(i);
    scrollableContainer.appendChild(appendNewPage(post.data[num].photoUrl));

    next++;
  }
  // process/////////////////////////////////////////////////////////

  scrollableContainer.addEventListener('scroll', async () => {
    const scrollTop = scrollableContainer.scrollTop;
    const containerHeight = scrollableContainer.clientHeight;
    const contentHeight = scrollableContainer.scrollHeight;

    if (scrollTop + containerHeight >= contentHeight - 1) {
      for (let i = 0; i <= postarray; i++) {
        let num = generateUniqueRandomNumbers(1, postarray.length - 1);
        console.log(num);
        scrollableContainer.appendChild(appendNewPage(post.data[num].photoUrl));

        next++;
      }
    }
  });
  const searchBox = document.querySelector('.search-box');
  // const icon = document.querySelector('.icon');

  searchBox.addEventListener('click', () => {
    searchBox.classList.toggle('expanded');
    setTimeout(() => {
      warp();
    }, 500);
    setTimeout(() => {
      searchBox.classList.toggle('expanded');
    }, 500);
    // searchBox.classList.toggle('expanded');
    // setTimeout(searchBox.classList.toggle('expanded'), 1000);
  });
  function warp() {
    window.location.href = '../search/search.html';
  }

  // back/////////////////////////////////////////////////////////////////

  function loadPage(page) {
    fetch(page)
      .then((response) => response.text())
      .then((data) => {
        document.body.innerHTML = data;
      })
      .catch((error) => {
        console.error('Error loading the page:', error);
      });
  }

  function appendNewPage(url) {
    const newPage = document.createElement('section');
    newPage.id = 'page' + next;
    newPage.className = 'page';
    const newFrame = document.createElement('div');
    newFrame.id = 'pic' + next;
    newFrame.className = 'pic';
    const newPic = document.createElement('img');
    newPic.setAttribute('src', url);
    newFrame.appendChild(newPic);
    newPage.appendChild(newFrame);
    return newPage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  function generateUniqueRandomNumbers(count, maxNumber) {
    if (count > maxNumber) {
      throw new Error('Count should not be greater than maxNumber');
    }
    const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
    const shuffledNumbers = shuffleArray(numbers);
    return shuffledNumbers.slice(0, count);
  }
});
