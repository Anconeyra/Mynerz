<script>
  import { onMount } from 'svelte';

  let visible = false;
  let formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  };

  let notification = null;

  onMount(() => {
    visible = true;
  });

  const services = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'software', label: '💻 Software a Medida' },
    { value: 'cloud', label: '☁️ Sistemas en la Nube' },
    { value: 'automation', label: '📊 Automatización' },
    { value: 'mobile', label: '📱 Apps Móviles' },
    { value: 'consulting', label: '🔧 Consultoría TI' },
    { value: 'integration', label: '🔗 Integraciones' },
    { value: 'other', label: '❓ Otro' }
  ];

  const budgets = [
    { value: '', label: 'Selecciona un rango' },
    { value: 'small', label: '$500 - $2,000' },
    { value: 'medium', label: '$2,000 - $10,000' },
    { value: 'large', label: '$10,000 - $50,000' },
    { value: 'enterprise', label: '$50,000+' }
  ];

  const contactInfo = [
    { 
      icon: '📍', 
      title: 'Ubicación', 
      value: 'Arequipa, Perú',
      subtitle: 'Atención en todo el país',
      color: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    },
    { 
      icon: '📧', 
      title: 'Email', 
      value: 'anconeyrafsuyo@gmail.com',
      subtitle: 'Respondemos en 24h',
      color: 'linear-gradient(135deg, #8b5cf6, #a855f7)'
    },
    { 
      icon: '📱', 
      title: 'Teléfono', 
      value: '+51 917 394 464',
      subtitle: 'Lun - Vie, 9am - 6pm',
      color: 'linear-gradient(135deg, #a855f7, #d946ef)'
    },
    { 
      icon: '💼', 
      title: 'LinkedIn', 
      value: 'Mynerz',
      subtitle: 'Conecta con nosotros',
      link: 'https://www.linkedin.com/company/mynerz/',
      color: 'linear-gradient(135deg, #06b6d4, #14b8a6)'
    }
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      showNotification('Por favor completa los campos requeridos', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Por favor ingresa un email válido', 'error');
      return;
    }

    const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;
    const budgetLabel = budgets.find(b => b.value === formData.budget)?.label || 'No especificado';

    const whatsappMessage = `
*Nuevo contacto desde Mynerz*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone || 'No proporcionado'}
*Empresa:* ${formData.company || 'No proporcionada'}
*Servicio de interés:* ${serviceLabel}
*Presupuesto:* ${budgetLabel}
*Proyecto:* ${formData.message}
`.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/51917394464?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    showNotification('¡Mensaje enviado! Serás redirigido a WhatsApp para completar el envío.', 'success');
    formData = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' };
  }

  function showNotification(message, type) {
    notification = { message, type };
    setTimeout(() => {
      notification = null;
    }, 5000);
  }

  function closeNotification() {
    notification = null;
  }
</script>

