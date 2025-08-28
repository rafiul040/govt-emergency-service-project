// I Grabbed The Top Counter
const copyCount = document.getElementById("copyCount");

// I Catched Copy Button this button click then counter increase
const copyBtns = document.querySelectorAll(".copy-btn");

// This is side History or Which Time I Pressed The Copy Button Right Side To Show

// When copy Button Click Then Increse Count To Show On Interface
let count = 0;


copyBtns.forEach((buttons) => {
  buttons.addEventListener("click", function () {
    count++;
    copyCount.innerText = count;
    
    const copyText = buttons.getAttribute('data-title')
    
    
    alert(`Copied: ${copyText}`)
  });
});



// I Grabbed The Top Heart Counter
const heartCounter = document.getElementById('heartCount');
// I Picked when Mouse Click on this then increse heart Counter
const heartButtons = document.querySelectorAll('.heart-btn');

// When Click Then is This Increse
let heartCounts = 0


heartButtons.forEach((copy) => {
  copy.addEventListener('click', function(){
    heartCounts++
    heartCounter.innerText = heartCounts
  })
})










// i grabbed the counter
const coinCounter = document.getElementById('coinCounter')
// console.log(coinCounter)
const callButton = document.querySelectorAll('.calling')

let coinCounts = 100

callButton.forEach((coin) => {
  coin.addEventListener('click', function(){
    if(coinCounts <= 0){
      alert('You Have 0 Coin Minimum 20 Coin Needed')
      
      return
    }
    coinCounts = coinCounts - 20
    coinCounter.innerText = coinCounts
    
    
    
    
    const historyList = document.getElementById("historyList");
    
    // Create Date element
    const now = new Date();
    // Decide Adject Time
    const time = now.toLocaleTimeString();
    // Get html Data Title
    const itemText = coin.getAttribute("data-title");
    // Create New li element
    const li = document.createElement("li");
    li.style.fontWeight = 'bolder'
    const br = document.createElement("br");
    const para = document.createElement('p')
    
    
    
    li.innerText = `${itemText}`;
    para.innerText = `Time: ${time}`
    historyList.appendChild(li);
    historyList.appendChild(br)
    li.appendChild(para)
    alert(`📞 ${itemText}`)
    
  })
})








// I Reach Clear Button
const clearButtons = document.getElementById('clear')
clearButtons.addEventListener('click', function(){
  // I Selected My All listed Item
  const allItems = document.querySelectorAll('#historyList li')
  for (const item of allItems) {
    item.remove()  // One by One Remove
  }
})












// Clicked That Copy Button
const buttons = document.querySelectorAll('#emergency-copy')

for (const btn of buttons) {
  btn.addEventListener('click', function(){
    const parent = btn.closest('.bg-white')       
    const number = parent.querySelector('#text').innerText
    // Copy in Clipboard
    navigator.clipboard.writeText(number)     
  })
}