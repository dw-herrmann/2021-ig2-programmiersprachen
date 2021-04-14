const data =
{
    array: [5, 2, 3, 8, 5, 4, 2],
    spaceBtwn: 10
}

$(function () {
    // wird erst ausgeführt, wenn Website komplett geladen:
    drawBarChart();
});

function drawBarChart() {
    // Ausgabe für jeden Array-Eintrag
    $(data.array).each(function (i, element) {

        // For Schleife für jede Spalte
        for (let iFor = 0; iFor < element; iFor++) {
            let bubbles = {
                output: $('<div> </div>'),
                h: 30,
                w: 30,
            }

            // Position jeder Bubble ausrechnen
            bubbles.x = i * bubbles.h + (i + 1) * data.spaceBtwn;
            bubbles.y = iFor * bubbles.w + (iFor + 1) * data.spaceBtwn;

            // CSS inzufügen
            bubbles.output.css({
                'height': bubbles.h,
                'width': bubbles.w,
                'background-white': 'white',
                'position': 'absolute',
                'top': bubbles.y,
                'left': bubbles.x,
                'border-radius': '50%'
            })

            // in HTML einfügen
            $('#data').append(bubbles.output)
        }
    })
}


