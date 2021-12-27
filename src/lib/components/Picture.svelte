<script lang="ts">
  export let url:string
  export let title:string
  export let small = false
  export let ar:number = undefined
  export let eager = false
</script>

<style>
  img {
    width: 100%;
    max-width: 100%;
  }
</style>

<picture>
  {#if small}
<source srcSet="{url}?w=400{ar ? `&h=${Math.round(ar * 400)}&fit=fill&f=face` : ''}&fm=avif" type="image/avif" media="(max-width: 900px)" />
<source srcSet="{url}?w=400{ar ? `&h=${Math.round(ar * 400)}&fit=fill&f=face` : ''}" media="(max-width: 900px)" />
<source srcSet="{url}?w=600{ar ? `&h=${Math.round(ar * 600)}&fit=fill&f=face` : ''}&fm=avif" type="image/avif" media="(max-width: 1200px)" />
<source srcSet="{url}?w=600{ar ? `&h=${Math.round(ar * 600)}&fit=fill&f=face` : ''}" media="(max-width: 1200px)" />
<source srcSet="{url}?w=800{ar ? `&h=${Math.round(ar * 800)}&fit=fill&f=face` : ''}&fm=avif" type="image/avif" />
<img src="{url}?w=800{ar ? `&h=${Math.round(ar * 800)}&fit=fill&f=face` : ''}" alt="{title}" loading={eager ? "eager" : "lazy"} />
  {:else}
<source srcSet="{url}?w=900{ar ? `&h=${Math.round(ar * 900)}&fit=fill` : ''}&fm=avif" type="image/avif" media="(max-width: 900px)" />
<source srcSet="{url}?w=900{ar ? `&h=${Math.round(ar * 900)}&fit=fill` : ''}" media="(max-width: 900px)" />
<source srcSet="{url}?w=1200{ar ? `&h=${Math.round(ar * 1200)}&fit=fill` : ''}&fm=avif" type="image/avif" media="(max-width: 1200px)" />
<source srcSet="{url}?w=1800{ar ? `&h=${Math.round(ar * 1800)}&fit=fill` : ''}&fm=avif" type="image/avif" />
<img style={ar && `aspect-ratio: 1800 / ${Math.round(ar * 1800)}`} src="{url}?w=1800{ar ? `&h=${Math.round(ar * 1800)}&fit=fill` : ''}" alt="{title}" loading={eager ? "eager" : "lazy"} />
  {/if}
</picture>