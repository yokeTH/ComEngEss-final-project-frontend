import { getPost } from '../controller/api.js';
document.addEventListener('DOMContentLoaded', async () => {
  // start////////////////////////////////////////////////////////
  let nextPage = 1;
  const scrollableContainer = document.getElementById('container');
  for (let i = 0; i <= 2; i++) {
    const url = await getPost().photoUrl;
    scrollableContainer.appendChild(appendNewPage(url));
    nextPage += 1;
  }
  // process/////////////////////////////////////////////////////////

  scrollableContainer.addEventListener('scroll', async () => {
    const scrollTop = scrollableContainer.scrollTop;
    const containerHeight = scrollableContainer.clientHeight;
    const contentHeight = scrollableContainer.scrollHeight;
    // Check if scrolled to the bottom of the container
    if (scrollTop + containerHeight >= contentHeight - 1) {
      // for (let i = 0; i <= 10; i++) {
      appendNewPage();
      // }
      nextPage++;
      const post = await getPost();

      console.log(post);
    }
  });

  // back/////////////////////////////////////////////////////////////////
  function appendNewPage(url) {
    const newPage = document.createElement('section');
    newPage.id = 'page' + nextPage;
    newPage.className = 'page';
    const newPic = document.createElement('img');
    newPic.setAttribute('src', url);
    newPic.style.pointerEvents = 'none';
    newPage.style.width = 'inherit'; // or any other desired width
    newPage.style.height = '100%';
    newPage.style.overflow = 'hidden';
    newPic.style.width = '100%';
    newPic.style.height = 'auto';
    newPic.style.display = 'block';
    newPage.appendChild(newPic);
    return newPage;

    try {
      const post = getPost();
      newPage.appendChild(post);
    } catch (e) {
      newPage.innerHTML = 'kuay' + nextPage;
    }
    scrollableContainer.appendChild(newPage);
  }
});
