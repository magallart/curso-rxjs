import { filter, fromEvent, map } from 'rxjs';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code), // recibe un KeyboardEvent y emite un string
  filter((key) => key === 'Enter')
);

keyup$.subscribe(console.log);
