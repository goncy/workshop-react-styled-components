# Cypress? Se aspira?
* Framework de testing
* API fácil
* Tiene modo de interfaz gráfica
* Muchos features opcionales útiles
* Se puede testear cualquier cosa que corra en un navegador

## Como empiezo con `Cypress`?
Algo muy importante que tiene `Cypress` es lo fácil que es empezar a escribir nuestros tests (y lo fácil que son de escribir), veamos como empezar.

- Instalación
```bash
# Con NPM
npm install cypress --save-dev
# O con yarn
yarn add cypress --dev
```

- Configuración
En la raíz de nuestro proyecto (al mismo nivel que el `package.json`), creamos un archivo `cypress.json` con el siguiente contenido:
```javascript
{
  "baseUrl": "http://localhost:3000" // Url de la aplicación que vamos a testear, si la URL de tu aplicación es diferente, cambialo
}
```

- Ejecución
Vamos a nuestro `package.json` y agregamos un nuevo script `cypress:open` (o el nombre que quieras), al final de todo:
```javascript
"scripts": {
  ...
  "cypress:open": "cypress open"
}
```
Una vez agregado ejecutamos en consola:
```bash
npm cypress:open
```

## Escribiendo nuestro primer test
Cuando queremos testear nuestra aplicación, muchas veces tenemos que hacer algo super tedioso que es encontrar una manera de resolver los pedidos que nuestra aplicación hace al servidor. Por suerte `Cypress` tiene una muy buena solución a esto, vamos a ver como escribiríamos un test:
```javascript
describe("Demo", () => {
  // Este hack es necesario por que Cypress no se lleva muy bien con el fetch nativo del browser, con suerte no lo vamos a necesitar en un futuro, basicamente reemplaza el fetch nativo por null para poder reemplazarlo con el fetch de cypress, esto va a servir para poder decidir que van a devolver nuestros calls http, si en tu aplicación no estas usando el fetch nativo del browser y estás usando request, axios, jQuery u otra alternativa, podes omitir el hook `before`
  before(function() {
    Cypress.on("window:before:load", win => {
      win.fetch = null;
    });
  });

  it("debería devolver el ritmo y sustancia que le digamos y luego limpiar la evidencia", () => {
    cy.server(); // Le decimos a Cypress que vamos a hacer uso de su server
    cy.visit("/"); // Le decimos a Cypress que vaya al inicio de nuestra app

    cy.route("GET", "/obtener-ritmo-y-sustancia", 100); // Le decimos a Cypress que la próxima vez que nuestra aplicación haga un pedido a una url que termine con `obtener-ritmo-y-sustancia`, la respuesta siempre sea 100

    cy.get("[data-test='nombre']") // Obtenemos el campo de nombre
      .type('goncy{enter}') // Escribimos goncy y forzamos un enter

    cy.contains("ritmosustancia de goncy - 100"); // Esperamos que nuestra aplicación tenga "ritmosustancia de goncy - 100" impreso en alguna parte

    cy.contains("borrar evidencia").click(); // Limpiamos todos los resultados

    cy.get("[data-test='resultados']") // Obtenemos el contendor de resultados
      .should('be.empty')  // Nos aseguramos de que este vacío
  });
});
```

## Extras que no vamos a ver en este curso
Hay muchas cosas copadas que todavía no vimos, pero ya vimos suficiente y no quiero marear a nadie.

* [Fixtures](https://docs.cypress.io/api/commands/fixture.html) nos permite devolver archivos completos o ejecutar funciones como respuesta de un pedido de servidor.
* [Configuración de ambientes](https://docs.cypress.io/api/plugins/configuration-api.html#) nos permite correr nuestros tests con diferentes configuraciones dependiendo que ambiente queramos testear.
* [Buenas prácticas](https://docs.cypress.io/guides/references/best-practices.html) de `Cypress`.

## Conclusión
Con esto ya tendríamos prácticamente todo testeado, ahora solo tenemos que hacer nuestra aplicación!
