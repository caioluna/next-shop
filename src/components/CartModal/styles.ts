import { styled } from "@/src/styles";

export const Container = styled('div', {
  position: 'absolute',
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: 480,
  height: '100%',

  padding: 48,

  backgroundColor: '$gray800',

  h3: {
    marginTop: 24,
  },
})

export const CloseButton = styled('button', {
  marginRight: -20,
  marginTop: -20,
  border: 0,
  
  textAlign: 'right',
  background: 'transparent',
  cursor: 'pointer',
})

export const ProductsArea = styled('div', {
  height: '100%',
  margin: '32px 0'
})

export const Summary = styled('div', {
  width: '100%',
  marginBottom: 58,

  display: 'flex',
  flexDirection: 'column',
  
  'div': {
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',

    p: {
      fontSize: '$md',
      marginBottom: 8,
      color: '$gray300',
    },
    
    strong: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      fontSize: '$lg',
      textAlign: 'right',
      
      '&:last-of-type': {
        fontSize: '$xl',
      }
    }
  }
})

export const CheckoutButton = styled('button', {
  width: '100%',
  height: 69,
  padding: '20px 0',

  border: 'none',
  borderRadius: 8,

  backgroundColor: '$green500',
  color: '$white',

  fontWeight: 'bold',
  fontSize: '$md',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$green300',
  }
})