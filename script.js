// I Grabbed The Top Counter
const copyCount = document.getElementById("copyCount");

// I Cathed Copy Button this button click then counter increase
const copyBtns = document.querySelectorAll(".copy-btn");

// This is side History or Which Time I Pressed The Copy Button Right Side To Show
const historyList = document.getElementById("historyList");

// When copy Button Click Then Increse Count To Show On Interface
let count = 0;


copyBtns.forEach((buttons) => {
  buttons.addEventListener("click", function () {
    count++;
    copyCount.innerText = count;

    // Show Date or Details in Right History
    const now = new Date();
    const time = now.toLocaleTimeString();
    const itemText = buttons.getAttribute("data-title");
    const li = document.createElement("li");
    li.style.fontWeight = 'bolder'
    const br = document.createElement("br");
    const para = document.createElement('p')


    // Right Side Call History
    li.innerText = `${itemText}`;
    para.innerText = `Time: ${time}`
    historyList.appendChild(li);
    historyList.appendChild(br)
    li.appendChild(para)



    // Show What You Copied
    alert(`${itemText}`)
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











const coinCounter = document.getElementById('coinCounter')
// console.log(coinCounter)
const callButton = document.querySelectorAll('.calling')

let coinCounts = 100

callButton.forEach((coin) => {
    coin.addEventListener('click', function(){
        if(coinCounts <= 0){
            alert('You Have 0 Coin')
            return
        }
        coinCounts = coinCounts - 20
        coinCounter.innerText = coinCounts
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