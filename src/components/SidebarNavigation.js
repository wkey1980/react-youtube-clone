import React from 'react'
import styled from 'styled-components';


const SidebarNavigation = () => {
    return (
        <div>
            <Container>
                <h3>SidebarNavigation</h3>
            </Container>
        </div>
    )
}

const Container = styled.section`
    width: 256px;
    height: calc(100vh - 60px);
    background-color: lightgreen;
`;


export default SidebarNavigation
