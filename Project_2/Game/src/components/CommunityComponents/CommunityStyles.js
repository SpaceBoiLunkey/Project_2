import styled from 'styled-components';


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
border-radius: 25px;


@media (max-width : 1080px){
   
    height: 150px;
}

`;
//the header on the page
export const Head = styled.div`
position:relative;
text-align: center;
color: white;
font-size: 50px;
font-family: 'Hanalei Fill', cursive;


`;
//the white boxes
export const WhiteBoxes = styled.div`
display: inline-block;
padding: 5%;
position: relative;
margin: 1%;
width: 100%;
height: 100%;
background-color: white;
opacity: 90%;

`;

//the form box on top
export const FormBox = styled.div`
display: inline-block;
padding: 5%;
position: relative;
margin: 1%;
width: 70%;
height: 100%;
background-color: white;
opacity: 90%;
border-radius: 25px;





`;


export const Scroll = styled.div`

height: 400px;
    overflow-y: scroll;
`;

//the black input boxe
export const BoxForInput = styled.div`
display: inline-block;
padding: 5%;
position: relative;
margin: 1%;
width: 50%;
height: 100%;
background-color: black;
opacity: 90%;
border-radius: 25px;

@media (max-width : 820px){
   
    width: 100%;
}
`;

export const BoxForComments = styled.div`
display: inline-block;
padding: 8%;
position: relative;
margin: 1%;
width: 70%;
height: 100%;
opacity: 90%;
border-radius: 25px;
background-color: black;
border-radius: 25px;

@media (max-width : 820px){
   
    width: 100%;
}

`;

export const ComBody = styled.div`
padding: 0 20px;
padding-left: 28px;
font-size: 20px;
color: rgb(54, 24, 87);
word-break: break-word;

@media (max-width : 820px){
   
    font-size: 20px;
}
`;

export const Time = styled.div`
margin: 0;
font-size: 20px;
color: rgb(135, 225, 176);
@media (max-width : 820px){
   
    font-size: 15px;
}


`;

export const CommInfo = styled.div`
color: rgba(0, 0, 0, 0.5);
margin-left: 10px;


`;
export const CommThread = styled.div`
width: 900px;
max-width: 100%;
margin: auto;
padding: 20px 20px;
border: 1px solid transparent; /* Removes margin collapse */


`;
export const Replies = styled.div`
margin-left: 20px;


`;
export const Comm = styled.div`
position: relative;
margin: 10px auto;


`;

export const Author = styled.div`
color: rgba(0, 0, 0, 0.85);
font-weight: bold;
text-decoration: none;
font-size: 20px;
@media (max-width : 820px){
   
    font-size: 15px;
}


`;

export const CommHead = styled.div`
position:relative;
text-align: center;
color: black;
font-size: 60px;
font-family: 'Hanalei Fill', cursive;


`;
