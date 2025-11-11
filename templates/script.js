document.addEventListener('DOMContentLoaded', function() {

    // --- Логика для FAQ-аккордеона ---
/* ... existing code ... */
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
/* ... existing code ... */
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', () => {
/* ... existing code ... */
            // Проверяем, активен ли уже этот элемент
            const isActive = item.classList.contains('active');

            // Сначала убираем класс 'active' у всех элементов
/* ... existing code ... */
            faqItems.forEach(i => i.classList.remove('active'));

            // Если элемент не был активен, делаем его активным
            if (!isActive) {
/* ... existing code ... */
                item.classList.add('active');
            }
        });
/* ... existing code ... */
    });

    // --- Логика для "липкой" шапки ---
    const header = document.querySelector('.header');
/* ... existing code ... */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
/* ... existing code ... */
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
/* ... existing code ... */
        }
    });

    // --- Плавный скролл по якорям ---
/* ... existing code ... */
    const navLinks = document.querySelectorAll('.header__menu a, .hero .btn');

    navLinks.forEach(link => {
/* ... existing code ... */
        link.addEventListener('click', function(e) {
            e.preventDefault();
/* ... existing code ... */
            const href = this.getAttribute('href');
            
            // Проверяем, существует ли элемент, прежде чем скроллить
/* ... existing code ... */
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                
/* ... existing code ... */
                if (targetElement) {
                    const headerOffset = document.querySelector('.header').offsetHeight;
/* ... existing code ... */
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
/* ... existing code ... */
                        top: offsetPosition,
                        behavior: 'smooth'
/* ... existing code ... */
                    });
                }
            }
/* ... existing code ... */
        });
    });

});