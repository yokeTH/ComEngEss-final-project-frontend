// document.getElementById('time').innerHTML = new Date(Date.now()).toDateString();

const changePage = setTimeout(toNextPage, 5000);

function toNextPage() {
  try {
    // window.location.href = './homepage/home.html';
    window.location.href = './authentication/authen.html';
  } catch (e) {
    window.location.href = './authentication/authen.html';
  }
}
