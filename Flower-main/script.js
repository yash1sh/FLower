// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Function to reset the typing animation after 10 seconds
    function resetTypingAnimation() {
        const typingText = document.getElementById('typed-text');
        typingText.style.animation = 'none';  // Remove the current animation
        void typingText.offsetWidth;  // Trigger reflow
        typingText.style.animation = null;  // Reset the animation
        setTimeout(startTypingAnimation, 10000);  // Start the animation again after 10 seconds
    }

    // Function to start the typing animation
    function startTypingAnimation() {
        const typingText = document.getElementById('typed-text');
        typingText.style.animation = 'typing 3s steps(30, end) forwards, blink-caret 0.75s step-end infinite';
        setTimeout(resetTypingAnimation, 3000);  // Reset the animation after it completes
    }

    // Initial start of the typing animation
    startTypingAnimation();
});
