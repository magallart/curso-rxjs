import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';

// range(1, 10)
//   .pipe(filter((value) => value % 2 === 1))
// .subscribe(console.log);

range(10, 20).pipe(
  filter((value, index) => {
    console.log('index: ', index);
    return value % 2 === 1;
  })
);
// .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman',
  },
  {
    tipo: 'heroe',
    nombre: 'Robin',
  },
  {
    tipo: 'villano',
    nombre: 'Joker',
  },
];

from<Personaje[]>(personajes)
  .pipe(filter((personaje) => personaje.tipo === 'heroe'))
  .subscribe(console.log);
