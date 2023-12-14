// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function time(){
    date = new Date();
    currentTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    console.log(currentTime)
    setTimeout(time, 1000)
}

time();

