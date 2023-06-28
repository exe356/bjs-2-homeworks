function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
    constructor(a, b, c) {
      if (!Triangle.isValid(a, b, c)) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this._a = a;
      this._b = b;
      this._c = c;
    }
  
    static isValid(a, b, c) {
      return a + b > c && b + c > a && c + a > b;
    }
  
    get perimeter() {
      return this._a + this._b + this._c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
      return Number(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      const triangle = new Triangle(a, b, c);
      return Object.freeze(triangle);
    } catch (error) {
      return Object.freeze({
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        }
      });
    }
  }