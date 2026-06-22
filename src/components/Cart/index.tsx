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
  EmptyCartText,
  ErrorText
} from './styles'
import { colors } from '../../styles'

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

const formatarPreco = (preco: number) =>
  preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// --- Input masks ---
const maskCEP = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 8)
  if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`
  return digits
}

const maskCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 16)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ')
}

const maskCVV = (value: string) => value.replace(/\D/g, '').slice(0, 3)

const maskMonth = (value: string) => value.replace(/\D/g, '').slice(0, 2)

const maskYear = (value: string) => value.replace(/\D/g, '').slice(0, 4)

const maskOnlyNumbers = (value: string) => value.replace(/\D/g, '')

// --- Validation helpers ---
type FieldErrors = Record<string, string>

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

  // Validation errors
  const [deliveryErrors, setDeliveryErrors] = useState<FieldErrors>({})
  const [paymentErrors, setPaymentErrors] = useState<FieldErrors>({})

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
    setDeliveryErrors({})
    setPaymentErrors({})
  }

  const validateDelivery = (): boolean => {
    const errors: FieldErrors = {}
    if (!receiver.trim()) errors.receiver = 'Preencha o nome do receptor'
    if (!address.trim()) errors.address = 'Preencha o endereço'
    if (!city.trim()) errors.city = 'Preencha a cidade'
    const cepDigits = zipCode.replace(/\D/g, '')
    if (!cepDigits) errors.zipCode = 'Preencha o CEP'
    else if (cepDigits.length !== 8) errors.zipCode = 'CEP deve ter 8 dígitos'
    if (!number.trim()) errors.number = 'Preencha o número'
    else if (!/^\d+$/.test(number.trim())) errors.number = 'Número inválido'
    setDeliveryErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validatePayment = (): boolean => {
    const errors: FieldErrors = {}
    if (!cardName.trim()) errors.cardName = 'Preencha o nome no cartão'
    const cardDigits = cardNumber.replace(/\D/g, '')
    if (!cardDigits) errors.cardNumber = 'Preencha o número do cartão'
    else if (cardDigits.length !== 16) errors.cardNumber = 'Número do cartão deve ter 16 dígitos'
    if (!cvv) errors.cvv = 'Preencha o CVV'
    else if (cvv.length !== 3) errors.cvv = 'CVV deve ter 3 dígitos'
    const month = parseInt(expiresMonth)
    if (!expiresMonth) errors.expiresMonth = 'Preencha o mês'
    else if (isNaN(month) || month < 1 || month > 12) errors.expiresMonth = 'Mês inválido (01-12)'
    const year = parseInt(expiresYear)
    if (!expiresYear) errors.expiresYear = 'Preencha o ano'
    else if (isNaN(year) || expiresYear.length !== 4) errors.expiresYear = 'Ano deve ter 4 dígitos'
    setPaymentErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleGoToPayment = () => {
    if (validateDelivery()) setStep('payment')
  }

  const handleCheckout = async () => {
    if (!validatePayment()) return
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
            zipCode: zipCode.replace(/\D/g, ''),
            number: parseInt(number) || 0,
            complement
          }
        },
        payment: {
          card: {
            name: cardName,
            number: cardNumber.replace(/\s/g, ''),
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
          $hasError={!!deliveryErrors.receiver}
        />
        {deliveryErrors.receiver && <ErrorText>{deliveryErrors.receiver}</ErrorText>}
      </FormGroup>
      <FormGroup>
        <FormLabel>Endereço</FormLabel>
        <FormInput
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          $hasError={!!deliveryErrors.address}
        />
        {deliveryErrors.address && <ErrorText>{deliveryErrors.address}</ErrorText>}
      </FormGroup>
      <FormGroup>
        <FormLabel>Cidade</FormLabel>
        <FormInput
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          $hasError={!!deliveryErrors.city}
        />
        {deliveryErrors.city && <ErrorText>{deliveryErrors.city}</ErrorText>}
      </FormGroup>
      <FormRow>
        <FormGroup>
          <FormLabel>CEP</FormLabel>
          <FormInput
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(maskCEP(e.target.value))}
            placeholder="00000-000"
            $hasError={!!deliveryErrors.zipCode}
          />
          {deliveryErrors.zipCode && <ErrorText>{deliveryErrors.zipCode}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Número</FormLabel>
          <FormInput
            type="text"
            value={number}
            onChange={(e) => setNumber(maskOnlyNumbers(e.target.value))}
            $hasError={!!deliveryErrors.number}
          />
          {deliveryErrors.number && <ErrorText>{deliveryErrors.number}</ErrorText>}
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
        onClick={handleGoToPayment}
        style={{ marginTop: '16px', marginBottom: '8px' }}
      >
        Continuar com o pagamento
      </CheckoutButton>
      <CheckoutButton onClick={() => { setDeliveryErrors({}); setStep('cart') }}>
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
          $hasError={!!paymentErrors.cardName}
        />
        {paymentErrors.cardName && <ErrorText>{paymentErrors.cardName}</ErrorText>}
      </FormGroup>
      <FormRow>
        <FormGroup style={{ flex: 2 }}>
          <FormLabel>Número do cartão</FormLabel>
          <FormInput
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(maskCardNumber(e.target.value))}
            placeholder="0000 0000 0000 0000"
            $hasError={!!paymentErrors.cardNumber}
          />
          {paymentErrors.cardNumber && <ErrorText>{paymentErrors.cardNumber}</ErrorText>}
        </FormGroup>
        <FormGroup style={{ flex: 1 }}>
          <FormLabel>CVV</FormLabel>
          <FormInput
            type="text"
            value={cvv}
            onChange={(e) => setCvv(maskCVV(e.target.value))}
            placeholder="000"
            $hasError={!!paymentErrors.cvv}
          />
          {paymentErrors.cvv && <ErrorText>{paymentErrors.cvv}</ErrorText>}
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <FormLabel>Mês de vencimento</FormLabel>
          <FormInput
            type="text"
            value={expiresMonth}
            onChange={(e) => setExpiresMonth(maskMonth(e.target.value))}
            placeholder="01"
            $hasError={!!paymentErrors.expiresMonth}
          />
          {paymentErrors.expiresMonth && <ErrorText>{paymentErrors.expiresMonth}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Ano de vencimento</FormLabel>
          <FormInput
            type="text"
            value={expiresYear}
            onChange={(e) => setExpiresYear(maskYear(e.target.value))}
            placeholder="2026"
            $hasError={!!paymentErrors.expiresYear}
          />
          {paymentErrors.expiresYear && <ErrorText>{paymentErrors.expiresYear}</ErrorText>}
        </FormGroup>
      </FormRow>
      <CheckoutButton
        onClick={handleCheckout}
        disabled={isSubmitting}
        style={{ marginTop: '16px', marginBottom: '8px' }}
      >
        {isSubmitting ? 'Finalizando...' : 'Finalizar pagamento'}
      </CheckoutButton>
      <CheckoutButton onClick={() => { setPaymentErrors({}); setStep('delivery') }}>
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
