<script>
  export let href = '#';
  export let icon = '🏠';
  export let label = 'Enlace';
  export let active = false;

  function handleClick(e) {
    // Navegar directamente a la página
    window.location.href = href;
  }
</script>

<a href={href} class="nav-link" class:active on:click={handleClick}>
  <span class="link-icon">{icon}</span>
  <span class="link-label">{label}</span>
  <span class="link-bg"></span>
  <span class="link-underline"></span>
</a>

<style>
  .nav-link {
    text-decoration: none;
    color: #475569;
    font-weight: 600;
    font-size: 15px;
    padding: 12px 20px;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
    cursor: pointer;
  }

  .link-icon {
    font-size: 18px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
  }

  .link-label {
    position: relative;
    z-index: 1;
  }

  .link-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
    border-radius: 12px;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-link:hover .link-bg {
    opacity: 1;
    transform: scale(1);
  }

  .link-underline {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #a855f7);
    border-radius: 2px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  .nav-link:hover .link-underline {
    transform: translateX(-50%) scaleX(1);
  }

  .nav-link:hover {
    color: #6366f1;
  }

  .nav-link:hover .link-icon {
    transform: scale(1.2) rotate(5deg);
  }

  .nav-link.active {
    color: #6366f1;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  }

  .nav-link.active .link-underline {
    transform: translateX(-50%) scaleX(1);
  }
</style>
