import { translate } from "../src/number-to-roman";

describe("หลักหน่วย", () => {
    it(`1 should be return I`, () => {
        expect(translate(1)).toBe("I");
    });

    it(`2 should be return II`, () => {
        expect(translate(2)).toBe("II");
    });

    it(`3 should be return III`, () => {
        expect(translate(3)).toBe("III");
    });

    it(`4 should be return IV`, () => {
        expect(translate(4)).toBe("IV");
    });

    it(`5 should be return V`, () => {
        expect(translate(5)).toBe("V");
    });

    it(`6 should be return VI`, () => {
        expect(translate(6)).toBe("VI");
    });

    it(`7 should be return VII`, () => {
        expect(translate(7)).toBe("VII");
    });

    it(`8 should be return VIII`, () => {
        expect(translate(8)).toBe("VIII");
    });

    it(`9 should be return IX`, () => {
        expect(translate(9)).toBe("IX");
    });

    it(`10 should be return X`, () => {
        expect(translate(10)).toBe("X");
    });

    it(`11 should be return XI`, () => {
        expect(translate(11)).toBe("XI");
    });

    it(`14 should be return XI`, () => {
        expect(translate(14)).toBe("XIV");
    });
});
