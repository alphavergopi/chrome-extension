chrome.tabs.onActivated.addListener(tab =>{
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\.google/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null, {"file": './mystyle.css'}, ()=>console.log('css injected'))
            chrome.tabs.executeScript(null, {"file":'./foreground.js'}, ()=>console.log('i injected'))
        }
        console.log(current_tab_info.url)
    });
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message == 'yo check the sorage'){
        chrome.storage.local.get("password", value =>{
            console.log(value)
        })
    }
}
)