import styled from 'styled-components'

export const Container = styled.div`
  padding: 56px 0 120px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
