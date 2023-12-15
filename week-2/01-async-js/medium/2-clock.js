// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM

function timeFor24(){
    date = new Date();
    currentTime =  `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    console.log(currentTime)
}

function timeFor12(){
    date = new Date();
    let hours = date.getHours();
    let ampm = ' ';
    if(hours>=12){
        ampm = "PM"
    }else{
        ampm = "AM"
    }
    currentTime =  `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${ampm}`
    console.log(currentTime)
}

function clock(callback,duration){
    setInterval(callback, duration)
}

clock(timeFor24,1000);
clock(timeFor12,1000);