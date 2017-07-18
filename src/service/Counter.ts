export default class {
    private _count: number;

    constructor(initialCount = 0) {
        this._count = initialCount;
    }

    increment() {
        this._count++;
    }

    get count(): number {
        return this._count;
    }
}