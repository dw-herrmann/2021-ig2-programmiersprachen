data.forEach(element => {
    console.log(element);


    let dot = $('<div></div>');
    dot.css({
        'height': 10,
        'width': 10,
        'background-color': 'white',
        'position': 'absolute',
        'left': gmynd.map(element.longitude, -180, 180, 0, 1000),
        'top': gmynd.map(element.latitude, -180, 180, 500, 0),
        'border-radius': '100%'
    });
    $('#stage').append(dot);

})

