import { getPost } from '../controller/api.js';
document.addEventListener('DOMContentLoaded', function () {
  const testTap = document.querySelector('.post-container');
  //   let nextPage = 1;
  testTap.addEventListener('click', async () => {
    // const newpost = document.createElement('section');
    // newpost.className = 'post';
    // newpost.id = `post${nextPage}`;
    console.log(localStorage.getItem('token'));
    const post = await getPost();
    console.log(post);
  });

  //   function appendNewPost() {
  //     const newpost = document.createElement('section');
  //     newPage.id = 'page' + nextPage;
  //     newPage.className = 'page';
  //     newPage.innerHTML = `${nextPage}`;
  //     Container.appendChild(newpost);

  //     // Increment the page counter
  //   }
});
