import styled from 'styled-components'
export const MessageWrapper = styled.div`
    display: flex;
    overflow-x: hidden;
    .left-container{
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        padding: 0.5rem 1rem 0.5rem 1rem;
        background-color: white;
        border-radius: 10px;
        margin-bottom: 15px;
        width: fit-content;
        max-width: 85vw;
        word-wrap: break-word;
        justify-content: flex-start;
        line-height: 20px;
        .sender-name,.message{
            display: block;
            text-align: justify;
            text-justify: inter-word;
            margin: 0px;
        }
    }
    .right-container{
        display: flex;
        margin-left: auto;
        position: relative;
        z-index: 1;
        flex-direction: column;
        padding: 0.5rem 1rem 0.5rem 1rem;
        background-color: #dcf8c6;
        border-radius: 10px;
        margin-bottom: 15px;
        width: fit-content;
        max-width: 85vw;
        word-wrap: break-word;
        line-height: 20px;
        .sender-name,.message{
            text-align: justify;
            text-justify: inter-word;
            display: block;
            margin: 0px;
        }
    }
`