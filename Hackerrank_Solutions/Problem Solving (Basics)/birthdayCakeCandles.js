function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest=0, count=0;
    candles.sort((a,b) => a>b?1 : a<b?-1 : 0);
    tallest=candles[candles.length-1];
    count++;
    for(let i=0;i<candles.length-1;i++){
        if(tallest===candles[i]){
            count++;
        }
    }
    return count;
}