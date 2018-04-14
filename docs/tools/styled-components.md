# `Styled Components`? Se Inyecta?
* `Styled Components` es una libreria de `CSS-in-JS` (Vamos a escribir JS que parece `CSS` y va a darle estilos a nuestros componentes)
* No tiene configuración
* Nos permite tener un `theme` (Vamos a poder tener nuestros colores, tamaños, etc. En un archivo solo y usarlos en toda la app, también vamos a poder cambiarlos en `runtime`)
* Nos da algunos beneficios out of the box que `CSS` no nos da (nesting de clases, usar `props` en nuestros estilos, etc)
* Permite tener componente mas descriptivos

## Como se usa `Styled Components`?
Al no tener configuración, es muy fácil de usar, como su nombre lo dice son componentes con estilos, por lo tanto lo primero que debemos hacer es importarlos asi:
```jsx
import styled from "styled-components"
```
Ahora que tenemos disponible la variable `styled`, podemos usar algunos de los componentes que vienen dentro de ella, por ejemplo:
```jsx
import styled from "styled-components"

// Usamos styled.p
export const Japisher = styled.p`
  font-size: 2rem;

  &:after {
    content: ' japish👋';
  }
`

// Usamos styled.button
export const BotonLoco = styled.button`
  padding: 12px;
  background: green;
  color: white;
`
```
Luego podríamos importar estos componentes donde necesitemos y usarlos asi:
```jsx
<Japisher>Mi parrafo</Japisher>
<BotonLoco>Soy reverde</BotonLoco>
```
*IMG*

## Crear solo `Styled Components` o usarlo en nuestros componentes comunes?
Es algo que siempre me pregunté y decidí no seguir un pattern para esto, simplemente usar lo que sea necesario para el caso. Por lo tanto, podríamos tener un component como `components/Tarjeta.js` que sea:
```jsx
import styled from "styled-components"

const Tarjetilla = styled.div`
  padding: 12px;
  background: white;
  border: 1px solid whitesmoke;
  border-radius: 4px;
`

export default Tarjetilla
```
O usarlo dentro de nuestros componentes, por ejemplo que `components/Inicio.js` sea:
```jsx
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 12px;

  .titulo {
    font-size: 24px;
  }
`

const Inicio = () => (
  <Container>
    <h1 className="titulo">Inicio</h1>
    <div>Contenido</div>
  </Container>
)

export default Inicio
```

## Cuales son los beneficios (a nivel funcionalidad) que nos da `Styled Components` frente a `CSS`?
- Clases, pseudo-elementos, etc, nesteados:

`CSS`
```css
.articulo {
  font-size: 1rem;
}

.articulo .negrita {
  font-weight: bold;
}

.articulo.grande {
  font-size: 1.125rem;
}
```

`Styled Components`
```jsx
styled.div`
.articulo {
  font-size: 1rem;

  .negrita {
    font-weight: bold;
  }

  &.grande {
    font-size: 1.125rem;
  }
}`
```

- Uso de props o javascript en los estilos

```jsx
const Texto = styled.div`
  font-size: ${(props) => props.tamaño}px;
`

<Texto tamaño={32}>Mi texto</Texto>
```

> Tip: Usando `template strings` (los backticks), podés meter código `JavaScript` usando `${}`, por ejemplo:
```javascript
`La sentido de la vida es ${40 + 2}` // El sentido de la vida es 42
```

## Animaciones
Si queremos usar animaciones, `Styled Components` nos provee la función `keyframes`, la cual podemos usar de la siguiente manera:
```jsx
import styled, { keyframes } from 'styled-components'

const rotar360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Reloj = styled.img`
  animation: ${rotate360} infinite 60s linear;
  &:hover {
    animation: ${rotate360} infinite 1s linear;
  }
`
```
Esto va a hacer que el elemento tarde 1 minuto en rotar 360 grados, pero al hacerle `hover` va a rotar en solo un segundo.

*GIF*

## Estilos globales
Si queremos agregar estilos globales podemos usar la función `injectGlobal` de `Styled Components`, podemos crear un archivo aparte o simplemente ejecutarla en nuestro archivo `index.js`, `App.js` o cualquier archivo que se ejecute en nuestra aplicación. Se haría asi:
```javascript
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`
```

## Que sería tener componentes mas descriptivos?
Imagina que creamos un componente de `Styled Components` por cada componente dentro de nuestro componente?, en cierto punto llegariamos a tener algo asi:
```html
<Articulo>
  <Titulo>Mi titulo</Titulo>
  <Contenido>Mi contenido</Contenido>
</Articulo>
```
Lo cual creo es bastante mas descriptivo que tener clases por todos lados. Imaginate si ademas reutilizas esos componentes en el resto de la aplicación. Al toque perro. *japish* 👋


## Extras que no vamos a ver en este curso
Hay muchas cosas copadas que todavía no vimos, pero ya vimos suficiente y no quiero marear a nadie.

* [ThemeProvider](https://www.styled-components.com/docs/advanced#theming) de `Styled Components` nos permite establecer variables que vamos a poder acceder desde cualquier `Styled Component`.
* [Media queries](https://www.styled-components.com/docs/advanced#media-templates) en `Styled Components` es muy fácil de hacer y nos permite armar diseños responsive.
* [Extender componentes](https://www.styled-components.com/docs/basics#extending-styles) de `Styled Components` nos permite tomar un componente que ya hayamos creado y tomarlo como base para crear otro.

## Conclusión
Todavía queda mucho por aprender de `Styled Components`, pero con esto ya estamos listos para darle estilos a nuestro ritmosustanciometro ⚗️

[⏪ React](./react.md) - [Cypress ⏩](./cypress.md)