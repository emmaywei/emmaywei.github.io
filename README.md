# Plant Watering App

This project is a web application designed to help users track the number of days since their plants were last watered. It features a simple interface with a display for the days count, a profile selector, and a button to reset the count when the plants are watered.

## Features

- Displays the number of days since the plants were last watered.
- Allows users to select rounded profiles.
- Includes a large button labeled "I have watered plants" to reset the days count.

## Project Structure

```
plant-watering-app
├── docs
│   └── index.html         # Main HTML document
├── src
│   ├── css
│   │   └── styles.css     # Styles for the web application
│   ├── js
│   │   ├── app.js         # Main JavaScript entry point
│   │   ├── daysCounter.js  # Logic for tracking days since last watering
│   │   └── storage.js     # Storage management for days count
│   ├── components
│   │   ├── DaysDisplay.js  # Component for displaying days count
│   │   ├── ProfileSelector.js # Component for selecting profiles
│   │   └── WaterButton.js  # Component for watering button
│   └── assets
│       └── favicon.svg     # Favicon for the web application
├── .github
│   └── workflows
│       └── deploy.yml      # GitHub Actions workflow for deployment
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── CNAME                   # Custom domain for GitHub Pages
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open `docs/index.html` in your web browser to view the application.

## Usage

- The application will display the number of days since the plants were last watered.
- Use the profile selector to choose a rounded profile.
- Click the "I have watered plants" button to reset the days count.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.