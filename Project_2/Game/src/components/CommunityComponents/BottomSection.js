import React from 'react';
import CommentBox from './CommentSection/CommentBox';
import CommentBody from './CommentSection/CommentBody';
import { WhiteBoxes,Scroll,CommHead } from './CommunityStyles';

const BottomSection= () => {



  return (
    <>
       <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >


<br></br>
<div  className="spaceimg" >
<WhiteBoxes>
      <CommHead>Comments</CommHead>
    <div >     
    <br/>

      <CommentBox />
      
      </div>
      <br/>
      <Scroll >        
  <CommentBody />
    </Scroll>
    </WhiteBoxes>
</div>    
</form>

    
    </>
  );





};
export default BottomSection;