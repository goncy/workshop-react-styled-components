# React? Se fuma?
* `React` es una librería para crear interfaces de usuario
* Su sintaxis es parecida al HTML y se llama JSX
* `React` propone dividir nuestra aplicación en componentes que podamos reutilizar

## Que diferencia hay entre HTML y React?
Una de las principales diferencias que podemos encontrar es que `HTML` solo describe la estructura de nuestra aplicación en el momento de carga, si no usamos `JavaScript`, nuestra aplicación o su información nunca van a cambiar una vez que fueron cargadas. Mientras tanto, `React`, es una librería construida con `JavaScript`, el hecho de que podamos verlo parecido a HTML es gracias a JSX, una sintaxis que antes de que nuestra aplicación sea renderizada en el navegador, es convertida a Vanilla `JavaScript` (por Babel generalmente, una herramienta que nos permite usar código o funcionalidades de `JavaScript` que todavía los navegadores no soportan, entre otras cosas).

Entonces, al `React` ser `JavaScript`, nos da todas las ventajas que `JavaScript` nos da a la hora de desarrollar una aplicación, como permitirnos cambiar el contenido de nuestra aplicación dinamicamente, mostrar información que traigamos de un servidor, etc.

Como dijimos antes, `React` esta pensado para ser usado con componentes, por lo tanto, trae una clase integrada en la librería, llamada `Component`, la cual vamos a usar para construir nuestra aplicación.

Este sería un ejemplo de un componente de `React`:
```jsx
import React from "react" // Importamos React siempre que necesitemos usar JSX

class ContadorDeSustancias extends React.Component { // Creamos una clase, con un nombre, empezando con mayúscula, que extienda de `React.Component`
  state = {
    kilos: 0 // Le decimos a nuestro componente, que queremos una variable `kilos` dentro del estado
  }

  aumentar = () => { // Creamos una función que va a aumentar los kilos de nuestro estado en 1
    this.setState({kilos: this.state.kilos + 1}) // `setState` recibe un objeto y define un estado nuevo combinando el viejo y el objeto que le pasamos
  }

  disminuir = () => { // Y otra función que va a disminuir los kilos en 1
    this.setState({kilos: this.state.kilos - 1}) // `setState` recibe un objeto y define un estado nuevo combinando el viejo y el objeto que le pasamos
  }

  render() { // Todo componente debe tener una función render, que debe retornar `un solo` elemento JSX (o null), atentos que ese elemento puede ser un elemento que contenga muchos otros elementos adentro
    return (
      <div>
        <h1>Kilos de sustancia: {this.state.kilos}</h1> {/* Usando llaves podemos meter código javascript dentro de nuestro JSX */}
        <button onClick={this.disminuir}> - </button> {/* Pasamos nuestra función disminuir a `onClick` para que se ejecute al hacer click */}
        <button onClick={this.aumentar}> + </button> {/* Hacemos lo mismo con nuestra función aumentar */}
      </div>
    )
  }
}

export default ContenedorDeSustancias // Exportamos el componente para poder importarlo desde otros componentes
```

Si renderizamos este componente obtendríamos algo así:
*GIF*

Ves como siempre vemos actualizado el valor actualizado de `kilos`? Esto pasa por que cada vez que actualizamos el estado de nuestro componente con `setState`, todo el componente vuelve a renderizarse con el estado nuevo (lo mismo pasa cuando cambian las `props`, vemos eso en un rato).

> Nota: Siempre que queramos actualizar el estado de nuestro componente debemos hacerlo con `setState` y no como `this.state.kilos = 2`, ya que si lo hacemos de la segunda manera, `React` no escucha el cambio y no vuelve a renderizar nuestro componente.

Por último, que son esas `props` de las que hablaba antes?, las props son la manera de pasarle parametros a un componente, dijimos que los componentes podían ser reutilizable, bueno, si no podrían recibir información externa no siempre serían útiles. Vamos a usar nuestro `ContenedorDeSustancias` y modificarlo para que use una prop `sustancia`.

```jsx
import React from "react" // Importamos `React` siempre que necesitemos usar JSX

class ContadorDeSustancias extends React.Component {
  // Agregamos un static defaultProps para definir el valor por defecto de nuestras props en caso de que no sean pasadas al componente
  static defaultProps = {
    sustancia: 'sustancia desconocida'
  }

  state = {
    kilos: 0
  }

  aumentar = () => {
    this.setState({kilos: this.state.kilos + 1})
  }

  disminuir = () => {
    this.setState({kilos: this.state.kilos - 1})
  }

  render() {
    return (
      <div>
        {/* Usamos nuestra prop sustancia */}
        <h1>Kilos de {this.props.sustancia}: {this.state.kilos}</h1>
        <button onClick={this.disminuir}> - </button>
        <button onClick={this.aumentar}> + </button>
      </div>
    )
  }
}

export default ContenedorDeSustancias
```

Entonces ahora podriamos usar nuestro componente de la siguiente manera:
```jsx
<ContenedorDeSustancias sustancia="pasto" />
<ContenedorDeSustancias sustancia="azucar" />
```

Y se vería así:
*GIF*

Esto es todo lo que necesitamos de `React` para crear nuestro `ritmosustanciometro`!

> Gotcha: La diferencia entre `state` y `props` puede no entenderse muy bien al principio, solo recordá, un componente puede cambiar su propio estado directamente (con `setState`), pero no sus `props`.

> Tip: Si solo necesitamos `props` y no necesitamos `state`, podemos escribir un `stateless component` en vez de un `Component` de `React`, para hacerlo, en vez de crear una clase que extiende de `Component`, creamos simplemente una función de la siguiente manera:
```jsx
function Holis(props) {
  return <h1>Holis, {props.name}</h1>;
}
```
> O si queremos hacerlo con una `const`:
```jsx
const Holis = (props) => <h1>Holis, {props.name}</h1>;
```

## Extras que no vamos a ver en este curso
* [Redux](https://redux.js.org/), una librería para manejar el estado de nuestra aplicación `React`, podés ver [este curso](https://egghead.io/courses/getting-started-with-redux) que lo da su creador, Dan Abramov

## Conclusión
Con React vamos a armar las vistas de nuestra aplicación, con esto ya deberíamos estar para empezar a darle estilos!
