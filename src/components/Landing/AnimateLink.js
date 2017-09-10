import React from 'react'
import glamorous from 'glamorous'

import { colors } from '../../utils/constants'

const Link = glamorous.a(
  {
    textDecoration: 'none',
    marginLeft: '.4rem',
    marginRight: '.4rem',
    color: `${colors.PINK}`,
    position: 'relative',
    display: 'inline-block',
    ':after': {
      content: '""',
      height: '1px',
      display: 'block',
      borderBottom: `2px solid ${colors.RED}`,
      width: '0',
      transition: 'width 0.2s',
    },
    ':hover': {
      color: `${colors.RED}`,
      textDecoration: 'none',
    },
    ':hover:after': {
      width: '100%',
    },
  },
  props => ({
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
  })
)

const AnimateLink = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>
}

export default AnimateLink
