<script lang="ts">
  import Logo from './Logo.svelte'
  import { vars } from '$lib/styles/styles.css'
</script>

<header>
  <nav class="h4">
    <a href="/#reservations">Réservations</a>
    <!-- <a href="/#produits">Produits</a> -->
    <a href="/#contact">Contact</a>
  </nav>

  <figure style="background-color: {vars.colors.grey};">
    <Logo />
    <figcaption>Monthly Studio</figcaption>
  </figure>
</header>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 10;

    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  nav a {
    display: inline-block;
    padding: 1rem;
  }

  @media screen and (max-width: 888px) {
    nav a {
      font-size: 1.33rem;
      padding: 1rem 0.25rem;
    }
  }

  figure {
    margin: 4rem 0 0;
    padding: 16vw;
  }

  figcaption {
    font-size: 0;
  }

  @media screen and (max-width: 888px) {
    figure {
      margin-top: 3rem;
    }
  }
</style>