

const langLinks = document.querySelectorAll('.lang');

langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // e.preventDefault(); 
        langLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});


///////////////////////navbar


const openBtn = document.getElementById("openCatalog");
const catalog = document.querySelector(".catalog_wrapper");
const catologolcha=document.querySelector(".catolog_baby_btn")
const baby=document.querySelectorAll(".baby_baby")

openBtn.addEventListener("click", () => {
    catalog.classList.toggle("hidden")
});

catologolcha.addEventListener("click",()=>{
  baby.forEach(el => {
    el.classList.toggle('hidden'); 
  });


})

// Kategoriya va ularning turlari object ichida saqlanadi
const categoriesData = {
  "Televizorlar,foto vidio va audio": ["Samsung","LG","Sony","Artel","Shivaki","TCL","Hisense","Xiaomi"],
  "Smartfonlar": ["Apple","Samsung","Xiaomi","Realme","Vivo","Oppo","Honor","Nokia"],
  "Noutbuklar": ["HP","Dell","Asus","Acer","Lenovo","Apple MacBook","MSI","Razer"],
  "Maishiy texnika": ["Artel Muzlatkich","LG Kir yuvish mashinasi","Samsung Mikroto‘lqin","Philips Blender","Toshiba Choynak"],
  "Aksessuarlar": ["Quloqchin","Powerbank","Kabel","Case","Charger","Mouse","Keyboard","USB"]
};

// Chap tomondagi kategoriya elementlari
const categoryLinks = document.querySelectorAll(".catalog_left a");

// O'ng tomondagi h3 va brands container
const catalogRightTitle = document.querySelector(".catalog_right h3");
const brandsContainer = document.querySelector(".catalog_right .brands");

// Hover qilganda h3 va brands yangilash
categoryLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    const categoryName = link.textContent.trim(); // hover qilingan kategoriya nomi

    // h3 ni yangilash
    catalogRightTitle.textContent = categoryName;

    // turlarni olish
    const turlar = categoriesData[categoryName] || [];

    // O'ng tomonni tozalash
    brandsContainer.innerHTML = "";

    // Objectga solib barcha turlarni yaratish
    const turlarObj = {};
    turlar.forEach((tur, i) => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = tur;
      brandsContainer.appendChild(a);
      turlarObj[i] = a; // object ichiga solish
    });

    // console orqali objectni ko'rish mumkin
    console.log(turlarObj);
  });
});