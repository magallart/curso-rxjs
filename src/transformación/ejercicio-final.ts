// Formulario

import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ReqresResp } from '../interfaces/reqres.interface';

// Helper

const peticionHttpLogin = (userPass) =>
  ajax.post<ReqresResp>('https://reqres.in/api/login?delay=1', userPass).pipe(
    map((obj) => obj.response.token),
    catchError((err) => of('Token no válido'))
  );

// Creando formulario

const body = document.querySelector('body');
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
body.append(form);

// Streams

const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  exhaustMap((userPass) => peticionHttpLogin(userPass))
);

submitForm$.subscribe((token) => console.log(token));
