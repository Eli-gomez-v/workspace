class UniqueAppElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<!-- Header -->
    <header class="main-header">
        <h1 id="mi_id">El Urban Sketching</h1>
    </header>
    <section class="welcome-section">
        <h2 class="subtitulo">Bienvenido a la comunidad del Urban Sketching</h2>
        <div class="welcome-message">
        <p>El Urban Sketching es una forma de dibujo que se realiza in situ, en el lugar donde se encuentra el objeto a dibujar. 
            Es una técnica que se ha popularizado en los últimos años gracias a la facilidad de compartir los dibujos en redes sociales.
            En esta página encontrarás recursos para aprender y mejorar tus habilidades, así como eventos y exposiciones relacionados con el Urban Sketching.</p>
        </div>

    <!-- Navigation -->
    <nav class="main-nav">
        <a href="aprende.html">
            <img src="images/aprende.jpg" alt="Aprende Icono">
            Aprende
        </a>
        <a href="aprende.html">
            <img src="images/inspiracion.jpg" alt="Inspiración Icono">
            Inspiración
        </a>
        <a href="eventos.html">
            <img src="images/eligomve_qr.png" alt="Eventos Icono">
            Escanea el código QR
        </a>
        <a href="contacto.html">
            <img src="images/contacto.jpg" alt="Contacto Icono">
            Contacto
        </a>
    </nav>
    
    <!-- main Content -->
        <div class="grid-container">
            <aside class="sidebar sidebar-left"></aside>
            <p>Accede a manuales, tutoriales y eventos relevantes para mejorar tus habilidades</p>
      
    <aside class="Sidebar sidebar-right"></aside>
    </div>


    <!-- Footer -->
    <footer class="main-footer">
        creado y producido por Eli_gomez
    </footer>
    </section>
`;
    }
  }
  
customElements.define('app-root', UniqueAppElement);