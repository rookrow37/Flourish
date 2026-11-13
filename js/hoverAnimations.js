// this file will handle all of the functions for the hover animations on the site
// might be ale to get away with using html onmouseenter and onmouseleave attributes

const favorTokens = document.querySelectorAll('.hover1');
const chapterOrnaments = document.querySelectorAll('.hover2');

// add mouse enter and mouse leave event listeners to the favor tokens
favorTokens.forEach(token => {
    token.addEventListener('mouseenter', () => {
        // replace the image with the animated gif
    });

    token.addEventListener('mouseleave', () => {
        // replace the animated gif with the original image
    });
});