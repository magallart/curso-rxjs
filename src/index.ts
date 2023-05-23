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

  return () => {
    clearInterval(interval);
    console.log('Intérvalo destruido');
  };
});

const subscription = intervalo$.subscribe((num) => console.log('Num: ', num));
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Completado timeout');
}, 3000);
