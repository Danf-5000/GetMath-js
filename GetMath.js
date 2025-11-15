function Plus(a, b) {
    return a + b;
}

function Minus(a, b) {
    return a - b;
}

function Multiply(a, b) {
    return a * b;
}

function Divide(a, b) {
    if (b === 0) {
        throw new Error('Ошибка: деление на ноль невозможно!');
    }
    return a / b;
}

function Degree(a, b) {
    return Math.pow(a, b);
}

function Sin(a) {
         return Math.sin(a);
}

function Cos(a) {
         return Math.cos(a);
}

function Tan(a) {
         return Math.tan(a);
}
function RectangleP(a, b) {
         return a*2 + b*2;
}
function TriangleP(a, b, c) {
         return a + b + c;
}
function CircleP(r) {
         return 2 * Math.PI * r;
}
function SquareP(a) {
         return a * 4;
}
function Root(a) {
         return Math.sqrt(a);
}
function Cotan(a) {
         return 1 / Math.tan(a);
}