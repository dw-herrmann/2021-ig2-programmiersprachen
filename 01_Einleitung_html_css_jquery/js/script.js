const data = [5, 2, 3, 8, 5, 4, 2]

$(data).each(function (i, element) {
    console.log(element, i)

    let bar = {
        output: $('<div> </div>'),
        h: element * 10,
        w: 10,
        x: 15 * i,
    }

    bar.output.css({
        'height': bar.h,
        'width': bar.w,
        'background-white': 'white',
        'position': 'absolute',
        'left': bar.x
    })

    console.log(bar);

    $('#data').append(bar.output)
    
})

