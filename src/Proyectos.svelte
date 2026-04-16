<script>
  import Navbar from './lib/Navbar.svelte'
  import Projects from './lib/Projects.svelte'
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

  const methodologies = [
    {
      icon: '📊',
      title: 'Metodologías Ágiles',
      description: 'Trabajamos con Scrum y Kanban para entregar valor de forma incremental.'
    },
    {
      icon: '🔄',
      title: 'Integración Continua',
      description: 'Automatizamos pruebas y despliegues para mayor calidad y rapidez.'
    },
    {
      icon: '📱',
      title: 'Diseño Responsive',
      description: 'Todas nuestras soluciones se adaptan a cualquier dispositivo.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Proyectos Completados', icon: '🎉' },
    { number: '100+', label: 'Clientes Felices', icon: '😊' },
    { number: '10+', label: 'Años de Experiencia', icon: '⭐' },
    { number: '98%', label: 'Tasa de Éxito', icon: '🏆' }
  ];
</script>

<div class="page-proyectos">
  <Navbar />
  <ThemeToggle />
  <div class="page-header">
    <div class="container">
      <div class="header-content">
        <span class="header-icon">🚀</span>
        <h1>Proyectos</h1>
        <p class="header-subtitle">
          Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos digitales
        </p>
      </div>
    </div>
  </div>

  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        {#each stats as stat}
          <div class="stat-card">
            <span class="stat-icon">{stat.icon}</span>
            <span class="stat-number">{stat.number}</span>
            <span class="stat-label">{stat.label}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <Projects />

  <section class="methodologies-section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">
          <span>⚙️</span>
          <span>Metodología</span>
        </div>
        <h2>¿Cómo Trabajamos?</h2>
        <p>Seguimos las mejores prácticas de la industria para garantizar el éxito</p>
      </div>
      <div class="methodologies-grid">
        {#each methodologies as method}
          <div class="method-card">
            <div class="method-icon">{method.icon}</div>
            <h3>{method.title}</h3>
            <p>{method.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">
          <span>💬</span>
          <span>Testimonios</span>
        </div>
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <p>La satisfacción de nuestros clientes es nuestra mejor carta de presentación</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"El equipo de Mynerz transformó completamente nuestra gestión interna. Ahora somos mucho más eficientes."</p>
          <div class="testimonial-author">
            <span class="author-name">Carlos Mendoza</span>
            <span class="author-role">CEO, Retail Perú SAC</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"La app que desarrollaron superó nuestras expectativas. Nuestros clientes están encantados."</p>
          <div class="testimonial-author">
            <span class="author-name">María Fernández</span>
            <span class="author-role">Gerente, FastFood Perú</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"Profesionales, puntuales y con excelente soporte. Definitivamente los recomiendo."</p>
          <div class="testimonial-author">
            <span class="author-name">Jorge Ramírez</span>
            <span class="author-role">Director, Hotel Andino</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Estamos listos para hacerlo realidad. Cuéntanos tu idea y te sorprenderemos.</p>
        <a href="contacto.html" class="btn btn-primary">
          <span class="btn-content">Iniciar Proyecto</span>
        </a>
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

  .page-proyectos {
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
    line-height: 1.7;
  }

  .stats-section {
    padding: 60px 0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
  }

  .stat-card {
    text-align: center;
    color: white;
  }

  .stat-icon {
    font-size: 40px;
    display: block;
    margin-bottom: 12px;
  }

  .stat-number {
    display: block;
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 15px;
    opacity: 0.9;
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
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

  .methodologies-section {
    padding: 100px 0;
    background: var(--bg-primary);
  }

  .methodologies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
  }

  .method-card {
    padding: 40px 32px;
    background: var(--card-bg);
    border-radius: 20px;
    border: 1px solid var(--border-color);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .method-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px var(--card-shadow);
  }

  .method-icon {
    font-size: 48px;
    display: block;
    margin-bottom: 20px;
  }

  .method-card h3 {
    font-size: 20px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 12px;
  }

  .method-card p {
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .testimonials-section {
    padding: 100px 0;
    background: var(--bg-secondary);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;
  }

  .testimonial-card {
    padding: 40px;
    background: var(--card-bg);
    border-radius: 20px;
    border: 1px solid var(--border-color);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px var(--card-shadow);
  }

  .testimonial-rating {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .testimonial-text {
    font-size: 16px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 24px;
    font-style: italic;
  }

  .testimonial-author {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
  }

  .author-name {
    font-weight: 700;
    color: var(--text-primary);
    font-size: 16px;
  }

  .author-role {
    font-size: 14px;
    color: var(--text-muted);
  }

  .cta-section {
    padding: 100px 0;
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

  @media (max-width: 768px) {
    .page-header {
      padding: 100px 0 60px;
    }

    .header-content h1 {
      font-size: 32px;
    }

    .section-header h2 {
      font-size: 32px;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .stat-number {
      font-size: 36px;
    }

    .testimonials-grid {
      grid-template-columns: 1fr;
    }

    .cta-content h2 {
      font-size: 32px;
    }
  }
</style>
