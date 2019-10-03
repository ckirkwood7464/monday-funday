var ages = [
10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

let displayData = ages.filter((age) => {
     return age > 17
})
let finalData = displayData.map((age) => {
let result = {}
result.age = age
result.display = age + " is old enough to buy lottery"
return result
})

console.log(finalData)


//age: age,
//display: age + ''
