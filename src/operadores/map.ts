import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1, 5)
//   .pipe(map<number, string>((value) => (value * 10).toString()))
//   .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code)
);

keyUp$.subscribe((code) => console.log(code));
