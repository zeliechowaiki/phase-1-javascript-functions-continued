// code your solution here
function saturdayFun(fun="roller-skate") {
    return `This Saturday, I want to ${fun}!`
}

const mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`
}
function wrapAdjective(wrapper="*") {
    return function (adj="special") {
        return `You are ${wrapper}${adj}${wrapper}!`;
    }
}