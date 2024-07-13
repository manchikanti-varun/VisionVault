const mongoose = require("mongoose");
const Product = require("./models/Product"); // Adjust the path if necessary

// MongoDB Connection
const mongoURI = "mongodb+srv://VisionVault:5dTgVamOYtxmGP1G@cluster0.3ycatrv.mongodb.net/VisionVault";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Sample products
const sampleProducts = [
    {
        image: "http://localhost:4000/images/sample1.jpg", // Update with actual URL
        name: "Sample Product 1",
        price: 10.99,
        rating: 4.5,
        url: "http://example.com/sample1"
    },
    {
        image: "http://localhost:4000/images/sample2.jpg", // Update with actual URL
        name: "Sample Product 2",
        price: 20.99,
        rating: 4.0,
        url: "http://example.com/sample2"
    },
    {
        image: "http://localhost:4000/images/sample3.jpg", // Update with actual URL
        name: "Sample Product 3",
        price: 30.99,
        rating: 3.5,
        url: "http://example.com/sample3"
    }
];

// Insert sample products
const seedDB = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(sampleProducts);
        console.log("Sample products inserted successfully");
    } catch (err) {
        console.error("Error inserting sample products:", err);
    } finally {
        mongoose.connection.close();
    }
};

// Run the seed script
seedDB();
