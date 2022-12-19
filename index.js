// code your solution here
function saturdayFun(phrase = "roller-skate") {
return  `This Saturday, I want to ${phrase}!`;
}

function mondayWork(activity ="go to the office" ) {
    return  `This Monday, I will ${activity}.`;
}

function wrapAdjective (wrap = "*") {
    return function(inner = "special"){
    return `You are ${wrap}${inner}${wrap}!`;
}



}