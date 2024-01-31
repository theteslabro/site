let likeCount = 0;
let isDarkMode = false;

function increaseLikes() {
    likeCount++;
    document.getElementById("like-count").innerText = likeCount;
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const header = document.querySelector('header');
    const products = document.getElementById('products');
    const companyHistory = document.getElementById('company-history');
    const footer = document.querySelector('footer');

    if (isDarkMode) {
        body.style.backgroundColor = '#1a1a1a';
        header.style.backgroundColor = '#333';
        products.style.backgroundColor = '#444';
        companyHistory.style.backgroundColor = '#555';
        footer.style.backgroundColor = '#333';
    } else {
        body.style.backgroundColor = '#f2f2f2';
        header.style.backgroundColor = '#333';
        products.style.backgroundColor = '#fff';
        companyHistory.style.backgroundColor = '#fff';
        footer.style.backgroundColor = '#333';
    }
}

// You can add more interactive features or animations here
console.log("Website loaded!");