/**
 * Maxsus xabarnoma chiqarish funksiyasi
 * @param {string} message - Xabar matni
 * @param {string} type - Xabar turi ('success' yoki 'error')
 */
function showAlert(message, type) {
    const container = document.getElementById('alert-container');
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.textContent = message;

    container.appendChild(alertDiv);

    // 3 soniyadan keyin olib tashlash (animatsiya tugagach)
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

/**
 * Faqat parollarni mosligini tekshiradi, bo'sh maydonlarni HTML o'zi tekshiradi.
 * @param {Event} event - Yuborish hodisasi.
 */
function validatePasswords(event) {
    // Brauzer avtomatik ravishda bo'sh maydonlarni tekshirib bo'ldi.
    event.preventDefault(); // Shakl yuborilishini har doim to'xtatamiz, o'zimiz boshqaramiz

    const ism = document.getElementById('ism').value;
    const familiya = document.getElementById('familiya').value;
    const email = document.getElementById('email').value;
    const parol = document.getElementById('parol').value;
    const parolTakror = document.getElementById('parol_takrorlang').value;

    // Barcha maydonlar to'ldirilganligini tekshirish
    if (!ism || !familiya || !email || !parol || !parolTakror) {
        showAlert("⚠️ Iltimos, barcha maydonlarni to'ldiring!", "error");
        return false;
    }

    // Qo'shimcha tekshiruvlar (masalan email validatsiyasi)
    if (!email.includes('@')) {
        showAlert("⚠️ Xato: Email noto'g'ri kiritildi!", "error");
        return false;
    }

    if (parol !== parolTakror) {
        // Xato bo'lsa:
        showAlert("⚠️ Xato: Kiritilgan parollar bir xil emas!", "error");
        return false;
    } else {
        // Hammasi joyida bo'lsa: Muvaffaqiyat xabari
        showAlert("✅ Ma'lumot muvaffaqiyatli saqlandi!", "success");

        // Shakl maydonlarini tozalash
        document.getElementById('registerForm').reset();

        return true;
    }
}