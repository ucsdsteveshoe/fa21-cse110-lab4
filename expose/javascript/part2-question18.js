function printCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// I figured we want to print at t=0. I know this isn't necessary,
// but printing at the time of execution seemed important.
printCurrentTime()
setInterval(printCurrentTime, 1000);