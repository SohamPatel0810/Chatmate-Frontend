import styled from 'styled-components'

export const JoinRoomWrapper = styled.div`
    background-color:#ECF5F2;
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    .mini-container{ 
        background-color: rgba(45, 48, 71, 1);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 25px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center; 
        width: fit-content;
        height: 60vh;
        padding: 1rem;
        @media only screen and (max-width:600px){
            height: 100vh;
        }
        .heading{
            color:white;
        }
        .break-line{
            color:white;
            width:400px;
        }
        .inputs{
            display:flex;
            flex-direction:column;
            margin:30px;
            gap:30px;
            .custom-input{
                width:400px;
                text-align:center;
                height:50px;
                outline: none;
                border-radius: 20px;
                @media only screen and (max-width:600px){
                    width: 340px;
                }
            }
        }
        .btn{
            background-color:#25d366;
            width:400px;
            font-weight: bold;
            border: none;
            border-radius: 20px;
            height:50px;
            color:white;
            @media only screen and (max-width:600px){
                    width: 340px;
            }
        }
        
    }
`