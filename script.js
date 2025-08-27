const copyCount = document.getElementById('copyCount')

const historyList = document.getElementById("historyList");
let count = 0


const copyBtns = document.querySelectorAll('.copy-btn')





copyBtns.forEach(buttons => {
    buttons.addEventListener('click', function(e){
        count++
        copyCount.textContent = count










         const now = new Date();
            const time = now.toLocaleTimeString();
            const itemText = buttons.getAttribute("data-title");
            const li = document.createElement("li");
            
            li.textContent = `Copied: ${itemText} Time: ${time}`;
            historyList.appendChild(li);
    })
})




document.getElementById('clear').addEventListener('click', function(){
    const clear = document.getElementById('clear')
})




const pointDecrement = 20


document.getElementById('calling').addEventListener('click', function(){
    
})



 const para = document.querySelectorAll('li');
 const btn = document.getElementById('clear')

 btn.addEventListener('click', function(){
    // for(const form of para){
        para.style.display = 'none'
    // }
 })