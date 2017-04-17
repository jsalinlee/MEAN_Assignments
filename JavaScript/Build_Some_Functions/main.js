function runningLogger() {
    console.log("I am running!");
}
// runningLogger();

function multiplyByTen(number) {
    var result = number * 10;
    console.log(result);
    return result;
}
// multiplyByTen(5);

function stringReturnOne() {
    string1 = "Ollie Ollie Oxen Free";
    console.log(string1);
    return string1;
}
// stringReturnOne();

function stringReturnTwo() {
    string2 = "Fee Fie Foe Fum";
    console.log(string2);
    return string2;
}
// stringReturnTwo();

function caller(called) {
    if (typeof called === "function") {
        called();
    }
}
// caller(stringReturnOne);

function myDoubleConsoleLog(log1, log2) {
    if (typeof log1 === "function" && typeof log2 === "function") {
        log1();
        log2();
    }
}
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(called) {
    console.log("starting");
    if (typeof called === "function") {
        console.log("True");
        setTimeout(called(), 2000);
    }
    console.log("ending?");
    return "interesting";
}
caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo));
