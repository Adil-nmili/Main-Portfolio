import styled from "styled-components"
import Logo from './Logo'
import Navigation from "./Navigation"

function Header() {
    return (
        <>
            <Container>
                <Logo />
                <Navigation />
            </Container>
        </>
    )
}

export default Header

const Container = styled.header`
    width: 100vw;
    height: 50px;
    background-color: rgb(53,53,53);
    display: flex;
    align-items: center;
    justify-content: space-beween;
    padding: 0px 1rem;
`