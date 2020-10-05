
var DELAY_MINUTES = 1.50;
// var URL_LINK = "http://www.hauts-de-seine.gouv.fr/booking/create/4485";
// var URL_LINK = "http://www.hauts-de-seine.gouv.fr/booking/create/10674";
var URL_LINK = "http://www.hauts-de-seine.gouv.fr/booking/create/13525"
/*
Restart alarm for the currently active tab, whenever background.js is run.
*/
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  restartAlarm();
});


/*
restartAlarm: clear all alarms,
then set a new alarm for the given tab.
*/
function restartAlarm() {
  chrome.alarms.clearAll();
  chrome.alarms.create("", {delayInMinutes: DELAY_MINUTES});
}

/*
On alarm, show the page action.
*/
chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.tabs.create({ url: URL_LINK , active: false },function(tab){
    restartAlarm();

    //Remove the tab
    setTimeout(function(){chrome.tabs.remove(tab.id);}, 120000);

    try {
      chrome.tabs.executeScript(tab.id,{file: "0_prise_rdv.js"});
      setTimeout(function(){ chrome.tabs.executeScript(tab.id,{file: "1_transition.js"});}, 10000);
      setTimeout(function(){ chrome.tabs.executeScript(tab.id,{file: "1_choix_plage_horaire.js"});}, 5000);

      // setTimeout(function(){ chrome.tabs.executeScript(tab.id,{file: "2_controle_securite.js"});}, 15000);
      
    } catch (error) {
      
    }


});
});

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
  if (msg.need_to_alert)
  {
    setTimeout(function() {
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        alert("An active attempt is SUCESS!!!");
      });
    }, 10000);
  }
});