function minN(input,limit){
    input.sort();
    return input.slice(0,limit);
}

console.log(minN([1,2,3,4,5,6,7,8],4));
