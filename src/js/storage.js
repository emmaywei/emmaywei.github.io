// This file handles the storage of the days count, possibly using local storage or session storage to persist the data across page reloads.

const STORAGE_KEY = 'daysSinceWatered';

export function getDaysSinceWatered() {
    const days = localStorage.getItem(STORAGE_KEY);
    return days ? parseInt(days, 10) : 0;
}

export function setDaysSinceWatered(days) {
    localStorage.setItem(STORAGE_KEY, days);
}

export function resetDaysSinceWatered() {
    localStorage.removeItem(STORAGE_KEY);
}