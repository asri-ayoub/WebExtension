//2_controle_securite.js
document.body.style.border = "5px solid green";
if(document.getElementsByClassName("g-recaptcha").length > 0)
{
    // alert("OKKKKKKKKKKKKK");
    chrome.runtime.sendMessage({need_to_alert: true}, function(response) {});
}
else
{
}

