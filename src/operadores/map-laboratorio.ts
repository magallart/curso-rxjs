import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis sed diam at scelerisque. Sed pellentesque dictum metus. Aliquam sagittis nibh non blandit tincidunt. Nullam eleifend ante nisl. Praesent euismod risus eget dui pharetra, ut aliquet ex commodo. Cras ipsum nulla, blandit a dictum ut, ullamcorper a tortor. Aenean eu est viverra, iaculis nulla id, finibus elit. Curabitur volutpat magna vitae ultrices pretium. Etiam egestas erat a velit cursus sodales. Phasellus lacinia mauris et libero luctus, ac fermentum nulla faucibus. Pellentesque neque velit, cursus ac aliquam sed, euismod at metus. Integer erat elit, sagittis in suscipit id, rhoncus sit amet velit. Cras malesuada magna est. Fusce placerat lectus eu libero dictum auctor.
<br /><br />
Vestibulum tellus diam, viverra in ligula luctus, suscipit hendrerit nisi. Sed rutrum justo vulputate, efficitur eros eget, sagittis leo. Sed sed tellus velit. Maecenas et quam eu dui ultrices pharetra. Vestibulum vitae nisi sodales, vulputate ipsum a, auctor enim. Aliquam eu sodales neque, vitae tempor diam. Pellentesque eu dolor accumsan, congue nibh eu, fringilla sapien. Mauris eget iaculis augue.
<br /><br />
Vestibulum posuere sapien sit amet libero pharetra dignissim. Nam et sollicitudin mauris. Aliquam quis efficitur metus. Nulla blandit leo non mauris sodales consequat. Sed sed commodo nisl. Pellentesque vel lobortis erat. Nullam bibendum pellentesque felis, at aliquam libero cursus ac. Fusce sit amet erat fermentum, blandit ante ut, suscipit massa. Aenean ut erat sit amet massa lobortis ornare a quis enim. In bibendum mi luctus massa interdum, eget sollicitudin ex viverra. Duis porttitor diam in tellus cursus, et scelerisque dolor gravida. Cras et iaculis ante. Nam vel lobortis libero, sit amet cursus elit. Vestibulum velit erat, tempor a hendrerit sed, pulvinar nec urna. Quisque purus nulla, semper sit amet dolor a, ullamcorper ornare nisi. Pellentesque tincidunt felis ut lorem interdum maximus.
<br /><br />
Vivamus sit amet nibh pretium, interdum lectus et, ullamcorper ligula. Quisque mollis volutpat eros ut porta. Suspendisse et interdum est. Maecenas eleifend mi at libero faucibus rhoncus. Ut venenatis blandit ex cursus imperdiet. Pellentesque gravida quam nec imperdiet consectetur. Integer cursus nisl et nibh tincidunt, quis pretium est maximus. Nullam tristique, nibh at molestie rutrum, dui lacus venenatis ipsum, et iaculis nulla ipsum ut purus. Curabitur ut elit ac mi maximus tempor. Donec hendrerit massa dolor, dictum interdum orci hendrerit sit amet. Morbi a dolor vestibulum lacus euismod dignissim ut vitae enim. Cras non bibendum mi, ut auctor metus. Maecenas volutpat nisl lectus, ut ullamcorper lorem facilisis facilisis. Sed a arcu ex. Nulla sed orci eget est mollis consectetur. Praesent in volutpat quam.
<br /><br />
Ut dolor tortor, varius in mollis id, tincidunt sed ligula. Cras facilisis eleifend cursus. Fusce ullamcorper quis arcu nec rutrum. Nunc et eleifend arcu. Donec id lectus id est egestas porttitor a in lorem. Integer a urna vel odio efficitur congue. Suspendisse et nibh id nulla ultrices pharetra nec eu orci. Aenean ut rutrum enim.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Función que calcule el % de scroll
const calcularPorcentajeScroll = (event) => {
  const { clientHeight, scrollTop, scrollHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  map((event) => calcularPorcentajeScroll(event)),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
