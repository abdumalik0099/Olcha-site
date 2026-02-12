var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    //////////////////////////////

    document.addEventListener("DOMContentLoaded", () => {
    // Taymer uchun vaqtni belgilash (masalan: 12 soat)
    let totalSeconds = 12 * 60 * 60 + 45 * 60 + 30; 

    const hourEl = document.getElementById("hours");
    const minuteEl = document.getElementById("minutes");
    const secondEl = document.getElementById("seconds");

    function updateTimer() {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            return;
        }

        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        
    }

    // Har sekundda yangilash
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Birinchi marta darrov ishga tushirish
});




const img = document.getElementById("productImg");

img.addEventListener("mousedown", () => {
  img.style.transform = "scale(1.1) rotate(3deg)";
});

img.addEventListener("mouseup", () => {
  img.style.transform = "scale(1) rotate(0)";
});

img.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1) rotate(0)";
});


let h = 4;
let m = 58;
let s = 59;

const hEl = document.getElementById("h");
const mEl = document.getElementById("m");
const sEl = document.getElementById("s");

function updateTimer() {
  if (s > 0) {
    s--;
  } else {
    if (m > 0) {
      m--;
      s = 59;
    } else {
      if (h > 0) {
        h--;
        m = 59;
        s = 59;
      } else {
        clearInterval(timer);
      }
    }
  }

  hEl.textContent = String(h).padStart(2, "0");
  mEl.textContent = String(m).padStart(2, "0");
  sEl.textContent = String(s).padStart(2, "0");
}

const timer = setInterval(updateTimer, 1000);