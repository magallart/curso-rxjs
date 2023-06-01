import { first, fromEvent, map, take, tap } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

// click$
//   .pipe(
//     tap(() => console.log('tap')),
//     first<PointerEvent>((event) => event.clientY > 150)
//   )
//   .subscribe({
//     next: (val) => console.log('next: ', val),
//     complete: () => console.log('complete'),
//   });

// click$
//   .pipe(
//     tap<PointerEvent>(console.log),
//     map((event) => ({
//       clientY: event.clientY,
//       clientX: event.clientX,
//     }))
//   )
//   .subscribe({
//     next: (val) => console.log('next: ', val),
//     complete: () => console.log('complete'),
//   });

click$
  .pipe(
    tap<PointerEvent>(console.log),
    map(({ clientY, clientX }) => ({
      clientY,
      clientX,
    })),
    first((click) => click.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('complete'),
  });
