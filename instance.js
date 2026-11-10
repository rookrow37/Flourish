// Array to hold the tracking index of each slideshow
let slideIndices = [];

// Initialize all slideshows on the page
function initGalleries() {
    const containers = document.querySelectorAll('.gallery');
    
    containers.forEach((container, containerIndex) => {
        // Start each slideshow at the first slide (index 0)
        slideIndices[containerIndex] = 0; 
        showSlide(container, 0);
    });
}

// Function triggered by clicking the prev/next arrows
function changeSlide(buttonElement, direction) {
    // Find the parent container of the clicked button
    const container = buttonElement.closest('.gallery');
    
    // Find the index of this container out of all slideshow containers
    const containers = Array.from(document.querySelectorAll('.gallery'));
    const containerIndex = containers.indexOf(container);
    
    // Update the index for this specific slideshow
    slideIndices[containerIndex] += direction;
    
    // Show the updated slide
    showSlide(container, slideIndices[containerIndex], containerIndex);
}

// Internal function to manage display toggle and bounds
function showSlide(container, targetIndex, containerIndex) {
    const slides = container.querySelectorAll('.gallerySlide');
    
    // If we have an active container index tracker, balance limits
    if (containerIndex !== undefined) {
        if (targetIndex >= slides.length) { slideIndices[containerIndex] = 0; }
        if (targetIndex < 0) { slideIndices[containerIndex] = slides.length - 1; }
        targetIndex = slideIndices[containerIndex];
    }

    // Hide all slides inside this specific container
    slides.forEach(slide => slide.style.display = "none");
    
    // Show the active slide
    slides[targetIndex].style.display = "block";
}

// Run the script on window load
window.onload = initGalleries;
