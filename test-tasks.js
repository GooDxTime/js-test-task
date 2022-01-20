/*1. В массиве, содержащем 3 или более чисел, определить подходит ли
каждая группа из трех чисел условию a > b < c или a < b > c. Оформить
решение в виде функции которая принимает исходный массив и возвращает
массив с результатом проверки каждой группы, где 1 удовлетворяет
условию и 0 - нет.*/

const mass = [1, 3, 5, 4, 5, 7];

const checkMass = (arrayCheck) => {
    let arrayResult = [];
    for(let i=1;i < (arrayCheck.length-1);i++){
        const a = arrayCheck[i-1];
        const b = arrayCheck[i];
        const c = arrayCheck[i+1];
        arrayResult.push((a>b&&b<c)||(a<b&&b>c)?1:0);
    }
    return arrayResult;
}
console.log(mass);
console.log(checkMass(mass));

/*2. Дана матрица из целых чисел от 1 до 9, размером 3 * N, где N может быть
больше либо равна 3. Необходимо определить содержит ли каждый участок
матрицы 3 * 3 все числа от 1 до 9. */

const martixMass = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5]
];

const checkMatrixMass = (arrayMatrixCheck) => {
    let arrayResult = []
    
    let step = 0;
    do{
        let arrayCheck = [];
        for(let x=0;x<arrayMatrixCheck.length;x++){
            for(let y=step;y<step+3;y++){
                arrayCheck.push(arrayMatrixCheck[x][y]);
            }
        }
        let objectCheker = arrayCheck.reduce((acc,elem)=>{
            if(acc[elem]===undefined){
                acc[elem]=1;
            }
            return acc;
        },{})
        for(let i=1;i<=9;i++){
            if(i==9&&objectCheker[i]==1){
                arrayResult.push(true);
            }
            if(objectCheker[i]===undefined){
                arrayResult.push(false);
                break;
            }
        }
        step++;
    }while(step<arrayMatrixCheck[0].length-2)
    return arrayResult;
}

console.log(checkMatrixMass(martixMass));

/*3. Есть набор строк (строка это массив из слов), условия форматирования
каждой этой строки и лимит символов в строке. Необходимо подготовить
текст к публикации, так чтобы он удовлетворял условиям форматирования и
не превышал количество символов в строке. Текст должен быть заключен
символ * со всех сторон.*/

const arrayString = [
    ["Hello","world"],
    ["Brad","came","to","dinner","with","us"],
    ["He","loves","tacos"]
];

const arrayRulesFormats = ["LEFT","RIGHT","LEFT"]

const formatArrayStringByRules = (arrayStr,arrayRules)=>{

    

    let arrayResult = [
        "******************",
    ]

    const alignStr = (stroka,rule) => {
        if(rule=="LEFT"){
            stroka="*"+stroka+' '.repeat(16-stroka.length)+'*';
            arrayResult.push(stroka);
        }
        if(rule=="RIGHT"){
            stroka="*"+' '.repeat(16-stroka.length)+stroka+"*";
            arrayResult.push(stroka);
        }
    }

    let currentRules = 0;
    
        arrayStr.forEach((elem,index)=>{
            currentRules = index;
            let str = elem.join(' ');
            if(str.length<=16){
                alignStr(str,arrayRules[currentRules])
            }else{
                str = '';
                elem.forEach((word, index, array)=>{
                    str=str+word+' ';
                    if((str+array[index+1]).length>16){
                        str=str.trim()
                        alignStr(str,arrayRules[currentRules])
                        str = '';
                    }
                })

            }
        })
    arrayResult.push('******************')

        console.log(arrayResult)
}

formatArrayStringByRules(arrayString,arrayRulesFormats)