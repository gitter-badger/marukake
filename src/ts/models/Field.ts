/// <reference path="./Square.ts" />

namespace MainApp {
    /**
     * Field
     */
    export class Field {
        data:Square[][];
        constructor() {
            this.data = [
                [new Square(), new Square(), new Square()],
                [new Square(), new Square(), new Square()],
                [new Square(), new Square(), new Square()],
            ];
        }
    }
}