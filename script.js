function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('sizeInfo').innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

// Initial size update
updateSize();

// Update size on window resize
window.addEventListener('resize', updateSize);
