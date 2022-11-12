<script lang="ts">
  import { grid, col } from '$lib/styles/grid.css'
  import { btn } from '$lib/styles/button.css'
  import { hero } from '$lib/styles/hero.css'
  import Picture from '$lib/components/Picture.svelte'

  const barbers = [
    {
      name: 'Simon Chercuitte',
      title: 'Barbier',
      insta: 'monthlybarber',
      href: 'https://online.getsquire.com/book/monthly-barber-mile-end-montreal-1/professional',
      photo: 'https://images.ctfassets.net/igsltvx7i8jl/2bpnU0hNypJCYzwocYngGX/72d25b87e4d368b0ba4444f05d6077fb/simon.jpg'
    },
    {
      name: 'Calum Anderson',
      title: 'Barbier',
      // insta: '',
      href: 'https://online.getsquire.com/book/monthly-barber-mile-end-montreal-1/professional',
      photo: 'https://images.ctfassets.net/igsltvx7i8jl/5JFYHhPWVrEd9W1EruG9Ss/1b435635f3e7ee3b3a9b770d62fba473/Barber.png'
    },
    // {
    //   name: 'Mitch Brown',
    //   title: 'Barbier',
    //   insta: '_mitchsbbarber',
    //   href: 'https://online.getsquire.com/book/mitch-brown-barber-montreal/professional/mitch-brown',
    //   photo: 'https://images.ctfassets.net/igsltvx7i8jl/6R5V61HjIzvwSn0yJuKVSm/23529110f792afbb50a6889b9262c807/mitch.jpg'
    // },
    {
      name: 'Andy Cha',
      title: 'Barbier',
      // insta: '_mitchsbbarber',
      href: 'https://online.getsquire.com/book/andy-cha-montreal/barber/andy-cha-8',
      photo: 'https://images.ctfassets.net/igsltvx7i8jl/5N0raa9TQOAzp4jU9T6oJS/adb00155216003310fed25254f532353/andy.jpg'
    }
  ]

  const map = 'https://images.ctfassets.net/igsltvx7i8jl/6VqXMqVrHMeOd6ptrEih2d/c74219985ae574d9597d06b03cae533f/map_monthly.png'

  function click(name: string) {
    // @ts-ignore
    ga && ga("send", "event", "reservations", "click", name)
  }
</script>

<svelte:head>
  <title>Barber – Monthly Studio</title>
  <meta property="og:title" content="Barber – Monthly Studio" />
  <meta name="twitter:title" content="Barber – Monthly Studio">

  <meta name="description" content="Plus qu'une chose revient de façon mensuelle dans la vie de l'homme d'aujourd'hui: une visite chez son barbier.">
  <meta property="og:description" content="Plus qu'une chose revient de façon mensuelle dans la vie de l'homme d'aujourd'hui: une visite chez son barbier.">
  <meta name="twitter:description" content="Plus qu'une chose revient de façon mensuelle dans la vie de l'homme d'aujourd'hui: une visite chez son barbier.">

  <meta property="og:image" content="{map}?w=1200&h=630">
  <meta name="twitter:image" content="{map}?w=600&h=314">
  <meta name="twitter:card" value="summary_large_image">
</svelte:head>

<section class="right">
  <h3>Plus qu'une chose revient de façon mensuelle dans la vie de l'homme d'aujourd'hui: une visite chez son barbier.</h3>
</section>

<section id="reservations" class="{grid({ columns: 3 })}">
  {#each barbers as { name, href, insta, title, photo }}
  <article>
    <center>
      <a {href} on:click={() => click(name)} rel="external" target="_blank">
        <figure>
          <Picture url={photo} title={name} small ar={0.85} />
        </figure>
      </a>
      <h4>{name}</h4>
      <h6>{title}{#if insta}&nbsp;<a href="https://instagram.com/{insta}" rel="external" target="_blank">@{insta}</a>{/if}</h6>
      <a class="{btn()}" {href} on:click={() => click(name)} rel="external" target="_blank">Prendre un rendez-vous</a>
    </center>
  </article>
  {/each}
</section>

<section>
  <a class="h3" href="https://goo.gl/maps/USFg4ZELRBuGxSTj9" rel="external" target="_blank">
    <h3>Nous avons déménagé!</h3>
    <figure>
      <Picture url={map} title="New Monthly Studio location" ar={0.42} />
    </figure>
  </a>
</section>

<!-- <section id="produits" class="{hero()}" style="background-image:url(https://saturdays.imgix.net/images/WiseFamilyBanner.jpg?auto=format,compress&h=931&w=1400)">
  <a class="{btn({ color: 'white' })}" href="https://wisemenscare.com/" rel="external" target="_blank">Les produits Wise</a>
</section> -->

<style>
  section {
    margin-bottom: 5vh;
  }

  section.right {
    text-align: right;
  }

  @media screen and (max-width: 888px) {
    section.tagline {
      text-align: center;
    }
  }

  figure {
    margin: 0 0 1rem;
  }

  article figure {
    filter: saturate(0.8) hue-rotate(-10deg);
  }

  /* @media screen and (max-width: 888px) {
    figure {
      margin: 0 2rem 1rem;
    }
  } */

  a:hover ~ a,
  a:focus ~ a {
    color: #E72349;
  }
</style>

