document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            // Fetch data from apiUrl
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear loading message
            dataContainer.innerHTML = '';

            // Create and append user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            console.error('Failed to fetch user data:', error);
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Initial data fetch on page load
    fetchUserData();
});

