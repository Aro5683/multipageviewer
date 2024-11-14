document.getElementById('getPageSourceBtn').addEventListener('click', async function () {
    // Get URLs from the textarea
    let urls = document.getElementById('urls').value.trim().split("\n").map(url => url.trim());

    // Clear previous output
    let outputContainer = document.getElementById('output');
    outputContainer.value = "Fetching page sources...\n";

    // Loop through each URL and fetch the page source
    for (let url of urls) {
        if (url) {
            try {
                // Fetch the page source
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch page');
                }
                let pageSource = await response.text();

                // Append the page source to the output
                outputContainer.value += `\n--- Page Source for: ${url} ---\n`;
                outputContainer.value += pageSource;
                outputContainer.value += "\n\n";
            } catch (error) {
                outputContainer.value += `Error fetching ${url}: ${error.message}\n\n`;
            }
        }
    }
});
