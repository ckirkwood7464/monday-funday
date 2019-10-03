var cars = [
    {make: 'Jeep', model: 'Wrangler', year: 2013},
    {make: 'Jeep', model: 'Grand Cherokee', year: 2011},
    {make: 'Jeep', model: 'Compass', year: 2013}
]
let newCars = cars.filter((car) => {
    return car.year > 2012
}
)

//let displayData = cars.map((car) => {
//    return ` ${car.year} ${car.model} ${car.make}` 
//})

//console.log(displayData)
let displayData = cars.map((car) => {
    let result = car
    car.display = car.year + ' ' + car.make + ' ' + car.model
    return result
})

console.log(displayData)