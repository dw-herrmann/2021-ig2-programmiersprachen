
const data = [5, 2, 3, 8, 5, 4, 2];
//console.log(data[2]);
//console.log(data.length);

/* i++
i = i + 1;
i += 45;

i *= 2
i/=5
 */

for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    let bar = $('<div> </div>');
    const h = data[i] * 10;
    const x = i * 20;
    // console.log(h);
    bar.css({
        'position': 'absolute',
        'height': h,
        'width': 10,
        'background-color': 'white',
        'left': x,
    });
    $('#stage').append(bar);
}
