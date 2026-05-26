import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 80px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
