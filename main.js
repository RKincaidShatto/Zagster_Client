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

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2016- 9", "10", "11", "12", "2017- 1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "2018- 1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [{
            label: 'Rides Per Month',
            data: chartData,
            backgroundColor: [
                'rgba(255, 99, 0, 0.2)',

            ],
            borderColor: [
                'rgba(255,99,132,1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}