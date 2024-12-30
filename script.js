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

    // Function to add two different threatening messages
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

        // Count existing messages
        const existingMessages = document.querySelectorAll('.threat-message');

        // Check if there are already two messages on the screen
        if (existingMessages.length >= 2) {
            return; // Exit if there are already 2 messages
        }

        // Select two different random messages
        let messageIndexes = [];
        while (messageIndexes.length < 2) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            if (!messageIndexes.includes(randomIndex)) {
                messageIndexes.push(randomIndex);
            }
        }

        // Create and display two different messages
        messageIndexes.forEach(index => {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = messages[index];
            messageDiv.className = 'threat-message';
            document.body.appendChild(messageDiv); // Append directly to the body

            // Set random position within the viewport
            messageDiv.style.top = `${Math.random() * 80}%`; // Ensures the message stays within the visible area
            messageDiv.style.left = `${Math.random() * 80}%`;
        });

        // Remove the messages after 4 seconds
        setTimeout(() => {
            document.querySelectorAll('.threat-message').forEach(msg => msg.remove());
        }, 4000);
    }

    // Start tracking button event listener
    document.getElementById('start-tracking').addEventListener('click', () => {
        startCamera();
        setInterval(addThreateningMessage, 3000); // Add two messages every 3 seconds
    });
});