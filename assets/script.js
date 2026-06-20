(function () {
    "use strict";

    const SITE_VERSION = "v2.5";
    const PRODUCT_DATA_URL = "assets/products.json";
    const SAFE_IMAGE_PREFIX = /^assets\/images\/[a-z0-9._/-]+\.(webp|png|jpe?g|gif|svg)$/i;

    function qs(selector, scope = document) {
        return scope.querySelector(selector);
    }

    function qsa(selector, scope = document) {
        return Array.from(scope.querySelectorAll(selector));
    }

    function setText(el, text) {
        if (el) {
            el.textContent = typeof text === "string" ? text : "";
        }
    }

    function isSafeImagePath(path) {
        return typeof path === "string" && SAFE_IMAGE_PREFIX.test(path) && !path.includes("..");
    }

    function createProductCard(product) {
        const title = typeof product.title === "string" ? product.title.trim() : "";
        const desc = typeof product.desc === "string" ? product.desc.trim() : "";
        const image = isSafeImagePath(product.image) ? product.image : "assets/images/logo.webp";

        const card = document.createElement("article");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = image;
        img.alt = title ? `${title} پاکت پلاست` : "محصول پاکت پلاست";
        img.loading = "lazy";
        img.decoding = "async";
        img.width = 600;
        img.height = 420;

        const heading = document.createElement("h3");
        setText(heading, title || "محصول پاکت پلاست");

        const paragraph = document.createElement("p");
        setText(paragraph, desc || "برای دریافت جزئیات و قیمت با ما تماس بگیرید.");

        const link = document.createElement("a");
        link.href = "contact.html";
        link.className = "btn small";
        link.textContent = "استعلام قیمت";
        link.setAttribute("aria-label", `استعلام قیمت ${title || "محصول"}`);

        card.append(img, heading, paragraph, link);
        return card;
    }

    async function loadProducts() {
        const grid = qs("#productGrid");
        const status = qs("#productStatus");
        if (!grid) {
            return;
        }

        try {
            const response = await fetch(PRODUCT_DATA_URL, { cache: "no-store" });
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const products = await response.json();
            if (!Array.isArray(products)) {
                throw new TypeError("products.json باید یک آرایه باشد.");
            }

            const fragment = document.createDocumentFragment();
            products
                .filter((product) => product && typeof product === "object")
                .forEach((product) => fragment.appendChild(createProductCard(product)));

            grid.replaceChildren(fragment);
            if (status) {
                status.hidden = true;
            }
        } catch (error) {
            console.error("خطا در بارگذاری محصولات:", error);
            grid.replaceChildren();
            if (status) {
                status.hidden = false;
                status.textContent = "خطا در بارگذاری محصولات. لطفا دوباره تلاش کنید یا با ما تماس بگیرید.";
            }
        }
    }

    function initMobileNavigation() {
        const hamburger = qs("#hamburger");
        const mobileNav = qs("#mobileNav");
        if (!hamburger || !mobileNav) {
            return;
        }

        const setOpen = (isOpen) => {
            hamburger.classList.toggle("open", isOpen);
            mobileNav.classList.toggle("open", isOpen);
            hamburger.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("nav-open", isOpen);
        };

        hamburger.addEventListener("click", () => {
            setOpen(!mobileNav.classList.contains("open"));
        });

        qsa("a", mobileNav).forEach((link) => {
            link.addEventListener("click", () => setOpen(false));
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        });
    }

    function initSwiper() {
        const slider = qs(".mySwiper");
        if (!slider || typeof window.Swiper !== "function") {
            return;
        }

        new window.Swiper(slider, {
            loop: true,
            autoplay: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? false
                : {
                    delay: 4000,
                    disableOnInteraction: false
                },
            speed: 900,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            keyboard: {
                enabled: true
            }
        });
    }

    function initVersionMarker() {
        try {
            localStorage.setItem("siteVersion", SITE_VERSION);
        } catch (error) {
            console.warn("ذخیره نسخه سایت ممکن نشد:", error);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        initVersionMarker();
        initMobileNavigation();
        initSwiper();
        loadProducts();
    });
}());
