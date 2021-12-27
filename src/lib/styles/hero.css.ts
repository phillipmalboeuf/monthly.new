import { recipe } from '@vanilla-extract/recipes'
import { fmc, vars } from './styles.css'
import { calc } from '@vanilla-extract/css-utils'

export const hero = recipe({
  base: [{
    backgroundColor: vars.colors.grey,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: calc.negate(vars.space.large),
    width: calc(vars.space.large).multiply(2).add('100%').toString(),
    '@media': {
      'screen and (max-width: 888px)': {
        backgroundSize: 'cover'
      }
    }
  }],

  variants: {
    size: {
      small: fmc({ padding: 'small' }),
      medium: [fmc({ padding: 'medium', fontSize: 'medium' }), { minHeight: '33vw' }],
      large: fmc({ padding: 'large' })
    },
  },

  defaultVariants: {
    size: 'medium'
  }
})