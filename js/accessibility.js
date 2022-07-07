// Accessibility Map
const mapBefAcc = new mapboxgl.Map({
    container: 'mapBefAcc', // container ID // style URL //dark-v10 // style URL //dark-v10
    style: 'mapbox://styles/uhwang3/ckwufpsse0va014pe2lwbyr8b',
    center: [-84.53132, 33.842556], // starting position [lng, lat]
    zoom: 9, // starting zoom
    minZoom: 3
});

const mapAftAcc = new mapboxgl.Map({
    container: 'mapAftAcc', // container ID // style URL //dark-v10 // style URL //dark-v10
    style: 'mapbox://styles/uhwang3/ckwufpsse0va014pe2lwbyr8b',
    center: [-84.53132, 33.842556], // starting position [lng, lat]
    zoom: 9, // starting zoom
    minZoom: 3,
});




function coordinateAcc() {

    disable = false;

    mapBefAcc.on('move', function() {
    if (!disable) {
        center = mapBefAcc.getCenter();
        zoom = mapBefAcc.getZoom();
        pitch = mapBefAcc.getPitch();
        bearing = mapBefAcc.getBearing();

        disable = true;
        mapAftAcc.setCenter(center);
        mapAftAcc.setZoom(zoom);
        mapAftAcc.setPitch(pitch);
        mapAftAcc.setBearing(bearing);
        disable = false;
    };
    });

    mapAftAcc.on('move', function() {
    if (!disable) {
        center = mapAftAcc.getCenter();
        zoom = mapAftAcc.getZoom();
        pitch = mapAftAcc.getPitch();
        bearing = mapAftAcc.getBearing();

        disable = true;
        mapBefAcc.setCenter(center);
        mapBefAcc.setZoom(zoom);
        mapBefAcc.setPitch(pitch);
        mapBefAcc.setBearing(bearing);
        disable = false;
    };
    });
};

coordinateAcc();