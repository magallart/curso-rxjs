import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('siguiente: ', value),
  error: (error) => console.warn('error: ', error),
  complete: () => console.info('Completado'),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log('Intervalo destruido');
  };
});

// const subs1 = intervalo$.subscribe((random) => console.log('subs1 :', random));
// const subs2 = intervalo$.subscribe((random) => console.log('subs2 :', random));

const subject$ = new Subject();
const intervalSubject = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervalSubject.unsubscribe();
}, 3000);
