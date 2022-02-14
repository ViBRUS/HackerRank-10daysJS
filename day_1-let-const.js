

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let area,per;
    var r;
    const PI=Math.PI;
    r=readLine();
    parseInt(r);
    
    // Print the area of the circle:
    area=PI*r*r;
    // Print the perimeter of the circle:
    per= 2*PI*r;
    console.log(area + "\n"+ per );
