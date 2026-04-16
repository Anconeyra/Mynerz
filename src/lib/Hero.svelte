<script>
  import { onMount } from 'svelte';
  import logoImg from './images/Mynerz-logo.png';

  let visible = false;

  onMount(() => {
    visible = true;
  });

  const cards = [
    { icon: '💻', text: 'Software a Medida', class: 'card-1', color: '#6366f1', desc: 'Desarrollo personalizado' },
    { icon: '🚀', text: 'Innovación', class: 'card-2', color: '#8b5cf6', desc: 'Tecnología de punta' },
    { icon: '📈', text: 'Crecimiento', class: 'card-3', color: '#a855f7', desc: 'Escalabilidad garantizada' },
    { icon: '🔒', text: 'Seguridad', class: 'card-4', color: '#06b6d4', desc: 'Protección total' },
    { icon: '⚡', text: 'Velocidad', class: 'card-5', color: '#f97316', desc: 'Alto rendimiento' },
    { icon: '🌐', text: 'Cloud', class: 'card-6', color: '#10b981', desc: 'Acceso global' }
  ];

  const features = [
    { icon: '✓', text: 'Equipo especializado', highlight: 'Expertos' },
    { icon: '✓', text: 'Metodología ágil', highlight: 'Ágil' },
    { icon: '✓', text: 'Soporte 24/7', highlight: '24/7' }
  ];

  function scrollToSection(e, href) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  function navigateToPage(e, page) {
    window.location.href = page;
  }
</script>

