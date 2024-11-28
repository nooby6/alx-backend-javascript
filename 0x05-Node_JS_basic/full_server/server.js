import express from 'express'; // Import the express module
import routes from './routes/index.js'; // Import the routes from the routes directory

const app = express(); // Create an instance of express
const port = 1245; // Define the port number

app.use('/', routes); // Use the imported routes for the root path

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Log a message when the server starts
});

export default app; // Export the app instance
