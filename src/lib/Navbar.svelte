<script>
  import { onMount } from 'svelte'
  import NavMenu from './NavMenu.svelte'
  import NavCTA from './NavCTA.svelte'
  import { theme } from './theme.js'
  import img2 from './images/2.png'

  let scrolled = false;
  let mobileMenuOpen = false;

  function handleScroll() {
    scrolled = window.scrollY > 50;
  }

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function handleLogoClick(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="navbar" class:scrolled>
  <div class="container nav-container">
    <a href="index.html" class="logo" on:click={handleLogoClick}>
      <div class="logo-img">
        <img src={img2} alt="Mynerz" />
      </div>
    </a>

    <NavMenu {mobileMenuOpen} />

    <NavCTA />

    <div class="hamburger" class:active={mobileMenuOpen} on:click={toggleMenu} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && toggleMenu()}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid transparent;
  }

  :global([data-theme="dark"]) .navbar {
    background: rgba(15, 23, 42, 0.9);
  }

  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(37, 99, 235, 0.1);
  }

  :global([data-theme="dark"]) .navbar.scrolled {
    background: rgba(15, 23, 42, 0.98);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  }

  .navbar.scrolled::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .logo:hover {
    transform: scale(1.02);
  }

  .logo-img {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
  }

  .logo-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .logo-text {
    font-size: 26px;
    font-weight: 800;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.5px;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background 0.3s ease;
  }

  .hamburger:hover {
    background: rgba(99, 102, 241, 0.1);
  }

  .hamburger span {
    width: 26px;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 3px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
    transform: translateX(-10px);
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (max-width: 968px) {
    .hamburger {
      display: flex;
    }
  }
</style>
