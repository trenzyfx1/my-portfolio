require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const WHATSAPP_API_URL = "https://graph.facebook.com/v18.0/519576417913293/messages";
// const ACCESS_TOKEN = "547089545157065";
const RECEIVER_PHONE = "+2347047889687"; // Your WhatsApp number

app.post("/send-message", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }

    try {
        const response = await axios.post(
            WHATSAPP_API_URL,
            {
                messaging_product: "whatsapp",
                to: RECEIVER_PHONE,
                type: "text",
                text: { body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` }
            },
            { headers: { Authorization: `Bearer ${ACCESS_TOKEN}`, "Content-Type": "application/json" } }
        );

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to send message." });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
