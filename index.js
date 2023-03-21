// function introduction(name, language='Javascript'){
//     return `Hi, my name is ${name} and I am learning ${language}`
// }
// console.log(introduction("markoff"))
// // function logTwoNumbers(val1,val2){
// //     return `the two numbers are ${val1} and ${val2}`
// // }
// // console.log(logTwoNumbers(25,55))
// function sayHelloTo(firstName = 'Dan'){
//     console.log(`hello, ${firstName}`)
// }
// console.log(sayHelloTo())

function introduction(name){
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

