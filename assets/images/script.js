const products = [
    { title: "بگ شاپ (Shopping Bag)", img: "https://via.placeholder.com/600x600/00d4d4/ffffff?text=بگ+شاپ", desc: "پاکت خرید ضدآب و مقاوم، مناسب برای بوتیک‌ها و فروشگاه‌های لوکس", features: ["ضدآب ۱۰۰٪", "چاپ اختصاصی", "دوخت اولتراسونیک", "قابلیت تحمل وزن بالا"] },
    { title: "پاکت A4", img: "https://via.placeholder.com/600x600/0f3460/ffffff?text=پاکت+A4", desc: "پاکت سایز A4 مخصوص اسناد، مدارک و کاتالوگ", features: ["سایز دقیق A4", "ضدآب و ضد پارگی", "زیپ یا چسب دار", "قابلیت چاپ لوگو"] },
    { title: "پاکت A5", img: "https://via.placeholder.com/600x600/00d4d4/ffffff?text=پاکت+A5", desc: "پاکت نیم‌نامه، مناسب برای مدارک کوچک‌تر", features: ["سایز A5", "ضدآب کامل", "رنگ‌بندی متنوع", "قیمت اقتصادی"] },
    { title: "پاکت سند", img: "https://via.placeholder.com/600x600/0f3460/ffffff?text=پاکت+سند", desc: "پاکت مخصوص اسناد رسمی، قراردادها و مدارک مهم", features: ["ضدآب و پلمپ‌شونده", "شفاف یا مات", "نوار چسب قوی", "حفظ محرمانگی"] },
    { title: "پاکت MRI و رادیولوژی", img: "https://via.placeholder.com/600x600/00d4d4/ffffff?text=پاکت+MRI", desc: "پاکت مخصوص سی‌دی و عکس‌های پزشکی", features: ["ضدآب و ضد خش", "سایز مخصوص CD", "جنس مقاوم", "قابلیت آویز"] },
];

const productGrid = document.getElementById('productGrid');
const modal = document.getElementById('modal');
const inquiryModal = document.getElementById('inquiryModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');

// نمایش محصولات
products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>برای مشاهده جزئیات و درخواست قیمت کلیک کنید</p>
    `;
    card.onclick = () => openModal(p);
    productGrid.appendChild(card);
});

function openModal(product) {
    modalImg.src = product.img;
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.desc;
    modalFeatures.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
    modal.style.display = 'flex';
}

function openInquiry() {
    modal.style.display = 'none';
    inquiryModal.style.display = 'flex';
}

// بستن مدال‌ها
document.querySelectorAll('.close').forEach(c => {
    c.onclick = () => {
        modal.style.display = 'none';
        inquiryModal.style.display = 'none';
    };
});

window.onclick = (e) => {
    if (e.target === modal || e.target === inquiryModal) {
        modal.style.display = 'none';
        inquiryModal.style.display = 'none';
    }
};

// فرم درخواست
document.getElementById('inquiryForm').onsubmit = function(e) {
    e.preventDefault();
    document.querySelector('.success-msg').style.display = 'block';
    setTimeout(() => {
        inquiryModal.style.display = 'none';
        this.reset();
        document.querySelector('.success-msg').style.display = 'none';
    }, 3000);
};