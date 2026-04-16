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
      title: '1. Introducción',
      content: `En Mynerz (en adelante, "la Empresa", "nosotros" o "nuestro"), nos comprometemos a proteger su privacidad y garantizar la seguridad de sus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios.

      Esta política cumple con la Ley de Protección de Datos Personales de Perú (Ley N° 29733) y su reglamento.`
    },
    {
      title: '2. Responsable del Tratamiento de Datos',
      content: `El responsable del tratamiento de sus datos personales es:

      • Empresa: Mynerz
      • Ubicación: Perú
      • Email de contacto: contacto@mynerz.com`
    },
    {
      title: '3. Datos que Recopilamos',
      content: `Podemos recopilar los siguientes tipos de información personal:

      3.1 Información que usted nos proporciona directamente
      • Nombre completo
      • Dirección de correo electrónico
      • Número de teléfono
      • Nombre de la empresa
      • Cargo o posición
      • Mensajes y consultas que nos envía
      • Información de proyectos y requerimientos

      3.2 Información recopilada automáticamente
      • Dirección IP
      • Tipo de navegador y versión
      • Dispositivo utilizado
      • Páginas visitadas en nuestro sitio
      • Tiempo y duración de la visita
      • Datos de ubicación geográfica aproximada

      3.3 Cookies y tecnologías similares
      Utilizamos cookies para mejorar su experiencia. Para más información, consulte nuestra Política de Cookies.`
    },
    {
      title: '4. Finalidad del Tratamiento',
      content: `Utilizamos su información personal para las siguientes finalidades:

      • Responder a sus consultas y solicitudes de información
      • Proporcionar cotizaciones y propuestas de servicios
      • Gestionar la relación comercial con clientes
      • Enviar comunicaciones relacionadas con nuestros servicios (previo consentimiento)
      • Mejorar nuestro sitio web y servicios
      • Cumplir con obligaciones legales y regulatorias
      • Prevenir fraudes y garantizar la seguridad`
    },
    {
      title: '5. Base Legal para el Tratamiento',
      content: `Tratamos sus datos personales basándonos en:

      • Consentimiento: Cuando usted nos ha dado su consentimiento explícito
      • Ejecución de contrato: Cuando es necesario para prestar nuestros servicios
      • Interés legítimo: Para mejorar nuestros servicios y comunicación
      • Obligación legal: Cuando debemos cumplir con requisitos legales`
    },
    {
      title: '6. Compartir Información con Terceros',
      content: `No vendemos ni alquilamos su información personal a terceros. Solo podemos compartir su información en las siguientes circunstancias:

      • Proveedores de servicios: Con empresas que nos ayudan a operar (hosting, email, etc.) bajo estrictos acuerdos de confidencialidad
      • Obligación legal: Cuando lo requiera la ley o autoridades competentes
      • Consentimiento: Cuando usted ha dado su consentimiento explícito
      • Protección de derechos: Para proteger nuestros derechos o propiedad`
    },
    {
      title: '7. Conservación de Datos',
      content: `Conservamos su información personal únicamente durante el tiempo necesario para cumplir con las finalidades descritas en esta política:

      • Datos de contacto: mientras mantengamos relación comercial o hasta que solicite su eliminación
      • Datos de navegación: hasta 2 años desde la última interacción
      • Datos de proyectos: durante la vigencia del contrato y 5 años después por obligaciones legales`
    },
    {
      title: '8. Sus Derechos',
      content: `Como titular de datos personales, usted tiene los siguientes derechos:

      • Derecho de acceso: A conocer qué datos tenemos sobre usted
      • Derecho de rectificación: A corregir datos inexactos o incompletos
      • Derecho de cancelación: A solicitar la eliminación de sus datos
      • Derecho de oposición: A oponerse al tratamiento de sus datos
      • Derecho de portabilidad: A recibir sus datos en formato estructurado
      • Derecho de limitación: A solicitar la limitación del tratamiento
      • Derecho de revocación del consentimiento: A retirar su consentimiento en cualquier momento

      Para ejercer estos derechos, contáctenos a: contacto@mynerz.com`
    },
    {
      title: '9. Seguridad de los Datos',
      content: `Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal:

      • Encriptación de datos en tránsito y en reposo
      • Control de acceso y autenticación
      • Backups regulares
      • Actualizaciones de seguridad periódicas
      • Capacitación del personal en protección de datos`
    },
    {
      title: '10. Contacto',
      content: `Si tiene preguntas, preocupaciones o solicitudes relacionadas con esta Política de Privacidad, puede contactarnos:

      • Email: contacto@mynerz.com
      • LinkedIn: Mynerz
      • Ubicación: Perú

      Respondemos a todas las solicitudes dentro de los 15 días hábiles siguientes.`
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
          <span class="header-icon">🔒</span>
          <h1>Política de Privacidad</h1>
          <p class="header-subtitle">Protegemos tus datos personales con los más altos estándares de seguridad</p>
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
              <h3>¿Tienes preguntas sobre nuestra privacidad?</h3>
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
