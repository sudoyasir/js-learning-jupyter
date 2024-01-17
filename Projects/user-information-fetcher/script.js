// script.js

document.getElementById('fetchButton').addEventListener('click', fetchUserData);

function fetchUserData() {
    clearUserData();

    // Fetch user data using promises
    fetchUser()
        .then(user => displayUserData(user))
        .catch(error => console.error('Error fetching user data:', error));
}

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating API call to JSONPlaceholder
            const userId = Math.floor(Math.random() * 10) + 1;
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then(user => resolve(user))
                .catch(error => reject(error));
        }, 2000);
    });
}

async function fetchUserAsync() {
    clearUserData();

    try {
        // Fetch user data using async/await
        const user = await fetchUser();
        displayUserData(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUserData(user) {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = `
        <p><strong>User ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Username:</strong> ${user.username}</p>
    `;
}

function clearUserData() {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = '';
}
