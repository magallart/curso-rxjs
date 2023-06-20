import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/usersXXXXXXXXXX?per_page=5';

const atrapaError = (err: AjaxError) => {
  console.warn('error en: ', err);
  return of([]);
};

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError(atrapaError)
  )
  .subscribe((users) => console.log('usuarios: ', users));
