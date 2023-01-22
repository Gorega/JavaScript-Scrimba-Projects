const input = document.getElementById("input");
const saveInputButton = document.getElementById("save-input");
const saveTabButton = document.getElementById("save-tab");
const deleteButton = document.getElementById("delete");
const list = document.getElementById("list");
let savedList = [];
const savedListLocally = JSON.parse(localStorage.getItem("storageList"));

const addToList = ()=> {
    list.innerHTML = savedList.map((list)=>{
        return `<ul>
            <a href=${list} target="_blank"><li>${list}</li></a>
        </ul>
        `
    }).join(" ");
    localStorage.setItem("storageList",JSON.stringify(savedList));
}

if(savedListLocally){
    savedList = savedListLocally;
    addToList();
}

const saveTrack = (value)=>{
    if(value === "") return
    else{
        savedList.push(value);
        input.value = "";
        input.focus();
        addToList();
    }
}

saveInputButton.addEventListener("click",()=>{
    saveTrack(input.value);
})


saveTabButton.addEventListener("click",()=>{
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        // saveTrack(tabs[0].url);
        console.log(tabs[0])
      });

})

deleteButton.addEventListener("click",()=>{
    savedList = [];
    localStorage.clear("storageList")
    window.location.reload();
})

