export function IntegerValue() {
    return function (target: Object, propertyKey: string) {
        let value: number;
        const getter = function () {
            return value;
        };
        const setter = function (newVal: number) {
            if (!Number.isInteger(newVal)) {
                throw new Error(`${newVal} should be integer`)
                // Object.defineProperty(target, 'errors', {
                //     value: `${newVal} should be integer`
                // });
            } else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}