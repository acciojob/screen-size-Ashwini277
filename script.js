// Function to update the size information
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeElement = document.getElementById('size');
    
    sizeElement.textContent = `Width: ${width}, Height: ${height}`;
}

// Initial call to set the size on page load
updateSize();

// Add an event listener to update the size when the window is resized
window.addEventListener('resize', updateSize);

