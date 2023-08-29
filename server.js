const express = require("express");
const htmlRoutes = require("./routes/html")
const apiRoutes = require("./routes/api")
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes)
app.use(apiRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});