function staircase(n) {
    // Write your code here
    let spaces,hashes;
    spaces=hashes='';
    for(let i = 1; i<=n; i++) {
        spaces += Array(n-i).fill(' ').join('')
        hashes += Array(i).fill('#').join('')
        console.log(spaces+hashes)
        spaces = hashes = ''
    }
}