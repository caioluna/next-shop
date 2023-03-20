import { styled } from "@/src/styles";

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
})

export const ImageContainer = styled('div', {
  width: 102,
  height: 93,
  marginRight: 20,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: 8,
  background: '$gradient'
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  p: {
    fontSize: '$md',
    color: '$gray300',
    fontWeight: 'regular',
  },

  strong: {
    marginTop: 8,
    fontSize: '$md',
    fontWeight: 'bold',
  },

  button: {
    marginTop: 'auto',
    border: 0,
    background: 'transparent',
    color: '$green500',

    fontWeight: 'bold',
    fontSize: '1rem',
  }
})