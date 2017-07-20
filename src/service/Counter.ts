export default class {
    private _count: number;

    constructor(initialCount = 0) {
        this._count = initialCount;
    }

    public increment() {
        this._count++;
    }

    get count(): number {
        return this._count;
    }

    public reset() {
        this._count = 0;
    }
}
