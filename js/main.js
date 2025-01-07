$(document).ready(function () {
    // хедер скрол
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // хедер - мови
    document.querySelectorAll('.languagebox span').forEach(span => {
        span.addEventListener('click', function () {
            this.classList.toggle('rotate');
            this.nextElementSibling?.classList.toggle('show');
        });
    });

    // хедер - меню 
    document.querySelectorAll('.submenu>a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Закриваємо всі інші пункти меню
            document.querySelectorAll('.submenu a').forEach(otherLink => {
                if (otherLink !== this) otherLink.classList.remove('active');
            });
            document.querySelectorAll('.submenu ul').forEach(otherSubmenu => {
                if (otherSubmenu !== this.nextElementSibling) otherSubmenu.classList.remove('active');
            });

            // Перемикаємо активний стан для поточного пункту
            this.classList.toggle('active');
            this.nextElementSibling?.classList.toggle('active');
        });
    });

    // хедер - моб.меню
    $('.headermenubtn').click(function () {
        $('.menubg').addClass('show');
        $('.header__nav').addClass('open');
        $('body').addClass('hidden');
    });
    $('.closemenu').click(function () {
        $('.menubg').removeClass('show');
        $('.header__nav').removeClass('open');
        $('body').removeClass('hidden');
    });

    // головна - лічильник

    if ($('.counter').length) {
        const counters = document.querySelectorAll('.counter');
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = +counter.dataset.target;
                const updateCounter = () => {
                    const current = +counter.innerText;
                    const increment = target / 100;

                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCounter, 10); // Час між оновленням
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
            });
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect(); // Зупиняє спостереження після першого спрацювання
                }
            });
        });
        observer.observe(document.querySelector('.stats'));
    }

    // скрол вбік

    if ($('.teamscrollbox').length) {
        const teamscrollbox = document.querySelector('.teamscrollbox');

        function smoothScroll(target, scrollAmount, duration) {
            let start = target.scrollLeft;
            let change = scrollAmount;
            let startTime = performance.now();

            function animateScroll() {
                let elapsed = performance.now() - startTime;
                let progress = elapsed / duration;
                if (progress < 1) {
                    target.scrollLeft = start + change * progress;
                    requestAnimationFrame(animateScroll);
                } else {
                    target.scrollLeft = start + change;
                }
            }
            animateScroll();
        }

        teamscrollbox.addEventListener('wheel', (e) => {
            e.preventDefault();
            let scrollAmount = e.deltaY;
            smoothScroll(teamscrollbox, scrollAmount, 300); // 300 — це тривалість анімації в мілісекундах
        });

    }
    // Результати - слайдер
    var swiper = new Swiper(".resultslider", {
        slidesPerView: 1,
        spaceBetween: 27,
        loop: true,
        speed: 1200,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
            },
        },
    });

    // Відгуки - слайдери
    var swiper1 = new Swiper(".testimvideo-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next.t",
            prevEl: ".swiper-button-prev.t",
        },

        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
        },
    });

    var swiper = new Swiper(".testimtext-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next.t",
            prevEl: ".swiper-button-prev.t",
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
            },
        },
    });


    // player
    const players = document.querySelectorAll('.player');

    players.forEach(player => {
        new Plyr(player);
    });

    // модалки
    const modalLinks = document.querySelectorAll("[data-modal-target]");
    const closeButtons = document.querySelectorAll(".close");

    modalLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const modalId = link.getAttribute("data-modal-target");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add("show");
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            if (modal) {
                modal.classList.remove("show");
            }
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            event.target.classList.remove("show");
        }
    });

    // Select
    if ($('.customselect').length) {
        $('.customselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }

    // ------------------------------ПРО КЛІНІКУ------------------------------

    var swiper = new Swiper(".abslider1", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        speed: 1200,

        mousewheel: {
            releaseOnEdges: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });

    // скрол вбік

    if ($('.doc-group').length) {
        const docscrl = document.querySelector('.doc-group');

        function smoothScroll(target, scrollAmount, duration) {
            let start = target.scrollLeft;
            let change = scrollAmount;
            let startTime = performance.now();

            function animateScroll() {
                let elapsed = performance.now() - startTime;
                let progress = elapsed / duration;
                if (progress < 1) {
                    target.scrollLeft = start + change * progress;
                    requestAnimationFrame(animateScroll);
                } else {
                    target.scrollLeft = start + change;
                }
            }
            animateScroll();
        }

        docscrl.addEventListener('wheel', (e) => {
            e.preventDefault();
            let scrollAmount = e.deltaY;
            smoothScroll(docscrl, scrollAmount, 300); 
        });

    }

    // PRICES accordeon
    $('.accordeon__header').click(function(){
        $(this).toggleClass('active');
        $(this).parents('.accordeon-row').find('.accordeon__body').slideToggle('open');
    })

});