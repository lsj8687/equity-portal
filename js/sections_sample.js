//First draw function

function draw2(){
    
    let svg = d3.select("#vis")
                    .select('svg')
                    .attr('width', 1000)
                    .attr('height', 950)

    // Selection of all the circles 
    svg.append('circle')
        .attr('cx', 200)
        .attr('cy', 550)
        .attr('r', 50)
        .attr('stroke', 'black')
        .attr('fill', 'white');
}


function draw1(){
    let svg = d3.select("#vis")
                    .append('svg')
                    .attr('width', 1000)
                    .attr('height', 950)

    // Selection of all the circles 
    svg.append('rect')
    .attr('x', 10)
    .attr('y', 450)
    .attr('width', 600)
    .attr('height', 40)
    .attr('stroke', 'black')
    .attr('fill', '#69a3b2');
}

function draw0(){
    let svg = d3.select("#vis")
                    .append('svg')
                    .attr('width', 1000)
                    .attr('height', 950)
}

//Array of all the graph functions
//Will be called from the scroller functionality

let activationFunctions = [
    draw0,
    draw1,
    draw2,
    draw1,
    draw2, 
    draw1
]

//All the scrolling function
//Will draw a new graph based on the index provided by the scroll


let scroll = scroller()
    .container(d3.select('#graphic'))
scroll()

let lastIndex, activeIndex = 0

scroll.on('active', function(index){
    d3.selectAll('.step')
        .transition().duration(700)
        .style('opacity', function (d, i) {return i === index ? 1 : 0.1;});
    
    activeIndex = index
    let sign = (activeIndex - lastIndex) < 0 ? -1 : 1; 
    let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    console.log(lastIndex)
    console.log(sign)
    console.log(activeIndex)
    console.log(scrolledSections)
    scrolledSections.forEach(i => {
        activationFunctions[i]();
    })
    lastIndex = activeIndex;

})

scroll.on('progress', function(index, progress){
    if (index == 2 & progress > 0.7){

    }
})