const userInput = prompt("Enter anything");

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

if (0) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

if (-97) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

if (null) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

if (undefined) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}