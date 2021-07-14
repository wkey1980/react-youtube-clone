import React from 'react'
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header'
import Main from './Main'



const Layouts = () => {
    return (
        <Container>
            <div className="header"><Header /></div>
            <div className="side"><Sidebar /></div>
            <div className="main"><Main /></div>
        </Container>
    )
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 256px 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas:
        "header header"
        "sidebar main";
    .header {
        grid-area: header;
    }
    .sidebar {
        grid-area: sidebar;
    }
    .main {
        grid-area: main;
    }
`;


export default Layouts
