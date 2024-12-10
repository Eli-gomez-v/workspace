class AppElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = 'https://virgil.io/';
    const present = `
      <div class="wrapper">
        <div class="container">
          <!--  WELCOME  -->
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome ${title} 👋
            </h1>
          </div>
          <!--  HERO  -->
          <!-- ... (rest of the HTML content) ... -->
        </div>
      </div>
    `;

    const future = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <!-- ... (rest of the HTML content) ... -->
      </head>
      <body>
        <!-- ... (rest of the HTML content) ... -->
      </body>
      </html>
    `;

    const isFuture = false;
    this.innerHTML = isFuture ? future : present;
    setTimeout(() => this.makeHTTPRequest(), 2000);

    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('temporalForm');
      const resultado = document.getElementById('resultado');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
          const tiempo = (document.getElementById('tiempo') as HTMLInputElement).value;
          let mensaje = '';

          switch (tiempo) {
            case '1':
              mensaje = 'pasado';
              break;
            case '2':
              mensaje = 'presente';
              break;
            case '3':
              mensaje = 'futuro';
              break;
            default:
              mensaje = 'Esta página no se encuentra';
          }

          if (resultado) {
            resultado.innerHTML = `
              <h2>Resultado:</h2>
              <p>Nombre: ${nombre}</p>
              <p>Tiempo: ${mensaje}</p>
            `;
          }
        });
      }
    });

    const isPresent = 2;
    this.innerHTML = isPresent ? present : future;
  }

  makeHTTPRequest() {
    // Implement your HTTP request logic here
  }
}

customElements.define('core-node-web-root', AppElement);