const cuisines = [
                {
                    title: "French Cuisine",
                    img: "assets/french.png",
                    def: "French cuisine is elegant and refined, known for its sauces, pastries, and delicate flavors. From croissants to coq au vin, it’s a blend of tradition and artistry."
                },
                {
                    title: "Italian Cuisine",
                    img: "assets/italian.png",
                    def: "Italian cuisine celebrates simplicity and passion. Fresh pasta, tomatoes, olive oil, and herbs define the Mediterranean soul of every Italian dish."
                },
                {
                    title: "Japanese Cuisine",
                    img: "assets/japanese.png",
                    def: "Japanese food combines precision and beauty. Sushi, ramen, and tempura reflect harmony between nature, presentation, and taste."
                },
                {
                    title: "Chinese Cuisine",
                    img: "assets/chinese.png",
                    def: "Chinese cuisine is one of the oldest and most diverse in the world. Stir-fried noodles, dumplings, and flavorful sauces embody balance and boldness."
                },
                {
                    title: "Mexican Cuisine",
                    img: "assets/mexican.png",
                    def: "Mexican food is vibrant and full of spice — tacos, guacamole, mole, and tamales express the country’s colorful heritage and festive spirit."
                }
];

const fs = require('fs');

try {
    const dataSync = fs.readFileSync('sample.txt', 'utf8');
    console.log('Sync read:', dataSync);
} catch (err) {
    console.error('Error reading file synchronously:', err);
}

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file asynchronously:', err);
    } else {
        console.log('Async read:', data);
    }
});


const express = require('express');
const app = express();
const path = require('path');

// Serve static files like CSS, JS, and images
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
            



