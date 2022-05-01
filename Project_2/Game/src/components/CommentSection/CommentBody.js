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
        <div>
            {comments.map((val, key) => {
                return (
                  <div class="comment-thread">
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
                  
                );
              })}
        </div>
              );
        





};
export default CommentBody;