import {
  throttleTime,
  distinctUntilChanged,
  fromEvent,
  map,
  asyncScheduler,
} from 'rxjs';

const click$ = fromEvent(document, 'click');

// click$.pipe(throttleTime(2000)).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
  .pipe(
    map((event) => (event.target as HTMLInputElement).value),
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    distinctUntilChanged()
  )
  .subscribe(console.log);
