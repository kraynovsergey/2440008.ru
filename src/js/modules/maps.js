const footer_map = document.querySelector('#footer-map');
if (footer_map) {
    ymaps.ready(init);

    function init() {
        var footer_map_init = new ymaps.Map("footer-map", {
            center: [
                    footer_map.getAttribute('data-placemark-l'),
                    footer_map.getAttribute('data-placemark-r')
                ],
            zoom: footer_map.getAttribute('data-zoom')
        });

        let myGeoObject = new ymaps.Placemark(
            [
                footer_map.getAttribute('data-placemark-l'),
                footer_map.getAttribute('data-placemark-r')
            ], {}, {
            iconLayout: 'default#image',
            iconImageHref: footer_map.getAttribute('data-marker'),
            iconImageSize: [29, 35],
            iconImageOffset: [-14.5, -35]
        });

        footer_map_init.geoObjects.add(myGeoObject);

        footer_map_init.behaviors.disable('scrollZoom');
    }
}

const catalog_map = document.querySelector('#catalog-map');
if (catalog_map) {
    ymaps.ready(init);

    function init() {
        var catalog_map_init = new ymaps.Map("catalog-map", {
            center: [
                    catalog_map.getAttribute('data-center-l'),
                    catalog_map.getAttribute('data-center-r')
                ],
            zoom: catalog_map.getAttribute('data-zoom')
        });

        catalog_map_init.behaviors.disable('scrollZoom');
    }
}

const product_map = document.querySelector('#product-map');
if (product_map) {
    ymaps.ready(init);

    function init() {
        var product_map_init = new ymaps.Map("product-map", {
            center: [
                    product_map.getAttribute('data-placemark-l'),
                    product_map.getAttribute('data-placemark-r')
                ],
            zoom: product_map.getAttribute('data-zoom')
        });

        let myGeoObject = new ymaps.Placemark(
            [
                product_map.getAttribute('data-placemark-l'),
                product_map.getAttribute('data-placemark-r')
            ], {}, {
            iconLayout: 'default#image',
            iconImageHref: product_map.getAttribute('data-marker'),
            iconImageSize: [29, 35],
            iconImageOffset: [-14.5, -35]
        });

        product_map_init.geoObjects.add(myGeoObject);

        product_map_init.behaviors.disable('scrollZoom');
    }
}