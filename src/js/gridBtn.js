document.addEventListener("DOMContentLoaded", function() {
    // ----------------------------------------------------
    // 1. O'ZGARUVCHILARNI OLISH
    // ----------------------------------------------------
    const savatBadge = document.getElementById('savati');
    const yurakBadge = document.getElementById('yurak');
    const savatBtn = document.getElementById('savat');

    // Mahsulot tugmalari ID ro'yxati (Barcha ID larni shu yerga yozing)
    const yurakTugmalari = ['plus', 'plus1', 'plus2', 'plus3']; 

    // ----------------------------------------------------
    // 2. SAVAT TUGMASI UCHUN MANTIQ
    // ----------------------------------------------------
    if (savatBtn) {
        savatBtn.addEventListener('click', function() {
            // Sonni oshirish
            let count = parseInt(savatBadge.innerText) || 0;
            count++;
            savatBadge.innerText = count;
            
            // Doirachani ko'rsatish va stil berish (CSS-siz)
            savatBadge.style.display = 'flex';
            savatBadge.style.position = 'absolute';
            savatBadge.style.top = '-8px';
            savatBadge.style.right = '-10px';
            savatBadge.style.backgroundColor = '#d70018';
            savatBadge.style.color = '#fff';
            savatBadge.style.borderRadius = '50%';
            savatBadge.style.width = '16px';
            savatBadge.style.height = '16px';
            savatBadge.style.justifyContent = 'center';
            savatBadge.style.alignItems = 'center';
            savatBadge.style.fontSize = '10px';
        });
    }

    // ----------------------------------------------------
    // 3. YURAKCHA (SEVIMLI) TUGMALARI UCHUN MANTIQ
    // ----------------------------------------------------
    yurakTugmalari.forEach(id => {
        const btn = document.getElementById(id);

        if (btn) {
            // Har bir tugmaga "bir marta bosiladigan" hodisa qo'shamiz
            btn.addEventListener('click', function(e) {
                
                // A) NAVBAR DAGI SONNI OSHIRISH
                let count = parseInt(yurakBadge.innerText) || 0;
                count++;
                yurakBadge.innerText = count;
                
                // Doirachani ko'rsatish va stil berish
                yurakBadge.style.display = 'flex';
                yurakBadge.style.position = 'absolute';
                yurakBadge.style.top = '-8px';
                yurakBadge.style.right = '-10px';
                yurakBadge.style.backgroundColor = '#d70018';
                yurakBadge.style.color = '#fff';
                yurakBadge.style.borderRadius = '50%';
                yurakBadge.style.width = '16px';
                yurakBadge.style.height = '16px';
                yurakBadge.style.justifyContent = 'center';
                yurakBadge.style.alignItems = 'center';
                yurakBadge.style.fontSize = '10px';

                // B) BOSILGAN TUGMANI QIZIL QILISH (MUHIM QISM)
                // Tugma ichidagi ikonkani (i) qidiramiz
                const icon = this.querySelector('i'); 
                
                if (icon) {
                    // Ikonkaga to'g'ridan-to'g'ri rang beramiz
                    icon.style.color = '#d70018'; 
                    icon.style.transition = 'color 0.3s ease';
                } else {
                    // Agar i bo'lmasa, tugmani o'zini bo'yaymiz
                    this.style.color = '#d70018';
                }

                // C) TUGMANI QAYTA BOSILMAYDIGAN QILISH
                this.style.pointerEvents = 'none'; // Bosishni taqiqlaydi
                this.style.opacity = '1'; // Ko'rinishi o'chmasligi uchun
            }, { once: true }); // {once: true} - eng muhim qism, faqat 1 marta ishlaydi
        }
    });
});