import { CircleUserRound } from 'lucide-react'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 83vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    padding: 0 32px;
    gap: 16px;
    border-bottom: 2px solid #c3c3c3;
`


const Header = () => {
    return (
        <HeaderContainer>
            <p>Bem-vindo, <strong>Guilherme Vieira</strong></p>
            <CircleUserRound size={32} color="#000" />
        </HeaderContainer>
    )
}

export default Header