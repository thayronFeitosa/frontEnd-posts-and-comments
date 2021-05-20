import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-height: 2rem;;
background: #2AA9E0;
box-shadow: 0px 5px 18px 4px rgba(0, 0, 0, 0.13);
border-radius: 10px 10px 10px 10px;
ul{
  display:flex;
  .multiple{
    height: 2rem;
    background: #2AA9E0;
    border-radius: 8px;
    margin-top: 2%;
    margin: 1px 22px 0px 0px;
    @media(max-height: 800px) {
    width: 1.2%;
    margin: 10px 20px 40px -20px;
  }
  }
  .single{
    color: #2AA9E0;
  }
}
li{
  list-style-type: none;
  display: inline-block;
  font-size: 20px;
  width: 120px;

  margin: 1px 1px 1px 1px;
  @media(max-height: 800px) {
    margin: 1px 1px 1px 1px;
    font-size: 15px;
  }
}
a{
  text-decoration: none;
  font-size: 20px;
  line-height: 36px;
  color: #ffff;
  @media(max-height: 800px) {
  font-size: 22px;
  }
}
.bold{
  & a{
    color:  #FFFFFF;
    font-weight: bold;
      width: 200px;

  }
}
`;