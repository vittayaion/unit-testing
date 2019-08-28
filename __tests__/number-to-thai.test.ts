import { translate } from "../src/number-str-to-thai";

describe("Test convert to thai text", () => {

    describe("หลักหน่วย", () => {
        it(`0 should be return ศูนย์`, () => {
            expect(translate(0)).toBe("ศูนย์");
        });

        it(`1 should be return หนึ่ง`, () => {
            expect(translate(1)).toBe("หนึ่ง");
        });

        it(`2 should be return สอง`, () => {
            expect(translate(2)).toBe("สอง");
        });

        it(`3 should be return สาม`, () => {
            expect(translate(3)).toBe("สาม");
        });

        it(`4 should be return สี่`, () => {
            expect(translate(4)).toBe("สี่");
        });

        it(`5 should be return ห้า`, () => {
            expect(translate(5)).toBe("ห้า");
        });

        it(`6 should be return หก`, () => {
            expect(translate(6)).toBe("หก");
        });

        it(`7 should be return เจ็ด`, () => {
            expect(translate(7)).toBe("เจ็ด");
        });

        it(`8 should be return แปด`, () => {
            expect(translate(8)).toBe("แปด");
        });

        it(`9 should be return เก้า`, () => {
            expect(translate(9)).toBe("เก้า");
        });
    });

    describe("หลักสิบ", () => {
        it(`10 should be return สิบ`, () => {
            expect(translate(10)).toBe("สิบ");
        });

        it(`11 should be return สิบเอ็ด`, () => {
            expect(translate(11)).toBe("สิบเอ็ด");
        });

        it(`20 should be return ยี่สิบ`, () => {
            expect(translate(20)).toBe("ยี่สิบ");
        });

        it(`21 should be return ยี่สิบเอ็ด`, () => {
            expect(translate(21)).toBe("ยี่สิบเอ็ด");
        });

        it(`51 should be return ห้าสิบเอ็ด`, () => {
            expect(translate(51)).toBe("ห้าสิบเอ็ด");
        });

        it(`55 should be return ห้าสิบห้า`, () => {
            expect(translate(55)).toBe("ห้าสิบห้า");
        });

        it(`99 should be return เก้าสิบเก้า`, () => {
            expect(translate(99)).toBe("เก้าสิบเก้า");
        });
    });

    describe("หลักร้อย", () => {
        it(`100 should be return หนึ่งร้อย`, () => {
            expect(translate(100)).toBe("หนึ่งร้อย");
        });

        it(`101 should be return หนึ่งร้อยเอ็ด`, () => {
            expect(translate(101)).toBe("หนึ่งร้อยเอ็ด");
        });

        it(`200 should be return สองร้อย`, () => {
            expect(translate(200)).toBe("สองร้อย");
        });

        it(`211 should be return สองร้อยสิบเอ็ด`, () => {
            expect(translate(211)).toBe("สองร้อยสิบเอ็ด");
        });

        it(`511 should be return ห้าร้อยสิบเอ็ด`, () => {
            expect(translate(511)).toBe("ห้าร้อยสิบเอ็ด");
        });

        it(`521 should be return ห้าร้อยยี่สิบเอ็ด`, () => {
            expect(translate(521)).toBe("ห้าร้อยยี่สิบเอ็ด");
        });

        it(`999 should be return เก้าร้อยเก้าสิบเก้า`, () => {
            expect(translate(999)).toBe("เก้าร้อยเก้าสิบเก้า");
        });
	});
	
    describe("หลักแสนขึ้นไป", () => {
        it(`100000 should be return หนึ่งแสน`, () => {
            expect(translate(100000)).toBe("หนึ่งแสน");
        });
        it(`100k should be return หนึ่งแสน`, () => {
            expect(translate(100000)).toBe("หนึ่งแสน");
        });

        it(`1m should be return หนึ่งล้าน`, () => {
            expect(translate(1000000)).toBe("หนึ่งล้าน");
        });

        it(`10m should be return สิบล้าน`, () => {
            expect(translate(10000000)).toBe("สิบล้าน");
        });

        it(`100m should be return หนึ่งร้อยล้าน`, () => {
            expect(translate(100000000)).toBe("หนึ่งร้อยล้าน");
        });

        it(`100bm should be return หนึ่งแสนล้าน`, () => {
            expect(translate(100000000000)).toBe("หนึ่งแสนล้าน");
        });

        it(`1mm should be return หนึ่งล้านล้าน`, () => {
            expect(translate(1000000000000)).toBe("หนึ่งล้านล้าน");
        });
    });
});
