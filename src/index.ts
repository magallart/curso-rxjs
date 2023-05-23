import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('siguiente: ', value),
  error: (error) => console.warn('error: ', error),
  complete: () => console.info('Completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
  //crear un contador 1, 2, 3, 4,5
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intérvalo destruido');
  };
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2);

setTimeout(() => {
  subscription1.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log('Completado timeout');
}, 6000);
