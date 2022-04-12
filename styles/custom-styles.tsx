import styled from "styled-components";
import media from "./media";

    export const Body = styled.body`
        margin: 0;
        font-family: 'Sora', sans-serif;
    `

    export const Container = styled.div`
        margin-left: 5vw;
        margin-right: 5vw;

        ${media.widescreen`
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
        `}
    `

    export const MainButton = styled.a`
        padding: 12px 16px;
        border-radius: 8px;
        background-color: ${props => props.theme.colors.primary};
        transition: all 200ms;

        :hover{
            background-color: ${props => props.theme.colors.background};
        }
    `