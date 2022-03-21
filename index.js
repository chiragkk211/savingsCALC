function calcSavings(){
    var petrolCost = 95
    var mileage = 35
    var runningCost = petrolCost/mileage
    var dailyCommute = parseFloat(document.getElementById("dailyCommute").value)

    var dailyCostPetrol = dailyCommute*runningCost
    var batteryCapacity = 2.3
    var range = 80
    var electricityCost = 7
    var chargingCost = electricityCost*batteryCapacity
    var runningCostEV = chargingCost/range
    var newBatteryCost = 40000
    var chargingCycles = 1200
    var batteryKM = chargingCycles*range
    var perKMbattery = newBatteryCost/batteryKM
    var totalRunningCost = perKMbattery+runningCostEV
    var dailyCostEV = dailyCommute*totalRunningCost
    var vehicleCost = 65600
    var dailySavings = Math.round((dailyCostPetrol-dailyCostEV))
    var monthlySavings = Math.round(dailySavings*30)
    var maintenancePetrol=2000
    var yearlySavings = Math.round((dailySavings*365)+maintenancePetrol)
    var costOut = (vehicleCost/yearlySavings)
    costOut= costOut.toFixed(1)


    console.log(petrolCost)
    console.log(mileage)
    console.log(runningCost)
    console.log(dailyCostPetrol)
    console.log(dailyCommute)
    console.log(batteryCapacity)
    console.log(range)
    console.log(electricityCost)
    console.log(chargingCost)
    console.log(runningCostEV)
    console.log(newBatteryCost)
    console.log(chargingCycles)
    console.log(batteryKM)
    console.log(perKMbattery)
    console.log(totalRunningCost)
    console.log(dailyCostEV)
    console.log(vehicleCost)
    console.log(dailySavings)
    console.log(monthlySavings)
    console.log(maintenancePetrol)
    console.log(yearlySavings)
    console.log(costOut)




    document.getElementById("dailySavings").innerText=dailySavings
    document.getElementById("monthlySavings").innerText=monthlySavings
    document.getElementById("yearlySavings").innerText=yearlySavings
    document.getElementById("costOut").innerText=costOut+" year"


}
