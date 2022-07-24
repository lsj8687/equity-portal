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

// default (Absolute measure) - only the slider_abs shown
document.getElementsByClassName("sliderAccContentRelative")[0].style.visibility = "hidden";

// show the absolute slider while hiding the relative one - by clicking the radio button
function getSliderAcc_abs(){
    document.getElementsByClassName("sliderAccContentAbsolute")[0].style.visibility = "visible";
    document.getElementsByClassName("sliderAccContentAbsolute")[0].style.zIndex = "1";
    document.getElementsByClassName("sliderAccContentRelative")[0].style.visibility = "hidden";
    document.getElementById("myRangeAcc_abs").value = 45;
    timeAcc_filter = 45;
    sliderValueAcc_abs.innerHTML = 45;
}
// show the relative slider while hiding the absolute one - by clicking the radio button
function getSliderAcc_rel(){
    document.getElementsByClassName("sliderAccContentAbsolute")[0].style.visibility = "hidden";
    document.getElementsByClassName("sliderAccContentRelative")[0].style.visibility = "visible";
    document.getElementsByClassName("sliderAccContentRelative")[0].style.zIndex = "1";
    document.getElementById("myRangeAcc_rel").value = 2;
    // reset the value and slidervalue
    timeAcc_filter = 2;
    sliderValueAcc_rel.innerHTML = 2;
}


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