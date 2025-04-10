const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
const header = document.querySelector("header");

const feedbackTexts = {
  "rate-1": "I hate it",
  "rate-2": "I don't like it",
  "rate-3": "It's average",
  "rate-4": "I like it",
  "rate-5": "I love it"
};

btn.onclick = () => {
  const selectedRating = document.querySelector('input[name="rate"]:checked');
  if (selectedRating) {
    const ratingId = selectedRating.id;
    header.textContent = feedbackTexts[ratingId];
    widget.style.display = "none";
    post.style.display = "block";
  }
};

editBtn.onclick = () => {
  widget.style.display = "block";
  post.style.display = "none";
};
