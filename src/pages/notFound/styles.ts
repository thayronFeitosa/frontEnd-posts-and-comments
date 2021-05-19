import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
#img{
  @media(max-height: 800px) {
    margin-top:-50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:1000px;
  }
}
#texto{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    margin-top: -20px;
    color: #3A3668;
    font-family: -apple-system, Amiko, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size:70px;
    @media(max-height: 800px) {
    font-size:50px;
  }
  }
  p{
    margin-top: -5px;
    width: 900px;
    font-family: 'Amiko';
    font-weight: normal;
    font-size: 36px;
    line-height: 32px;
    /* or 71% */
    text-align: center;
    letter-spacing: -1px;
    color: #3A3668;
    @media(max-height: 800px) {
      font-size: 30px;
    }
  }
}
#button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background:#16B5D7;
    color: #FFFFFF;
    width: 225px;
    height: 70px;
    font-size: 35px;
    border-radius: 50px;
    margin-top: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(22, 181, 215, 0.41);
    &:hover {
      transition: color 0.1s;
      background: ${shade(0.2, '#16B5D7')};
    }
    @media(max-height: 800px) {
      width: 200px;
      height: 60px;
      font-size: 30px;
    }
  }
}
`;