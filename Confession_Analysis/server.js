const express = require('express');
const bodyParser = require('body-parser'); 
const {spawn}=require("child_process");
const { error } = require('console');


const app = express();
const PORT = 3000;

// Middleware

app.use(bodyParser.json());

async function runPythonScript(scriptPath, args = []) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', [scriptPath, ...args]);

        let data = '';
        pythonProcess.stdout.on('data', (chunk) => {
            data += chunk.toString(); // Collect data from Python script
        });

        pythonProcess.stderr.on('data', (error) => {
            console.error(`stderr: ${error}`);
        });

        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                console.log(`Python script exited with code ${code}`);
                reject(`Error: Script exited with code ${code}`);
            } else {
                console.log('Python script executed successfully');
                resolve(data);
            }
        });
    });
}




// Endpoint for analyzing confessions
app.post('/analyze', (req, res) => {
    const confession = req.body.confession;
    console.log("hello");
    (async () => {
        try {
            const result = await runPythonScript('moderation.py', [confession]);
            console.log('Python Script Output:', result);
            res.status(200).json({ output: result }); // Send the output back to the client
        } catch (error) {
            console.error('Error running Python script:', error);
            res.status(500).json({ error: 'An error occurred while running the script.' }); // Send error response
        }
    })();
    console.log("hii");
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});