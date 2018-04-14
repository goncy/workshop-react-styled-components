# De cero a tested en dos japish👋 con `React`, `Styled Components` y `Cypress`
> `React` es una librería para crear interfaces de usuario, la vamos a usar para manejar las vistas y lógica de nuestra aplicación.

> Usar solamente el `CSS` que soportan los navegadores hace que nuestros estilos sean verbosos, limitados o complicados de mantener en una aplicación grande. Por eso vamos a usar `Styled Components` para mejorar esa experiencia.

> Testear una aplicación puede ser largo y tedioso. De no encontrar un buen método para hacerlo, puede ser contraproducente al tiempo de desarrollo, por eso vamos a usar `Cypress`, un framework de testing que nos va a permitir hacer tests de integración fáciles y completos.

## Qué vamos a hacer?
Vamos a armar el `ritmosustanciometro`, una app que obtiene el porcentaje de ritmo y sustancia de un individuo en tiempo real (así que puede devolver dos valores diferentes para el mismo individuo, ya que el nivel de ritmo y sustancia puede variar en todo momento)

*GIF*

## Requisitos
* Cualquier editor de texto, recomiendo [Visual Studio Code](https://code.visualstudio.com/).
* [Node.js](https://nodejs.org/es/) instalado, con `npm` en la última versión estable.

## Recomendable
* Experiencia básica con `npm` (instalar paquetes / correr scripts)
* Experiencia básica con `React` y `JavaScript`

> *Tip*: Para ver que versión de `npm` tenes instalada, una vez que tengas instalado `node`, en consola corré: `npm -v`.
> Para instalar la última versión estable de `npm` corré: `npm install -g npm`.
> Agregá `sudo` al principio si te da problema de permisos al instalar en `Linux` o `Mac`.

## Materiales
* 🔗 [Endpoint obtener ritmo y sustancia](https://wt-3581e5a0e6c19bb4a0552203b2738a9d-0.run.webtask.io/obtener-ritmosustancia)
* 🕹 [Demo proyecto terminado](https://goncy.github.io/charla-fcc-react-styled-components-cypress)
* 📻 [Código proyecto terminado](https://github.com/goncy/charla-fcc-react-styled-components-cypress/tree/master/proyecto)

## 📚 Introducción
* [React](./docs/tools/react.md)
* [Styled Components](./docs/tools/styled-components.md)
* [Cypress](./docs/tools/cypress.md)

## 👣 Pasos
* 🛠 [Crear nuestra aplicación base](./docs/steps/01-crear-base.md)
* ⚗️ [Armar el ritmosustanciometro](./docs/steps/02-armar-ritmosustanciometro.md)
* 🎨 [Estilar el ritmosustanciometro](./docs/steps/03-estilar-ritmosustanciometro.md)
* ✅ [Testear el ritmosustanciometro](./docs/steps/04-testear-ritmosustanciometro.md)

## 📝 Ejercicios
Ahora es tu turno, usa `React`, `Styled Components` y `Cypress` para crear tu propio `ritmosustanciometro`! (o en vez de medir sustancia podés medir otra cosa mas útil que encuentres, aunque no creo que haya nada mas útil), no te limites a copiar lo que hace el proyecto original, dale tu ritmo y sustancia para armar algo piola, sino *japish*👋

* Deshabilitar el boton de `obtener ritmosustancia` si el nombre esta vacío
* Deshabilitar el botón de `obtener ritmosustancia` mientras se está haciendo el pedido al servidor
* Estilar el `ritmosustanciometro`
* Agregar un botón para eliminar cada `ritmosustancia` individualmente
* Agregar tests para estas nuevas funcionalidades
* Pasar los estilos de `index.css` a `injectGlobal` de `Styled Components`

## 🎁 Premio
Van a tener un par de días para pulir los estilos de su `ritmosustanciometro`, luego se va a votar en el [Slack de freeCodeCampBA](https://freecodecampba.org/chat/) y el resultado ganador va a ser el nuevo demo de este repositorio!

## 🤷‍♂️ Y ahora que?
Ahora sabes un poco de muchas cosas, convertí lo poco en mucho y hace mucho con poco!, we, re filosofo el goncy, *Japish*👋. Tomá en cuenta algo, acabás de ver muchas cosas nuevas, cada una tiene su complejidad, no esperes saber todo ya ni te desmotives si no sale a la primera, después de todo, nadie nace sabiendo hacer un fernet, o codear en React. Asi que no te olvides, en el [Slack de freeCodeCampBA](https://freecodecampba.org/chat/), estamos para ayudar y contestar dudas siempre.

## 🔗 Links útiles
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Cypress oficial](https://www.cypress.io/)
* [React oficial](https://reactjs.org/)
* [Styled Components oficial](https://www.styled-components.com/)
* [Curso inicial de React](https://egghead.io/courses/the-beginner-s-guide-to-reactjs)

## 📚 Algunas de mis lecciones
* [Cypress](https://github.com/goncy/cypress-lesson)
* [Recompose](https://github.com/goncy/recompose-lesson)
* [Ramda](https://github.com/goncy/ramda-lesson)

## 🎨 Mis configuraciones de VSCode
* [Styncy](https://marketplace.visualstudio.com/items?itemName=goncy.styncy)
* [Eslint (Yeoman generator)](https://github.com/goncy/generator-goncy)

---
*Si encontrás un error, typo, cagada, moco o calificativo negativo, avisame o haceme un PR, gracias!*

**by [@goncy](http://github.com/goncy)**