import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  position: 'relative',

  width: 48,
  height: 48,
  padding: 12,

  border: 'none',
  borderRadius: 6,
  backgroundColor: '$gray800',

  cursor: 'pointer',

  img: {
    opacity: 0.5,
    width: 24,
    height: 24,
  },
  
  '&:hover': {
    img: {
      opacity: 1,
    },
  }
})

export const Label = styled('div', {
  position: 'absolute',
  top: -10,
  right: -10,

  width: 24,
  height: 24,

  padding: 12,

  fontWeight: 'bold',
  backgroundColor: '$green500',
  color: '$white',

  border: '3px solid $gray900',
  borderRadius: '50%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})