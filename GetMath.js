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
function TrapezoidP(a, b , c , d) {
         return a + b + c + d;
}
function PolygonP(a) {
         return a * 5;
}
function StarP(a) {
         return a * 10;
}
function Sec(a) {
         return 1 / Math.cos(a);
}
function Cosec(a) {
         return 1 / Math.sin(a);
}
function SumAnglesSin(a, b) {
         return Math.sin(a + b);
}
function SumAnglesCos(a, b) {
         return Math.cos(a + b);
}
function SumAnglesTan(a, b) {
         return Math.tan(a + b);
}
function SumAnglesCotan(a, b) {
         return 1 / Math.tan(a + b);
}
function SumAnglesSec(a, b) {
         return 1 / Math.cos(a + b);
}
function SumAnglesCosec(a, b) {
         return 1 / Math.sin(a + b);
}
function EllipseP(a, b) {
        var term1 = 3 * (a + b);
        var term2 = Math.sqrt((3 * a + b) * (a + 3 * b));
        return Math.PI * (term1 - term2);
}
