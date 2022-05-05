import Axios from "axios";
import { useState, useEffect } from "react";




const CommentBody= () => {
    const [comments, setNewComments] = useState([]);




    useEffect(() =>{
        Axios.get("http://localhost:3001/commentssection").then((response) => {
          setNewComments(response.data);
        });
    });

    return (
      
        <div className="c-inline-block">
            <div class="comment-thread mt-5 ">
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
                  </div>
            {comments.map((val, key) => {
                return (
                    <div className="c-inline-block rounded opacity-75">
                  <div class="comment-thread mt-5 rounded">
                      
                  <details open class="comment" id="comment-1">
            
                      <div class="comment-info">
                      <div class="comment-author">{val.alias}</div>
                      
                      <p class="m-0">
                          
                          Some time ago...
                      </p>
                  </div> 
                  <div class="comment-body">
                      <p>
                      {val.comment} 
                      </p>
                  </div>
                  <div class="replies">
                  <div class="comment-info">
                      <div class="comment-author">{val.admin}</div>
                      <p class="m-0">
                          Later
                          {val.time}
                      </p>
                  </div> 
                  <div class="comment-body">
                      <p>
                      {val.adminreply} 
                      </p>
                  </div>
                  </div>
            
                  </details>
                  </div>
                  </div>
                );
              })}
        </div>
              );
        





};
export default CommentBody;