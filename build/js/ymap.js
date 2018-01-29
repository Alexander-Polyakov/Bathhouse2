ymaps.ready(function () {
    var center = [51.849613, 39.237281];
    var myMap = new ymaps.Map('map', {
        center: center,
        zoom: 15,
        controls: ['zoomControl']
    });
    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

    }, {
        iconLayout: 'default#image',
        iconImageHref: './images/icons/marker.svg',
        iconImageSize: [39, 58]
    });


    myMap.geoObjects.add(myPlacemark);
});