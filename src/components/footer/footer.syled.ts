import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

export const FooterText = styled.p`
  font-size: ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.color.text};
  margin-block: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.bodyFont};
`

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`
