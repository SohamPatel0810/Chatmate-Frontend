import styled from 'styled-components'
  
  export const TopBarWrapper = styled.div`
    background-color: #2F759B;
    display: flex;
    justify-content:space-between;
    padding: 1.5rem 1rem 0.5rem 2.5rem;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    @media only screen and (max-width:600px){
      border-top-left-radius: 0px;
    border-top-right-radius: 0px;
        }
      .left-container{
        display: flex;
        gap: 15px;
        width: 50vw;
        .image{
          width: 45px;
          height: 45px;
        }
        .heading{
          display: flex;
          justify-content: flex-start;
          width:20vw;
          color: white;
          margin-top: -5px;
          margin-bottom: 0px;
          @media only screen and (max-width:600px) {
            width: 50vw;
          }
        }
      }
      .right-container{
        margin-top: 3px;
        padding-left: 3rem;
      }
  `
  