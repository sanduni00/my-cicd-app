const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