<section class="hero" id="inicio">
  <div class="hero-bg">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
    <div class="grid-overlay"></div>
  </div>

  <div class="container hero-container">
    <div class="hero-content" class:visible>
      <div class="hero-badge">
        <span class="badge-dot"></span>
        <span>Transformación Digital</span>
      </div>
      
      <h1 class="hero-title">
        Impulsamos tu Negocio con
        <span class="highlight">
          <span class="highlight-text">Mynerz</span>
        </span>
      </h1>
      
      <p class="hero-subtitle">
        Creamos soluciones tecnológicas que eliminan el caos administrativo y potencian 
        el crecimiento real de los negocios peruanos.
      </p>
      
      <div class="hero-buttons">
        <a href="index.html#contacto" class="btn btn-primary" on:click={(e) => navigateToPage(e, 'index.html#contacto')} >
          <span class="btn-content">
            <span>Comenzar Proyecto</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </a>
        <a href="index.html#servicios" class="btn btn-secondary" on:click={(e) => navigateToPage(e, 'index.html#servicios')}>
          <span class="btn-content">
            <span>Ver Servicios</span>
          </span>
        </a>
      </div>

      <div class="hero-features">
        {#each features as feature}
          <div class="feature-tag">
            <span class="feature-icon">{feature.icon}</span>
            <span class="feature-text">{feature.text}</span>
            <span class="feature-highlight">{feature.highlight}</span>
          </div>
        {/each}
      </div>

      <div class="hero-stats">
        <div class="stat">
          <span class="stat-value">100+</span>
          <span class="stat-label">Clientes Felices</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-value">50+</span>
          <span class="stat-label">Proyectos</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-value">10+</span>
          <span class="stat-label">Años</span>
        </div>
      </div>
    </div>

    <div class="hero-visual" class:visible>
      <div class="hero-graphic">
        <div class="logo-showcase">
          <img src={logoImg} alt="Mynerz Logo" class="showcase-logo" />
          <div class="logo-glow"></div>
        </div>
        
        {#each cards as card}
          <div class="floating-card {card.class}" style="--card-color: {card.color}">
            <div class="card-icon-wrapper">
              <span class="icon">{card.icon}</span>
            </div>
            <div class="card-content">
              <span class="card-text">{card.text}</span>
              <span class="card-desc">{card.desc}</span>
            </div>
          </div>
        {/each}
        
        <div class="central-orb">
          <div class="orb-core"></div>
          <div class="orb-ring orb-ring-1"></div>
          <div class="orb-ring orb-ring-2"></div>
          <div class="orb-ring orb-ring-3"></div>
        </div>
        
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
    </div>
  </div>

  <div class="scroll-indicator">
    <div class="mouse">
      <div class="wheel"></div>
    </div>
    <span>Scroll</span>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    padding: 120px 0 80px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
    animation: float 20s ease-in-out infinite;
  }

  .orb-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
    top: -20%;
    right: -10%;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
    bottom: -10%;
    left: -5%;
    animation-delay: -7s;
  }

  .orb-3 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -14s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 30px) scale(0.9); }
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .hero-container {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-content {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 30px;
    margin-bottom: 24px;
    animation: fadeInUp 0.8s ease;
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }

  .hero-badge span {
    font-size: 14px;
    font-weight: 600;
    color: #6366f1;
  }

  .hero-title {
    font-size: 56px;
    font-weight: 900;
    line-height: 1.1;
    color: var(--text-primary);
    margin-bottom: 24px;
    letter-spacing: -2px;
  }

  .highlight {
    display: block;
    margin-top: 8px;
  }

  .highlight-text {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
  }

  .hero-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 32px;
    max-width: 540px;
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }

  .hero-features {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .feature-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(99, 102, 241, 0.15);
    border-radius: 50px;
    font-size: 13px;
    transition: all 0.3s ease;
  }

  .feature-tag:hover {
    background: var(--card-bg);
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-2px);
  }

  .feature-icon {
    color: #10b981;
    font-size: 14px;
  }

  .feature-text {
    color: var(--text-secondary);
  }

  .feature-highlight {
    font-weight: 700;
    color: #6366f1;
    background: rgba(99, 102, 241, 0.1);
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    padding: 16px 32px;
    border-radius: 14px;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .btn-content {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 1;
  }

  .btn-primary {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .btn-primary:hover::before {
    opacity: 1;
  }

  .btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.5);
  }

  .btn-secondary {
    background: var(--card-bg);
    color: #6366f1;
    border: 2px solid rgba(99, 102, 241, 0.3);
  }

  .btn-secondary:hover {
    border-color: #6366f1;
    background: rgba(99, 102, 241, 0.05);
    transform: translateY(-4px);
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 24px 0;
  }

  .stat {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 32px;
    font-weight: 900;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 14px;
    color: #94a3b8;
    margin-top: 4px;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, transparent, #e2e8f0, transparent);
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateX(40px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  }

  .hero-visual.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .hero-graphic {
    position: relative;
    width: 550px;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.logo-showcase {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  .showcase-logo {
    width: 280px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(99, 102, 241, 0.4));
    transition: transform 0.3s ease;
  }

  .logo-showcase:hover .showcase-logo {
    transform: scale(1.05);
  }

  .logo-glow {
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
    filter: blur(40px);
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.2); opacity: 1; }
  }

  :global([data-theme="dark"]) .showcase-logo {
    filter: drop-shadow(0 20px 40px rgba(99, 102, 241, 0.6));
  }

  :global([data-theme="dark"]) .logo-glow {
    background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
  }

  .floating-card {
    position: absolute;
    background: var(--card-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 16px 22px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 
      0 20px 40px var(--card-shadow),
      0 0 0 1px var(--border-color);
    animation: float 4s ease-in-out infinite;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    z-index: 10;
  }

  .floating-card:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.15),
      0 0 0 2px var(--card-color);
  }

  .card-icon-wrapper {
    width: 46px;
    height: 46px;
    background: var(--card-color);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    flex-shrink: 0;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .card-text {
    font-weight: 700;
    font-size: 14px;
    color: var(--text-primary);
    white-space: nowrap;
  }

  .card-desc {
    font-size: 11px;
    color: var(--text-secondary);
  }

  .card-1 { 
    top: 8%; 
    left: -5%; 
    animation-delay: 0s; 
  }

  .card-2 { 
    top: 5%; 
    right: -5%; 
    animation-delay: 0.5s; 
  }

  .card-3 { 
    bottom: 15%; 
    left: -8%; 
    animation-delay: 1s; 
  }

  .card-4 { 
    bottom: 10%; 
    right: -8%; 
    animation-delay: 1.5s; 
  }

  .card-5 {
    top: 45%;
    left: -12%;
    animation-delay: 2s;
  }

  .card-6 {
    top: 45%;
    right: -12%;
    animation-delay: 2.5s;
  }

  .central-orb {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 350px;
  }

  .orb-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.6) 50%, transparent 70%);
    border-radius: 50%;
    animation: pulse 4s ease-in-out infinite;
  }

  .orb-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    animation: rotate 20s linear infinite;
  }

  .orb-ring-1 {
    border-top-color: rgba(99, 102, 241, 0.3);
    border-right-color: rgba(99, 102, 241, 0.3);
    animation-duration: 25s;
  }

  .orb-ring-2 {
    border-bottom-color: rgba(139, 92, 246, 0.3);
    border-left-color: rgba(139, 92, 246, 0.3);
    animation-duration: 30s;
    animation-direction: reverse;
  }

  .orb-ring-3 {
    border-top-color: rgba(168, 85, 247, 0.2);
    border-right-color: rgba(168, 85, 247, 0.2);
    animation-duration: 35s;
  }

  .particle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(99, 102, 241, 0.6);
    border-radius: 50%;
    animation: particleFloat 6s ease-in-out infinite;
  }

  .particle-1 {
    top: 20%;
    left: 30%;
    animation-delay: 0s;
  }

  .particle-2 {
    top: 40%;
    right: 25%;
    animation-delay: 1.5s;
  }

  .particle-3 {
    bottom: 30%;
    left: 35%;
    animation-delay: 3s;
  }

  .particle-4 {
    bottom: 25%;
    right: 30%;
    animation-delay: 4.5s;
  }

  @keyframes particleFloat {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
    50% { transform: translate(20px, -20px) scale(1.5); opacity: 1; }
  }

  @keyframes rotate {
    to { transform: rotate(360deg); }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #94a3b8;
    font-size: 12px;
    font-weight: 600;
    animation: fadeIn 1s ease 1s backwards;
  }

  .mouse {
    width: 26px;
    height: 40px;
    border: 2px solid #cbd5e1;
    border-radius: 13px;
    position: relative;
  }

  .wheel {
    width: 4px;
    height: 8px;
    background: #6366f1;
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 2s ease-in-out infinite;
  }

  @keyframes scroll {
    0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
    50% { opacity: 0.3; transform: translateX(-50%) translateY(10px); }
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }

  @media (max-width: 1024px) {
    .hero-container {
      grid-template-columns: 1fr;
      gap: 60px;
      text-align: center;
    }

    .hero-content {
      order: 2;
    }

    .hero-visual {
      order: 1;
    }

    .hero-title {
      font-size: 42px;
    }

    .hero-subtitle {
      margin: 0 auto 32px;
    }

    .hero-buttons {
      justify-content: center;
    }

    .hero-stats {
      justify-content: center;
    }

    .hero-graphic {
      width: 380px;
      height: 380px;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding: 100px 0 60px;
    }

    .hero-title {
      font-size: 32px;
    }

    .hero-stats {
      flex-wrap: wrap;
      gap: 16px;
    }

    .stat-divider {
      display: none;
    }

    .hero-graphic {
      width: 300px;
      height: 300px;
    }

    .floating-card {
      padding: 14px 20px;
    }

    .card-icon-wrapper {
      width: 42px;
      height: 42px;
    }

    .card-text {
      font-size: 13px;
    }

    .scroll-indicator {
      display: none;
    }
  }
</style>
