// This file contains the main JavaScript entry point for the application. 
// It initializes the app, sets up event listeners for the buttons, 
// and manages the overall application logic.

import { incrementDays, resetDays } from './daysCounter.js';
import { saveDaysCount, loadDaysCount } from './storage.js';
import DaysDisplay from '../components/DaysDisplay.js';
import ProfileSelector from '../components/ProfileSelector.js';
import WaterButton from '../components/WaterButton.js';

const daysDisplay = new DaysDisplay();
const profileSelector = new ProfileSelector();
const waterButton = new WaterButton();

let daysCount = loadDaysCount();

function updateDisplay() {
    daysDisplay.update(daysCount);
}

function setupEventListeners() {
    waterButton.onClick(() => {
        daysCount = resetDays();
        saveDaysCount(daysCount);
        updateDisplay();
    });
}

function init() {
    updateDisplay();
    setupEventListeners();
    setInterval(() => {
        daysCount = incrementDays(daysCount);
        saveDaysCount(daysCount);
        updateDisplay();
    }, 86400000); // Increment every 24 hours
}

init();