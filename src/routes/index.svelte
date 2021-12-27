<script lang="ts">
  import { grid, col } from '$lib/styles/grid.css'
  import { btn } from '$lib/styles/button.css'
  import { hero } from '$lib/styles/hero.css'

  const barbers = [
    {
      name: 'Simon Chercuitte',
      title: 'Barbier',
      insta: 'monthlybarber',
      href: 'https://online.getsquire.com/book/monthly-barber-mile-end-montreal-1/professional'
    },
    {
      name: 'Mitch Brown',
      title: 'Barbier',
      insta: '_mitchsbbarber',
      href: 'https://getsquire.pro/mitch-brown'
    },
    {
      name: 'Andy Cha',
      title: 'Barbier',
      // insta: '_mitchsbbarber',
      href: 'https://getsquire.pro/andy-cha-8'
    }
  ]
</script>

<section>
  <h3>Plus qu'une chose revient de façon mensuelle dans la vie de l'homme d'aujourd'hui: une visite chez son barbier.</h3>
</section>

<section id="reservations" class="{grid({ columns: 3 })}">
  {#each barbers as { name, href, insta, title }}
  <article>
    <center>
      <h4>{name}</h4>
      <h6>{title}{#if insta}&nbsp;<a href="https://instagram.com/{insta}" rel="external" target="_blank">@{insta}</a>{/if}</h6>
      <a class="{btn()}" {href} rel="external" target="_blank">Prendre un rendez-vous</a>
    </center>
  </article>
  {/each}
</section>

<section id="produits" class="{hero()}" style="background-image:url(https://saturdays.imgix.net/images/WiseFamilyBanner.jpg?auto=format,compress&h=931&w=1400)">
  <a class="{btn({ color: 'white' })}" href="https://wisemenscare.com/" rel="external" target="_blank">Les produits Wise</a>
</section>

<style>
  section {
    margin-bottom: 5vh;
  }
</style>

