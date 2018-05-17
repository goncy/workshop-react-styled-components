import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Text,
  Appear,
  Slide,
  ComponentPlayground,
  Link,
  CodePane,
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import {css} from "react-emotion";

import {
  GapedImage,
  SmallQuote,
  Title,
  DefaultText,
  Opener,
  SmallListItem,
  Container,
  FitList,
} from "./components/tweaked";

import ritmosustanciometroDemo from "./assets/ritmosustanciometro-demo.gif";

require("normalize.css");

const theme = createTheme(
  {
    primary: "#fafafa",
    secondary: "#FF6F05",
    tertiary: "#666",
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
  }
);

const defaultProps = {
  defaultSlide: {
    progressColor: "secondary",
  },
  invertedSlide: {
    bgColor: "secondary",
    textColor: "primary",
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={400}
        theme={theme}
        controls={false}
        contentHeight="100%"
      >
        {/* Intro */}
        <Slide {...defaultProps.defaultSlide}>
          <Opener>Gonzalo Pozzo</Opener>
          <Text margin="6px 0">React developer @TheNextAd</Text>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Text>De cero a tested en 2 japish 👋 con</Text>
          <Title>React, Styled Components y Cypress</Title>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Que vamos a hacer?</Title>
          <Appear>
            <GapedImage src={ritmosustanciometroDemo} />
          </Appear>
        </Slide>

        <Slide {...defaultProps.invertedSlide}>
          <BlockQuote>
            <SmallQuote>
              Una app que obtiene el porcentaje de ritmosustancia de un
              individuo en tiempo real
            </SmallQuote>
            <Appear>
              <Cite>
                Mala fama
                <Appear>
                  <span>👋</span>
                </Appear>
              </Cite>
            </Appear>
          </BlockQuote>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Requisitos</Title>
          <FitList>
            <Appear>
              <SmallListItem>
                Cualquier editor de texto, recomiendo <b>Visual Studio Code</b>
              </SmallListItem>
            </Appear>
            <Appear>
              <SmallListItem>
                <b>Node.js</b> instalado, con npm en la última versión estable
              </SmallListItem>
            </Appear>
          </FitList>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Recomendable</Title>
          <FitList>
            <Appear>
              <SmallListItem>
                Experiencia básica con <b>React</b> y <b>JavaScript</b>
              </SmallListItem>
            </Appear>
            <Appear>
              <SmallListItem>Manejo básico de la terminal</SmallListItem>
            </Appear>
          </FitList>
        </Slide>

        {/* REACT */}
        <Slide {...defaultProps.defaultSlide}>
          <Opener>REACT</Opener>
          <Text>Una librería para crear UIs</Text>
        </Slide>
        <Slide {...defaultProps.defaultSlide}>
          <ComponentPlayground
            code={`
class ContadorDeSustancias extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      kilos: 0
    }
  }

  aumentar() {
    this.setState({kilos: this.state.kilos + 1})
  }

  disminuir() {
    this.setState({kilos: this.state.kilos - 1})
  }

  render() {
    return (
      <div>
        <h1>Kilos de {this.props.sustancia}: {this.state.kilos}</h1>
        <button onClick={() => this.disminuir()}> - </button>
        <button onClick={() => this.aumentar()}> + </button>
      </div>
    )
  }
}

render(<ContadorDeSustancias sustancia="ritmo" />)`}
          />
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Sintaxis</Title>
          <DefaultText>
            React usa una sintaxis parecida a HTML llamada <b>JSX</b>, que{" "}
            <Link
              textColor="tertiary"
              target="_blank"
              href="https://jsx-live.now.sh/"
            >
              al compilarse
            </Link>, se convierte en JavaScript puro.
          </DefaultText>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Componentes</Title>
          <DefaultText>
            React está pensado para ser usado con componentes, los cuales
            permiten dividir la aplicación en partes independientes y reusables.
          </DefaultText>
          <DefaultText>
            Conceptualmente, un componente de React es una función de
            JavaScript, recibe argumentos (llamados props) y devuelven un
            componente de React que describe lo que deberíamos ver en pantalla.
          </DefaultText>
          <Appear>
            <CodePane
              textSize="26"
              lang="javascript"
              source={`function Japishador(props) {
  return <h1>Japish!, {props.nombre}</h1>;
}`}
            />
          </Appear>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Componentes</Title>
          <DefaultText>
            Además de crear componentes de React como funciones, podemos crear
            componentes a base de clases que extienden de <b>React.Component</b>
          </DefaultText>
          <Appear>
            <CodePane
              textSize="26"
              lang="javascript"
              source={`class Japishador extends React.Component {
  render() {
    return <h1>Japish!, {this.props.name}</h1>;
  }
}`}
            />
          </Appear>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Props</Title>
          <DefaultText>
            Son parametros que podemos pasarle a nuestro componente desde
            nuestro padre, cada vez que las props cambien, el componente se va a
            renderizar nuevamente.
          </DefaultText>
          <ComponentPlayground
            code={`
function Japishador(props) {
  return <h1>Japish!, {props.nombre}</h1>;
}

render(<Japishador nombre="Goncy" />)`}
          />
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>State</Title>
          <DefaultText>
            Al igual que las props, cada vez que el state cambie, nuestro
            componente va a volver a renderizarse, pero, a diferencia de las
            props, nosotros podemos modificar el state de nuestro componente
            directamente usando <b>setState</b>
          </DefaultText>
          <ComponentPlayground
            code={`
class Japishador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "Gonzalo"
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({nombre: e.target.value})}
        />
        <h1>Japish!, {this.state.nombre}</h1>
      </div>
    );
  }
}

render(<Japishador nombre="Goncy" />)`}
          />
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>State</Title>
          <DefaultText>
            <b>setState</b> recibe un objeto y lo mezcla con nuestro state
            anterior, el resultado, va a ser nuestro nuevo state
          </DefaultText>
          <Appear>
            <CodePane
              textSize="26"
              lang="javascript"
              source={`this.state = {
  nombre: "Gonzalo",
  edad: 25
}

this.setState({edad: 26})

this.state // -> {nombre: "Gonzalo", edad: 26}
`}
            />
          </Appear>
        </Slide>

        {/* Styled components */}
        <Slide {...defaultProps.defaultSlide}>
          <Opener>STYLED COMPONENTS</Opener>
          <Text>Componentes con estilo</Text>
          <div
            className={css`
              display: flex;
              justify-content: center;
            `}
          >
            <Appear>
              <Text textSize="24" margin="0">
                Ahre
              </Text>
            </Appear>
            <Appear>
              <Text textSize="24" margin="0">
                , japish 👋
              </Text>
            </Appear>
          </div>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Beneficios</Title>
          <DefaultText>No tiene configuración</DefaultText>
          <Appear>
            <CodePane
              textSize="26"
              lang="javascript"
              source={`import styled from "styled-components"

// Usamos styled.p
export const Japisher = styled.p\`
  font-size: 2rem;

  &:after {
    content: ' japish👋';
  }
\`

<Japisher>Mi parrafo</Japisher>
// <p>Mi parrafo japish 👋</p>
`}
            />
          </Appear>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Beneficios</Title>
          <DefaultText>Nesting de clases</DefaultText>
          <Appear>
            <CodePane
              textSize="24"
              lang="javascript"
              source={`import React from "react"
import styled from "styled-components"

const Container = styled.div\`
  padding: 12px;

  .titulo {
    font-size: 24px;
  }
\`

const Inicio = () => (
  <Container>
    <h1 className="titulo">Inicio</h1>
    <div>Contenido</div>
  </Container>
)`}
            />
          </Appear>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Beneficios</Title>
          <DefaultText>Props en estilos</DefaultText>
          <Appear>
            <CodePane
              textSize="24"
              lang="javascript"
              source={`const Texto = styled.div\`
  font-size: $ {props => props.tamaño}px;
\`

<Texto tamaño={32}>Mi texto</Texto>`}
            />
          </Appear>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Beneficios</Title>
          <DefaultText>JS en animaciones</DefaultText>
          <Appear>
            <CodePane
              textSize="24"
              lang="javascript"
              source={`import styled, { keyframes } from 'styled-components'

const rotar360 = keyframes\`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
\`

const Reloj = styled.img\`
  animation: $ {rotar360} infinite 10s linear;
  &:hover {
    animation: $ {rotar360} infinite 1s linear;
  }
\`

<Reloj src="https://placehold.it/64/64" />`}
            />
          </Appear>
        </Slide>

        <Slide {...defaultProps.defaultSlide}>
          <Title>Beneficios</Title>
          <DefaultText>Componentes descriptivos</DefaultText>
          <Appear>
            <CodePane
              textSize="24"
              lang="javascript"
              source={`<Articulo>
  <Titulo>Mi titulo</Titulo>
  <Contenido>Mi contenido</Contenido>
</Articulo>`}
            />
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
