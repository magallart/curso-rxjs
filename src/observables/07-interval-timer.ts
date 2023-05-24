import { interval, timer } from 'rxjs';

const observer = {
  next: (val) => console.log('Next: ', val),
  complete: () => console.log('Completado'),
};

const hoyEn5 = new Date(); // fecha de hoy
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(0, 1000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin.');
