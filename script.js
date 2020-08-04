

let budget=0;
let balance=budget;


let output = document.getElementById("output");
let total = 0;
output.innerHTML = "<h4> Budget : " + budget + "</h4> <h4> Total : " + total + "</h4>"+ "<h4> Balance : " + balance + "</h4>";


//Getting user's budget
function addBudget(){
	let tBudget=document.getElementById("budget").value;
	budget=parseInt(tBudget);
	balance=budget;
	output.innerHTML = "<h4> Budget : " + budget + "</h4> <h4> Total : " + total + "</h4>"+ "<h4> Balance : " + balance + "</h4>";
}


//setting up the required variables
let price = 0;
var qOfItem = 0;


//function for adding a fruit to cart
function buy(fruit) {


    //getting current fruit's price
	price = parseInt(fruit.value);

    //getting name of current fruit
	let getFruit = fruit.name;

    //getting access to quantity of current fruit (the quantity has the id name same as the name of current fruit).
	let currentFruit = document.getElementById(getFruit);

     //assigning value of quantity to the variable
	qOfItem = parseInt(currentFruit.value);

	if (budget>price)
	{
	
	qOfItem++;
	currentFruit.value = qOfItem;
	total += price;
	balance -= price;

	//writing updated value of quantity to the innerHTML
	currentFruit.innerHTML = (qOfItem);

	//writting updated data to the output
	output.innerHTML = "<h4> Budget : " + budget + "</h4> <h4> Total : " + total + "</h4>"+ "<h4> Balance : " + balance + "</h4>";
	}

	else{
		alert("Not enough balance");
	}

//Disabling buy buttons of the fruits whose price is greater than balance
	let button = document.querySelectorAll(".buy");

	for (let i = 0; i < button.length; i++) {

		if (balance < parseInt(button[i].value)) {

			button[i].disabled = true;
		}

	}


	//Enabling minus butons of the items whose quantity is greater than zero
	let cancelValue = document.querySelectorAll(".itemQuantity");
	let cancelButton = document.querySelectorAll(".cancelbtn");

	for (let i = 0 , j=0; i < cancelValue.length, j<cancelButton.length; i++, j++) {

		if (parseInt( cancelValue[i].value)>0) {

			cancelButton[j].disabled=false;
		}

	}
}

function cancel(fruit) {


	let cancelButton = document.querySelectorAll(".cancelbtn");
	let cancelValue = fruit.id;
	let getFruit = fruit.name;
	let currentFruit = document.getElementById(getFruit);

	qOfItem = parseInt(currentFruit.value);
	
	//Disabling cancel button if quantity of fruit is less than 1.
	if (qOfItem <1) {

		document.getElementById(cancelValue).disabled = true;
		
	}
	else{


	price = parseInt(fruit.value);

	qOfItem--;

	currentFruit.value = qOfItem;
	total -= price;
	balance += price;
	currentFruit.innerHTML = qOfItem;

	//writting the update data to to output
	output.innerHTML = "<h4> Budget : " + budget + "</h4> <h4> Total : " + total + "</h4>"+ "<h4> Balance : " + balance + "</h4>";
}


	//Enabling buy button of fruits whose price is less than or equal to balance
	let button = document.querySelectorAll(".buy");
	for (let i = 0; i < button.length; i++) {

		if (balance >= parseInt(button[i].value)) {

			button[i].disabled = false;
		}
	}


}







