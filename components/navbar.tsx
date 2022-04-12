import styled from "styled-components"
import media from "../styles/media"

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5vw;

    .nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;

        ${media.desktop`
            height: auto;
            display: block;
            position: relative;
            background-color: transparent;
        `}
    }

`

const Navbar:any = () => {
    return(
        <Nav>
            <div className="nav">
                <p>This is my navbar!</p>
            </div>
        </Nav>
    )
}

export default Navbar