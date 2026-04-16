<script>
  import Navbar from './lib/Navbar.svelte'
  import Hero from './lib/Hero.svelte'
  import Services from './lib/Services.svelte'
  import About from './lib/About.svelte'
  import Projects from './lib/Projects.svelte'
  import Contact from './lib/Contact.svelte'
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
</script>

<main data-theme={$theme}>
  <Navbar />
  <ThemeToggle />
  <Hero />
  <Services />
  <About />
  <Projects />
  <Contact />
  <Footer />
</main>

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
    overflow-x: hidden;
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  :global([data-theme="light"]) {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-gradient: linear-gradient(180deg, #ffffff 0%, #faf5ff 100%);
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --text-muted: #94a3b8;
    --border-color: #e2e8f0;
    --card-bg: #ffffff;
    --card-shadow: rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="dark"]) {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-gradient: linear-gradient(180deg, #0f172a 0%, #1e1b2e 100%);
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --border-color: #334155;
    --card-bg: #1e293b;
    --card-shadow: rgba(0, 0, 0, 0.3);
  }

  :global(body) {
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  main {
    min-height: 100vh;
  }
</style>
