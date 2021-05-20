import styled from 'styled-components';

export const Container = styled.div`
  #row {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 600px;
      height: 40px;
      margin-bottom:10px;
      background: #FFFFFF;
      box-shadow: 0px 5px 44px 0px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
      border: none;
      outline-offset: 0px;
      padding-left: 10px;
      outline-offset: 0px;
      font-size: 14px;

    }
    textarea:focus, input:focus, select:focus {
    outline: 0;
    }

    textarea {
      background: #FFFFFF;
      box-shadow: 0px 5px 44px 22px rgba(0, 0, 0, 0.13);
      border-radius: 18px;
      width: 600px;
      height: 300px;
      border: none;
      outline-offset: 0px;
      outline-style: none;
      padding-left: 10px;
      padding-top: 10px;
       resize: none;


    }

    #button {
      display: flex;
      justify-content: flex-end;

      >button{
        width: 150px;
        height: 40px;
        left: 288px;
        top: 706px;
        margin-top: 10px;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        background: #0A1F44;
        border-radius: 10px;
        color: #FFFFFF;
        text-decoration: none;
      }
    }
  }
`;