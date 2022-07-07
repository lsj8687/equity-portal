// Equity Map
const mapBefEqu = new mapboxgl.Map({
    container: 'mapBefEqu', // container ID // style URL //dark-v10 // style URL //dark-v10
    style: 'mapbox://styles/uhwang3/ckwufpsse0va014pe2lwbyr8b',
    center: [-84.53132, 33.842556], // starting position [lng, lat]
    zoom: 9, // starting zoom
    minZoom: 3
});

const mapAftEqu = new mapboxgl.Map({
    container: 'mapAftEqu', // container ID // style URL //dark-v10 // style URL //dark-v10
    style: 'mapbox://styles/uhwang3/ckwufpsse0va014pe2lwbyr8b',
    center: [-84.53132, 33.842556], // starting position [lng, lat]
    zoom: 9, // starting zoom
    minZoom: 3,
});

// set the slider value for absolute measure
let slider_abs = document.getElementById("myRange_abs");
let sliderValue_abs = document.getElementById("sliderValue_abs");
sliderValue_abs.innerHTML = slider_abs.value; // Display the default slider value
let slider_filter_abs = slider_abs.value;

// set the slider value for relative measure
let slider_rel = document.getElementById("myRange_rel");
let sliderValue_rel = document.getElementById("sliderValue_rel");
sliderValue_rel.innerHTML = slider_rel.value; // Display the default slider value
let slider_filter_rel = slider_rel.value;

// default (Absolute measure) - only the slider_abs shown
document.getElementsByClassName("sliderContentRelative")[0].style.visibility = "hidden";

// show the absolute slider while hiding the relative one - by clicking the radio button
function getSlider_abs(){
    document.getElementsByClassName("sliderContentAbsolute")[0].style.visibility = "visible";
    document.getElementsByClassName("sliderContentAbsolute")[0].style.zIndex = "1";
    document.getElementsByClassName("sliderContentRelative")[0].style.visibility = "hidden";
    document.getElementById("myRange_abs").value = 45;
    time_filter = 45;
    sliderValue_abs.innerHTML = 45;
}
// show the relative slider while hiding the absolute one - by clicking the radio button
function getSlider_rel(){
    document.getElementsByClassName("sliderContentAbsolute")[0].style.visibility = "hidden";
    document.getElementsByClassName("sliderContentRelative")[0].style.visibility = "visible";
    document.getElementsByClassName("sliderContentRelative")[0].style.zIndex = "1";
    document.getElementById("myRange_rel").value = 2;
    // reset the value and slidervalue
    time_filter = 2;
    sliderValue_rel.innerHTML = 2;
}

function coordinateEqu() {

    disable = false;

    mapBefEqu.on('move', function() {
    if (!disable) {
        center = mapBefEqu.getCenter();
        zoom = mapBefEqu.getZoom();
        pitch = mapBefEqu.getPitch();
        bearing = mapBefEqu.getBearing();

        disable = true;
        mapAftEqu.setCenter(center);
        mapAftEqu.setZoom(zoom);
        mapAftEqu.setPitch(pitch);
        mapAftEqu.setBearing(bearing);
        disable = false;
    };
    });

    mapAftEqu.on('move', function() {
    if (!disable) {
        center = mapAftEqu.getCenter();
        zoom = mapAftEqu.getZoom();
        pitch = mapAftEqu.getPitch();
        bearing = mapAftEqu.getBearing();

        disable = true;
        mapBefEqu.setCenter(center);
        mapBefEqu.setZoom(zoom);
        mapBefEqu.setPitch(pitch);
        mapBefEqu.setBearing(bearing);
        disable = false;
    };
    });
};

coordinateEqu();
