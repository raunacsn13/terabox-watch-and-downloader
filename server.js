const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static(__dirname));  // Serve index.html

// Watch Video API
app.get("/watch", (req, res) => {
    let link = req.query.link;
    if (!link) return res.status(400).json({ error: "No link provided" });
    res.redirect(link);  // Open the video link directly
});

// Download File API
app.get("/download", (req, res) => {
    let link = req.query.link;
    if (!link) return res.status(400).json({ error: "No link provided" });
    res.json({ download_url: link });
});

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
