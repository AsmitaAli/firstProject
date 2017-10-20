var triangleArea = function(base, height){
    retuen(base * height)/2;
}
var rectangleArea = function(length, width){
    return(length * width);
}
var  circleArea = function(radius){
    return(radius*radius*Math.PI);
}
var area = function(name, val1, val2){
    if(name =="rectangle"){
        return(val1*val2);
    }
    else if(name =="triangle"){
         return(val1*val2)/2;
    }
    else if(name == "circle"){
        return(val1*val1*Math.PI);
    }
}

console.log(area('circle', 5));
console.log(area('rectangle', 5, 8));
console.log(area('triangle', 5 , 5));

var total = 15;
for (var x=0; x<total; x++){
    if(x%2 === 0){
        console.log(x + " is even");
    }
    else{
        console.log(x + " is odd")
    }
}

var star= 5;
var estaric = "*";
for (var x=0; x<star; x++){
    console.log(estaric);
    estaric+="*";
}

var endloop = 100;
for(var x=0; x<endloop; x++){
    if(x%3 === 0 && x%5 === 0){
        console.log(x + " CodeMonkey");
    }
    else if(x%3 === 0){
        console.log(x + " Code");
    }
    else if(x%5 === 0){
        console.log(x + " Monkey");
    }
    else{
        console.log(x);
    }
    
}