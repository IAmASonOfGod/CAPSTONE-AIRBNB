import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
    justify-content; center;
    align-items: center;
    flex-direction: column;

  height: 100vh- 93px;

  h2 {
 
    color: #000000;
    font-family: Inter;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 70px;
   
  }

  .logo{
display: flex;
flex-direction: column;
align-items: flex-start;
width: 1512px;
height: 100px;
padding: 24px;
cursor: pointer;
}
`;

export const FormContainer = styled.form`
    height: 100%;

  input {
    width: 400px;
    height: 43px;
    border-radius: 7px 7px 7px 7px;
    display: flex;
    justify-content; center;
    align-items: center;
    flex-direction: column;
    border: 2px solid #3A3A3A
    padding-bottom: 20px;
     
  }

  label{
    color: #4153F5;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 20px;
    margin-right: 340px;
   
  }

  .ForgotBtn{
    background: white;
    color: #4153F5;
    border: none;
    padding-bottom: 50px;
    margin-top: 35px; 
 }

  .LoginBtn{
    background: #4153F5;
    color:white;
    border: none;
    width: 237px;
    height: 46px;
    top: 345px;
    left: 3882px;
    gap: 0px;
    border-radius: 7px 7px 7px 7px;
    cursor: pointer;
  
  
  }

  .input1{
  display: flex;
    justify-content; space-evently;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
    
  }

  .input2{
  display: flex;
    justify-content; space-evently;
    align-items: center;
    flex-direction: column;
        
  }

  .Btns{
   display: flex;
    justify-content; center;
    align-items: center;
    flex-direction: column;
  }

  .err-msg{
  margin: 10px;
  margin-left: 30px;
  color: red;
  }

  input {
  cursor: pointer;
  }

  .err-msg{
  width: 360px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  }

   .err-msg p{
   margin: 0px;}

`;
