/// <reference path="./Square.ts" />
/// <reference path="./interfaces/Size.ts" />


namespace MainApp {
    /**
     * Field
     */
    export class Field {
        private _size: Size;
        data: Square[];

        constructor(size: Size) {
            this._size = size;
            this.data = [];

            let count = size.width * size.height;
            for (var index = 0; index < count; index++) {
                this.data.push(new Square());
            }
        }

        public get size(): Size {
            return this._size;
        }
        public set size(v: Size) {
            throw "Can't write property";
        }

    }
}
