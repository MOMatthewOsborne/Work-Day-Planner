var timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var containerEL = $('#container');
var currentHour = moment().format("HH");
console.log(currentHour)
var nine = document.getElementsByClassName("nine");
var ten = document.getElementsByClassName("ten")
var eleven = document.getElementsByClassName("eleven");
var twelve = document.getElementsByClassName("twelve");
var thirteen = document.getElementsByClassName("thirteen");
var fourteen = document.getElementsByClassName("fourteen");
var fifteen = document.getElementsByClassName("fifteen");
var sixteen = document.getElementsByClassName("sixteen");
var seventeen = document.getElementsByClassName("seventeen");



$(document).ready(function () {

    $(".nine").val(window.localStorage.getItem("9am"))
    $(".ten").val(window.localStorage.getItem("10am"))
    $(".eleven").val(window.localStorage.getItem("11am"))
    $(".twelve").val(window.localStorage.getItem("12pm"))
    $(".thirteen").val(window.localStorage.getItem("1pm"))
    $(".fourteen").val(window.localStorage.getItem("2pm"))
    $(".fifteen").val(window.localStorage.getItem("3pm"))
    $(".sixteen").val(window.localStorage.getItem("4pm"))
    $(".seventeen").val(window.localStorage.getItem("5pm"))
    console.log(nine)

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

    timeUpdate();

    $(".saveBtn").on("click", function () {
        var noteWritten = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, noteWritten)
    })


})