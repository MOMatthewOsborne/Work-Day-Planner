var timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var containerEL = $('#container');

$(document).ready(function () {

    // This function shows the correct date at the top of the page
    function showToday() {
        var dateDisplay = document.getElementById("currentDay")
        var todayDate = moment().format("dddd Do MMMM");
        console.log(todayDate)
        dateDisplay.append(todayDate);
    }
    showToday()

    // for (i = 0; i < timeList.length; i++) {
    //     var timeDiv = $('<div>');
    //     containerEL.append(timeDiv);


    // }


})