import initMenu from './menuOperation'
import player from './player'
import initSlider from './slider';


//полифил children
(function (constructor) {
    if (constructor &&
        constructor.prototype &&
        constructor.prototype.children == null) {
        Object.defineProperty(constructor.prototype, 'children', {
            get: function () {
                var i = 0, node, nodes = this.childNodes, children = [];
                //iterate all childNodes
                while (node = nodes[i++]) {
                    //remenber those, that are Node.ELEMENT_NODE (1)
                    if (node.nodeType === 1) { children.push(node); }
                }
                return children;
            }
        });
    }
  //apply the fix to all HTMLElements (window.Element) and to SVG/XML (window.Node)
})(window.Node || window.Element);


//полифил .remove()

if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

//кнопка переключения меню
initMenu();


// проигрывание видео
player();


// слайдер
initSlider();

//карта Яндекс

ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
        center: [59.938720, 30.322946],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.938720, 30.322946], {
            hintContent: 'Санкт-Петербург, ул. Большая Конюшенная, 19',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/footer/location.svg',
            // Размеры метки.
            iconImageSize: [32, 39],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-16, -14]
        });

    myMap.geoObjects
        .add(myPlacemark)
});