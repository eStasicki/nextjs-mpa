import styled from '@emotion/styled'

function Header() {
  return (
    <HeaderStyled>
      To jest HeaderStyledHeaderStyled aplikacji
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header `
  background: red;
`

export default Header