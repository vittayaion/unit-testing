let digits = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
let units = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];

let tmp: any;
let strnum: any;

function translateNumber(number: number){
    
    let result = "";
    let unit = "";
    let digit = "";
    let m1: number = 0;
    let m2: number = 0;
    let m3: number = 0;

    m3 = Math.floor(number/100);
    if(m3){
        let mm3 = number%100;
        m2 = Math.floor(mm3/10);
        if(m2){
            let mm2 = mm3%10;
            m1 = mm2; // number e.g. 123456789
        }
    }
    else{
        m2 = Math.floor(number/10);
        if(m2){
            let mm2 = number%10;
            m1 = mm2%10; // number e.g. 123456789
        }
        else{
            m1 = number%10;
        }
    }


    if (m3 >= 1) {
        unit += digits[m3] + units[2];
    }
    if (m1 != 0) {
        if(m2>=1 && m1 == 1){
            digit = "เอ็ด";
        }
        else{
            digit = digits[m1];
        }
    }
    if (m2 >= 1) {
        if(m2 == 2){
            unit += "ยี่"
        }
        else if( m2 > 1 ){
                unit += digits[m2];
            }
        unit += units[1];
    }
     
    result = unit + digit;
    
    return result;

    
    // for (let i = 0; i < strnum.length; i++) {
    //     this.tmp = strnum.substring(i, i + 1);  // วนค่าตัวแรกสุด

    //     result += this.digits[Number(this.tmp)];
    //     console.log('xxxxxxxxxxx',result);
    // }

    //   return result;   
}


export const translate = translateNumber;   