<section class="contact" id="contacto">
  {#if notification}
    <div class="notification notification-{notification.type}">
      <div class="notification-content">
        <span class="notification-icon">
          {#if notification.type === 'success'}✓{:else}⚠{/if}
        </span>
        <span>{notification.message}</span>
      </div>
      <button class="notification-close" on:click={closeNotification}>×</button>
    </div>
  {/if}

  <div class="contact-bg">
    <div class="gradient-shape shape-1"></div>
    <div class="gradient-shape shape-2"></div>
  </div>

  <div class="container contact-container">
    <div class="contact-info" class:visible>
      <div class="section-badge">
        <span>💬</span>
        <span>Contáctanos</span>
      </div>

      <h2 class="section-title">
        ¿Listo para Comenzar tu <span class="highlight">Proyecto?</span>
      </h2>

      <p class="contact-intro">
        Cuéntanos sobre tu idea y te ayudaremos a convertirla en realidad. 
        Nuestro equipo de expertos está listo para escucharte.
      </p>

      <div class="contact-grid">
        {#each contactInfo as item}
          <div class="contact-card" style="--card-color: {item.color}">
            <div class="contact-icon">{item.icon}</div>
            <div class="contact-details">
              <h3>{item.title}</h3>
              <p class="contact-value">{item.value}</p>
              <p class="contact-subtitle">{item.subtitle}</p>
            </div>
          </div>
        {/each}
      </div>

      <div class="social-section">
        <h4>Síguenos en redes</h4>
        <div class="social-links">
          <a href="https://www.linkedin.com/company/mynerz/" target="_blank" class="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <form class="contact-form" class:visible on:submit={handleSubmit}>
      <div class="form-header">
        <h3>Envíanos un mensaje</h3>
        <p>Completa el formulario y te contactaremos pronto</p>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label for="name">Nombre completo *</label>
          <input
            id="name"
            type="text"
            bind:value={formData.name}
            placeholder="Ej: Juan Pérez"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Correo electrónico *</label>
          <input
            id="email"
            type="email"
            bind:value={formData.email}
            placeholder="juan@empresa.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="phone">Teléfono</label>
          <input
            id="phone"
            type="tel"
            bind:value={formData.phone}
            placeholder="+51 917 394 464"
          />
        </div>

        <div class="form-group">
          <label for="company">Empresa</label>
          <input
            id="company"
            type="text"
            bind:value={formData.company}
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div class="form-group full-width">
          <label for="service">Servicio de interés *</label>
          <select id="service" bind:value={formData.service} required>
            {#each services as service}
              <option value={service.value}>{service.label}</option>
            {/each}
          </select>
        </div>

        <div class="form-group full-width">
          <label for="budget">Presupuesto estimado</label>
          <select id="budget" bind:value={formData.budget}>
            {#each budgets as budget}
              <option value={budget.value}>{budget.label}</option>
            {/each}
          </select>
        </div>

        <div class="form-group full-width">
          <label for="message">Cuéntanos sobre tu proyecto *</label>
          <textarea
            id="message"
            bind:value={formData.message}
            rows="5"
            placeholder="Describe tu proyecto, objetivos y cualquier detalle importante..."
            required
          ></textarea>
        </div>
      </div>

      <button type="submit" class="btn-submit">
        <span>Enviar Mensaje</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <p class="form-privacy">
        🔒 Tus datos están seguros. No compartimos tu información con terceros.
      </p>
    </form>
  </div>
</section>

<style>
  .contact {
    padding: 120px 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  }

  .contact-bg {
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
    background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
    top: -10%;
    right: -5%;
  }

  .shape-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
    bottom: 10%;
    left: -10%;
  }

  .notification {
    position: fixed;
    top: 100px;
    right: 24px;
    padding: 18px 24px;
    border-radius: 16px;
    color: white;
    font-weight: 600;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 12px;
    max-width: 450px;
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .notification.show {
    opacity: 1;
    transform: translateX(0);
  }

  .notification-success {
    background: linear-gradient(135deg, #10b981, #059669);
  }

  .notification-error {
    background: linear-gradient(135deg, #ef4444, #dc2626);
  }

  .notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }

  .notification-icon {
    font-size: 20px;
    font-weight: 900;
  }

  .notification-close {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
  }

  .notification-close:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
    position: relative;
    z-index: 1;
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
    font-size: 42px;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 20px;
    line-height: 1.2;
    letter-spacing: -1px;
  }

  .section-title .highlight {
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .contact-intro {
    font-size: 17px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 40px;
  }

  .contact-card {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    background: var(--card-bg);
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .contact-card:hover {
    transform: translateX(10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    border-color: transparent;
  }

  .contact-icon {
    width: 56px;
    height: 56px;
    background: var(--card-color);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    flex-shrink: 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .contact-details {
    flex: 1;
  }

  .contact-details h3 {
    font-size: 14px;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
  }

  .contact-value {
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .contact-subtitle {
    font-size: 13px;
    color: #94a3b8;
  }

  .social-section {
    margin-top: 40px;
    padding-top: 32px;
    border-top: 1px solid #e2e8f0;
  }

  .social-section h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-secondary);
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .social-links {
    display: flex;
    gap: 12px;
  }

  .social-link {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  .social-link:hover {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.4);
  }

  .contact-info {
    opacity: 0;
    transform: translateX(-40px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .contact-info.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .contact-form {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
    opacity: 0;
    transform: translateX(40px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  }

  .contact-form.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .form-header {
    margin-bottom: 32px;
  }

  .form-header h3 {
    font-size: 24px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .form-header p {
    color: var(--text-secondary);
    font-size: 15px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 28px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group.full-width {
    grid-column: 1 / -1;
  }

  .form-group label {
    font-size: 14px;
    font-weight: 600;
    color: #475569;
    margin-bottom: 8px;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 14px 18px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-family: inherit;
    font-size: 15px;
    color: var(--text-primary);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: var(--card-bg);
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
    transform: translateY(-2px);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .form-group select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='%238b5cf6'%3E%3Cpath d='M5.5 7.5L10 12L14.5 7.5' stroke='%238b5cf6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 45px;
  }

  .btn-submit {
    width: 100%;
    padding: 18px 32px;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    color: white;
    border: none;
    border-radius: 14px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    overflow: hidden;
  }

  .btn-submit::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a855f7, #d946ef);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .btn-submit:hover:not(:disabled)::before {
    opacity: 1;
  }

  .btn-submit:hover:not(:disabled) {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(139, 92, 246, 0.5);
  }

  .btn-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .btn-submit span {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .form-privacy {
    text-align: center;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e2e8f0;
    font-size: 13px;
    color: #94a3b8;
  }

  @media (max-width: 1024px) {
    .contact-container {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    .contact-info {
      order: 2;
    }

    .contact-form {
      order: 1;
    }
  }

  @media (max-width: 640px) {
    .contact {
      padding: 80px 0;
    }

    .section-title {
      font-size: 32px;
    }

    .contact-form {
      padding: 28px 20px;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }

    .notification {
      left: 24px;
      right: 24px;
      max-width: none;
    }
  }
</style>
