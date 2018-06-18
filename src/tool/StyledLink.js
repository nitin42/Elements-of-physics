import React from 'react'
import { css } from 'emotion'
import { Link } from '@reach/router'

export const StyledLink = props => (
  <Link
    className={css`
      text-decoration: none;
      text-align: center;
      color: white;
      width: ${props.width || 'none'};
      font-size: ${props.fontSize || '25px'};
      padding: 10px;
      border-radius: 40px;
      background: linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
      );

      &:focus {
        outline: none;
      }
    `}
    to={props.to}
  >
    {props.children}
  </Link>
)
