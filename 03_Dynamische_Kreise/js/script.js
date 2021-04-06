const data =
{
    array: [5, 2, 3, 8, 5, 4, 2],
    height: $('div#data').height(),
    width: $('div#data').width(),
    space: 10
}

data.max = Math.max(...data.array)



$(data.array).each(function (i, element) {

    // console.log(data.height / data.max + ' * ' + element + ' = ' + (data.height / data.max) * element);

    for (let iFor = 0; iFor < element; iFor++) {
        let bubbles = {
            output: $('<div> </div>'),
            h: 30,
            w: 30,
        }
    
        bubbles.x = i * bubbles.h + (i + 1) * data.space;
        bubbles.y = iFor * bubbles.w + (iFor + 1) * data.space;
    
        console.log(bubbles);
    
        bubbles.output.css({
            'height': bubbles.h,
            'width': bubbles.w,
            'background-white': 'white',
            'position': 'absolute',
            'top': bubbles.y,
            'left': bubbles.x,
            'border-radius': '50%'
        })
    
        $('#data').append(bubbles.output)        
    }


})


