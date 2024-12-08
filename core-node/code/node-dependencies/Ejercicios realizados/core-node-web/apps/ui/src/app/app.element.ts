class AppElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header class="main-header">
        <h1 id="mi_id">Aprende Urban Sketching</h1>
    </header>
    <section class="page-content">
        <div class="sketchbook-border">
            <h2 class="subtitulo">¿Qué es el Urban Sketching?</h2>
            <p>El Urban Sketching es una técnica de dibujo que consiste en capturar la esencia de la ciudad a través de dibujos rápidos y espontáneos. En esta sección encontrarás tutoriales y consejos para mejorar tus habilidades como dibujante urbano.</p>
            <p>El Urban Sketching es una técnica de dibujo que consiste en capturar la esencia de la ciudad a través de dibujos rápidos y espontáneos. Los dibujantes urbanos suelen salir a la calle con su cuaderno y su material de dibujo para plasmar en papel los rincones más emblemáticos de la ciudad.</p>
            <h2 class="subtitulo">Consejos para dibujar en la calle</h2>
            <p>Si quieres iniciarte en el Urban Sketching, aquí te dejamos algunos consejos para que tus dibujos sean todo un éxito:</p>
        <ul>
            <li>Sal a la calle con un cuaderno y un bolígrafo. No necesitas mucho material para dibujar en la calle, lo importante es capturar la esencia del lugar.</li>
            <li>Elige un lugar tranquilo y cómodo para sentarte a dibujar. Puedes elegir un banco en un parque o una terraza con vistas a la ciudad.</li>
            <li>Observa el entorno y elige un punto de vista interesante. Antes de empezar a dibujar, tómate unos minutos para observar el lugar y decidir qué es lo que quieres plasmar en tu dibujo.</li>
            <li>No te preocupes por los detalles. El Urban Sketching se trata de capturar la esencia del lugar, no de dibujar cada detalle de forma precisa. No te preocupes por los errores, lo importante es disfrutar del proceso de dibujo.</li>
            <li>Experimenta con diferentes técnicas y estilos. El Urban Sketching es una técnica muy versátil que te permite experimentar con diferentes estilos y técnicas de dibujo. No tengas miedo de probar cosas nuevas y descubrir tu propio estilo.</li>
        </ul>
        <nav class="main-nav">
            <a href="index.html">Volver a la página principal</a>
            <a href="docs/1 canon-8-cabezas-fusionado (1).pdf">PDF Técnicas de dibujar</a>
            <a href="docs/La línea, la textura y los materiales como expresión de sentimientos.pdf">PDF Técnicas</a>
            <a href="docs/línea, textura, composición y materiales.pdf">PDF Composición</a>
        </nav>
        </div>
    </section>
    <footer class="main-footer">
        <p>El Mundo del Urban Sketch</p>`;        
    }
}

customElements.define('app-root', AppElement);