let fadeItems = document.querySelectorAll(".fade-item");
let layout = document.querySelector(".three-column-layout");
let boxes = document.querySelectorAll(".three-column-layout .box");
let slides = document.querySelectorAll(".header-slide");
const startTime = performance.now();
// const startTime = new Date().getTime();

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.2,

    }
);

const layoutObserver = new IntersectionObserver(
    (entries, lobserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            boxes.forEach((box) => {
                box.classList.add("appear");
            });

            lobserver.unobserve(entry.target);
        });
    },
    {
        threshold: 0.2,
    }
);

layoutObserver.observe(layout);
fadeItems.forEach((fadeItem) => {
    observer.observe(fadeItem);
});

slides.forEach((slide) => {
    slide.classList.add("slide");
});

let responsiveCard;
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
        480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        720: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 34,
        },
    },
    loop: false,
    loopFillGroupWithBlanck: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




let loaderContiainer = document.querySelector('.loader-container')
let progressBar = document.querySelector('.loader')
let main = document.querySelector('main')
    
window.onload = ()=>{if (document.readyState == "complete") {
    main.classList.remove('display-none-for-main')
    loaderContiainer.classList.add('display-none-for-loader')
} else {
    loaderContiainer.classList.remove('display-none-for-loader')
}
}

const navigationBtn = document.querySelector('.nav__toggle')
const navMisc = document.querySelector('.brand-misc')

let openNav = false
navigationBtn.onclick = (e) => {
    if (openNav === false) {
        navMisc.classList.add('display-for-navigation')
        openNav = true
        console.log(e.target)
    } else {
        navMisc.classList.remove('display-for-navigation')
        openNav = false
    }
}

let headermain = document.querySelector('header')
const navigationObserver = new IntersectionObserver(
    (entries) => {
        let headernavsection = document.querySelector('.header-nav-section')
        isnavintersecting = true;
        entries.forEach((entry) => {
            if (entry.isIntersecting && isnavintersecting === true) {
                headernavsection.classList.remove("sticky");
                isnavintersecting = false;
            } else {
                headernavsection.classList.add("sticky");
                
                true;
            }
            entry.target.classList.add("appear");
            console.log("worked");
        });
    },
    {
        threshold: 0,
        rootMargin: "0px",
    }
);

navigationObserver.observe(headermain)

// determine rating 
const details = document.querySelectorAll('.author-details')
details.forEach((detail) => {
    const rating = detail.querySelector('.rating')
    
    const rate = () => {
        let ratedStars = parseInt(rating.getAttribute('data-rating'))
        const unratedStars = 5 - ratedStars
        
        function createStar(startype){
            const stars = document.createElement('i')
            stars.classList.add( startype, 'fa-star')
            rating.appendChild(stars)

        }

        for (let i = 0; i < ratedStars; i++) {
           createStar('fas')
        }

        for (let i = 0; i < unratedStars; i++) {
            createStar('far')
        }
    }
    rate()
})


