document.body.style.border = "5px solid red";

console.log("START 0: "  + document.readyState);

document.getElementsByName("condition")[0].click()
document.getElementsByName("nextButton")[0].click()

console.log("END 0: "  + document.readyState);
