async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Step 2: API URL
    const dataContainer = document.getElementById('api-data');   // Step 3: Select container
    
    try {
        const response = await fetch(apiUrl);                    // Step 4: Fetch data
        const users = await response.json();                     // Convert response to JSON
        
        dataContainer.innerHTML = '';                            // Step 5: Clear loading message
        
        const userList = document.createElement('ul');           // Step 6: Create <ul> element

        users.forEach(user => {
            const listItem = document.createElement('li');       // Create <li> element
            listItem.textContent = user.name;                    // Set user name in <li>
            userList.appendChild(listItem);                      // Append <li> to <ul>
        });
        
        dataContainer.appendChild(userList);                     // Append <ul> to container

    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.';   // Step 8: Error handling
    }
}

// Step 9: DOMContentLoaded event listener to call fetchUserData when the page loads
document.addEventListener('DOMContentLoaded', fetchUserData);
