
let allTimeBlocks = $('.time-block')
let allSaveButtons = $('.saveBtn')
let fieldID
let buttonID
let fieldContent
let dataTime
let allDataHours = $('[data-hour]')
let currentDataHour

function dataHours(){ //applies 
    for(i = 0; i < allDataHours.length; i++){
        console.log(allDataHours[i])
        currentDataHour = parseInt(allDataHours[i].dataset.hour)
        console.log(currentDataHour)
        if (currentDataHour < moment().format("HH")) {
            allDataHours[i].classList.add("past")
        } else if (currentDataHour === moment().format("HH")) {
            allDataHours[i].classList.add("present")
        } else{
            allDataHours[i].classList.add("future")
        }}}
dataHours()
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
let dayWeek = moment().format("dddd MMM Do")

$("#currentDay").text(dayWeek);

let updateClock = function () {
    $("#clock").html(moment().format('h:mm:ss a'))
}
setInterval(updateClock, 1000);



// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours - done in html

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// let updateColors = function () { //timeblock colorchange function
//     for (i = 0; i > allTimeBlocks.length; i++) {
//         if (moment().isBefore()) {
//             x.addClass('past')
//         }
//         else if (moment().isSame()) {
//             x.addClass('present')
//         }
//         else {
//             x.addClass('future')
//         }
//     }
// }

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist - local storage
function getEvents() {
    $('textarea').each(function() {
        fieldID = this.id
        $(this).val(JSON.parse(localStorage.getItem(this.id)));
    })
}
getEvents()
$('#9, #10, #11, #12, #1, #2, #3, #4, #5').click(saveData)

function saveData() {
    fieldID = this.id + "field"
    fieldContent = $('#' + fieldID).val()
    localStorage.setItem(fieldID, JSON.stringify(fieldContent))
}

// let hour9AM = moment('T09:00:00.000').format('LT')
// console.log(hour9AM)

// $('#todoButton').on('click', function() {
//     let todoText = $('#todoText')
//     let myHtml = $('<li>')
//     myHtml.text($(todoText).val())
//     $('#todoList').append(myHtml)
// })

// moment().isBefore(Moment|String|Number|Date|Array);
// moment().isBefore(Moment|String|Number|Date|Array, String);

// moment().isSame(Moment|String|Number|Date|Array);
// moment().isSame(Moment|String|Number|Date|Array, String);

// localStorage.setItem("highScore", JSON.stringify(newHighScore))
// localStorage.setItem("highScoreUser", JSON.stringify(newHighScoreUser))

// highScore = JSON.parse(localStorage.getItem("highScore"))
// highScoreUser = JSON.parse(localStorage.getItem("highScoreUser"))

//give each time block its own time signature
//compare moment() to each time block's signature
//if moment() isAfter each block
//      that block is past
//else if moment() isSame as each block
        //that block is present
//else
        //that block is future

// moment('09:00', 'h:mm').fromNow()

// for(i = 0; i > allTimeBlocks.length; i++){
//     console.log(allTimeBlocks[i])
//     if (allTimeBlocks[i].data-time < moment().format("HH")) {
//         allTimeBlocks[i].addClass("past")
//     } else if (allTimeBlocks[i].data-time === moment().format("HH")) {
//         allTimeBlocks[i].addClass("present")
//     } else{
//         allTimeBlocks[i].addClass("future")
//     }}

// $(['data-hour']).each(function() {
//     dataTime = this.data-hour
//     console.log(dataTime)
// })