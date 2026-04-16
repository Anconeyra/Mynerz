<script>
  import { onMount, createEventDispatcher } from 'svelte';

  let visible = false;
  const dispatch = createEventDispatcher();

  onMount(() => {
    visible = true;
  });

  const services = [
    {
      icon: '🎯',
      title: 'Software a Medida',
      description: 'Desarrollamos soluciones personalizadas que se adaptan perfectamente a tus necesidades.',
      features: ['Análisis personalizado', 'Diseño UX/UI', 'Desarrollo escalable', 'Soporte 24/7'],
      color: 'from-indigo-500 to-purple-600',
      stats: '200+'
    },
    {
      icon: '☁️',
      title: 'Sistemas en la Nube',
      description: 'Implementamos soluciones cloud para trabajar desde cualquier lugar.',
      features: ['Migración cloud', 'Infraestructura escalable', 'Seguridad avanzada', 'Acceso remoto'],
      color: 'from-blue-500 to-cyan-500',
      stats: '150+'
    },
    {
      icon: '📊',
      title: 'Automatización',
      description: 'Optimizamos tus flujos de trabajo eliminando tareas repetitivas.',
      features: ['Análisis de procesos', 'RPA inteligente', 'Integraciones', 'Reducción de errores'],
      color: 'from-violet-500 to-purple-600',
      stats: '85%'
    },
    {
      icon: '📱',
      title: 'Apps Móviles',
      description: 'Conectamos tu negocio con clientes en iOS y Android.',
      features: ['Nativas e híbridas', 'Diseño intuitivo', 'Multi-plataforma', 'Actualizaciones'],
      color: 'from-fuchsia-500 to-pink-600',
      stats: '50+'
    },
    {
      icon: '🔒',
      title: 'Ciberseguridad',
      description: 'Protegemos tus sistemas contra amenazas digitales.',
      features: ['Auditorías de seguridad', 'Penetration testing', 'Protección de datos', 'Cumplimiento normativo'],
      color: 'from-red-500 to-orange-600',
      stats: '80+'
    },
    {
      icon: '🚀',
      title: 'DevOps & Cloud',
      description: 'Automatizamos despliegues y optimizamos infraestructura.',
      features: ['CI/CD', 'Contenedores', 'Infraestructura como código', 'Monitoreo 24/7'],
      color: 'from-cyan-500 to-blue-600',
      stats: '120+'
    },
    {
      icon: '🔧',
      title: 'Consultoría TI',
      description: 'Asesoramiento experto para decisiones tecnológicas estratégicas.',
      features: ['Evaluación IT', 'Estrategia digital', 'Optimización costos', 'Capacitación'],
      color: 'from-orange-500 to-red-500',
      stats: '100+'
    },
    {
      icon: '🔗',
      title: 'Integraciones',
      description: 'Conectamos todas tus herramientas para un flujo sin interrupciones.',
      features: ['APIs REST', 'ERP/CRM', 'Sincronización', 'Middleware'],
      color: 'from-emerald-500 to-teal-500',
      stats: '300+'
    }
  ];

  function getGradient(color) {
    const gradients = {
      'from-indigo-500 to-purple-600': 'linear-gradient(135deg, #6366f1, #9333ea)',
      'from-blue-500 to-cyan-500': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      'from-violet-500 to-purple-600': 'linear-gradient(135deg, #8b5cf6, #a855f7)',
      'from-fuchsia-500 to-pink-600': 'linear-gradient(135deg, #d946ef, #db2777)',
      'from-orange-500 to-red-500': 'linear-gradient(135deg, #f97316, #ef4444)',
      'from-emerald-500 to-teal-500': 'linear-gradient(135deg, #10b981, #14b8a6)',
      'from-red-500 to-orange-600': 'linear-gradient(135deg, #ef4444, #ea580c)',
      'from-cyan-500 to-blue-600': 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    };
    return gradients[color] || '';
  }
