<script>
  import { grid } from '$lib/styles/grid.css'

</script>

<footer id="contact" class="{grid()}">
  <nav>
    <h4>Adresse</h4>
    <a href="https://goo.gl/maps/USFg4ZELRBuGxSTj9" rel="external" target="_blank">
      5480 boulevard St-Laurent<br>
      Montreal, QC H2T 1S8
    </a>
  </nav>

  <nav>
    <h4>Téléphone</h4>
    Studio. <a href="tel:514-271-0666" rel="external" target="_blank">514-271-0666</a>
  </nav>

  <nav>
    <h4>Email</h4>
    Questions et carrières<br>
    <div>Contact. <a href="mailto:info@monthlybarber.com" rel="external" target="_blank">info@monthlybarber.com</a></div>
  </nav>

  <nav>
    <a href="https://www.facebook.com//monthlybarber/" rel="external" target="_blank"><svg class="icon-facebook"><use xlink:href="/icons.svg#icon-facebook"></use></svg></a>
    <a href="https://www.instagram.com//monthlybarber/" rel="external" target="_blank"><svg class="icon-instagram"><use xlink:href="/icons.svg#icon-instagram"></use></svg></a>
  </nav>
</footer>

<style>
  nav {
    padding-bottom: 1rem;
    border-bottom: 2px solid;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  nav:last-child {
    border-bottom-color: transparent;
    flex-direction: row;
    align-items: flex-end;
  }

  @media screen and (max-width: 888px) {
    nav:last-child {
      justify-content: center;
    }
  }

  h4 {
    margin-bottom: 1.666rem;
    align-self: flex-start;
  }

  a {
    font-family: 'Barbier', sans-serif;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  svg {
    height: 2rem;
    width: 2rem;
    display: inline-block;
    fill: currentColor;
    margin-left: 1rem;
  }
</style>