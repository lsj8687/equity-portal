// Common attributes/
const color_3class = ["#fffacf", "#e69191", "#b55353", "#a780d9", "#fffbcf", "#e69291", "#663d9c", "#a781d9", "#fffccf"]

const color_3class_darker = []
color_3class.forEach((item, i) => {
    color_3class_darker.push(d3.hsv(item).darker(4).formatHex())
});

const color_3class_14 = {
    'A1': color_3class[0],
    'A2': color_3class[1],
    'A3': color_3class[2],
    'B1': color_3class[3],
    'B2': color_3class[4],
    'B3': color_3class[5],
    'C1': color_3class[6],
    'C2': color_3class[7],
    'C3': color_3class[8],
};

// Create the map with token !토큰이 달라지면 폴리곤 및 다른 정보가 사라짐
mapboxgl.accessToken = 'pk.eyJ1IjoidWh3YW5nMyIsImEiOiJja3d0bGh4cG8wemxtMm5xcTJ1anc4ajlxIn0.GPUcPfwoUXy6pItqRUvifw';

