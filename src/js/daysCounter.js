function DaysCounter() {
    this.days = 0;

    this.incrementDays = function() {
        this.days++;
    };

    this.resetDays = function() {
        this.days = 0;
    };

    this.getDays = function() {
        return this.days;
    };
}

export default DaysCounter;