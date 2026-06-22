import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: ${colors.primary};
  z-index: 1001;
  padding: 32px 8px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const CartItem = styled.div`
  background-color: ${colors.footer};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  gap: 8px;
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartItemInfo = styled.div`
  flex: 1;
`

export const CartItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  margin-bottom: 16px;
`

export const CartItemPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.primary};
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 16px;
  color: ${colors.footer};
  font-size: 14px;
  font-weight: 700;
`

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: ${colors.footer};
  color: ${colors.primary};
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.footer};
  margin-bottom: 16px;
`

export const FormGroup = styled.div`
  margin-bottom: 8px;
`

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.footer};
  margin-bottom: 8px;
`

export const FormInput = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 8px;
  background-color: ${colors.footer};
  border: 2px solid ${(props) => (props.$hasError ? '#ff6b6b' : 'transparent')};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  font-family: Roboto, sans-serif;

  &::placeholder {
    color: rgba(230, 103, 103, 0.5);
  }
`

export const ErrorText = styled.span`
  display: block;
  font-size: 12px;
  color: #ff6b6b;
  margin-top: 4px;
`

export const FormRow = styled.div`
  display: flex;
  gap: 34px;

  ${FormGroup} {
    flex: 1;
  }
`

export const ConfirmationTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.footer};
  margin-bottom: 16px;
`

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.footer};
  margin-bottom: 16px;
`

export const EmptyCartText = styled.p`
  font-size: 14px;
  color: ${colors.footer};
  text-align: center;
  margin-top: 16px;
`
