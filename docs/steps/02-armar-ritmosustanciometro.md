# Armando el `ritmosustanciometro`
Ahora que ya tenemos nuestra aplicación base vamos a:

1. Borrar las cosas que no necesitamos del componente `App`
2. Crear un componente `Ritmosustanciometro`
3. Agregar al `state` de `App` una propiedad para guardar el `nombre` de la persona y otra para el listado de `individuos`
4. Agregar un formulario con un campo de texto para el `nombre` y un botón de `obtener ritmosustancia`
5. Conectar el campo de `nombre` a la propiedad `nombre` del `state`
6. Iterar el listado de `individuos` y mostrar un `Ritmosustanciometro` por cada item
7. Implementar la funcionalidad de `obtener ritmosustancia`

### Borrar las cosas que no necesitamos del componente `App`
Nosotros vamos a encargarnos tanto de la lógica como de los estilos de la aplicación, asi que vamos a borrar todos los archivos y cosas que no necesitamos:

* Archivos: `App.css`, `App.test.js` y `logo.svg`
* Del archivo `App.js`:
  * Imports de `App.css` y `logo.svg`
  * Todo el contenido del render, vamos a dejar un `div` con un `h1` adentro que diga `Ritmosustanciometro`

Por lo tanto `App.js` nos quedaría asi:

```jsx
// App.js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Ritmosustanciometro</h1>
    </div>
  );
}

export default App;
```

### Crear un componente `Ritmosustanciometro`
Vamos a crear un nuevo archivo `Ritmosustanciometro.js` dentro de `src` (al mismo nivel que `App.js`).
Adentro vamos a crear un `functional component` llamado `Ritmosustanciometro` que va a recibir dos props, `nombre` y `ritmosustancia`, las cuales va a mostrar dentro de un `div`, nos quedaría algo así:

```jsx
// Ritmosustanciometro.js
import React from "react";

const Ritmosustanciometro = ({nombre, ritmosustancia}) => (
  <div>
    {nombre}: {ritmosustancia}
  </div>
);

export default Ritmosustanciometro;
```

### Agregar un `state` a `App` para guardar el `nombre` de la persona y otro para el listado de `individuos`
Vamos a ir a `App.js` y vamos a agregar dos `state`, uno para el `nombre` de la persona que va a empezar como un `string` vacío e `individuos` que va a iniciar como un `array` vacío:

```jsx
// App.js
import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [individuos, setIndividuos] = useState([]);

  return (
    <div>
      <h1>Ritmosustanciometro</h1>
    </div>
  );
}

export default App;
```

### Agregar un formulario con un campo de texto para el `nombre` y un botón de `obtener ritmosustancia`
Agregamos un nuevo `form` debajo de nuestro `h1` para meter nuestro campo de texto `nombre` y nuestro botón de `obtener ritmosustancia`:

```jsx
// App.js
import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [individuos, setIndividuos] = useState([]);

  return (
    <div>
      <h1>Ritmosustanciometro</h1>
      {/* Agregamos nuestro formulario con un campo de texto y un botón */}
      <form>
        <input type="text" />
        <button type="submit">Obtener ritmosustancia</button>
      </form>
    </div>
  );
}

export default App;
```

Nos va a quedar algo así:

![01](../assets/02-ritmosustanciometro-base.jpg)

### Conectar el campo de `nombre` al state `nombre`
Para eso vamos a crear una función en `App` llamada `actualizarNombre` que va a tomar un `evento` de `change` y va a usar el valor del campo en el que se llamó para actualizar el valor del `state` `nombre`. Vamos a ejecutarla en el `onChange` de nuestro campo `nombre` y a su vez, vamos a tomar el valor del `state` `nombre` y vamos a asignarlo al `value` del campo `nombre`:

```jsx
// App.js
import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [individuos, setIndividuos] = useState([]);

  // Creamos una función `actualizarNombre`
  function actualizarNombre(event) {
    // Guardamos en `nombre` lo que escribimos en el campo, lo obtenemos de `event.target.value`
    setNombre(event.target.value)
  }

  return (
    <div>
      <h1>Ritmosustanciometro</h1>
      <form>
        {/* con `onChange` le decimos a `React` que ejecute una función cada vez que haya un cambio de valor en el campo. Con `value` le decimos que queremos que el valor del campo siempre sea el valor que le pasemos, por lo tanto, al actualizar el campo, se va a reemplazar nuestro estado, y ese estado va a ser el nuevo valor de nuestro campo */}
        <input type="text" onChange={actualizarNombre} value={nombre} />
        <button type="submit">Obtener ritmosustancia</button>
      </form>
    </div>
  );
}

export default App;
```

