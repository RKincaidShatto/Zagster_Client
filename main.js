const BASE_URL = "https://zagster-service.herokuapp.com"
var chartData = []
var rideData = []
$(updateView)



function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month", getData)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}
function getData(data){
  rideData = data;
  console.log(rideData);
  
for (var i = 0; i <=3; ++i){
  chartData.push(rideData[2016] [i] [i+9]);
}
for (var i = 0; i <=11; ++i){
  chartData.push(rideData[2017] [i] [i+1]);
}
for (var i = 0; i <=9; ++i){
  chartData.push(rideData[2018] [i] [i+1]);
} 
}