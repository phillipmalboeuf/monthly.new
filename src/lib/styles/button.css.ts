import { recipe } from '@vanilla-extract/recipes'
import { fmc, vars } from './styles.css'

export const btn = recipe({
  base: [{
    borderRadius: 0,
    cursor: "pointer",
    textDecoration: 'none',
    lineHeight: 1,
    border: '2px solid',
    display: 'inline-block',
    fontFamily: vars.fonts.heading,
    selectors: {
      '&:hover, &:focus': {
        color: vars.colors.red,
        textDecoration: 'none'
        // background: 'var(--hover-color)',
        // border: '1px solid transparent'
      }
    }
  }],

  variants: {
    color: {
      outline: [fmc({ color: 'black' }), { background: 'transparent' }],
      white: [fmc({ background: 'white', color: 'black' }), ],
    },
    size: {
      small: fmc({ padding: 'small' }),
      medium: fmc({ padding: 'small', fontSize: 'medium' }),
      large: fmc({ padding: 'large' })
    },
    rounded: {
      true: { borderRadius: 999 }
    },
    full: {
      true: { width: '100%', textAlign: 'center', marginBottom: vars.space.small }
    }
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    // {
    //   variants: {
    //     color: 'neutral',
    //     size: 'large'
    //   },
    //   style: {
    //     background: 'ghostwhite'
    //   }
    // }
  ],

  defaultVariants: {
    color: 'outline',
    size: 'medium'
  }
})