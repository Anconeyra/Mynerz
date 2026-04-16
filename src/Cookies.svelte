<script>
  import Navbar from './lib/Navbar.svelte'
  import Footer from './lib/Footer.svelte'
  import ThemeToggle from './lib/ThemeToggle.svelte'
  import { theme } from './lib/theme.js'
  import { onMount } from 'svelte'

  let mounted = false
  onMount(() => { mounted = true })

  const cookies = [
    { name: 'session_id', type: 'Esencial', duration: 'Sesión', purpose: 'Mantener la sesión del usuario' },
    { name: 'csrf_token', type: 'Esencial', duration: 'Sesión', purpose: 'Protección contra ataques CSRF' },
    { name: 'language_preference', type: 'Preferencias', duration: '1 año', purpose: 'Recordar el idioma seleccionado' },
    { name: '_ga', type: 'Análisis', duration: '2 años', purpose: 'Google Analytics - Identificar usuarios únicos' },
    { name: '_gid', type: 'Análisis', duration: '24 horas', purpose: 'Google Analytics - Distinguir usuarios' },
    { name: '_gat', type: 'Análisis', duration: '1 minuto', purpose: 'Google Analytics - Limitar solicitudes' }
  ];

  const sections = [
    {
      title: '1. ¿Qué son las Cookies?',
      content: `Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, teléfono móvil o tablet) cuando visita un sitio web. Estos archivos permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a ingresarlas cada vez que regrese al sitio.`
    },
    {
      title: '2. Tipos de Cookies que Utilizamos',
      content: `Utilizamos diferentes tipos de cookies para mejorar su experiencia:

      2.1 Cookies Esenciales
      Son necesarias para el funcionamiento básico del sitio web y no pueden ser desactivadas. Estas cookies permiten funciones como la navegación segura y el acceso a áreas protegidas del sitio.

      2.2 Cookies de Preferencias
      Permiten que el sitio web recuerde información que cambia la forma en que se comporta o se ve el sitio, como su idioma preferido o la región en la que se encuentra.

      2.3 Cookies de Análisis/Estadísticas
      Nos ayudan a comprender cómo los visitantes interactúan con nuestro sitio web recopilando y reportando información de manera anónima.

      2.4 Cookies de Marketing
      Se utilizan para rastrear a los visitantes en los sitios web y mostrar anuncios relevantes y atractivos para el usuario individual.`
    },
    {
      title: '3. Cookies que Utilizamos',
      content: `A continuación detallamos las cookies específicas que utilizamos en nuestro sitio web:`,
      isTable: true
    },
    {
      title: '4. Cookies de Terceros',
      content: `Además de nuestras propias cookies, también podemos utilizar cookies de terceros para analizar el uso del sitio web y mejorar nuestros servicios:

      • Google Analytics: Para análisis de tráfico web
      • LinkedIn: Para seguimiento de conversiones y remarketing
      • Google: Para publicidad y medición de rendimiento

      Le recomendamos revisar las políticas de privacidad de estos terceros para obtener más información.`
    },
    {
      title: '5. Cómo Gestionar las Cookies',
      content: `Puede controlar y eliminar las cookies como desee:

      5.1 A través del Navegador
      Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen.

      • Google Chrome: Configuración → Privacidad y seguridad → Cookies
      • Mozilla Firefox: Opciones → Privacidad y seguridad → Cookies
      • Safari: Preferencias → Privacidad → Gestionar datos del sitio
      • Microsoft Edge: Configuración → Cookies y permisos del sitio

      5.2 A través de Nuestro Banner de Cookies
      Cuando visita nuestro sitio web por primera vez, verá un banner que le permite aceptar o rechazar las cookies no esenciales.`
    },
    {
      title: '6. Consecuencias de Desactivar las Cookies',
      content: `Si decide desactivar las cookies, algunas funciones del sitio web pueden no estar disponibles o funcionar correctamente:

      • Las cookies esenciales desactivadas pueden impedir el acceso a ciertas áreas
      • Las cookies de preferencias desactivadas harán que el sitio no recuerde sus configuraciones
      • Las cookies de análisis desactivadas nos impedirán mejorar el sitio`
    },
    {
      title: '7. Actualizaciones de esta Política',
      content: `Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en nuestra práctica de cookies o por razones operativas, legales o reglamentarias. Le recomendamos revisar esta política regularmente.`
    },
    {
      title: '8. Contacto',
      content: `Si tiene preguntas sobre nuestra utilización de cookies, puede contactarnos:

      • Email: contacto@mynerz.com
      • LinkedIn: Mynerz
      • Ubicación: Perú`
    }
  ];
