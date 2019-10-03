var cars = [
    {make: 'Jeep', model: 'Wrangler', year: 2013},
    {make: 'Jeep', model: 'Grand Cherokee', year: 2011},
    {make: 'Jeep', model: 'Compass', year: 2013}
]
let newCars = cars.filter((car) => {
    return car.year > 2012
}
)

console.log(newCars)
