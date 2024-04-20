document.addEventListener('DOMContentLoaded', function () {
  // Your code here

  let nextPage = 1; // Start with page 2

  const scrollableContainer = document.getElementById('container');

  appendNewPage();

  scrollableContainer.addEventListener('scroll', function () {
    const scrollTop = scrollableContainer.scrollTop;
    const containerHeight = scrollableContainer.clientHeight;
    const contentHeight = scrollableContainer.scrollHeight;
    // Check if scrolled to the bottom of the container
    if (scrollTop + containerHeight + 1 >= contentHeight) {
      // Append new page
      for (let i = 0; i <= 10; i++) {
        appendNewPage();
        nextPage += 1;
      }
    }
  });

  function appendNewPage() {
    const newPage = document.createElement('section');
    newPage.id = 'page' + nextPage;
    newPage.className = 'page';
    newPage.innerHTML = `${nextPage}`;
    scrollableContainer.appendChild(newPage);
    // Increment the page counter
  }
});
