import styled from 'styled-components'

export const ChatRoomWrapper = styled.div`
    background-color: #ECF5F2;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .mini-container{
        background: #ece5dd;
        z-index: 1;
        position: absolute;
        width: 40vw;
        height: 90vh;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media only screen and (max-width:600px){
            height: 100vh;
            width:100vw;
            border-radius: 0px;
        }
    }
`
