<script lang="ts">
  import Logo from './Logo.svelte'

</script>

<header>
  <nav class="h4">
    <a href="/#reservations">Réservations</a>
    <a href="/#produits">Produits</a>
    <a href="/#contact">Contact</a>
  </nav>

  <figure>
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
  }

  nav a {
    text-decoration: none;
    display: inline-block;
    padding: 1rem;
  }

  @media screen and (max-width: 888px) {
    nav a {
      font-size: 1.33rem;
      padding: 1rem 0.25rem;
    }
  }

  nav a:hover,
  nav a:focus {
    text-decoration: underline;
    text-decoration-thickness: 0.1em;
    text-underline-offset: 0.2em;
  }

  figure {
    margin: 4rem 0 0;
    padding: 16vw;
  }

  figcaption {
    font-size: 0;
  }
</style>