</script>

<div class="legal-page">
  <Navbar />
  {#if mounted}
    <ThemeToggle />
  {/if}
  
  <main class="main-content">
    <div class="page-header">
      <div class="container">
        <div class="header-content">
          <span class="header-icon">🍪</span>
          <h1>Política de Cookies</h1>
          <p class="header-subtitle">Información sobre cómo utilizamos las cookies en nuestro sitio</p>
        </div>
      </div>
    </div>

    <div class="page-body">
      <div class="container">
        <div class="content-wrapper">
          <nav class="toc">
            <h3>📑 Contenido</h3>
            <ul>
              {#each sections as section, i}
                <li>
                  <a href="#section-{i}">{section.title}</a>
                </li>
              {/each}
            </ul>
          </nav>

          <article class="legal-content">
            {#each sections as section, i}
              <section id="section-{i}" class="content-section">
                <h2>{section.title}</h2>
                {#if section.isTable}
                  <div class="table-wrapper">
                    <table class="cookies-table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Tipo</th>
                          <th>Duración</th>
                          <th>Finalidad</th>
                        </tr>
                      </thead>
                      <tbody>
                        {#each cookies as cookie}
                          <tr>
                            <td><code>{cookie.name}</code></td>
                            <td><span class="badge badge-{cookie.type.toLowerCase()}">{cookie.type}</span></td>
                            <td>{cookie.duration}</td>
                            <td>{cookie.purpose}</td>
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                {:else}
                  <div class="section-content">
                    {#each section.content.split('\n\n') as paragraph}
                      {#if paragraph.trim()}
                        <p>{paragraph}</p>
                      {/if}
                    {/each}
                  </div>
                {/if}
              </section>
            {/each}

            <div class="info-box">
              <h3>📚 Más Información sobre Cookies</h3>
              <p>Para obtener más información sobre las cookies y cómo gestionarlas, visite:</p>
              <div class="info-links">
                <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener">www.allaboutcookies.org</a>
                <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener">www.youronlinechoices.com</a>
              </div>
            </div>

            <div class="cta-section">
              <h3>¿Tienes dudas sobre las cookies?</h3>
              <p>Estamos aquí para ayudarte. Contáctanos en cualquier momento.</p>
              <a href="/#contacto" class="btn btn-primary">Contactar Ahora</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--text-primary, #1e293b);
    background: var(--bg-primary, #ffffff);
    line-height: 1.6;
  }

  .legal-page {
    min-height: 100vh;
  }

  .main-content {
    padding-top: 80px;
  }

  .page-header {
    background: linear-gradient(135deg, var(--bg-secondary, #f8fafc) 0%, var(--bg-accent, #ede9fe) 50%, var(--bg-secondary, #f8fafc) 100%);
    padding: 80px 0;
    position: relative;
    overflow: hidden;
  }

  .page-header::before,
  .page-header::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
  }

  .page-header::before {
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  }

  .page-header::after {
    bottom: -30%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header-content {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .header-icon {
    font-size: 64px;
    display: block;
    margin-bottom: 20px;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  .header-content h1 {
    font-size: 48px;
    font-weight: 900;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 16px;
    letter-spacing: -1px;
  }

  .header-subtitle {
    font-size: 18px;
    color: var(--text-secondary, #64748b);
    max-width: 600px;
    margin: 0 auto;
  }

  .page-body {
    padding: 80px 0;
    background: var(--bg-primary, #ffffff);
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 60px;
  }

  .toc {
    position: sticky;
    top: 120px;
    background: var(--card-bg, linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(168, 85, 247, 0.05)));
    padding: 32px;
    border-radius: 20px;
    border: 1px solid var(--border-color, rgba(139, 92, 246, 0.1));
    height: fit-content;
  }

  .toc h3 {
    font-size: 18px;
    font-weight: 800;
    color: var(--text-primary, #1e293b);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .toc ul {
    list-style: none;
  }

  .toc li {
    margin-bottom: 12px;
  }

  .toc a {
    color: var(--text-secondary, #64748b);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    display: block;
    padding: 8px 12px;
    border-radius: 8px;
  }

  .toc a:hover {
    color: #8b5cf6;
    background: rgba(139, 92, 246, 0.1);
  }

  .legal-content {
    max-width: 900px;
  }

  .content-section {
    margin-bottom: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid var(--border-color, #e2e8f0);
  }

  .content-section:last-of-type {
    border-bottom: none;
  }

  .content-section h2 {
    font-size: 26px;
    font-weight: 800;
    color: var(--text-primary, #1e293b);
    margin-bottom: 24px;
    padding-left: 16px;
    border-left: 4px solid #8b5cf6;
  }

  .section-content p {
    color: var(--text-secondary, #64748b);
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 16px;
  }

  .table-wrapper {
    overflow-x: auto;
    border-radius: 12px;
    border: 1px solid var(--border-color, #e2e8f0);
    margin: 24px 0;
  }

  .cookies-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card-bg, white);
  }

  .cookies-table thead {
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    color: white;
  }

  .cookies-table th {
    padding: 16px;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .cookies-table td {
    padding: 16px;
    border-bottom: 1px solid var(--border-color, #e2e8f0);
    font-size: 14px;
    color: var(--text-primary, #1e293b);
  }

  .cookies-table tbody tr {
    transition: background 0.3s ease;
  }

  .cookies-table tbody tr:hover {
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.05), rgba(168, 85, 247, 0.05));
  }

  .cookies-table code {
    background: var(--bg-secondary, #f1f5f9);
    padding: 4px 10px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #6366f1;
  }

  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }

  .badge-esencial {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
  }

  .badge-preferencias {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }

  .badge-análisis {
    background: rgba(139, 92, 246, 0.1);
    color: #8b5cf6;
  }

  .badge-marketing {
    background: rgba(236, 72, 153, 0.1);
    color: #ec4899;
  }

  .info-box {
    margin: 48px 0;
    padding: 32px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    border-radius: 20px;
    border: 1px solid rgba(99, 102, 241, 0.15);
  }

  .info-box h3 {
    font-size: 20px;
    font-weight: 800;
    color: var(--text-primary, #1e293b);
    margin-bottom: 12px;
  }

  .info-box p {
    color: var(--text-secondary, #64748b);
    margin-bottom: 16px;
  }

  .info-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .info-links a {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
    padding: 12px 16px;
    background: var(--card-bg, white);
    border-radius: 10px;
    border: 1px solid rgba(99, 102, 241, 0.2);
    transition: all 0.3s ease;
  }

  .info-links a:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    border-color: #8b5cf6;
    transform: translateX(5px);
  }

  .cta-section {
    margin-top: 60px;
    padding: 48px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
    border-radius: 24px;
    border: 1px solid rgba(139, 92, 246, 0.2);
    text-align: center;
  }

  .cta-section h3 {
    font-size: 24px;
    font-weight: 800;
    color: var(--text-primary, #1e293b);
    margin-bottom: 12px;
  }

  .cta-section p {
    color: var(--text-secondary, #64748b);
    margin-bottom: 24px;
    font-size: 16px;
  }

  .btn {
    display: inline-block;
    padding: 16px 32px;
    border-radius: 14px;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn-primary {
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    color: white;
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(139, 92, 246, 0.5);
  }

  @media (max-width: 1024px) {
    .content-wrapper {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .toc {
      position: relative;
      top: 0;
    }
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 60px 0;
    }

    .header-content h1 {
      font-size: 32px;
    }

    .header-icon {
      font-size: 48px;
    }

    .page-body {
      padding: 60px 0;
    }

    .content-section h2 {
      font-size: 22px;
    }

    .section-content p {
      font-size: 15px;
    }

    .cta-section,
    .info-box {
      padding: 32px 24px;
    }

    .cookies-table {
      font-size: 13px;
    }

    .cookies-table th,
    .cookies-table td {
      padding: 12px 10px;
    }
  }
</style>