</script>

<section class="services" id="servicios">
  <div class="services-bg">
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-pattern"></div>
  </div>
  
  <div class="container">
    <div class="section-header">
      <div class="section-badge">
        <span class="badge-icon">⚡</span>
        <span>Nuestros Servicios</span>
      </div>
      <h2 class="section-title">Soluciones que <span class="highlight">Impulsan</span> tu Negocio</h2>
      <p class="section-subtitle">Tecnología de vanguardia diseñada para potenciar el crecimiento de tu empresa</p>
    </div>

    <div class="services-grid">
      {#each services as service, i}
        <div class="service-card" style="--service-color: {getGradient(service.color)}" class:visible>
          <div class="card-glow"></div>
          <div class="card-header">
            <div class="service-icon">{service.icon}</div>
            <div class="service-stat">
              <span class="stat-value">{service.stats}</span>
              <span class="stat-label">entregados</span>
            </div>
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul class="service-features">
            {#each service.features as feature}
              <li>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.2"/>
                  <path d="M5.5 9L8 11.5L12.5 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {feature}
              </li>
            {/each}
          </ul>
          <a href="index.html#contacto" class="card-link">
            <span>Cotizar este servicio</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services {
    padding: 120px 0;
    background: var(--bg-gradient);
    position: relative;
    overflow: hidden;
  }

  .services-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.4;
  }

  .bg-orb-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
    top: -20%;
    right: -10%;
  }

  .bg-orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
    bottom: -10%;
    left: -10%;
  }

  .bg-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .services::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 30px;
    margin-bottom: 24px;
    animation: fadeInDown 0.8s ease;
  }

  .badge-icon {
    font-size: 16px;
  }

  .section-badge span {
    font-size: 14px;
    font-weight: 700;
    color: #6366f1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .section-title {
    font-size: 48px;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 16px;
    letter-spacing: -1.5px;
  }

  .section-title .highlight {
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 32px;
  }

  .service-card {
    background: var(--card-bg);
    padding: 40px 32px;
    border-radius: 24px;
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1), background 0.5s ease, border-color 0.5s ease;
    cursor: pointer;
  }

  .card-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, var(--service-color) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  .service-card:hover .card-glow {
    opacity: 0.05;
  }

  .service-card.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--service-color);
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .service-card:hover::before {
    transform: scaleX(1);
  }

  .service-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.06), transparent 40%);
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
  }

  .service-card:hover::after {
    opacity: 1;
  }

  .service-card:hover {
    transform: translateY(-12px);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.2);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
  }

  .service-stat {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  .service-stat .stat-value {
    font-size: 24px;
    font-weight: 900;
    color: #6366f1;
  }

  .service-stat .stat-label {
    font-size: 11px;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .service-icon {
    width: 70px;
    height: 70px;
    background: var(--service-color);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
  }

  .card-arrow {
    display: none;
  }

  .service-card h3 {
    font-size: 24px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 12px;
    letter-spacing: -0.5px;
  }

  .service-card p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 24px;
    font-size: 15px;
  }

  .service-features {
    list-style: none;
    margin-bottom: 28px;
  }

  .service-features li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    color: #475569;
    font-size: 14px;
    font-weight: 500;
    transition: transform 0.3s ease;
  }

  .service-features li:hover {
    transform: translateX(5px);
    color: var(--text-primary);
  }

  .service-features li svg {
    color: #10b981;
    flex-shrink: 0;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 20px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    border-radius: 12px;
    text-decoration: none;
    color: #6366f1;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .card-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--service-color);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card-link:hover::before {
    opacity: 1;
  }

  .card-link:hover {
    color: white;
    transform: translateX(5px);
  }

  .card-link span, .card-link svg {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .services {
      padding: 80px 0;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .section-title {
      font-size: 36px;
    }

    .service-card {
      padding: 32px 24px;
    }
  }
</style>
