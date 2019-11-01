# Estilando el `ritmosustanciometro`
Para empezar a estilar nuestro `ritmosustanciometro` vamos a:

1. Definir estilos globales para nuestra aplicación
2. Crear un `Contenedor` de estilos para `index.js`
3. Crear un `Contenedor` de estilos para `Ritmosustanciometro.js`
4. Convertir a `Ritmosustanciometro.js` en una barra de carga
5. Crear animaciones de aparición y de carga
6. Aplicar las animaciones a `Ritmosustanciometro.js`

### Definir estilos globales para nuestra aplicación
Vamos a ir al archivo `index.css` y vamos a pegar lo siguiente:
```css
html, body, #root {
  font-family: sans-serif;
  justify-content: center;
  text-align: center;
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
}
```
Con esto simplemente nos vamos a asegurar de que nuestra aplicación ocupe el espacio que necesita, se centre y que tenga una font un poco mas respetable

### Crear un `Contenedor` de estilos para `index.js`
Vamos a ir a `index.js`. Vamos a importar `Styled Components`, crear un `Contenedor` de `styled.div` con unos estilos básicos y vamos a usarlo como contenedor de nuestro componente `App`:

```jsx
// index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from "styled-components" // Importamos `Styled Components`

import Ritmosustanciometro from './Ritmosustanciometro';

// Creamos un container de `styled.div` con unos estilos básicos
const Contenedor = styled.div`
  width: 100%;
  max-width: 640px;
`

function App() {
  const [nombre, setNombre] = useState('');
  const [individuos, setIndividuos] = useState([
    {
      nombre: 'goncy',
      ritmosustancia: 100,
    },
  ]);

  function actualizarNombre(event) {
    setNombre(event.target.value);
  }

  async function obtenerRitmosustancia(event) {
    event.preventDefault();

    const ritmosustancia = await axios('https://xb8ek.sse.codesandbox.io/').then(res => res.data);

    setIndividuos(
      individuos.concat({
        nombre,
        ritmosustancia,
      })
    );
    setNombre('');
  }

  return (
    {/* Usamos `Contenedor` como contenedor de nuestra app */}
    <Contenedor>
      <h1>Ritmosustanciometro</h1>
      {individuos.map(individuo => (
        <Ritmosustanciometro
          nombre={individuo.nombre}
          ritmosustancia={individuo.ritmosustancia}
        />
      ))}
      <form onSubmit={obtenerRitmosustancia}>
        <input type="text" value={nombre} onChange={actualizarNombre} />
        <button type="submit">Obtener ritmosustancia</button>
      </form>
    </Contenedor>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Crear un `Contenedor` de estilos para `Ritmosustanciometro.js`
Vamos a hacer lo mismo que en nuestro componente `App`:

```jsx
// Ritmosustanciometro.js
import React from "react";
import styled from "styled-components"; // Importamos `Styled Components`

// Creamos un container de `styled.div` con unos estilos básicos, ancho, alto, margen, borde y alineamos el contenido al centro
const Contenedor = styled.div`
  width: 100%;
  height: 36px;
  margin: 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gainsboro;
`

// Usamos `Contenedor` como contenedor de nuestro componente `Ritmosustanciometro`
function Ritmosustanciometro({nombre, ritmosustancia}) {
  return (
    <Contenedor>
      {nombre}: {ritmosustancia}
    </Contenedor>
  );
}

export default Ritmosustanciometro;
```

![01](../assets/03-estilos-1.jpg)

### Convertir a `Ritmosustanciometro.js` en una barra de carga
Vamos a cambiar un poco la estructura del `Ritmosustanciometro` para que parezca una barra de carga marcando el nivel de `ritmosustancia`:

```jsx
// Ritmosustanciometro.js
import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  height: 36px;
  margin: 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid gainsboro;

  .barra {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: hsl(${props => props.ritmosustancia}, 100%, 50%);
    width: ${props => props.ritmosustancia}%;
  }

  .cantidad {
    z-index: 1;
  }
`

{/* Le pasamos el valor de `ritmosustancia` a nuestro container para poder usarlo en nuestros estilos */}
function Ritmosustanciometro({nombre, ritmosustancia}) {
  return (
    <Contenedor ritmosustancia={ritmosustancia}>
      {/* Creamos un `div` para mostrar el `nombre` y el valor de `ritmosustancia` y otro para mostrar la barra de nivel de `ritmosustancia`, les asignamos las clases que definimos mas arriba */}
      <div className="cantidad">{nombre}: {ritmosustancia}</div>
      <div className="barra" />
    </Contenedor>
  );
}

export default Ritmosustanciometro;
```

![02](../assets/03-estilos-2.jpg)

Perfecto, `Styled Components` nos permitió usar el valor de `ritmosustancia` de `props` para cambiar el color y ancho de nuestra barra de nivel de `ritmosustancia`

### Crear animaciones de aparición y de carga
Vamos a crear un archivo `animaciones.js` dentro de `src`, al mismo nivel que el resto de nuestros componentes. Vamos a importar `keyframes` de `Styled Components` y vamos a crear dos animaciones, una `aparecerDeAbajo` y una `carga`, ambas las vamos a usar en `Ritmosustanciometro`:

```javascript
import {keyframes} from "styled-components";

// Inicia 20px mas abajo con `opacity` 0, luego se acomoda y aparece
export const aparecerDeAbajo = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`

// Inicia con un ancho de 0 y color rojo y toma el ancho y color del argumento `valor` que le pasemos
export const carga = valor => keyframes`
  0% {
    width: 0;
    background-color: hsl(0, 100%, 50%);
  }

  100% {
    background-color: hsl(${valor}, 100%, 50%);
    width: ${valor}%;
  }
`
```

> Tip: `hsl` significa `hue saturation lightness`, por lo tanto `hsl(0, 100%, 50%)` sería rojo y `hsl(100, 100%, 50%)` sería verde

### Aplicar las animaciones a `Ritmosustanciometro.js`
Vamos a importar las animaciones que acabamos de crear a `Ritmosustanciometro.js` y vamos a aplicarlas:
```jsx
// Ritmosustanciometro.js
import React from "react";
import styled from "styled-components";

import {carga, aparecerDeAbajo} from "./animaciones" // Importamos las animaciones

const Contenedor = styled.div`
  width: 100%;
  height: 36px;
  margin: 6px 0;
  animation: ${aparecerDeAbajo} 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid gainsboro;

  .cantidad {
    z-index: 1;
  }

  .barra {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: hsl(${props => props.ritmosustancia}, 100%, 50%);
    width: ${props => props.ritmosustancia}%;
    animation: ${(props) => carga(props.ritmosustancia)} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
`

const Ritmosustanciometro = ({nombre, ritmosustancia}) => (
  <Contenedor ritmosustancia={ritmosustancia}>
    <div className="cantidad">{nombre}: {ritmosustancia}</div>
    <div className="barra" />
  </Contenedor>
);

export default Ritmosustanciometro;
```

![03](../assets/03-estilos-3.gif)

### Conclusión
Ya tenemos nuestro `ritmosustanciometro` con un poco mas de onda!


[⏪ Armando el `ritmosustanciometro`](./01-armar-ritmosustanciometro.md)
