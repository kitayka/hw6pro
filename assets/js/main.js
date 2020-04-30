"use strict";
function Circle(radius) {
    this.radius = radius;   
    // this.radius = prompt("Введите радиус окружности: ");       

    this.calcCircleArea = function() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
}

let circle = new Circle(5);
// let circle = new Circle();
console.log("Площадь окружности: " + circle.calcCircleArea());





function CircleLength (radius) {
    this.radius = radius;

    this.calcCircleLength = function() {
        return (2 * Math.PI * this.radius);
    }
}

let circleLength = new CircleLength(5);
console.log("Длина окружности: " + circleLength.calcCircleLength());




function ArithmeticMean (a, b) {
    this.a = a;
    this.b = b;

    this.calcArithmeticMean = function() {
        return ((this.a + this.b)/ 2);
    }
}

let arithmeticMean = new ArithmeticMean(10, 20);
console.log("Среднее арифметическое двух чисел: " + arithmeticMean.calcArithmeticMean());







function ArrMean(arr) {
    this.arr = arr;

    this.calcArrMean = function() {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return (sum / this.arr.length);
    }
}

let arrMean = new ArrMean([5, 5, 10, 10, 15]);
console.log("Среднее арифметическое массива: " + arrMean.calcArrMean());