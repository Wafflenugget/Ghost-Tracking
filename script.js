document.addEventListener('DOMContentLoaded', () => {
    // Function to request camera access and start the video feed
    async function startCamera() {
        const video = document.getElementById('camera-feed');
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
            video.srcObject = stream;
        } catch (error) {
            console.error('Error accessing the camera: ', error);
        }
    }

    // Function to add one random threatening message
    function addThreateningMessage() {
        const messages = [
            "It's right behind you...",
            "You're not alone...",
            "It’s too late to escape.",
            "They're watching you...",
            "Get out while you can!",
            "Don't look back...",
            "Something is lurking in the shadows...",
            "You can run, but you can't hide...",
            "Can you feel the cold breath on your neck?",
            "You shouldn't have come here..."
        ];

        // Check if there's already a message on the screen
        const existingMessage = document.querySelector('.threat-message');
        if (existingMessage) {
            return; // Exit if there's already a message
        }

        // Select one random message
        const randomIndex = Math.floor(Math.random() * messages.length);

        // Create and display the message
        const messageDiv = document.createElement('div');
        messageDiv.textContent = messages[randomIndex];
        messageDiv.className = 'threat-message';
        document.body.appendChild(messageDiv); // Append directly to the body

        // Set random position within the viewport
        messageDiv.style.top = `${Math.random() * 80}%`; // Ensures the message stays within the visible area
        messageDiv.style.left = `${Math.random() * 80}%`;

        // Remove the message after 4 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 4000);
    }

    // Start tracking button event listener
    document.getElementById('start-tracking').addEventListener('click', () => {
        startCamera();
        setInterval(addThreateningMessage, 3000); // Add one message every 3 seconds
    });
});
