document.addEventListener('DOMContentLoaded', async () => {
  const thatbutton = document.getElementById('search-icon');
  const searchBox = document.getElementById('search-box');
  const searchTab = document.getElementById('search-tab');
  // const outer = document.getElementsByClassName('mobile-layout');
  thatbutton.addEventListener('click', function () {
    // Go back to the previous state
    searchBox.classList.toggle('small');
    searchTab.classList.toggle('small');
    setTimeout(() => {
      window.history.back();
    }, 500);
    setTimeout(() => {
      searchTab.classList.toggle('small');
      searchBox.classList.toggle('small');
    }, 1000);
  });
});
