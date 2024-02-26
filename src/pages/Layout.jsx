import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LayOutContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
`
const WrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`

const ChildrenContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Layout = ({ children }) => {
    return (
        <LayOutContainer>
            <NavBar />
            <WrapperContainer>
                <Header />
                <ChildrenContainer>
                    {children}
                </ChildrenContainer>
                <Footer />
            </WrapperContainer>
        </LayOutContainer>
    )
}

export default Layout