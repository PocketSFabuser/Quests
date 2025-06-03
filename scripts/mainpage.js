window.onload = function () {
    var currentSlide = 0;
    var slides = document.querySelectorAll('.slides');

    // Показываем первый слайд при загрузке страницы
    slides[currentSlide].classList.add('active');

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000); // Интервал в 5 секунд

    // Функция для показа модального окна
    function showModal() {
        document.getElementById('modal').style.display = 'flex'; // Изменено на flex
        document.body.style.overflow = 'hidden'; // Запрет прокрутки при открытом модальном окне
    }

    // Функция для скрытия модального окна
    function hideModal() {
        document.getElementById('modal').style.display = 'none';
        document.body.style.overflow = 'auto'; // Возвращаем прокрутку
    }

    // Обработчики для кнопок
    document.getElementById('tgbot').addEventListener('click', () => {
        open('https://t.me/QuestsBar_bot', '_self');
    });
    
    document.getElementById('ggform').addEventListener('click', () => {
        showModal();
    });
    
    document.getElementById('call').addEventListener('click', () => {
        showModal();
    });

    // Обработчик для кнопки закрытия модального окна
    document.getElementById('closeModal').addEventListener('click', hideModal);
};