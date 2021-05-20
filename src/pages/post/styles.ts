import styled from 'styled-components';

export const Container = styled.div`
  #row {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 600px;
      height: 30px;
      margin-bottom:10px;
    }

    textarea {
      width: 600px;
      height: 300px;
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