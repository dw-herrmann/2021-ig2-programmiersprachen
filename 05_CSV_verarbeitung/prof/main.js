let stageHeight, stageWidth;

$(function () {
    stageHeight = $('#stage').innerHeight();
    stageWidth = $('#stage').innerWidth();
    drawMap();
});

function drawMap() {
    // console.log(data.length);
    const r = 2.5;
    data.forEach(country => {
        //console.log(country.longitude);
        const x = gmynd.map(country.longitude, -180, 180, 0, stageWidth) - r;
        const y = gmynd.map(country.latitude, -90, 90, stageHeight, 0)-r;
        let dot = $('<div></div>');
        dot.css({
            'height': r * 2,
            'width': r * 2,
            'background-color': 'white',
            'position': 'absolute',
            'left': x,
            'top': y,
            'border-radius': '100%'
        });
        $('#stage').append(dot);
    })
}


/*
function myFunction(a, b, c) {

}

//arrow function
myFunction = (a, b, c) => {

} */