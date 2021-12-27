import { createGlobalTheme, globalStyle, globalFontFace } from '@vanilla-extract/css'
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'


const space = {
  zero: '0',
  small: '1rem',
  medium: '2rem',
  large: '6vw'
};

const colors = {
  black: '#000',
  blackish: '#231F20',
  white: '#fff',
  grey: '#dcdcdc',
  red: '#E72349',
}

const fonts = {
  body: 'sans-serif',
  heading: 'Barbier, sans-serif'
}

const base = 15

const sizes = {
  small: '0.88em',
  base: '1rem',
  medium: '1.666rem',
  big: '3.5rem',
  huge: '4.5rem'
}

export const vars = createGlobalTheme(':root', {
  colors,
  fonts,
  sizes,
  space
})

globalFontFace('Barbier', {
  src: 'url("/fonts/barbier-regular-webfont.woff2") format("woff2")',
  fontWeight: 'normal',
  fontDisplay: 'swap'
})

globalStyle('*', {
	boxSizing: 'border-box'
})

globalStyle('html', {
  fontFamily: vars.fonts.body,
  fontSize: `${base}px`,
  scrollBehavior: 'smooth'
})

globalStyle('body', {
  margin: 0,
  color: vars.colors.blackish,
  background: vars.colors.white,
})

globalStyle('main', {
  paddingLeft: vars.space.large,
  paddingRight: vars.space.large,
  paddingBottom: vars.space.medium,
  paddingTop: vars.space.medium,
  // minHeight: '100vh'
})

globalStyle('h1, h2, h3', {
  fontFamily: vars.fonts.heading,
  fontSize: vars.sizes.huge,
  lineHeight: 1
})

globalStyle('h2, .h2, h3', {
  fontSize: vars.sizes.big,
  '@media': {
    'screen and (max-width: 888px)': {
      fontSize: vars.sizes.medium,
    }
  }
})

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  fontWeight: 'normal',
  margin: '0 0 ' + vars.space.small
})

globalStyle('h4, .h4', {
  fontSize: vars.sizes.medium,
  marginBottom: 0,
  '@media': {
    'screen and (max-width: 888px)': {
      fontSize: vars.sizes.medium,
    }
  }
})

globalStyle('h6', {
  fontFamily: vars.fonts.heading,
  fontSize: `1rem`
})

globalStyle('p', {
  fontSize: vars.sizes.base,
  fontWeight: 'normal'
})

globalStyle('small', {
  fontSize: vars.sizes.small,
  fontWeight: 'normal'
})

globalStyle('a', {
  color: 'currentColor'
})

globalStyle('[id]', {
  scrollMarginTop: vars.space.medium
})


const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'block', 'flex', 'grid'],
    flexDirection: ['row', 'column'],
    padding: space,
    columnGap: space,
    rowGap: space,
    position: ['sticky', 'relative', 'absolute'],
    fontSize: sizes
  }
});

const colorProperties = defineProperties({
  // conditions: {
  //   lightMode: {
  //     '@media': '(prefers-color-scheme: light)'
  //   },
  //   darkMode: { '@media': '(prefers-color-scheme: dark)' }
  // },
  // defaultCondition: 'darkMode',
  properties: {
    color: colors,
    background: colors
  }
});

export const fmc = createSprinkles(
  responsiveProperties,
  colorProperties
);