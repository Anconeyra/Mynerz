<script>
  import Navbar from './lib/Navbar.svelte'
  import About from './lib/About.svelte'
  import Footer from './lib/Footer.svelte'
  import ThemeToggle from './lib/ThemeToggle.svelte'
  import { onMount } from 'svelte';
  import { theme } from './lib/theme.js';

  onMount(() => {
    const savedTheme = localStorage.getItem('mynerz-theme') || 'light';
    theme.set(savedTheme);
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }, 0);
  });

  const team = [
    {
      name: 'Frank Anconeyra',
      role: 'CEO & Fundador',
      icon: '👨‍💼',
      description: 'Lidera la visión estratégica de la empresa.'
    },
    {
      name: 'Equipo de Desarrollo',
      role: 'Desarrolladores',
      icon: '👨‍💻',
      description: 'Expertos en las últimas tecnologías.'
    },
    {
      name: 'Equipo de Diseño',
      role: 'Diseñadores UX/UI',
      icon: '🎨',
      description: 'Crean experiencias únicas para usuarios.'
    },
    {
      name: 'Equipo de Soporte',
      role: 'Soporte Técnico',
      icon: '🛠️',
      description: 'Siempre disponibles para ayudarte.'
    }
  ];

  const clients = [
    { name: 'Retail Perú SAC', sector: 'Retail', icon: '🛒' },
    { name: 'FastFood Perú', sector: 'Restaurante', icon: '🍔' },
    { name: 'ModaStyle', sector: 'E-commerce', icon: '👕' },
    { name: 'Hotel Andino', sector: 'Hotelería', icon: '🏨' },
    { name: 'FinTech Perú', sector: 'Finanzas', icon: '💰' },
    { name: 'Grupo Empresarial', sector: 'Corporativo', icon: '🏢' }
  ];
</script>

