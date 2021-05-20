import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  #post {
    margin-top: 10px;
    background: rgb(225, 225, 230);
    border-radius: 5px;
    width: 600px;
    >h1 {
      /* color: rgb(225, 225, 230); */
      margin-top: 16px;
      line-height: 2.8rem;
      font-size: 2.4rem;
      padding-left: 10px;;
    }
    >p{
      padding-left: 10px;;
    }
    
    >textarea {
      padding-left: 10px;;
      min-height: 100px;
      min-width: 578px;
      background: rgb(225, 225, 230);
      border: none;
      resize: none;
      outline-style: none;

    }

    #linha {
      background-color: rgb(50, 50, 56);
      height: 1px;
      width: 100%;
      margin: 2.5rem 0px;
    }


    #button {
      display: flex;
      justify-content: flex-end;

      >button{
        width: 120px;
        height: 35px;
        left: 288px;
        top: 706px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        background: #0A1F44;
        border-radius: 10px;
        color: #FFFFFF;
        text-decoration: none;

        .retirarLink {
          text-decoration: none;
          font-size: 18px;
          line-height: 21px;
          color: #FFFFFF;
        }
      }

      
    }

  }

`;