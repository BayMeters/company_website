const express = require('express');
const axios = require('axios');
const router = express.Router();

// Replace with your Notion API token and database ID
const NOTION_API_TOKEN = "secret_quv0STLvuAeZ4qOldmv0w6CFWnM50kkIMa3i84oJoaK";
const DATABASE_ID = "fa51554a5d6243a9b4be0a1b1e7eb3e6";

router.post('/submit-to-notion', async (req, res) => {
  try {
    const formData = req.body; // Assuming the form data is sent in the request body

    // Notion API request payload
    const notionData = {
        "parent": { "database_id": DATABASE_ID },
        "properties": {
            "Name": { "title": [{ "text": { "content": formData["name"] } }] },
            "Email": { "rich_text": [{ "text": { "content": formData["email"] } }] },
            "Message": { "rich_text": [{ "text": { "content": formData["message"] } }] },
            "Created time": { "date": { "start": new Date().toISOString() } },
            "Person": {  
                "people": [ {
                        "object": "user",
                        "id": "2181b319-2e53-49f7-9ef5-1bbeceb7904e"
                    } ]
            }
        }
    };

    // Headers for the Notion API
    const headers = {
      'Authorization': `Bearer ${NOTION_API_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    };

    // Making the POST request to Notion API
    const response = await axios.post('https://api.notion.com/v1/pages', notionData, { headers });

    if (response.status === 200) {
      console.log("Form submitted to Notion successfully!");
      res.status(200).json({ message: "Form submitted successfully", data: response.data });
    } else {
      console.log(`Failed to submit form. Status Code: ${response.status}`);
      res.status(response.status).json({ message: "Failed to submit form", error: response.data });
    }
  } catch (error) {
    console.error("Error occurred while submitting form:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;