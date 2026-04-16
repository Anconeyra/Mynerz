<script>
  import { onMount } from 'svelte';

  let visible = false;
  let activeFilter = 'todos';

  onMount(() => {
    visible = true;
  });

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'movil', label: 'Móvil' },
    { id: 'cloud', label: 'Cloud' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Empresarial',
      description: 'ERP personalizado para empresa de retail con gestión de inventarios, ventas y reportes en tiempo real.',
      category: 'web',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '💼',
      tags: ['Web', 'ERP', 'Dashboard'],
      client: 'Retail Perú SAC',
      year: '2025'
    },
    {
      title: 'App de Delivery',
      description: 'Aplicación móvil para restaurante local con pedidos en línea, seguimiento y pagos integrados.',
      category: 'movil',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '🍔',
      tags: ['iOS', 'Android', 'Delivery'],
      client: 'FastFood Perú',
      year: '2025'
    },
    {
      title: 'Plataforma E-commerce',
      description: 'Tienda online con integración de pagos, gestión de productos y panel administrativo completo.',
      category: 'web',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '🛒',
      tags: ['E-commerce', 'Pagos', 'Web'],
      client: 'ModaStyle',
      year: '2024'
    },
    {
      title: 'Sistema de Reservas',
      description: 'Plataforma cloud para gestión de reservas de hotel con disponibilidad en tiempo real.',
      category: 'cloud',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: '🏨',
      tags: ['Cloud', 'Reservas', 'API'],
      client: 'Hotel Andino',
      year: '2024'
    },
    {
      title: 'App de Finanzas',
      description: 'Aplicación móvil para seguimiento de gastos personales con sincronización bancaria.',
      category: 'movil',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      icon: '💰',
      tags: ['Fintech', 'iOS', 'Android'],
      client: 'FinTech Perú',
      year: '2025'
    },
    {
      title: 'Portal Corporativo',
      description: 'Sitio web corporativo con CMS personalizado y integración con redes sociales.',
      category: 'web',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      icon: '🏢',
      tags: ['CMS', 'Web', 'Corporativo'],
      client: 'Grupo Empresarial',
      year: '2024'
    }
  ];

  $: filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
</script>

<section class="projects" id="proyectos">
  <div class="container">
    <div class="section-header">
      <div class="section-badge">
        <span>🚀</span>
        <span>Portafolio</span>
      </div>
      <h2 class="section-title">
        Proyectos que <span class="highlight">Hablan por Sí Mismos</span>
      </h2>
      <p class="section-subtitle">
        Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos digitales
      </p>
    </div>

    <div class="projects-filter">
      {#each filters as filter}
        <button 
          class="filter-btn" 
          class:active={activeFilter === filter.id}
          on:click={() => activeFilter = filter.id}>
          {filter.label}
        </button>
      {/each}
    </div>

    <div class="projects-grid">
      {#each filteredProjects as project, i}
        <div class="project-card" style="transition-delay: {i * 80}ms" class:visible>
          <div class="project-image" style="background: {project.gradient}">
            <div class="project-overlay">
              <div class="overlay-content">
                <span class="project-icon">{project.icon}</span>
                <div class="project-meta">
                  <span class="meta-item">{project.client}</span>
                  <span class="meta-divider">•</span>
                  <span class="meta-item">{project.year}</span>
                </div>
                <a href="index.html#contacto" class="btn-project">
                  <span>Ver Detalles</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="projects-cta">
      <p>¿Tienes un proyecto en mente?</p>
      <a href="index.html#contacto" class="btn btn-primary">
        <span class="btn-content">Hablemos de tu Idea</span>
      </a>
    </div>
  </div>
</section>

<style>
  .projects {
    padding: 120px 0;
    background: var(--bg-secondary);
    position: relative;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
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

  .section-title {
    font-size: 44px;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 16px;
    letter-spacing: -1px;
  }

  .section-title .highlight {
    display: block;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 8px;
  }

  .section-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .projects-filter {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 48px;
    flex-wrap: wrap;
  }

  .filter-btn {
    padding: 12px 28px;
    background: var(--card-bg);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    font-weight: 600;
    font-size: 15px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .filter-btn:hover {
    border-color: #a855f7;
    color: #a855f7;
    transform: translateY(-2px);
  }

  .filter-btn.active {
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    border-color: transparent;
    color: white;
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.35);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 32px;
    margin-bottom: 60px;
  }

  .project-card {
    background: var(--card-bg);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 15px var(--card-shadow);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(30px);
    border: 1px solid var(--border-color);
  }

  .project-card.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .project-card:hover {
    transform: translateY(-12px);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(139, 92, 246, 0.1);
  }

  .project-image {
    height: 240px;
    position: relative;
    overflow: hidden;
  }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(139, 92, 246, 0.95));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .overlay-content {
    text-align: center;
    color: white;
    padding: 30px;
    transform: translateY(20px);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-card:hover .overlay-content {
    transform: translateY(0);
  }

  .project-icon {
    font-size: 56px;
    display: block;
    margin-bottom: 16px;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .project-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 24px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
  }

  .meta-divider {
    color: rgba(255, 255, 255, 0.5);
  }

  .btn-project {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: var(--card-bg);
    color: #8b5cf6;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .btn-project:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  .project-info {
    padding: 28px;
  }

  .project-info h3 {
    font-size: 20px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 12px;
    letter-spacing: -0.5px;
  }

  .project-info p {
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .project-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .tag {
    padding: 6px 14px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.08));
    color: #8b5cf6;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid rgba(139, 92, 246, 0.15);
  }

  .projects-cta {
    text-align: center;
    padding: 60px 40px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(168, 85, 247, 0.05));
    border-radius: 24px;
    border: 1px solid rgba(139, 92, 246, 0.1);
  }

  .projects-cta p {
    font-size: 20px;
    color: #475569;
    margin-bottom: 24px;
    font-weight: 600;
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

  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .projects {
      padding: 80px 0;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .section-title {
      font-size: 32px;
    }

    .projects-filter {
      gap: 8px;
    }

    .filter-btn {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
</style>
