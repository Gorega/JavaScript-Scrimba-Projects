const counter = document.getElementById("counter");
const entries = document.getElementById("entries");
const incrementButton = document.getElementById("increment");
const saveButton = document.getElementById("save");
const clearButton = document.getElementById("clear");

// increment function
incrementButton.addEventListener("click",()=>{
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
})

// save function
saveButton.addEventListener("click",()=>{
    entries.innerHTML += counter.innerHTML + " - "
    counter.innerHTML = 0;
})

// clear function
clearButton.onclick = ()=>{
    counter.innerHTML = 0;
}
