import styled from 'styled-components';




  export const TopContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
//   place-items: center;
  margin-left: auto;
  margin-right: auto;


  `;
  
  export const LogoPic = styled.div`
  position:absolute;
  top: 3%;
  left: 1%;
  width: auto;
  height: auto;

  @media (max-width : 1080px){
   
    visibility: hidden;
}


  `;

  export const Title = styled.div`
  top: 15%;
  position:absolute;
  text-align: center;
  color: white;
  font-size: 50px;
    padding-right: 1%;

  `;
  

  export const Body = styled.div`
  position:absolute;
  top: 35%;
  left: 5%;
  right: 5%;

  color: white;
  font-size: 30px;

  @media (max-width : 1080px){
   
    width:0;
    font-size:0;    }


  
  `;
  export const SubBody = styled.div`
  position:absolute;
  top: 50%;
  left: 5%;
  right: 5%;

  color: white;
  font-size: 20px;

  @media (max-width : 1380px){
   
    width:0;
    font-size:0;    }

  
  `;


  export const Button = styled.div`
  position:absolute;
  bottom:5%;
  left: 80%;

  transform: translate(-60%, -70%);
  -ms-transform: translate(-60%, -70%);
  background-color: rgb(14, 66, 134);
  color: white;
  font-size: 25px;
  padding: 2%;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 200px;
  height: 100px;

  max-width: 90%;
  max-height: 90%;
  text-align: center;

  :hover {
    background-color: black;
  }
  @media (max-width : 680px){
    bottom:0%;
    left: 20%;

    max-width: 20%;
    max-height: 15%;
      }

  
  `;








  export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  height: auto;
  width: 100%;
  align-items: center;
  vertical-align: middle;
  
  `;
  





// all the boxes are in one row so when the screen is smaller they line up
export const IconRow = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
padding: 0 4px;
height: auto;
width: 100%;
align-items: center;
vertical-align: middle;

`;

//each box is a column 
export const IndCol = styled.div`
flex: 25%;
padding: 1% 1% 1% 1%;
width: 100%;
text-align: center;
vertical-align: middle;


@media (max-width: 1100px) {
flex: 50%;
max-width: 50%;}

@media (max-width: 800px) {
    flex: 100%;
    max-width: 100%;}



`;



//each box is a column 
export const TextInBoxes = styled.div`
padding-top: 30%;
padding-left: 15%;
padding-right: 6%;
text-align: center;
color: white;
display:inline-flex;
position:absolute;


font-size: 30pt;
writing-mode: horizontal-tb;
overflow-wrap: break-word;
hyphens: manual;


`;

//each box is a column 
export const SocialBoxes = styled.div`
    display: inline-block;
    position: absolute;
    height: 350px;
    width: 100%;
    padding: 5%;
    margin-top: 5%;
    align-items: center;
    margin-left:auto;

`;
//black bar in between
export const BlackBar = styled.div`
position:relative;
top: 90%;
display:grid;
height: 100px;
width: 100%;
margin-top: 15px;
margin-bottom: 15px;
border: 1px solid black;
background-color: rgb(0, 0, 0);
align-items: center;


`;

export const WhiteBoxes = styled.div`
padding: 5%;
position: relative;
margin: 1%;
width: 100%;
height: 100%;

:hover{
    background-color: rgb(255, 255, 255);
    opacity: 0.5; 
    box-shadow: 0 0 0px rgb(255, 255, 255);

}
`;
//the header on the page
export const Head = styled.div`
position:relative;
text-align: center;
color: white;
font-size: 50px;


`;
