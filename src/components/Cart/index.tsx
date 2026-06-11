import React, { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import {
  Overlay,
  Sidebar,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemTitle,
  CartItemPrice,
  RemoveButton,
  TotalRow,
  CheckoutButton,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormRow,
  ConfirmationTitle,
  ConfirmationText,
  EmptyCartText
} from './styles'
import { colors } from '../../styles'

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

const formatarPreco = (preco: number) =>
  preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const Cart = () => {
  const { items, removeItem, clearCart, isOpen, closeCart, totalPrice } = useCart()
  const [step, setStep] = useState<CheckoutStep>('cart')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderId, setOrderId] = useState('')

  // Delivery form state
  const [receiver, setReceiver] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  // Payment form state
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiresMonth, setExpiresMonth] = useState('')
  const [expiresYear, setExpiresYear] = useState('')

  const handleClose = () => {
    closeCart()
    if (step === 'confirmation') {
      setStep('cart')
      clearCart()
      resetForms()
    }
  }

  const resetForms = () => {
    setReceiver('')
    setAddress('')
    setCity('')
    setZipCode('')
    setNumber('')
    setComplement('')
    setCardName('')
    setCardNumber('')
    setCvv('')
    setExpiresMonth('')
    setExpiresYear('')
    setOrderId('')
  }

  const handleCheckout = async () => {
    setIsSubmitting(true)
    try {
      const body = {
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver,
          address: {
            description: address,
            city,
            zipCode,
            number: parseInt(number) || 0,
            complement
          }
        },
        payment: {
          card: {
            name: cardName,
            number: cardNumber,
            code: parseInt(cvv) || 0,
            expires: {
              month: parseInt(expiresMonth) || 0,
              year: parseInt(expiresYear) || 0
            }
          }
        }
      }

      const response = await fetch(
        'https://api-ebac.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      )

      const data = await response.json()
      setOrderId(data.orderId || '')
      setStep('confirmation')
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleConcluir = () => {
    closeCart()
    clearCart()
    resetForms()
    setStep('cart')
  }

  if (!isOpen) return null

  const renderCart = () => (
    <>
      {items.length === 0 ? (
        <EmptyCartText>
          O carrinho está vazio, adicione pelo menos um produto para continuar
          com a compra
        </EmptyCartText>
      ) : (
        <>
          {items.map((item) => (
            <CartItem key={item.id}>
              <CartItemImage src={item.foto} alt={item.nome} />
              <CartItemInfo>
                <CartItemTitle>{item.nome}</CartItemTitle>
                <CartItemPrice>{formatarPreco(item.preco)}</CartItemPrice>
              </CartItemInfo>
              <RemoveButton onClick={() => removeItem(item.id)}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4H3.33333H14"
                    stroke={colors.primary}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.33301 4V2.66667C5.33301 2.31305 5.47348 1.97391 5.72353 1.72386C5.97358 1.47381 6.31272 1.33334 6.66634 1.33334H9.33301C9.68663 1.33334 10.0258 1.47381 10.2758 1.72386C10.5259 1.97391 10.6663 2.31305 10.6663 2.66667V4M12.6663 4V13.3333C12.6663 13.687 12.5259 14.0261 12.2758 14.2761C12.0258 14.5262 11.6866 14.6667 11.333 14.6667H4.66634C4.31272 14.6667 3.97358 14.5262 3.72353 14.2761C3.47348 14.0261 3.33301 13.687 3.33301 13.3333V4H12.6663Z"
                    stroke={colors.primary}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </RemoveButton>
            </CartItem>
          ))}
          <TotalRow>
            <span>Valor total</span>
            <span>{formatarPreco(totalPrice)}</span>
          </TotalRow>
          <CheckoutButton onClick={() => setStep('delivery')}>
            Continuar com a entrega
          </CheckoutButton>
        </>
      )}
    </>
  )

  const renderDelivery = () => (
    <>
      <FormTitle>Entrega</FormTitle>
      <FormGroup>
        <FormLabel>Quem irá receber</FormLabel>
        <FormInput
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Endereço</FormLabel>
        <FormInput
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Cidade</FormLabel>
        <FormInput
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </FormGroup>
      <FormRow>
        <FormGroup>
          <FormLabel>CEP</FormLabel>
          <FormInput
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Número</FormLabel>
          <FormInput
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormGroup>
      </FormRow>
      <FormGroup>
        <FormLabel>Complemento (opcional)</FormLabel>
        <FormInput
          type="text"
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />
      </FormGroup>
      <CheckoutButton
        onClick={() => setStep('payment')}
        style={{ marginTop: '16px', marginBottom: '8px' }}
      >
        Continuar com o pagamento
      </CheckoutButton>
      <CheckoutButton onClick={() => setStep('cart')}>
        Voltar para o carrinho
      </CheckoutButton>
    </>
  )

  const renderPayment = () => (
    <>
      <FormTitle>
        Pagamento - Valor a pagar {formatarPreco(totalPrice)}
      </FormTitle>
      <FormGroup>
        <FormLabel>Nome no cartão</FormLabel>
        <FormInput
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
      </FormGroup>
      <FormRow>
        <FormGroup style={{ flex: 2 }}>
          <FormLabel>Número do cartão</FormLabel>
          <FormInput
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup style={{ flex: 1 }}>
          <FormLabel>CVV</FormLabel>
          <FormInput
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <FormLabel>Mês de vencimento</FormLabel>
          <FormInput
            type="text"
            value={expiresMonth}
            onChange={(e) => setExpiresMonth(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Ano de vencimento</FormLabel>
          <FormInput
            type="text"
            value={expiresYear}
            onChange={(e) => setExpiresYear(e.target.value)}
          />
        </FormGroup>
      </FormRow>
      <CheckoutButton
        onClick={handleCheckout}
        disabled={isSubmitting}
        style={{ marginTop: '16px', marginBottom: '8px' }}
      >
        {isSubmitting ? 'Finalizando...' : 'Finalizar pagamento'}
      </CheckoutButton>
      <CheckoutButton onClick={() => setStep('delivery')}>
        Voltar para a edição de endereço
      </CheckoutButton>
    </>
  )

  const renderConfirmation = () => (
    <>
      <ConfirmationTitle>
        Pedido realizado - {orderId}
      </ConfirmationTitle>
      <ConfirmationText>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </ConfirmationText>
      <ConfirmationText>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </ConfirmationText>
      <ConfirmationText>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </ConfirmationText>
      <ConfirmationText>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </ConfirmationText>
      <CheckoutButton onClick={handleConcluir}>Concluir</CheckoutButton>
    </>
  )

  return (
    <>
      <Overlay onClick={handleClose} />
      <Sidebar>
        {step === 'cart' && renderCart()}
        {step === 'delivery' && renderDelivery()}
        {step === 'payment' && renderPayment()}
        {step === 'confirmation' && renderConfirmation()}
      </Sidebar>
    </>
  )
}

export default Cart
