var item = "Checked in at";
let myObj = {};
var myArray = ["Lance Corporal"]
var myBigArray = ['Kirkwood', 'Connor']
var today = new Date()
//console.log(myArray)
//console.log(myBigArray)
//console.log(item)
//console.log(today)

const duties = [
    { name: 'cleaning rifles', doneBy: 'LCpl Kirkwood', minutes: 60 },
    { name: 'cleaning quarterdeck', doneBy: 'LCpl Jindra', minutes: 30 },
    { name: 'cleaning chowhall', doneBy: 'LCpl Latvis', minutes: 45 },
]

function selectSkateMarine(duties) {
    return duties.filter((duty) => { return duty.minutes < 40})
}
module.exports = selectSkateMarine