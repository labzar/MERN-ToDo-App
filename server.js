const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const features = require('./routes/api/features');

// Body parser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// COnnect To Mongo
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB connected..."))
.catch(err => console.log(err));

app.use('/api/features', features);

// Serve static assets in production mode
if (process.env.NODE_ENV === "production") {
    // set static folder assets
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));