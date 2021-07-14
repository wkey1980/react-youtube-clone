import React from 'react'
import styled from 'styled-components'


const Header = () => {
    return (
        <Container>
            <LeftMenu>
                <Hamburger src="/images/icons/icon-hamburger.svg" alt="Menu Icon" />
                <Logo src="/images/logo/logo.svg" alt="logo" />
                <p>GB</p>
            </LeftMenu>
            <CenterMenu>
                <Search>
                    <input type="text" placeholder="Search" />
                </Search>
            </CenterMenu>
            <RightMenu>
                <h1>Right</h1>
            </RightMenu>
        </Container>
    )
}

// Container
const Container = styled.section`
    width: 100vw;
    height: 60px;
    background-color: lightcoral;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 25px;
`;

// Left Menu
const LeftMenu = styled.div`
    display: flex;

    p {
        vertical-align: sub;
        font-size: 10px;
        color: #606060;
        margin-left: 5px;
    }
`;
const Hamburger = styled.img``;
const Logo = styled.img``;



// Search
const CenterMenu = styled.div``;
const Search = styled.div``;
// Tools
const RightMenu = styled.div``;



export default Header
