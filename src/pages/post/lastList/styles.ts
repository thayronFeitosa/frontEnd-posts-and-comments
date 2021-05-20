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
    
    textarea {
      /* min-height: 100px;
      min-width: 57px;
      background: rgb(225, 225, 230);
      border: none;
      resize: none;
      outline-style: none; */

    }
    #linha {
      background-color: rgb(50, 50, 56);
      height: 1px;
      width: 100%;
      margin: 2.5rem 0px;
    }

  }

`;