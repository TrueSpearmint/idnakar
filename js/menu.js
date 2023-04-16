// Код на jQuery и JS
// Функция burgerMenu, что на вход принимает селектор //
function burgerMenu(selector) {
    let menu = $(selector);  // Внутри нашей функции получаем наше меню //
    let button = menu.find('.burger-menu_button'); // Получаем кнопку внутри меню //
    let links = menu.find('.burger-menu_link'); // Получаем ссылки внутри меню //
    let overlay = menu.find('.burger-menu_overlay'); // Получаем блок перекрывающий контент //

    // Событие клик на кнопку, ссылки и блок, который перекрывает основной контент //
    button.on('click', (e) => { 
    e.preventDefault(); // Отмена действия по умполчанию //
    toggleMenu(); // Функция вызывается при помощи toggleMenu // 
    });

    links.on('click', () => toggleMenu()); // У ссылок будет вызываться только функция toggleMenu//
    overlay.on('click', () => toggleMenu()); // У перекрывающего блока будет вызываться только функция toggleMenu//

    // Функция toggleMenu, что отвечает за переключение нашего меню между активным и не активным состоянием //
    function toggleMenu() {
        menu.toggleClass('burger-menu_active'); // Добавляем наше меню //
        
        // Когда бургер-меню активно, то нельзя прокручивать основную область контента //
        if (menu.hasClass('burger-menu_active')) {
         $('body').css('overflow', 'hidden');
        } else {
         $('body').css('overflow', 'visible');
        }
    }
}   
burgerMenu('.burger-menu');