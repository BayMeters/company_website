const express = require('express');
const bodyParser = require('body-parser');
const notionPostCommentRoute = require('./routes/notion-post-comment'); // Assuming the previous route is in a file named notionRoute.js
const notionGetProductCatalogUrlRoute = require('./routes/notion-get-product-catalog-url'); // Assuming the previous route is in a file named notionRoute.js

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', notionPostCommentRoute);
app.use('/api', notionGetProductCatalogUrlRoute);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World! The server is running.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});