let shapeContainer = document.getElementById("shape-container");
let shapeDetailContainer = document.getElementById("shape-details");
let squareButton = document.getElementById("square-btn");
let rectangleButton = document.getElementById("rectangle-btn");
let circleButton = document.getElementById("circle-btn");
let triangleButton = document.getElementById("triangle-btn");


class Shape {
    constructor(width, height) {
        this.newShape = document.createElement("div");
        this.newShape.className = "shape"
        this.newShape.style.top = Math.floor(Math.random() * 600) + 1 + "px";
        this.newShape.style.left = Math.floor(Math.random() * 600) + 1 + "px";
        this.width = width;
        this.height = height;
        
    }
};

class Square extends Shape {
    constructor(width, height) {
        super(width, height);
        this.newShape.style.width = width + "px";
        this.newShape.style.height = height + "px";
        this.newShape.style.backgroundColor = "red";
        shapeContainer.appendChild(this.newShape);
    }
};

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.newShape.style.width = width + "px";
        this.newShape.style.height = height + "px";
        this.newShape.style.backgroundColor = "green";
        shapeContainer.appendChild(this.newShape);
    }
};

class Circle extends Shape {
    constructor(width, height, radius) {
        super(width, height);
        this.radius = radius;
        this.newShape.classList.add("circle");
        let diameter = this.radius * 2;
        this.newShape.style.width = diameter + "px";
        this.newShape.style.height = diameter + "px";
        shapeContainer.appendChild(this.newShape);
    }
};

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.area = this.height**2
        this.perimeter = 2 * this.height + Math.sqrt(2) * this.height; 
        this.newShape.classList.add("triangle");
        this.newShape.style.borderBottom = height + "px";
        this.newShape.style.borderRight = height + "px";
        console.log(this.newShape);
        shapeContainer.appendChild(this.newShape);
    }
}

squareButton.addEventListener("click", function() {
    let squareInput = document.getElementById("square-size").value;
    new Square(squareInput, squareInput);
})

rectangleButton.addEventListener("click", function() {
    let rectangleWidth = document.getElementById("rectangle-width").value;
    let rectangleHeight = document.getElementById("rectangle-height").value;
    new Rectangle(rectangleWidth, rectangleHeight);
})

circleButton.addEventListener("click", function() {
    let radius = document.getElementById("circle-radius").value;
    new Circle(0, 0, radius);
})

triangleButton.addEventListener("click", function() {
    let height = document.getElementById("triangle-height").value;
    new Triangle(0, height);
})