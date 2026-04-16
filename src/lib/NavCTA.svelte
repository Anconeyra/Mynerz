<script>
  function handleClick(e) {
    // Navegar directamente a la página de contacto
    window.location.href = 'contacto.html';
  }
</script>

<div class="nav-cta">
  <a href="contacto.html" class="btn-nav" on:click={handleClick}>
    <span class="btn-icon">🚀</span>
    <span class="btn-text">Cotizar</span>
    <span class="btn-bg"></span>
  </a>
</div>

<style>
  .nav-cta {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }

  .btn-nav {
    padding: 14px 32px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    text-decoration: none;
    border-radius: 14px;
    font-weight: 700;
    font-size: 15px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-icon {
    font-size: 18px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
  }

  .btn-text {
    position: relative;
    z-index: 1;
  }

  .btn-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .btn-nav:hover .btn-bg {
    opacity: 1;
  }

  .btn-nav:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.45);
  }

  .btn-nav:hover .btn-icon {
    transform: scale(1.2) rotate(10deg);
  }

  @media (max-width: 968px) {
    .nav-cta {
      display: none;
    }
  }
</style>