### Iterar el listado de `individuos` y mostrar un `Ritmosustanciometro` por cada item
Vamos a importar nuestro componente `Ritmosustanciometro` y vamos a iterar usando el método `map` de `Array` para mostrar un `Ritmosustanciometro` por cada item dentro de `individuos`, pasando `nombre` y `ritmosustancia` por `props`, para asegurarnos de que anda, vamos a agregar un `individuo` inicial a nuestro `state`:

```jsx
// App.js
import React, { useState } from 'react';

import Ritmosustanciometro from './Ritmosustanciometro';

function App() {
  const [nombre, setNombre] = useState('');
  const [individuos, setIndividuos] = useState([{
    nombre: 'goncy',
    ritmosustancia: 100
  }]);

  // Creamos una función `actualizarNombre`
  function actualizarNombre(event) {
    // Guardamos en `nombre` lo que escribimos en el campo, lo obtenemos de `event.target.value`
    setNombre(event.target.value)
  }

  return (
    <div>
      <h1>Ritmosustanciometro</h1>
      {/* Usamos `map` para iterar sobre cada individuo de nuestra lista de individuos y creamos un `Ritmosustanciometro por cada individuo, pasando el `nombre` y el valor de `ritmosustancia` por `props` */}
      {individuos.map((individuo) =>
        <Ritmosustanciometro
          nombre={individuo.nombre}
          ritmosustancia={individuo.ritmosustancia}
        />
      )}
      <form>
        <input type="text" onChange={actualizarNombre} value={nombre} />
        <button type="submit">Obtener ritmosustancia</button>
      </form>
    </div>
  );
}

export default App;
```

### Implementar la funcionalidad de `obtener ritmosustancia`
Para implementar nuestra función `obtenerRitmosustancia` vamos a hacer un request a un servidor, para eso, vamos a usar una libreria llamada `axios`. Vamos a instalar `axios` yendo a la consola, asegurandonos de que estemos parados en la carpeta del proyecto y ejecutando `npm install axios --save`.

Ahora si, vamos a agregar una función `obtenerRitmosustancia` al componente `App` que al hacer `submit` del `form`, obtenga la `ritmosustancia` del servidor, la agregue a la lista de `individuos` y reinicie el valor `nombre` del `state`:

```jsx
// App.js
import React, { useState } from 'react';
import axios from 'axios';  // Importamos Axios

function App() {
  const [nombre, setNombre] = useState('');
  const [individuos, setIndividuos] = useState([{
    nombre: 'goncy',
    ritmosustancia: 100
  }]);

  // Creamos una función `actualizarNombre`
  function actualizarNombre(event) {
    // Guardamos en `nombre` lo que escribimos en el campo, lo obtenemos de `event.target.value`
    setNombre(event.target.value)
  }

  // Creamos una función `async` `obtenerRitmosustancia`
  async function obtenerRitmosustancia(event) {
    event.preventDefault(); // Evitamos que la aplicación se recargue por el `submit` del `form`

    // Hacemos un fetch a nuestro `endpoint` para obtener un valor de `ritmosustancia`
    const ritmosustancia = await axios("https://wt-3581e5a0e6c19bb4a0552203b2738a9d-0.run.webtask.io/obtener-ritmosustancia").then(res => res.data)

    // Usando `concat` agregamos un nuevo individuo al `array` de `individuos` que ya tenemos en nuestro `state`, pasando el `nombre` de nuestro `state` y el valor de `ritmosustancia` que nos devolvió el servidor
    setIndividuos(
      individuos.concat({
        nombre,
        ritmosustancia
      })
    )
    setNombre(''); // Reiniciamos el valor de nombre
  }

  return (
    <div>
      <h1>Ritmosustanciometro</h1>
      {/* Usamos `map` para iterar sobre cada individuo de nuestra lista de individuos y creamos un `Ritmosustanciometro por cada individuo, pasando el `nombre` y el valor de `ritmosustancia` por `props` */}
      {individuos.map((individuo) =>
        <Ritmosustanciometro
          nombre={individuo.nombre}
          ritmosustancia={individuo.ritmosustancia}
        />
      )}
      {/* Ejecutamos la funcion de `obtenerRitmosustancia` cuando hacemos submit del form */}
      <form onSubmit={obtenerRitmosustancia}>
        <input type="text" onChange={actualizarNombre} value={nombre} />
        <button type="submit">Obtener ritmosustancia</button>
      </form>
    </div>
  );
}

export default App;
```

## Conclusión
Felicitaciones!, ya tenés el `ritmosustanciometro` andando, tiene mucho `ritmo` pero le falta `sustancia`. Vamos a darsela con `Styled Components`

[⏪ Creando nuestra aplicación base](./01-crear-base.md) | [Estilando el `ritmosustanciometro` ⏩](./03-estilar-ritmosustanciometro.md)