<div class="page-nosotros">
  <Navbar />
  <ThemeToggle />
  <div class="page-header">
    <div class="container">
      <div class="header-content">
        <span class="header-icon">👥</span>
        <h1>Sobre Nosotros</h1>
        <p class="header-subtitle">
          Conoce al equipo detrás de las soluciones tecnológicas que transforman negocios
        </p>
      </div>
    </div>
  </div>
  
  <section class="about-intro">
    <div class="container">
      <div class="about-grid">
        <div class="about-text-content">
          <div class="section-badge">
            <span>📖</span>
            <span>Nuestra Historia</span>
          </div>
          <h2>Innovación y pasión transformando ideas en realidad</h2>
          <p>
            Somos una empresa de software dedicada a mejorar los sistemas de las personas. 
            Entendemos que detrás de cada proceso hay un equipo trabajando.
          </p>
          <p>
            Por eso, creamos soluciones tecnológicas que eliminan el caos administrativo y 
            potencian el crecimiento real de los negocios peruanos, desde la PYME que empieza 
            hasta la empresa especializada que busca escalar.
          </p>
          <div class="about-highlights">
            <div class="highlight">
              <span class="highlight-icon">✓</span>
              <span>Enfoque en el cliente</span>
            </div>
            <div class="highlight">
              <span class="highlight-icon">✓</span>
              <span>Innovación constante</span>
            </div>
            <div class="highlight">
              <span class="highlight-icon">✓</span>
              <span>Calidad garantizada</span>
            </div>
            <div class="highlight">
              <span class="highlight-icon">✓</span>
              <span>Compromiso total</span>
            </div>
          </div>
        </div>
        <div class="about-image-section">
          <div class="about-mission">
            <div class="mission-card">
              <span class="mission-icon">🎯</span>
              <h3>Misión</h3>
              <p>Empoderar a las empresas peruanas mediante soluciones tecnológicas innovadoras que optimicen sus procesos y impulsen su crecimiento sostenible.</p>
            </div>
            <div class="mission-card">
              <span class="mission-icon">👁️</span>
              <h3>Visión</h3>
              <p>Ser la empresa líder en transformación digital en Perú, reconocida por nuestra excelencia técnica y compromiso con el éxito de nuestros clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="team-section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">
          <span>🌟</span>
          <span>Nuestro Equipo</span>
        </div>
        <h2>Personas Talentosas, Resultados Extraordinarios</h2>
        <p>Contamos con profesionales apasionados por la tecnología</p>
      </div>
      <div class="team-grid">
        {#each team as member}
          <div class="team-card">
            <div class="member-icon">{member.icon}</div>
            <h3>{member.name}</h3>
            <span class="member-role">{member.role}</span>
            <p>{member.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="clients-section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">
          <span>🤝</span>
          <span>Nuestros Clientes</span>
        </div>
        <h2>Empresas que Confían en Nosotros</h2>
        <p>Hemos tenido el privilegio de trabajar con empresas de diversos sectores</p>
      </div>
      <div class="clients-grid">
        {#each clients as client}
          <div class="client-card">
            <span class="client-icon">{client.icon}</span>
            <h4>{client.name}</h4>
            <span class="client-sector">{client.sector}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

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
    line-height: 1.6;
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  :global([data-theme="light"]) {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --text-muted: #94a3b8;
    --border-color: #e2e8f0;
    --card-bg: #ffffff;
    --card-shadow: rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="dark"]) {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --border-color: #334155;
    --card-bg: #1e293b;
    --card-shadow: rgba(0, 0, 0, 0.3);
  }

  :global(body) {
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  .page-nosotros {
    min-height: 100vh;
  }

  .page-header {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 50%, var(--bg-secondary) 100%);
    text-align: center;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .header-icon {
    font-size: 48px;
    display: inline-block;
    margin-bottom: 8px;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

.header-content h1 {
    font-size: 36px;
    font-weight: 900;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
  }

  .header-subtitle {
    font-size: 16px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .about-intro {
    padding: 60px 0;
    background: var(--bg-primary);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 30px;
    margin-bottom: 24px;
  }

  .section-badge span {
    font-size: 14px;
    font-weight: 700;
    color: #6366f1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .about-text-content h2 {
    font-size: 36px;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 24px;
    line-height: 1.3;
  }

  .about-text-content p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .about-highlights {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 32px;
  }

  .highlight {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    border-radius: 12px;
    border: 1px solid rgba(99, 102, 241, 0.1);
  }

  .highlight-icon {
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
  }

  .highlight span:last-child {
    font-weight: 600;
    color: var(--text-secondary);
  }

  .about-mission {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .mission-card {
    padding: 32px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    border-radius: 20px;
    border: 1px solid rgba(99, 102, 241, 0.15);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .mission-card:hover {
    transform: translateX(10px);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.15);
  }

  .mission-icon {
    font-size: 40px;
    display: block;
    margin-bottom: 16px;
  }

  .mission-card h3 {
    font-size: 22px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 12px;
  }

  .mission-card p {
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .team-section {
    padding: 60px 0;
    background: var(--bg-secondary);
  }

  .section-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 30px;
    margin-bottom: 24px;
  }

  .section-badge span {
    font-size: 14px;
    font-weight: 700;
    color: #6366f1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .section-header h2 {
    font-size: 42px;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 16px;
  }

  .section-header p {
    font-size: 18px;
    color: var(--text-secondary);
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
  }

  .team-card {
    padding: 40px 32px;
    background: white;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .team-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
  }

  .member-icon {
    font-size: 64px;
    display: block;
    margin-bottom: 20px;
  }

  .team-card h3 {
    font-size: 20px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .member-role {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #6366f1;
    margin-bottom: 16px;
  }

  .team-card p {
    color: #64748b;
    font-size: 15px;
    line-height: 1.6;
  }

  .clients-section {
    padding: 60px 0;
    background: var(--bg-secondary);
  }

  .clients-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
  }

  .client-card {
    padding: 24px;
    background: var(--card-bg);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .client-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px var(--card-shadow);
  }

  .client-icon {
    font-size: 40px;
    display: block;
    margin-bottom: 12px;
  }

  .client-card h4 {
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 6px;
  }

  .client-sector {
    font-size: 13px;
    color: var(--text-muted);
    font-weight: 500;
  }

  .cta-section {
    padding: 60px 0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  }

  .cta-content {
    text-align: center;
    color: white;
  }

  .cta-content h2 {
    font-size: 42px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  .cta-content p {
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 32px;
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

  .btn-content {
    position: relative;
    z-index: 1;
  }

  .btn-primary {
    background: white;
    color: #6366f1;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  .btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 100px 0 60px;
    }

    .header-content h1 {
      font-size: 32px;
    }

    .about-text-content h2 {
      font-size: 28px;
    }

    .section-header h2 {
      font-size: 32px;
    }

    .about-highlights {
      grid-template-columns: 1fr;
    }

    .team-grid,
    .clients-grid {
      grid-template-columns: 1fr;
    }

    .cta-content h2 {
      font-size: 32px;
    }
  }
</style>
