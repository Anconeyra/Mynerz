<script>
  import logoImg from './images/Mynerz-logo.png'
  
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { name: 'Inicio', href: 'index.html#inicio' },
      { name: 'Nosotros', href: 'index.html#nosotros' },
      { name: 'Servicios', href: 'index.html#servicios' },
      { name: 'Proyectos', href: 'index.html#proyectos' },
      { name: 'Contacto', href: 'index.html#contacto' }
    ],
    servicios: [
      { name: 'Software a Medida', href: 'index.html#servicios' },
      { name: 'Sistemas Cloud', href: 'index.html#servicios' },
      { name: 'Automatización', href: 'index.html#servicios' },
      { name: 'Apps Móviles', href: 'index.html#servicios' },
      { name: 'Consultoría TI', href: 'index.html#servicios' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: 'privacidad.html' },
      { name: 'Términos y Condiciones', href: 'terminos.html' },
      { name: 'Política de Cookies', href: 'cookies.html' }
    ]
  };

  function scrollToSection(e, href) {
    // Si el href contiene index.html, navegar a esa página
    if (href.includes('index.html')) {
      window.location.href = href;
      return;
    }
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }
</script>

<footer class="footer">
  <div class="footer-top">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <div class="brand-header">
            <div class="logo-img">
              <img src={logoImg} alt="Mynerz" />
            </div>
            <div class="logo-content">
              <span class="logo-text">Mynerz</span>
              <span class="logo-tagline">Transformación Digital</span>
            </div>
          </div>
          
          <p class="brand-description">
            Somos una empresa de software dedicada a mejorar los sistemas de las personas. 
            Creamos soluciones tecnológicas que eliminan el caos administrativo y potencian 
            el crecimiento real de los negocios.
          </p>

          <div class="brand-services">
            <span class="service-badge">
              <span class="service-icon">💻</span>
              <span>Software a Medida</span>
            </span>
            <span class="service-badge">
              <span class="service-icon">☁️</span>
              <span>Cloud Computing</span>
            </span>
            <span class="service-badge">
              <span class="service-icon">📊</span>
              <span>Automatización</span>
            </span>
            <span class="service-badge">
              <span class="service-icon">📱</span>
              <span>Apps Móviles</span>
            </span>
          </div>
        </div>

        <div class="footer-nav">
          <div class="nav-column">
            <h4>
              <span class="nav-icon">🏢</span>
              Empresa
            </h4>
            <ul>
              {#each footerLinks.empresa as link}
                <li><a href={link.href} on:click={(e) => scrollToSection(e, link.href)}>{link.name}</a></li>
              {/each}
            </ul>
          </div>

          <div class="nav-column">
            <h4>
              <span class="nav-icon">⚡</span>
              Servicios
            </h4>
            <ul>
              {#each footerLinks.servicios as link}
                <li><a href={link.href} on:click={(e) => scrollToSection(e, link.href)}>{link.name}</a></li>
              {/each}
            </ul>
          </div>

          <div class="nav-column">
            <h4>
              <span class="nav-icon">📋</span>
              Legal
            </h4>
            <ul>
              {#each footerLinks.legal as link}
                <li><a href={link.href}>{link.name}</a></li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <div class="bottom-content">
        <p class="copyright">
          © {currentYear} Mynerz. Todos los derechos reservados.
        </p>
        <div class="made-with">
          <span class="flame">🔥</span>
          <span>Hecho con dedicación en</span>
          <span class="country">Perú</span>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%);
    color: white;
    position: relative;
    overflow: hidden;
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #6366f1, #8b5cf6, #a855f7, transparent);
  }

  .footer::after {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .footer-top {
    padding: 80px 0 60px;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .footer-main {
    display: grid;
    grid-template-columns: 1.4fr 2fr;
    gap: 80px;
    align-items: start;
  }

  .brand-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  .logo-img {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.4);
  }

  .logo-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .logo-content {
    display: flex;
    flex-direction: column;
  }

  .logo-text {
    font-size: 26px;
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, #e2e8f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.5px;
  }

  .logo-tagline {
    font-size: 12px;
    color: #94a3b8;
    font-weight: 500;
    margin-top: 2px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .brand-description {
    color: #a1aab8;
    line-height: 1.8;
    margin-bottom: 28px;
    font-size: 15px;
    max-width: 400px;
  }

  .brand-services {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .service-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    font-size: 13px;
    color: #cbd5e1;
    transition: all 0.3s ease;
  }

  .service-badge:hover {
    background: rgba(99, 102, 241, 0.15);
    border-color: rgba(139, 92, 246, 0.3);
    transform: translateY(-2px);
  }

  .service-icon {
    font-size: 16px;
  }

  .footer-nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .nav-column h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;
    color: white;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .nav-icon {
    font-size: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
    border-radius: 10px;
  }

  .nav-column ul {
    list-style: none;
  }

  .nav-column li {
    margin-bottom: 14px;
  }

  .nav-column a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    padding: 4px 0;
  }

  .nav-column a:hover {
    color: white;
    transform: translateX(4px);
  }

  .nav-column a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    transition: width 0.3s ease;
  }

  .nav-column a:hover::after {
    width: 100%;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding: 24px 0;
    background: rgba(0, 0, 0, 0.2);
  }

  .bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright {
    color: #64748b;
    font-size: 13px;
  }

  .made-with {
    color: #94a3b8;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .flame {
    font-size: 14px;
    animation: flicker 2s ease-in-out infinite;
  }

  .country {
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }

  @keyframes flicker {
    0%, 100% { transform: scale(1) rotate(-3deg); opacity: 1; }
    25% { transform: scale(1.15) rotate(3deg); opacity: 0.9; }
    50% { transform: scale(1) rotate(-2deg); opacity: 1; }
    75% { transform: scale(1.1) rotate(2deg); opacity: 0.85; }
  }

  @media (max-width: 1024px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .footer-nav {
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    .footer-top {
      padding: 48px 0 32px;
    }

    .footer-nav {
      grid-template-columns: repeat(2, 1fr);
    }

    .brand-services {
      flex-direction: column;
    }

    .bottom-content {
      flex-direction: column;
      gap: 12px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .footer-nav {
      grid-template-columns: 1fr;
    }
  }
</style>
