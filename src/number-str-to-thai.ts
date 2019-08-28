function main(number: string) {
    let digits = [
        "ศูนย์",
        "หนึ่ง",
        "สอง",
        "สาม",
        "สี่",
        "ห้า",
        "หก",
        "เจ็ด",
        "แปด",
        "เก้า"
    ];
    let units = [
        "",
        "สิบ",
        "ร้อย",
        "พัน",
        "หมื่น",
        "แสน",
        "ล้าน",
        "สิบล้าน",
        "ร้อยล้าน",
        "พันล้าน",
        "หมื่นล้าน",
        "แสนล้าน",
        "ล้านล้าน"
    ];
    let result = "";

    for (let i = 0; i < number.length; i++) {
        let tmp = number.substring(i, i + 1); // วนค่า

        if (tmp != "0") {
            // วนค่าตัวสุดท้ายถ้า = 1
            if (i == number.length - 1 && tmp == "1") {
                if (result == "") {
                    result = digits[tmp];
                } else {
                    result += "เอ็ด";
                }
            }
            //หลักที่สอง เป็นเลข2
            else if (i == number.length - 2 && tmp == "2") {
                result += "ยี่";
            }
            //หลักที่สอง เป็นเลข1
            else if (i == number.length - 2 && tmp == "1") {
                result += "";
            }
            // ten million
            else if (i == number.length - 8 && tmp == "1") {
                result += "";
            }
            //เอาtextเลขมาใส่
            else {
                result += digits[tmp];
            }
            //วนเอาค่าหลักมาใส่
            result += units[number.length - i - 1];
        }
        //เก็บเคสเลข 0
        else {
            if (result == "") {
                result = digits[tmp];
            }
        }
    }
    return result;
}

function translateNumber(number: number) {
    return main(String(number));
}

export const translate = translateNumber;
