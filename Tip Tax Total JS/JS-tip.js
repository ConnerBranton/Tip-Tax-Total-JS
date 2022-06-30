window.onload = () =>
  //the function called when Calculate button is clicked.
  {
    /*calling a function calculateTip
		which will calculate the tip for the bill.*/
    document.querySelector("#calculate").onclick = calculateTip;
  };

function calculateTip() {
  /*assign values of ID : amount, person and service to
	variables for further calculations.*/
  let amount = document.querySelector("#amount").value;
  let persons = document.querySelector("#persons").value;
  let service = document.querySelector("#services").value;

  console.log(service);
  /*if statement will work when user presses
		calculate without entering values. */
  //so will display an alert box and return.
  if (amount === "" && service === "Select") {
    alert("Please enter valid values");
    return;
  }

  //checking number of persons
  if (persons === "1")
    //if there is only one person then we need not to display each.
    document.querySelector("#each").style.display = "none";
  //if there are more than one person we will display each.
  else document.querySelector("#each").style.display = "block";

  //calculating the tip
  //fixing the total amount up to 2 digits of decimal
  let total = (amount * service) / persons;
  total = total.toFixed(2);

  //display the tip value
  document.querySelector(".tip").style.display = "block";
  document.querySelector("#total").innerHTML = total;
}
