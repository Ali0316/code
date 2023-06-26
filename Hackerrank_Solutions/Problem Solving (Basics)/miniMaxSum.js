function miniMaxSum(arr) {
    // Write your code here
    let min=0, max=0;
    arr.sort((a,b)=> a>b?1 : a<b?-1 : 0);
    for(let i=0;i<4;i++){
        max+=arr[i+1];
        min+=arr[i];
    }
        console.log(`${min} ${max}`);
}