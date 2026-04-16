<script>
  import NavInicio from './NavInicio.svelte'
  import NavServicios from './NavServicios.svelte'
  import NavNosotros from './NavNosotros.svelte'
  import NavProyectos from './NavProyectos.svelte'
  import NavContacto from './NavContacto.svelte'

  export let mobileMenuOpen = false;
</script>

<ul class="nav-menu" class:active={mobileMenuOpen}>
  <li><NavInicio /></li>
  <li><NavServicios /></li>
  <li><NavNosotros /></li>
  <li><NavProyectos /></li>
  <li><NavContacto /></li>
</ul>

<style>
  .nav-menu {
    display: flex;
    list-style: none;
    gap: 8px;
  }

  .nav-menu li {
    display: flex;
  }

  @media (max-width: 968px) {
    .nav-menu {
      display: none;
    }

    .nav-menu.active {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--card-bg);
      flex-direction: column;
      padding: 20px;
      gap: 10px;
      box-shadow: 0 20px 40px var(--card-shadow);
      animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-menu.active li {
      width: 100%;
    }

    .nav-menu.active :global(.nav-link) {
      padding: 14px 18px;
      width: 100%;
      justify-content: flex-start;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
</style>
