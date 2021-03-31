const data =
{
    array: [5, 2, 3, 8, 5, 4, 2],
    height: $('div#data').height(),
    width: $('div#data').width(),
    space: 20
}

data.max = Math.max(...data.array)



$(data.array).each(function (i, element) {

    // console.log(data.height / data.max + ' * ' + element + ' = ' + (data.height / data.max) * element);

    let bar = {
        output: $('<div> </div>'),
        h: ((data.height / data.max) * element - data.space * 2),
        w: (data.width - (data.array.length + 1) * data.space) / data.array.length,
    }

    bar.x = (bar.w) * i + data.space * i + data.space;
    bar.y = data.height - bar.h - data.space;

    console.log(bar);

    bar.output.css({
        'height': bar.h,
        'width': bar.w,
        'background-white': 'white',
        'position': 'absolute',
        'top': bar.y,
        'left': bar.x
    })

    $('#data').append(bar.output)

})


