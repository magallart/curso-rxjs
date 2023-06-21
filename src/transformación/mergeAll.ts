import { debounceTime, fromEvent, map, mergeAll } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interfaces';

const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = '';
  for (const usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
};

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
  .pipe(
    debounceTime(500),
    map((event) => {
      const texto = event.target['value'];
      return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
    }),
    mergeAll(),
    map<any, GithubUser[]>((resp) => resp.items)
  )
  .subscribe(mostrarUsuarios);
