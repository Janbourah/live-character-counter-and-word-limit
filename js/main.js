const tweetInput = document.getElementById("tweet-input");
const charCounter = document.getElementById("char-counter");
const postBtn = document.getElementById("post-btn");

const MAX_CHARS = 280;

postBtn.disabled = true;

tweetInput.addEventListener("input", () => {
  let currentLength = tweetInput.value.length;

  if (currentLength > MAX_CHARS) {
    tweetInput.value = tweetInput.value.substring(0, MAX_CHARS);
    currentLength = MAX_CHARS;
  }

  const remaining = MAX_CHARS - currentLength;
  charCounter.textContent = `${remaining} characters remaining`;

  if (currentLength >= MAX_CHARS) {
    charCounter.classList.add("limit-exceeded");
    postBtn.disabled = true;
  } else if (currentLength === 0) {
    charCounter.classList.remove("limit-exceeded");
    postBtn.disabled = true;
  } else {
    charCounter.classList.remove("limit-exceeded");
    postBtn.disabled = false;
  }
});
