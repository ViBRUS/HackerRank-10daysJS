
function getAnd(i, j) {
    return (i & j);
}
function getMaxLessThanK(n, k) {
    let newAnd=0;
    for(let i=n;i>0;i--) {
        for(let j=i-1;j>0;j--) {
            if ((j & i) < k && (j & i) > newAnd) {
                newAnd = (j&i);
            }
        }
    }
    return newAnd;
}
