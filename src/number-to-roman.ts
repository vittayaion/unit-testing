function translateNumber(number: number){
    let result = '';
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    for (let i = 0; i<=decimal.length;i++) {
        while (number%decimal[i] < number) {     
          result += roman[i];
          number -= decimal[i];
        }
      }
      return result;

}


export const translate = translateNumber;   