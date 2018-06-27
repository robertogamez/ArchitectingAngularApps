import { map }  from 'rxjs/operators/map';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

let stream = of(1, 2);
stream.pipe(
	map(x => x + 1),
	filter(x => x > 1)
)
.subscribe(x => console.log("piped", x)); // emits 2 and 3