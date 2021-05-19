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
    }
  }
`;