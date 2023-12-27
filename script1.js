const apiUrl = 'http://localhost:3001/users';

function submitForm() {
    console.log("Form submitted");
    addUser();
    window.location.href = "registeredCustomer.html"

}

async function addUser() {
    try{
        let formData = {
            name: document.getElementById("name").value,
            bankName: document.getElementById("bankName").value,
            accountNumber: document.getElementById("accountNumber").value
        }
    
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
        // Fetch options
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formData)
        };
      // Make the POST request
      const response = await fetch(apiUrl, options);
    
      // Check if the response status is OK (200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      // Parse the response body as JSON
      const responseData = await response.json();
    
      console.log('POST Request Successful:', responseData);
      
    } catch (error) {
        console.error('Error making POST request:', error);
      }

    
}


let form = document.getElementById("customerForm")

form.addEventListener("submit", (e) => {
    if (form.checkValidity()) {
        e.preventDefault();
        submitForm();
    }
    else {
        form.reportValidity();
    }

});
