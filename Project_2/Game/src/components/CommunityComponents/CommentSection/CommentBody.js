import Axios from "axios";
import { useState, useEffect } from "react";
import { BoxForComments, ComBody, Comm, Time,CommInfo,WhiteBoxes,CommThread,Replies,Author } from '../CommunityStyles';



const CommentBody= () => {
    const [comments, setNewComments] = useState([]);




    useEffect(() =>{
        Axios.get("http://localhost:3001/commentssection").then((response) => {
          setNewComments(response.data);
        });
    });

    return (
      
        <div className="c-inline-block">
            <BoxForComments>
            {/* <div class="comment-thread mt-5 ">
                  <details open class="comment" id="comment-1">
            
                      <div class="comment-info">
                      <div class="comment-author"><p>Eric</p></div>
                      <p class="m-0">
                          Some time ago...
                      </p>
                  </div> 
                  <div class="comment-body">
                      <p>
                      I love this game so much make more!
                      </p>
                  </div>
                    <br></br>
                  <div class="replies">
                  <div class="comment-info">
                      
                      <div class="comment-author"><p>Admin</p></div>
                      <p class="m-0">
                          later
                      </p>
                  </div> 
                  <div class="comment-body">
                      <p>
                      Thanks, new games coming soon!
                      </p>
                  </div>
                  </div>
            
                  </details>
                  </div> */}
            {comments.map((val, key) => {
                return (
                    <WhiteBoxes>
                  <CommThread>
                      
                  <details open {...Comm} >
            
                      <CommInfo>
                      <Author><b>{val.alias}</b></Author>
                      
                      <Time>
                          
                          Some time ago...
                      </Time>
                  </CommInfo> 
                  <ComBody><b>
                      {val.comment} </b>
                  </ComBody>
                  <br/>
                  <Replies>
                  <CommInfo>
                      <Author><b>{val.admin}</b></Author>
                      <Time>
                          {val.time}
                      </Time>
                  </CommInfo> 
                  <ComBody><b>
                      {val.adminreply} </b>
                  </ComBody>
                  </Replies>
            
                  </details>
                  </CommThread>

                  </WhiteBoxes>
                );
              })}
            </BoxForComments>

        </div>
              );
        





};
export default CommentBody;