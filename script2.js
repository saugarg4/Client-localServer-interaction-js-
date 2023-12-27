const apiUrl = 'http://localhost:3001/users';

let users = []
// script2.js
document.addEventListener('DOMContentLoaded', function () {
     fetchData();
        
})

function fetchData(){
    fetch(apiUrl)
    .then(response => {
        console.log(response)
        // Check if the response status is OK (200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON and return it
        return response.json();
    })
    .then(data => {
        users = data;
        displayCustomer();
        document.getElementByClassName("remove").addEventListener("click",)
    })
    .catch(error => {
        // Reject the promise with the encountered error
        console.error('Error making GET request:', error);
    })
}
async function removeCustomer(customerId){

    try{
        let deleteUrl = apiUrl + "/" + customerId;
        const response = await fetch(deleteUrl, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // You can add more headers as needed
          },
        });
  
        // Check if the response status is OK (200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        console.log('Data deleted successfully');
        fetchData()
    } catch (error) {
      console.error('Error deleting data:', error);
    }
}

function displayCustomer() {
    let customerTableBody = document.getElementById('customerTableBody');
    customerTableBody.innerHTML = ""

    users.forEach(customer => {
        console.log(customer)
        let row = customerTableBody.insertRow()
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.textContent = customer.name;
        cell2.textContent = customer.bankName;
        cell3.textContent = customer.accountNumber;
        cell4.textContent = "remove";
        cell4.style.color = "#34c0eb"
        cell4.addEventListener("click", ()=>{
            removeCustomer(customer.id)
        })
        cell4.addEventListener("mouseover", ()=>{
            cell4.style.cursor = "pointer"
        })
    });
   
};
