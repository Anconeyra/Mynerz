<script>
  import Navbar from './lib/Navbar.svelte'
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

  const processSteps = [
    {
      number: '01',
      icon: '📋',
      title: 'Análisis',
      description: 'Entendemos tus necesidades y objetivos para proponer la mejor solución.'
    },
    {
      number: '02',
      icon: '🎨',
      title: 'Diseño',
      description: 'Creamos prototipos y diseños que priorizan la experiencia de usuario.'
    },
    {
      number: '03',
      icon: '💻',
      title: 'Desarrollo',
      description: 'Programamos tu solución usando las tecnologías más modernas y adecuadas.'
    },
    {
      number: '04',
      icon: '🧪',
      title: 'Pruebas',
      description: 'Realizamos tests exhaustivos para garantizar calidad y rendimiento.'
    },
    {
      number: '05',
      icon: '🚀',
      title: 'Lanzamiento',
      description: 'Desplegamos tu proyecto y nos aseguramos que todo funcione perfectamente.'
    },
    {
      number: '06',
      icon: '🔧',
      title: 'Soporte',
      description: 'Brindamos mantenimiento y soporte continuo para tu tranquilidad.'
    }
  ];

  const technologies = {
    frontend: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
    ],
    movil: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
      { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' }
    ],
    cloud: [
      { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
      { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' }
    ],
    database: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'Cassandra', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg' }
    ],
    security: [
      { name: 'Kali Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Wireshark', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/wireshark.svg' },
      { name: 'Metasploit', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/metasploit.svg' },
      { name: 'Snyk', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/snyk.svg' },
      { name: 'OWASP', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/owasp.svg' },
      { name: 'Splunk', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/splunk.svg' },
      { name: 'Qualys', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/qualys.svg' }
    ]
  };
</script>

<div class="page-servicios">
  <Navbar />
  <ThemeToggle />
  <div class="page-header">
    <div class="container">
      <div class="header-content">
        <span class="header-icon">⚡</span>
        <h1>Nuestros Servicios</h1>
        <p class="header-subtitle">
          Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
        </p>
      </div>
    </div>
  </div>
  <Services />
  
  <section class="process-section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">
          <span>🔄</span>
          <span>Proceso de Trabajo</span>
        </div>
        <h2>¿Cómo Trabajamos?</h2>
        <p>Seguimos una metodología probada para garantizar el éxito de cada proyecto</p>
      </div>
      <div class="process-grid">
        {#each processSteps as step}
          <div class="process-card">
            <div class="process-number">{step.number}</div>
            <div class="process-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="tech-section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">
          <span>🛠️</span>
          <span>Tecnologías</span>
        </div>
        <h2>Tecnologías que Dominamos</h2>
        <p>Trabajamos con las herramientas más modernas del mercado</p>
      </div>
      
      <div class="tech-categories">
        <div class="tech-category">
          <h3 class="category-title">Frontend</h3>
          <p class="category-desc">Desarrollo de interfaces web modernas y responsivas</p>
          <div class="tech-grid">
            {#each technologies.frontend as tech}
              <div class="tech-card">
                <img class="tech-icon" src={tech.icon} alt={tech.name} />
                <span class="tech-name">{tech.name}</span>
              </div>
            {/each}
          </div>
        </div>
        
        <div class="tech-category">
          <h3 class="category-title">Backend</h3>
          <p class="category-desc">Construcción de APIs y lógica de servidor robusta</p>
          <div class="tech-grid">
            {#each technologies.backend as tech}
              <div class="tech-card">
                <img class="tech-icon" src={tech.icon} alt={tech.name} />
                <span class="tech-name">{tech.name}</span>
              </div>
            {/each}
          </div>
        </div>
        
        <div class="tech-category">
          <h3 class="category-title">Móvil</h3>
          <p class="category-desc">Desarrollo de aplicaciones nativas y multiplataforma</p>
          <div class="tech-grid">
            {#each technologies.movil as tech}
              <div class="tech-card">
                <img class="tech-icon" src={tech.icon} alt={tech.name} />
                <span class="tech-name">{tech.name}</span>
              </div>
            {/each}
          </div>
        </div>
        
        <div class="tech-category">
          <h3 class="category-title">Cloud & DevOps</h3>
          <p class="category-desc">Infraestructura en la nube y automatización</p>
          <div class="tech-grid">
            {#each technologies.cloud as tech}
              <div class="tech-card">
                <img class="tech-icon" src={tech.icon} alt={tech.name} />
                <span class="tech-name">{tech.name}</span>
              </div>
            {/each}
          </div>
        </div>
        
        <div class="tech-category">
          <h3 class="category-title">Bases de Datos</h3>
          <p class="category-desc">Gestión de datos SQL y NoSQL</p>
          <div class="tech-grid">
            {#each technologies.database as tech}
              <div class="tech-card">
                <img class="tech-icon" src={tech.icon} alt={tech.name} />
                <span class="tech-name">{tech.name}</span>
              </div>
            {/each}
          </div>
        </div>
        
        <div class="tech-category">
          <h3 class="category-title">Cybersecurity</h3>
          <p class="category-desc">Seguridad ofensiva y defensiva</p>
          <div class="tech-grid">
            {#each technologies.security as tech}
              <div class="tech-card">
                <img class="tech-icon" src={tech.icon} alt={tech.name} />
                <span class="tech-name">{tech.name}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>¿Listo para comenzar tu proyecto?</h2>
        <p>Cuéntanos tu idea y la convertiremos en realidad</p>
        <a href="contacto.html" class="btn btn-primary">
          <span class="btn-content">Solicitar Cotización</span>
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
    --border-color: #e2e8f0;
    --card-bg: #ffffff;
    --card-shadow: rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="dark"]) {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --border-color: #334155;
    --card-bg: #1e293b;
    --card-shadow: rgba(0, 0, 0, 0.3);
  }

  :global(body) {
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  .page-servicios {
    min-height: 100vh;
  }

  .page-header {
    padding: 80px 0 40px;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%);
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
    font-size: 40px;
    display: inline-block;
    margin-bottom: 12px;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .header-content h1 {
    font-size: 32px;
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

  .process-section {
    padding: 60px 0;
    background: var(--bg-primary);
  }

  .process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
  }

  .process-card {
    position: relative;
    padding: 32px 24px;
    background: var(--card-bg);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .process-card:nth-child(odd) {
    background: var(--bg-primary);
  }

  .process-card:nth-child(even) {
    background: var(--bg-secondary);
  }

  .process-card:nth-child(odd) .process-number {
    color: var(--text-primary);
  }

  .process-card:nth-child(even) .process-number {
    color: var(--text-primary);
  }

  .process-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  .process-card:hover::before {
    transform: scaleX(1);
  }

  .process-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px var(--card-shadow);
  }

.process-number {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 32px;
    font-weight: 900;
  }

  .process-card:nth-child(odd) .process-number {
    color: var(--text-primary);
  }

  .process-card:nth-child(even) .process-number {
    color: var(--text-primary);
  }

  .process-icon {
    font-size: 32px;
    margin-bottom: 12px;
    display: inline-block;
  }

  .process-card h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .process-card p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
  }

  .tech-section {
    padding: 60px 0;
    background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  }

  .tech-categories {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .tech-category {
    text-align: center;
  }

  .category-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
  }

  .category-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 2px;
  }

  .category-desc {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 20px;
    font-style: italic;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 16px;
  }

  .tech-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 20px;
    background: var(--card-bg);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .tech-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px var(--card-shadow);
    border-color: rgba(139, 92, 246, 0.3);
  }

  .tech-icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
    opacity: 0.8;
  }

  :global([data-theme="light"]) .tech-icon {
    filter: none;
    opacity: 1;
  }

  .tech-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
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

    .process-grid {
      grid-template-columns: 1fr;
    }

    .cta-content h2 {
      font-size: 32px;
    }
  }
</style>
