import styled from "styled-components"

function Logo () {
    return (
        <>
        <Title>adil <Span>nmili</Span></Title>
        </>
    )
}

export default Logo

const Title = styled.h1 `
    text-transform : uppercase;
    color : #fff;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    cursor: pointer
`
const Span = styled.span `
    color: rgb(197, 120, 207);
    font-style: italic;
`