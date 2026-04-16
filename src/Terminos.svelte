<script>
  import Navbar from './lib/Navbar.svelte'
  import Footer from './lib/Footer.svelte'
  import ThemeToggle from './lib/ThemeToggle.svelte'
  import { theme } from './lib/theme.js'
  import { onMount } from 'svelte'

  let mounted = false
  onMount(() => { mounted = true })

  const sections = [
    {
      title: '1. Aceptación de los Términos',
      content: `Al acceder y utilizar el sitio web de Mynerz (en adelante, "el Sitio"), usted acepta estar legalmente vinculado por estos Términos y Condiciones de Uso (en adelante, "los Términos"). Si no está de acuerdo con alguno de estos términos, le solicitamos no utilizar nuestro sitio web.`
    },
    {
      title: '2. Descripción del Servicio',
      content: `Mynerz es una empresa dedicada a proporcionar servicios de consultoría y desarrollo de software a medida, incluyendo pero no limitado a:

      • Desarrollo de software personalizado
      • Sistemas en la nube
      • Automatización de procesos
      • Aplicaciones móviles
      • Consultoría en tecnologías de la información
      • Integración de sistemas`
    },
    {
      title: '3. Uso del Sitio Web',
      content: `Usted se compromete a utilizar este sitio web únicamente para fines legales y de manera que no infrinja los derechos de otros usuarios. Queda prohibido:

      • Utilizar el sitio para transmitir contenido ilegal, difamatorio o abusivo
      • Intentar acceder sin autorización a cualquier parte del sitio o sus sistemas
      • Interferir o intentar interferir con el funcionamiento del sitio
      • Utilizar cualquier sistema automatizado para acceder al sitio sin permiso previo`
    },
    {
      title: '4. Propiedad Intelectual',
      content: `Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, software y código, es propiedad exclusiva de Mynerz o de sus licenciantes y está protegido por las leyes de propiedad intelectual.

      Queda prohibida la reproducción, distribución, modificación o comunicación pública de cualquier contenido sin autorización previa y por escrito de Mynerz.`
    },
    {
      title: '5. Servicios Profesionales',
      content: `Los servicios de desarrollo de software y consultoría se prestarán bajo contratos específicos que se acordarán individualmente con cada cliente. Estos contratos detallarán:

      • Alcance del proyecto
      • Tiempos de entrega estimados
      • Costos y formas de pago
      • Garantías y soporte post-implementación
      • Confidencialidad y propiedad del código`
    },
    {
      title: '6. Precios y Pagos',
      content: `Los precios de nuestros servicios se cotizan de manera personalizada según los requerimientos de cada proyecto. Los términos de pago se establecerán en el contrato correspondiente y pueden incluir:

      • Pagos anticipados
      • Pagos por hitos completados
      • Pagos recurrentes por servicios de mantenimiento`
    },
    {
      title: '7. Garantías',
      content: `Mynerz garantiza que los servicios se prestarán de manera profesional y conforme a los estándares de la industria. Sin embargo, no garantizamos que:

      • El sitio web estará disponible de manera ininterrumpida o sin errores
      • Los defectos serán corregidos en todos los casos
      • Los resultados esperados se alcanzarán en todos los escenarios`
    },
    {
      title: '8. Limitación de Responsabilidad',
      content: `Mynerz no será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan del uso o imposibilidad de uso de este sitio web o de nuestros servicios, incluyendo pero no limitado a pérdida de beneficios, datos o información.`
    },
    {
      title: '9. Confidencialidad',
      content: `Nos comprometemos a mantener la confidencialidad de toda la información proporcionada por nuestros clientes. Esta obligación está detallada en nuestra Política de Privacidad y en los contratos de servicio específicos.`
    },
    {
      title: '10. Modificaciones a los Términos',
      content: `Mynerz se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en este sitio web. Le recomendamos revisar periódicamente esta página.`
    },
    {
      title: '11. Ley Aplicable y Jurisdicción',
      content: `Estos términos se regirán e interpretarán de acuerdo con las leyes de la República del Perú. Cualquier controversia que surja de estos términos será sometida a la jurisdicción de los tribunales de la ciudad de Lima, Perú.`
    },
    {
      title: '12. Contacto',
      content: `Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de:

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
          <span class="header-icon">📋</span>
          <h1>Términos y Condiciones</h1>
          <p class="header-subtitle">Conoce las reglas que rigen el uso de nuestros servicios</p>
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
                <div class="section-content">
                  {#each section.content.split('\n\n') as paragraph}
                    {#if paragraph.trim()}
                      <p>{paragraph}</p>
                    {/if}
                  {/each}
                </div>
              </section>
            {/each}

            <div class="cta-section">
              <h3>¿Listo para comenzar tu proyecto?</h3>
              <p>Contáctanos hoy mismo y descubre cómo podemos ayudarte.</p>
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

    .cta-section {
      padding: 32px 24px;
    }
  }
</style>
