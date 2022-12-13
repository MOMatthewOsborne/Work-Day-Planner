
var containerEL = $('#container');
var currentHour = moment().format("HH");
// vars for local storage
var nine = document.getElementsByClassName("nine");
var ten = document.getElementsByClassName("ten")
var eleven = document.getElementsByClassName("eleven");
var twelve = document.getElementsByClassName("twelve");
var thirteen = document.getElementsByClassName("thirteen");
var fourteen = document.getElementsByClassName("fourteen");
var fifteen = document.getElementsByClassName("fifteen");
var sixteen = document.getElementsByClassName("sixteen");
var seventeen = document.getElementsByClassName("seventeen");


// Runs on page load
$(document).ready(function () {
    // Checks if anything is in local storage and dislays it
    $(".nine").val(window.localStorage.getItem("9am"))
    $(".ten").val(window.localStorage.getItem("10am"))
    $(".eleven").val(window.localStorage.getItem("11am"))
    $(".twelve").val(window.localStorage.getItem("12pm"))
    $(".thirteen").val(window.localStorage.getItem("1pm"))
    $(".fourteen").val(window.localStorage.getItem("2pm"))
    $(".fifteen").val(window.localStorage.getItem("3pm"))
    $(".sixteen").val(window.localStorage.getItem("4pm"))
    $(".seventeen").val(window.localStorage.getItem("5pm"))

    // This function shows the correct date at the top of the page
    function showToday() {
        var dateDisplay = document.getElementById("currentDay")
        var todayDate = moment().format("dddd Do MMMM");
        dateDisplay.append(todayDate);
    }
    showToday()
    // Checks time and colour codes accordingly by changing class
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
    // When save button is clicked, saves to local storage
    $(".saveBtn").on("click", function () {
        var noteWritten = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, noteWritten)
    })


})