// นายโรเบิร์ด ต้องการเข้ารหัสข้อความที่เขาใช้คุยกับเพื่อน โดยเขาจะเปลี่ยนทุกตัวสระ (a,e,i,o,u) โดยเขียนด้วยสระตัวนั้นก่อน ตามด้วยอักษร 'p' แล้วตามด้วยสระตัวเดิมนั้นอีกครั้ง ส่วนตัวอักษรอื่นๆเหมือนเดิม
// ตัวอย่างเช่น คำว่า "kemija" กลายเป็น "kepemipijapa" และคำว่า "paprika"กลายเป็น "papapripikapa"
//จงเขียนโปรแกรมที่ไว้ใช้ถอดรหัสของนายโรเบิร์ด
// ตัวอย่าง input: zepelepenapa papapripikapa > zelena paprika \\ input: bapas jepe doposapadnapa opovapa kepeminipijapa > bas je dosadna ova kemija

const collectF = [];
function tranWord(input) {
    console.log(input);
    let collect = ''
    for (let i = 0; i < input.length; i++) {
        let alp = input[i]
        // console.log(alp);
        if (['a', 'e', 'i', 'o', 'u'].includes(alp)) { // true
            collect += alp;
            i += 2
        } else {
            collect += alp;
        }
    }
    collectF.push(collect);
    return collect;
}
console.log(tranWord('kepemipijapa'));
console.log(tranWord('bapas jepe doposapadnapa opovapa kepeminipijapa'));
console.log(tranWord('zepelepenapa papapripikapa > zelena paprika'));
console.log(tranWord('papapripikapa'));
console.log(collectF);
