function timeConversion(s) {
    // Write your code here
    let time = s.substring(0,s.length-2);
    let meridiem = s.substring(s.length-2, s.length);
    
    time = time.split(":").map(Number);
    if(meridiem==='PM' && time[0]===12){
        time[0]=12}
    else if (meridiem==='PM' && time[0]!==12){
        time[0]+=12}
    else if (meridiem==='AM' && time[0]===12){
        time[0]=0}
    
    return time.map(String).map(s=> s.padStart(2,"0")).join(":");
}