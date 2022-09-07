//SUBWAY COUNTER
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count") //pass in arg
let count = 0
console.log()
if (count < 0){
    h2.style.color="red";
}
function increment() {
    count+= 1
    countEl.innerText = count
}
function decrement() {
    count-=1
    countEl.innerText = count
    
}

/*Its always better to use textContent instead of innerText
set countEl and count to zero to ensure the counts return to zero when the save button is clicked*/
function save() {
    let countStr =count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count= 0
}
// A SIMPLE CALCULATOR
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
// creat four fuctions ;add,subtract,divide and multiply
let sumEl = document.getElementById("sum-el")
function add() {
    let result = num1 + num2
   sumEl.textContent = "Sum: " + result
}
function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}
function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}
function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

//BLACKJACK GAME
//let firstCard = 6
//let secondCard = 9
/*lets create a getRandom variable that will allow numbers to be chosen at random
 instead of these hard code numbers (6,9,5)*/
 //let firstCard = getRandomCard()
 //let secondCard = getRandomCard()
//using arrays ;an ordered list of items
let cards =[] //[firstCard, secondCard]
//above this line of code
let sum =0 // firstCard + secondCard ;the sum should be zero
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl= document.getElementById("message-el")
let summEl =document.getElementById("summ-el")
let cardsEl= document.getElementById("cards-el")
let newcardEl = document.getElementById("newcard-el")
//let playerName = "Dubie"
//let playerChips = 145; use objects to store players info instead; below this line of code
let player = {
    name: "Dubie",
    chips:145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips //playerName + ": $" + playerChips
//Another way of selecting an html element is the "document.querySelector("#/.the id/class name")"
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    //return randomNumber
    if (randomNumber === 1){
        return 11
    }else if (randomNumber > 10){
        return 10
    }else {
        return randomNumber
    }
}
function renderGame(){
    summEl.textContent = "Sum : " + sum
   // cardsEl.textContent = "Cards: " + " " + firstCard +" " + secondCard
    //using array instead
    cardsEl.textContent = "Cards: " //+ " " + cards[0] +" " + cards[1]
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
if (sum <= 20 ) {
    message="Do you want to draw another card ?"
}
else if (sum === 21 ) {
    message = "You've got BlackJack !"
    hasBlackJack = true
}
else {
    message="Oops you're out of the game !"
    isAlive = false
}
messageEl.textContent = message
}
function startGame () {
    // these variable should only be defined in the start function
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function newCard() {
    let card = getRandomCard()//6 
    sum+= card
    cards.push(card)
    if (isAlive === true && hasBlackJack ===false)
    //summEl.textContent = "Sum : " + sum
  // cardsEl.textContent = "Cards: " + " " + firstCard +" " + secondCard + " " + card
    renderGame ()
}


//chrome extension
//function saveLead(){
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads =[]
    renderLeads()
})
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) //to get the value of an input element
    inputEl.value = ""  //to clear out input value
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})
function renderLeads() {
    let listItems = ""
//rendering the leads in the unordered list using ulEl.textcontent
    for (let i = 0; i < myLeads.length; i++) {
// ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
// listItems += "<li><a target='_blank' href='a'" + myLeads[i] + "'>" + myLeads[i] +"</a></li>"
//using template strings instead to be able to break into multiple lines
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
             ${myLeads[i]}
         </a>
        </li>
  `
 //const li = document.createElement("li")
  //li.textContent =myLeads[i]
  //ulEl.append(li)
}
   ulEl.innerHTML = listItems
}