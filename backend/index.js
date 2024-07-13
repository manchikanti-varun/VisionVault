const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const bcrypt = require("bcrypt");

const Product = require("./models/Product"); // Import the Product model
const User = require("./models/User"); // Import the User model
const Resume = require("./models/Resume"); // Import the Resume model

app.use(express.json());
app.use(cors());

// Ensure upload directory exists
const uploadDir = './upload/images';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

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

// API Route
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating Upload Route
app.post("/upload", upload.single('product'), (req, res) => {
    if (req.file) {
        res.json({
            success: 1,
            image_url: `http://localhost:${port}/images/${req.file.filename}`
        });
    } else {
        res.status(400).json({
            success: 0,
            message: "File upload failed"
        });
    }
});

// Serve static files
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// Add Product Route
app.post("/addproduct", async (req, res) => {
    const { image, name, price, rating, url, description } = req.body;

    if (!image || !name || !price || !rating || !url || !description) {
        return res.status(400).json({ 
            success: 0, 
            message: "All fields (image, name, price, rating, url, description) are required" 
        });
    }

    const newProduct = new Product({
        image,
        name,
        price,
        rating,
        url,
        description
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json({
            success: 1,
            product: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: "Failed to add product",
            error: error.message
        });
    }
});

// Get All Products Route
app.get("/getproducts", async (req, res) => {
    try {
        const products = await Product.find();
        res.json({
            success: 1,
            products: products
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: "Failed to retrieve products",
            error: error.message
        });
    }
});

// Delete Product Route
app.delete("/deleteproduct/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: 0,
                message: "Product not found"
            });
        }

        res.json({
            success: 1,
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: "Failed to delete product",
            error: error.message
        });
    }
});

// User Register
app.post('/loginSignup', async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "User exists" });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            cartData: cart
        });

        await user.save();

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, 'secret_ecom', { expiresIn: '1h' });
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, errors: "Server error" });
    }
});

// User Login
app.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success: false, errors: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, errors: "Invalid credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, 'secret_ecom', { expiresIn: '1h' });
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, errors: "Server error" });
    }
});

// Save Resume Data Route
app.post("/api/saveResumeData", async (req, res) => {
    const { userId, name, email, phone, address, education, experience } = req.body;

    if (!userId || !name || !email || !phone || !address || !education || !experience) {
        return res.status(400).json({ success: 0, message: "All fields are required" });
    }

    const newResume = new Resume({
        userId,
        name,
        email,
        phone,
        address,
        education,
        experience
    });

    try {
        const savedResume = await newResume.save();
        res.status(201).json({
            success: 1,
            resume: savedResume
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: "Failed to save resume data",
            error: error.message
        });
    }
});

// Start Server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});
