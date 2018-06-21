import { css } from 'emotion'

export const fadeIn = () => css`
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: rotateY(-180deg);
    }

    to {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
`

export const shakeElement = id =>
  document
    .getElementById(id)
    .animate(
      [
        { transform: 'translate3d(-1px, 0, 0)' },
        { transform: 'translate3d(2px, 0, 0)' },
        { transform: 'translate3d(-4px, 0, 0)' },
        { transform: 'translate3d(4px, 0, 0)' },
        { transform: 'translate3d(-4px, 0, 0)' },
        { transform: 'translate3d(4px, 0, 0)' },
        { transform: 'translate3d(-4px, 0, 0)' },
        { transform: 'translate3d(2px, 0, 0)' },
        { transform: 'translate3d(-1px, 0, 0)' }
      ],
      {
        easing: 'cubic-bezier(.36,.07,.19,.97)',
        fill: 'both',
        duration: 800
      }
    )

export const fadeAway = id =>
  document
    .getElementById(id)
    .animate(
      [
        { opacity: 1, transform: 'translateX(0px)' },
        { opacity: 0, transform: 'translateX(400px)' }
      ],
      {
        duration: 600,
        iterations: 1,
        easing: 'ease-in-out'
      }
    )
