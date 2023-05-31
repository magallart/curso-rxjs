import { map, range, tap } from 'rxjs';

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((value) => console.log('antes', value)),
    map((numero) => numero * 10),
    tap({
      next: (valor) => console.log('después: ', valor),
      complete: () => console.log('Se terminó todo'),
    })
  )
  .subscribe((val) => console.log('subs: ', val));
