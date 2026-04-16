<script>
  import Navbar from './lib/Navbar.svelte'
  import Hero from './lib/Hero.svelte'
  import Services from './lib/Services.svelte'
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
</script>

<div class="page-inicio" data-theme={$theme}>
  <Navbar />
  <ThemeToggle />
  <Hero />
  <div class="intro-section">
    <div class="container">
      <div class="intro-content">
        <h2>Expertos en Transformación Digital</h2>
        <p class="intro-text">
          En Mynerz combinamos experiencia, innovación y compromiso para entregar soluciones 
          que realmente marcan la diferencia en tu negocio.
        </p>
        <div class="intro-features">
          <div class="feature">
            <div class="feature-icon">🎯</div>
            <h3>Enfoque Personalizado</h3>
            <p>Cada proyecto es único. Adaptamos nuestras soluciones a tus necesidades específicas.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">⚡</div>
            <h3>Entrega Rápida</h3>
            <p>Tiempo es dinero. Optimizamos procesos para entregar valor lo antes posible.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🛡️</div>
            <h3>Calidad Garantizada</h3>
            <p>Seguimos las mejores prácticas para entregar software robusto y escalable.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🤝</div>
            <h3>Soporte Continuo</h3>
            <p>No te dejamos solo. Acompañamos tu negocio incluso después de la entrega.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Services />
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
    --bg-gradient: linear-gradient(180deg, #ffffff 0%, #faf5ff 100%);
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --text-muted: #94a3b8;
    --border-color: #e2e8f0;
    --card-bg: white;
    --card-shadow: rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="dark"]) {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-gradient: linear-gradient(180deg, #0f172a 0%, #1e1b2e 100%);
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

  .page-inicio {
    min-height: 100vh;
  }

  .intro-section {
    padding: 100px 0;
    background: var(--bg-gradient);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .intro-content {
    text-align: center;
  }

  .intro-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 30px;
    margin-bottom: 24px;
  }

  .intro-badge span {
    font-size: 14px;
    font-weight: 700;
    color: #6366f1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .intro-content h2 {
    font-size: 42px;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 16px;
    letter-spacing: -1px;
  }

  .intro-text {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto 60px;
    line-height: 1.8;
  }

  .intro-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
  }

  .feature {
    padding: 32px;
    background: var(--card-bg);
    border-radius: 20px;
    border: 1px solid var(--border-color);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
  }

  .feature:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px var(--card-shadow);
    border-color: rgba(139, 92, 246, 0.3);
  }

  .feature-icon {
    font-size: 48px;
    margin-bottom: 16px;
    display: inline-block;
  }

  .feature h3 {
    font-size: 20px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 12px;
  }

  .feature p {
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .intro-section {
      padding: 60px 0;
    }

    .intro-content h2 {
      font-size: 32px;
    }

    .intro-text {
      font-size: 16px;
    }

    .intro-features {
      grid-template-columns: 1fr;
    }
  }
</style>
