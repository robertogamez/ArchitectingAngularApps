import { cold } from 'jasmine-marbles';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

describe("marble tests", () => {
    it("map - should increase by i", () => {
        const one$ = cold("x-x|", { x: 1 });
        expect(one$.map(x => x + 1)).toBeObservable(cold("x-x|", { x: 2 }));
    });

    it("filter - should remove value", () => {
        const stream$ = cold("x-y|", { x: 1, y: 2 });
        expect(stream$.filter(x => x > 1)).toBeObservable(cold("--y|", { y: 2 }));
    });
});