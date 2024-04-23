import { getPost } from "../controller/api.js";
import { checkToken, getNewToken } from "../main.js";

document.addEventListener("DOMContentLoaded", async () => {
  // start////////////////////////////////////////////////////////
  checkToken();
  await getNewToken();
  console.log(localStorage.getItem("token"));
  let next = 1;
  const scrollableContainer = document.getElementById("container");

  // for (let i = 0; i <= 3; i++) {
  //   const url = await getPost().photoUrl;
  //   scrollableContainer.appendChild(appendNewPage(url));
  //   next += 1;
  // }

  const post = await getPost();
  if (post.status.code !== 200) {
    window.location.href = "/authentication/authen.html";
  }

  let postarray = post.data;
  postarray.reverse();
  console.log(postarray);
  for (let post of postarray) {
    // for (let i = postarray.length - 1; i >= 0; i--) {
    // const num = generateUniqueRandomNumbers(1, postarray.length - 1);

    console.log(post.topic);
    // console.log(post.data[i].topic.name);

    if (post.topic == undefined) {
      scrollableContainer.appendChild(appendNewPage(post.photoUrl, "Quality"));
    } else {
      scrollableContainer.appendChild(
        appendNewPage(post.photoUrl, post.topic.name)
      );
    }

    next++;
  }

  const createTopicButton = document.querySelector("#add-topic-button");
  createTopicButton.addEventListener("click", () => {
    window.location.href = "../createTopic/index.html";
  });

  // process/////////////////////////////////////////////////////////

  scrollableContainer.addEventListener("scroll", async () => {
    const scrollTop = scrollableContainer.scrollTop;
    const containerHeight = scrollableContainer.clientHeight;
    const contentHeight = scrollableContainer.scrollHeight;

    if (scrollTop + containerHeight >= contentHeight - 1) {
      // for (let i = postarray.length - 1; i >= 0; i--) {
      for (let post of postarray) {
        // console.log();
        console.log(post);
        scrollableContainer.appendChild(
          appendNewPage(post.photoUrl, post.topic.name)
        );

        next++;
      }
    }
  });
  // const searchBox = document.querySelector(".search-box");
  // // const icon = document.querySelector('.icon');

  // searchBox.addEventListener("click", () => {
  //   searchBox.classList.toggle("expanded");
  //   setTimeout(() => {
  //     warp();
  //   }, 500);
  //   setTimeout(() => {
  //     searchBox.classList.toggle("expanded");
  //   }, 500);
  //   // searchBox.classList.toggle('expanded');
  //   // setTimeout(searchBox.classList.toggle('expanded'), 1000);
  // });
  // function warp() {
  //   window.location.href = "../search/search.html";
  // }

  // back/////////////////////////////////////////////////////////////////

  // function loadPage(page) {
  //   fetch(page)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       document.body.innerHTML = data;
  //     })
  //     .catch((error) => {
  //       console.error('Error loading the page:', error);
  //     });
  // }

  function appendNewPage(url, topicName) {
    const newPage = document.createElement("section");
    newPage.id = "page" + next;
    newPage.className = "page";
    const newFrame = document.createElement("div");
    newFrame.id = "pic" + next;
    newFrame.className = "pic";
    const newPic = document.createElement("img");
    newPic.setAttribute("value", topicName);
    newPic.setAttribute("src", url);

    newPic.addEventListener("click", function () {
      const topic = this.value;
      console.log(topic);
      window.location.href = `../reviewPage/index.html?topic=${topicName}`;
    });
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
      throw new Error("Count should not be greater than maxNumber");
    }
    const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
    const shuffledNumbers = shuffleArray(numbers);
    return shuffledNumbers.slice(0, count);
  }
});
