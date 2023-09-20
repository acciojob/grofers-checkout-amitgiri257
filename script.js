const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	
const priceElements = document.querySelectorAll(".price");

let totalPrice = 0;

priceElements.forEach((priceElement) => {
  const price = parseFloat(priceElement.textContent);
  totalPrice += price;
});

const totalRow = document.createElement("tr");
	totalRow.className="ans"
totalRow.innerHTML = `
  <td id="ans">Ans</td>
  <td id="ans">${totalPrice.toFixed(2)}</td>
`;

// Append the total row to the table
const table = document.querySelector("table");
table.appendChild(totalRow);

  
};

getSumBtn.addEventListener("click", getSum);

