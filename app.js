let shapeContainer = document.getElementById("shape-container");
let shapeDetailContainer = document.getElementById("shape-details");
let squareButton = document.getElementById("square-btn");
let rectangleButton = document.getElementById("rectangle-btn");
let circleButton = document.getElementById("circle-btn");
let triangleButton = document.getElementById("triangle-btn");


class Shape {
    constructor(width, height) {
        this.width = Number(width);
        this.height = Number(height);
        this.newShape = document.createElement("div");
        this.newShape.className = "shape"
        this.newShape.style.top = Math.floor(Math.random() * 600) + 1 + "px";
        this.newShape.style.left = Math.floor(Math.random() * 600) + 1 + "px";
    }
    describe(width, height) {
        let area = this.width * this.height;
        let perimeter = this.width*2 + this.height*2;
        this.details = document.createElement("p");
        this.details.className = "shape-details"
        this.details.innerHTML = `Shape: ${this.shapeName}<br>
                                    Width: ${this.width}<br>
                                    Height: ${this.height}<br>
                                    Area: ${area}<br> 
                                    Perimeter: ${perimeter}`
        shapeDetailContainer.appendChild(this.details);
    }
};

class Square extends Shape {
    constructor(width, height) {
        super(width, height);
        this.shapeName = "Square";
        console.log(width, height);
        this.newShape.style.width = width + "px";
        this.newShape.style.height = height + "px";
        this.newShape.style.backgroundColor = "red";
        shapeContainer.appendChild(this.newShape);
        this.newShape.addEventListener("click", () => this.describe(width, height));
    }

};

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.shapeName = "Rectangle";
        this.newShape.style.width = width + "px";
        this.newShape.style.height = height + "px";
        this.newShape.style.backgroundColor = "green";
        shapeContainer.appendChild(this.newShape);
        this.newShape.addEventListener("click", () => this.describe(width, height));
    }
};

class Circle extends Shape {
    constructor(width, height, radius) {
        super(width, height);
        this.radius = Number(radius);
        this.shapeName = "Circle";
        this.newShape.classList.add("circle");
        let diameter = this.radius * 2;
        this.newShape.style.width = diameter + "px";
        this.newShape.style.height = diameter + "px";
        shapeContainer.appendChild(this.newShape);
        this.newShape.addEventListener("click", () => this.describe(width, height));
    }

    describe(width, height) {
        let area = Math.PI * this.radius**2;
        let perimeter = 2 * Math.PI * this.radius;
        this.details = document.createElement("p");
        this.details.className = "shape-details"
        this.details.innerHTML = `Shape: ${this.shapeName}<br>
                                    Radius: ${this.radius.toFixed(2)}<br>
                                    Area: ${area.toFixed(2)}<br> 
                                    Perimeter: ${perimeter.toFixed(2)}`
        shapeDetailContainer.appendChild(this.details);
    }
};

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.newShape.classList.add("triangle");
        this.newShape.style.borderBottom = `${this.height}px solid yellow`
        this.newShape.style.borderRight = `${this.height}px solid transparent`
        console.log(this.newShape);
        console.log(this.height);
        shapeContainer.appendChild(this.newShape);
        this.newShape.addEventListener("click", () => this.describe(width, height));
    }

    describe(width, height) {
        let area = 0.5 * this.height**2;
        let perimeter = this.height * (2 + Math.sqrt(2));
        this.details = document.createElement("p");
        this.details.className = "shape-details"
        this.details.innerHTML = `Shape: ${this.shapeName}<br>
                                    Legs Length: ${this.height}<br>
                                    Area: ${area.toFixed(2)}<br> 
                                    Perimeter: ${perimeter.toFixed(2)}`
        shapeDetailContainer.appendChild(this.details);
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