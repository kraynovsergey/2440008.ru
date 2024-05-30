import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper_reviews = document.querySelector('[data-swiper-reviews]');
if (swiper_reviews) {
    new Swiper(swiper_reviews, {
        modules: [Navigation],
        navigation: {
            nextEl: document.querySelector('[data-swiper-reviews-next]'),
            prevEl: document.querySelector('[data-swiper-reviews-prev]')
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            575: {
                slidesPerView: 1.8,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 2.5,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
}

const swiper_product = document.querySelector('[data-swiper-product]');
if (swiper_product) {
    let swiper_product_init = new Swiper(swiper_product, {
        slidesPerView: 1,
        spaceBetween: 0
    });

    const swiper_product_thumbs = document.querySelectorAll('[data-swiper-product-thumb]');
    if (swiper_product_thumbs.length > 0) {
        swiper_product_init.on('slideChange', function (e) {
            swiper_product_thumbs.forEach(item => {
                if (+item.getAttribute('data-item') === e.activeIndex) item.classList.add('_active')
                    else item.classList.remove('_active');
            });
        });

        swiper_product_thumbs.forEach(item => {
            item.addEventListener('click', () => {
                swiper_product_init.slideTo(item.getAttribute('data-item'));
            });
        });
    }
}