import styled from "styled-components"

const Footer:any = () => {

    const Footer = styled.div`
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
    `

    return(
        <Footer>
            <p>This is my footer!</p>
        </Footer>
    )
}

export default Footer