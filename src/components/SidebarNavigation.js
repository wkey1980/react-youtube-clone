import React from 'react'
import styled from 'styled-components';


const SidebarNavigation = () => {
    return (
        <div>
            <Container>
                <h3>SidebarNavigation</h3>
                <Subscriptions></Subscriptions>
                <History>
                    <img src="/images/icons/icon-library.svg" alt="Icon Library" />
                    <h2>library</h2>
                    <img src="/images/icons/icon-history.svg" alt="Icon History" />
                    <h2>history</h2>
                </History>
                <SignIn>
                    <p>Sign in to like videos, comment and subscribe.</p>
                    <a href="#" className="btn">Sign In</a>
                </SignIn>
                <BestOfYouTube></BestOfYouTube>
                <BrowseChannels></BrowseChannels>
                <MoreFromYouTube></MoreFromYouTube>
                <Tools></Tools>
            </Container>
        </div>
    )
}

const Container = styled.section`
    width: 256px;
    height: calc(100vh - 60px);
    background-color: lightgreen;
`;

const Subscriptions = styled.div``;
const History = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SignIn = styled.div``;
const BestOfYouTube = styled.div``;
const BrowseChannels = styled.div``;
const MoreFromYouTube = styled.div``;
const Tools = styled.div``;


export default SidebarNavigation
