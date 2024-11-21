const express = require('express');
const axios = require('axios');
const router = express.Router();

// Replace with your Notion API token and database ID
const NOTION_API_TOKEN = "secret_quv0STLvuAeZ4qOldmv0w6CFWnM50kkIMa3i84oJoaK";
const DATABASE_ID = "14517b1558c380d9a087d96093ed9d9e";  // Your database ID

// GET endpoint to fetch Product Catalog URL
router.get('/get-product-catalog', async (req, res) => {
    try {
        const headers = {
            'Authorization': `Bearer ${NOTION_API_TOKEN}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json'
        };

        // Query parameters for exact match of "Product Catalog URL"
        // Removed database_id from body as it's in the URL
        const queryParams = {
            filter: {
                property: "Name",
                title: {
                    equals: "Product Catalog URL"
                }
            }
        };

        const response = await axios.post(
            `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
            queryParams,
            { headers }
        );

        if (response.status === 200 && response.data.results.length > 0) {
            const url = response.data.results[0].properties.URL?.url || '';
            console.log("Product Catalog URL fetched successfully"),
            res.status(200).json({
                message: "Product Catalog URL fetched successfully",
                url: url
            });
        } else {
            console.warn("Product Catalog URL not found");
            res.status(404).json({
                message: "Product Catalog URL not found",
                url: null
            });
        }
    } catch (error) {
        console.error("Error occurred while fetching Product Catalog URL:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
            details: error.response?.data
        });
    }
});

module.exports = router;