<script>
  import { onMount } from 'svelte';

  let visible = false;
  let statsVisible = false;

  onMount(() => {
    visible = true;
  });

  function handleIntersect(entries) {
    if (entries[0].isIntersecting) {
      statsVisible = true;
    }
  }

  let statsRef;

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    if (statsRef) observer.observe(statsRef);
    return () => observer.disconnect();
  });

  const stats = [
    { target: 100, suffix: '+', label: 'Clientes Satisfechos', icon: '😊' },
    { target: 50, suffix: '+', label: 'Proyectos Completados', icon: '🎉' },
    { target: 10, suffix: '+', label: 'Años de Experiencia', icon: '⭐' },
    { target: 98, suffix: '%', label: 'Tasa de Éxito', icon: '🏆' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Compromiso',
      description: 'Nos dedicamos al éxito de cada cliente con pasión y profesionalismo.'
    },
    {
      icon: '💡',
      title: 'Innovación',
      description: 'Buscamos constantemente las mejores soluciones tecnológicas.'
    },
    {
      icon: '🤝',
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en resultados y transparencia.'
    }
  ];
</script>

<section class="about" id="nosotros">
  <div class="about-bg">
    <div class="gradient-shape shape-1"></div>
    <div class="gradient-shape shape-2"></div>
  </div>

  <div class="container about-container">
    <div class="about-content" class:visible>
      <div class="section-badge">
        <span>👋</span>
        <span>Sobre Nosotros</span>
      </div>

      <h2 class="section-title">
        Transformamos Ideas en
        <span class="highlight">Realidad Digital</span>
      </h2>

      <p class="about-text">
        Somos una empresa de software dedicada a mejorar los sistemas de las personas. 
        Entendemos que detrás de cada proceso hay un equipo trabajando.
      </p>

      <p class="about-text">
        Por eso, creamos soluciones tecnológicas que eliminan el caos administrativo y 
        potencian el crecimiento real de los negocios peruanos, desde la PYME que empieza 
        hasta la empresa especializada que busca escalar.
      </p>

      <div class="values-grid">
        {#each values as value}
          <div class="value-card">
            <div class="value-icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        {/each}
      </div>

      <div class="about-stats" bind:this={statsRef} class:statsVisible>
        {#each stats as stat, i}
          <div class="stat-card" style="transition-delay: {i * 100}ms">
            <div class="stat-icon">{stat.icon}</div>
            <div class="stat-content">
              <span class="stat-number">
                <span class="count" data-target={stat.target}>{stat.target}</span>
                <span class="suffix">{stat.suffix}</span>
              </span>
              <span class="stat-label">{stat.label}</span>
            </div>
          </div>
        {/each}
      </div>

    </div>

    <div class="about-visual" class:visible>
      <div class="about-image-wrapper">
        <div class="about-image">
          <div class="image-placeholder">
            <div class="placeholder-content">
              <span class="placeholder-icon">👨‍💻</span>
              <span class="placeholder-text">Equipo Mynerz</span>
            </div>
          </div>
        </div>
        
        <div class="floating-badge badge-1">
          <span class="badge-icon">🚀</span>
          <div class="badge-content">
            <span class="badge-number">100%</span>
            <span class="badge-text">Compromiso</span>
          </div>
        </div>

        <div class="floating-badge badge-2">
          <span class="badge-icon">⚡</span>
          <div class="badge-content">
            <span class="badge-number">24/7</span>
            <span class="badge-text">Soporte</span>
          </div>
        </div>

        <div class="floating-badge badge-3">
          <span class="badge-icon">🏆</span>
          <div class="badge-content">
            <span class="badge-number">Top</span>
            <span class="badge-text">Calidad</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 120px 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #ffffff 0%, #faf5ff 100%);
  }

  .about-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .gradient-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
  }

  .shape-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
    top: -10%;
    right: -5%;
    animation: float 25s ease-in-out infinite;
  }

  .shape-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
    bottom: 10%;
    left: -10%;
    animation: float 20s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(40px, -60px) scale(1.05); }
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .about-container {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 100px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 30px;
    margin-bottom: 24px;
  }

  .section-badge span {
    font-size: 14px;
    font-weight: 700;
    color: #8b5cf6;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .section-title {
    font-size: 44px;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 28px;
    line-height: 1.2;
    letter-spacing: -1px;
  }

  .section-title .highlight {
    display: block;
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #d946ef 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 8px;
  }

  .about-text {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 32px 0;
  }

  .value-card {
    padding: 20px;
    background: var(--card-bg);
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
  }

  .value-icon {
    font-size: 32px;
    margin-bottom: 12px;
  }

  .value-card h3 {
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .value-card p {
    font-size: 13px;
    color: #94a3b8;
    line-height: 1.6;
  }

  .about-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 24px 0;
    padding: 24px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(168, 85, 247, 0.05));
    border-radius: 24px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .about-stats.statsVisible {
    opacity: 1;
    transform: translateY(0);
  }

  .stat-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: var(--card-bg);
    border-radius: 16px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .stat-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
  }

  .stat-icon {
    font-size: 36px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
    border-radius: 14px;
  }

  .stat-content {
    display: flex;
    flex-direction: column;
  }

  .stat-number {
    display: flex;
    align-items: baseline;
    gap: 4px;
  }

  .count {
    font-size: 36px;
    font-weight: 900;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .suffix {
    font-size: 24px;
    font-weight: 800;
    color: #a855f7;
  }

  .stat-label {
    font-size: 13px;
    color: #94a3b8;
    margin-top: 4px;
    font-weight: 500;
  }

  .about-cta {
    display: flex;
    gap: 16px;
    margin-top: 40px;
  }

  .btn {
    display: inline-flex;
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
    position: relative;
    z-index: 1;
  }

  .btn-primary {
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    color: white;
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a855f7, #d946ef);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .btn-primary:hover::before {
    opacity: 1;
  }

  .btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(139, 92, 246, 0.5);
  }

  .btn-outline {
    background: var(--card-bg);
    color: #8b5cf6;
    border: 2px solid rgba(139, 92, 246, 0.3);
  }

  .btn-outline:hover {
    border-color: #8b5cf6;
    background: rgba(139, 92, 246, 0.05);
    transform: translateY(-4px);
  }

  .about-content {
    opacity: 0;
    transform: translateX(-40px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .about-content.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .about-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateX(40px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  }

  .about-visual.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .about-image-wrapper {
    position: relative;
    width: 420px;
    height: 520px;
  }

  .about-image {
    width: 100%;
    height: 100%;
    border-radius: 24px;
    overflow: hidden;
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
    box-shadow: 0 30px 60px rgba(139, 92, 246, 0.3);
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(168, 85, 247, 0.8));
  }

  .placeholder-content {
    text-align: center;
    color: white;
  }

  .placeholder-icon {
    font-size: 80px;
    display: block;
    margin-bottom: 16px;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  .placeholder-text {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .floating-badge {
    position: absolute;
    background: var(--card-bg);
    padding: 16px 20px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    animation: float 4s ease-in-out infinite;
  }

  .badge-icon {
    font-size: 28px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
    border-radius: 12px;
  }

  .badge-content {
    display: flex;
    flex-direction: column;
  }

  .badge-number {
    font-size: 18px;
    font-weight: 900;
    color: #8b5cf6;
  }

  .badge-text {
    font-size: 12px;
    color: #94a3b8;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .badge-1 {
    top: 40px;
    right: -30px;
    animation-delay: 0s;
  }

  .badge-2 {
    bottom: 120px;
    left: -40px;
    animation-delay: 1s;
  }

  .badge-3 {
    bottom: 40px;
    right: 20px;
    animation-delay: 2s;
  }

  @media (max-width: 1024px) {
    .about-container {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    .about-content {
      order: 2;
    }

    .about-visual {
      order: 1;
    }

    .values-grid {
      grid-template-columns: 1fr;
    }

    .about-stats {
      grid-template-columns: 1fr;
    }

    .about-image-wrapper {
      width: 340px;
      height: 420px;
    }
  }

  @media (max-width: 640px) {
    .about {
      padding: 80px 0;
    }

    .section-title {
      font-size: 32px;
    }

    .about-cta {
      flex-direction: column;
    }

    .btn {
      width: 100%;
      justify-content: center;
    }

    .about-image-wrapper {
      width: 100%;
      height: 380px;
    }

    .floating-badge {
      padding: 12px 16px;
    }

    .badge-1 {
      right: 0;
    }

    .badge-2 {
      left: 0;
    }
  }
</style>
