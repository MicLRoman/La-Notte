document.addEventListener('DOMContentLoaded', function() {

    // НОВОЕ: Инициализируем AOS (Animate On Scroll)
    AOS.init({
        duration: 800,       // Длительность анимации
        once: true,          // Анимация срабатывает только один раз
        offset: 100,         // Отступ от края экрана для запуска
        disable: 'mobile'    // Можно отключить на мобильных
    });

    // --- Логика для FAQ-аккордеона ---
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Сначала убираем класс 'active' у всех
            faqItems.forEach(i => i.classList.remove('active'));

            // Если элемент не был активен, делаем его активным
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- Логика для "липкой" шапки ---
    const header = document.querySelector('.header');
    // НОВОЕ: Находим кнопку "Наверх"
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        // Логика для шапки
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // НОВОЕ: Логика для кнопки "Наверх"
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // --- Плавный скролл по якорям ---
    // НОВОЕ: Добавляем .scroll-to-top в селектор
    const navLinks = document.querySelectorAll('.header__menu a, .hero .btn, .scroll-to-top');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    const headerOffset = document.querySelector('.header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});