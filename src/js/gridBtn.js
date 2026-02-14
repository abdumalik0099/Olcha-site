document.addEventListener("DOMContentLoaded", () => {
  const heartIcons = document.querySelectorAll("#plus, #plus1, #plus2");
  const heartCount = document.getElementById("yurak");

  // Boshlang‘ich qiymat
  heartCount.textContent = "0";

  heartIcons.forEach((icon) => {
    icon.dataset.liked = "false";

    icon.addEventListener("click", () => {
      let count = parseInt(heartCount.textContent);

      if (icon.dataset.liked === "false") {
        // Like
        icon.classList.remove("ri-heart-line");
        icon.classList.add("ri-heart-fill");
        icon.style.color = "#d70018";
        icon.dataset.liked = "true";
        icon.style.fontSize = "26px";

        heartCount.textContent = count + 1;
        heartCount.style.display = "flex";
      } else {
        // Unlike
        icon.classList.remove("ri-heart-fill");
        icon.classList.add("ri-heart-line");
        icon.style.color = "#666666";
        icon.dataset.liked = "false";

        heartCount.textContent = count - 1;

        if (heartCount.textContent === "0") {
          heartCount.style.display = "none";
        }
      }
    });
  });
});

// ----------------------------------------------------
// 3. shop
// ----------------------------------------------------

