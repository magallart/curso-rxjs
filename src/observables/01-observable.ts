import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('siguiente [next]: ', value),
  error: (error) => console.warn('error [obs]: ', error),
  complete: () => console.info('Completado [obs]'),
};

const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo');
  subs.next('Hola');
  subs.next('Mundo');

  // Forzar error
  // const a = undefined;
  // a.nombre = 'Miguel Ángel';

  subs.complete();

  subs.next('Adiós');
  subs.next('Mundo');
});

obs$.subscribe(observer);
