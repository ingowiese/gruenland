export function generateHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Data</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
        }
        .data-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .location-card {
            background-color: #f8f9fa;
            border-radius: 6px;
            padding: 15px;
            border: 1px solid #dee2e6;
        }
        .location-name {
            color: #2c3e50;
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .temperature {
            color: #e74c3c;
            font-size: 1.1em;
            font-weight: 500;
        }
        .date {
            color: #7f8c8d;
            font-size: 0.9em;
        }
        .last-updated {
            text-align: center;
            color: #95a5a6;
            margin-top: 20px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Weather Data</h1>
        <div class="data-grid">
            ${data
              .map(
                (item) => `
                <div class="location-card">
                    <div class="location-name">${item.location}</div>
                    <div class="temperature">Temperature: ${item.temperature}</div>
                    <div class="date">Date: ${item.date}</div>
                </div>
            `
              )
              .join('')}
        </div>
        <div class="last-updated">
            Last updated: ${new Date().toLocaleString()}
        </div>
    </div>
</body>
</html>
  `;
}