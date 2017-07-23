export default class Counter {
    private _count: number;

    /**
     * Count numbers
     * @param {number} initialCount initial count num
     */
    constructor(initialCount = 0) {
        this._count = initialCount;
    }

    /**
     * Increment count
     */
    public increment() {
        this._count++;
    }

    /**
     * Get current count
     * @returns {number} current count
     */
    get count(): number {
        return this._count;
    }

    /**
     * Reset count to zero
     */
    public reset() {
        this._count = 0;
    }
}
