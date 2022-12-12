var timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var containerEL = $('#container');
var currentHour = moment().format("HH");
console.log(currentHour)


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

    function timeUpdate() {
        $('.time-block').each(function () {
            var tableTime = parseInt($(this).children().attr('id'));
            console.log(tableTime)
            // currentHour += parseInt(currentHour);
            if (tableTime < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (tableTime == currentHour) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }

        })

    }
    timeUpdate()


})