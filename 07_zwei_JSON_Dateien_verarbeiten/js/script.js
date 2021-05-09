let popMax = 0

data.population.forEach(element => {
    if (popMax < element.newest) {
        popMax = element.newest;
        console.log(element.newest  + " is bigger than " + popMax);
    }  
})


data.countries.forEach(function (country)  {
    
    let countriesPopulation;

    data.population.forEach(population => {
        if (country.alpha3Code == population.alpha3Code) {
            // console.log(population.newest);

            countriesPopulation = population.newest
        }
    });

    


    const r = gmynd.map(countriesPopulation, 1, popMax, 2, 40)

    let dot = $('<div></div>');
    dot.css({
        'height': r, // Todo: 
        'width': r,
        'background-color': 'white',
        'position': 'absolute',
        'left': gmynd.map(country.longitude, -180, 180, 0, 1000),
        'top': gmynd.map(country.latitude, -180, 180, 500, 0),
        'border-radius': '100%'
    });
    $('#stage').append(dot);

})

console.log("hallo");