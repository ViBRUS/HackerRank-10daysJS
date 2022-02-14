

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    // const perimeter, area;
    const obj={length:a, width:b, perimeter:0, area:0};
    obj.perimeter=2*(a+b);
    obj.area=a*b;
    return obj;
}

