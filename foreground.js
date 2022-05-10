//document.querySelector("#hplogo img").classList.add('spinspingsping')
console.log('hello world')

const first = document.createElement('button');
first.innerText = "SET DATA";
first.id  = "first";

first.addEventListener('click', () =>{
    chrome.storage.local.set({"password":"123"});
    console.log("first i was clicked")
});

const second = document.createElement('button');
second.innerText = "SHOUT TO BACKEND";
second.id  = "second";

second.addEventListener('click', () =>{
    chrome.runtime.sendMessage({message : 'yo check the sorage'});
    console.log("second i was clicked")
});

document.querySelector(".Ne6nSd").appendChild(first);
document.querySelector(".Ne6nSd").appendChild(second);

//document.querySelector("body").appendChild(first);
//document.querySelector("body").appendChild(second);