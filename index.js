//defining various variables
let allSaveButtons = $('.saveBtn') //all the save buttons
let fieldID //field ID to target saved local data
let fieldContent //field content to print saved local data
let allDataHours = $('[data-hour]') //targeting textareas for styling bassed on time of day
let currentDataHour
let dayWeek = moment().format("dddd MMM Do")

function dataHours() { //applies time-based styling to textareas
    for (i = 0; i < allDataHours.length; i++) {
        currentDataHour = parseInt(allDataHours[i].dataset.hour)
        if (currentDataHour < moment().format("HH")) {
            allDataHours[i].classList.add("past")
        } else if (currentDataHour > moment().format("HH")) {
            allDataHours[i].classList.add("future")
        } else {
            allDataHours[i].classList.add("present")
        }
    }
}

function getEvents() { //gets stored data and puts it on the page
    $('textarea').each(function () {
        fieldID = this.id
        $(this).val(JSON.parse(localStorage.getItem(this.id)))
    })
}

function saveData() { //saves entered data to local storage
    fieldID = this.id + "field"
    fieldContent = $('#' + fieldID).val()
    localStorage.setItem(fieldID, JSON.stringify(fieldContent))
}

function updateClock() { //puts clock on the page
    $("#clock").html(moment().format('h:mm:ss a'))
}
$("#currentDay").text(dayWeek) //puts current day on the page

dataHours() //apply styling
setInterval(dataHours, 1000) //maintain styling in real time



updateClock() //calls clock function
setInterval(updateClock, 1000) //maintains clock function in real time

getEvents()
$('#9, #10, #11, #12, #1, #2, #3, #4, #5').click(saveData) //click event on all buttons to save data to local storage
