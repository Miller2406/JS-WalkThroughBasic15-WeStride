// นายโรเบิร์ด ต้องการเข้ารหัสข้อความที่เขาใช้คุยกับเพื่อน โดยเขาจะเปลี่ยนทุกตัวสระ (a,e,i,o,u) โดยเขียนด้วยสระตัวนั้นก่อน ตามด้วยอักษร 'p' แล้วตามด้วยสระตัวเดิมนั้นอีกครั้ง ส่วนตัวอักษรอื่นๆเหมือนเดิม
// ตัวอย่างเช่น คำว่า "kemija" กลายเป็น "kepemipijapa" และคำว่า "paprika"กลายเป็น "papapripikapa"
//จงเขียนโปรแกรมที่ไว้ใช้ถอดรหัสของนายโรเบิร์ด
// ตัวอย่าง input: zepelepenapa papapripikapa > zelena paprika \\ input: bapas jepe doposapadnapa opovapa kepeminipijapa > bas je dosadna ova kemija



// let input = 'aaeiou'
let input = 'kepemipijapa'
const collect = [];
const collectStr = '';

for (let i = 0; i < input.length; i++) {
    let letterI = input[i]
    // console.log(input[i]);
    // console.log(lletterI);
    if (letterI === 'a') {
        // console.log('a');
        letterI = 'apa';
    } else if (letterI === 'e') {
        letterI = 'epe';
        // console.log('e');
    } else if (letterI === 'i') {
        letterI = 'ipi';
        // console.log('i');

    } else if (letterI === 'o') {
        letterI = 'opo';
        // console.log('o');

    } else if (letterI === 'u') {
        letterI = 'upu';
        // console.log('u');

    } else {

    }
    // console.log(letterI);
    collect.push(letterI);
}
console.log(collect.join(''));
