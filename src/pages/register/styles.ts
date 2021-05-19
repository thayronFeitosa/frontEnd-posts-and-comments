import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
#divImg{
  display: flex;
  background: linear-gradient(136.23deg, rgba(38, 105, 79, 0.7) 39%, rgba(39, 60, 38, 0.7) 103.91%);
  height: 50%;
  #img{
    z-index: -1;
    width: 100%;
    /* background-size: 100%;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1); */
  }
}
  #row{
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    position: absolute;
    width: 900px;
    height: 700px;
    left: 25%;
    top: 15%;
    background: #FFFFFF;
    box-shadow: 0px 5px 44px 22px rgba(0, 0, 0, 0.13);
    border-radius: 38px;

    input { 
      width: 600px;
    }
    @media(max-height: 800px) {
      width: 650px;
      height: 500px;
      left: 25%;
      top: 15%;
    }
    h1{
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 42px;
      padding-top: 20px;
      /* margin-top: 10px; */
      color: #7C7A7A;
      @media(max-height: 800px) {
        margin-top: 0px;
        font-size: 30px;
      }
    }
    form{
    flex-direction:center;
    align-items:center;
    margin-top: 40px;
  
      >#buttonSubmit{
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 20px;;
        >button{
        width: 300px;
      }
      }
    }
 

  }
`;