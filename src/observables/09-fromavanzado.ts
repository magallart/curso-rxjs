import { from, of } from 'rxjs';

const observer = {
  next: (val) => console.log('next: ', val),
  complete: () => console.log('completado'),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Miguel Ángel');
const source$ = from<Promise<Response>>(
  fetch('https://api.github.com/users/magallart')
);

// source$.subscribe(async (resp) => {
//   console.log(resp);
//   const dataResp = await resp.json();
//   console.log(dataResp);
// });

// source$.subscribe(observer);
