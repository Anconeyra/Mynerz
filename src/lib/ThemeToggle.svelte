<script>
  import { theme, toggleTheme } from './theme.js';
</script>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Cambiar tema">
  {#if $theme === 'light'}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  {:else}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
    z-index: 9999;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .theme-toggle:hover {
    transform: scale(1.1) rotate(10deg);
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.5);
  }

  @media (max-width: 768px) {
    .theme-toggle {
      bottom: 16px;
      right: 16px;
      width: 48px;
      height: 48px;
    }
  }
</style>