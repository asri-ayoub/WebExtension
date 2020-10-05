document.body.style.border = "5px solid blue";
console.log("START step 1_choix_plage_horaire ");

// document.getElementsByName("nextButton")[0].click()
// document.getElementsByClassName("status-1 free")[document.getElementsByClassName("status-1 free").length -1 ].querySelectorAll("a")[0].click()  

if(document.getElementsByName("nextButton").length > 0)
{
    // if (document.querySelectorAll("h2")[0].innerHTML.search("plage horaire") != -1) // Not sure if it will be present in this step
    {
        chrome.runtime.sendMessage({need_to_alert: true}, function(response) {});
    }
}
