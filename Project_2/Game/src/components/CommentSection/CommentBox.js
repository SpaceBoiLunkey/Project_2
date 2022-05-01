import Axios from "axios";
import { useState} from "react";




function CommentBox() {
 
      //THIS SECTION HAS THE STATES FOR THE FORM INPUT 
      const [alias, setAlias] = useState("");
      const [comment, setComment] = useState("");
    
     
    
    const addComment = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/commentssection", {
            alias: alias,
            comment: comment,
        }).then(() => {
            setAlias("");
            setComment("");
        });
      };
    
    
    return(
        <div className="container" id="container1">
        <div className="input-container">
        <form onSubmit={addComment}>
    
          <label>Alias:</label>
          <input
            type="text" name="alias" required
            value={alias}
            onChange={(event) => {
                setAlias(event.target.value);
            }}
          />
          
          <label>Comment:</label>
          <input
            type="text" name="comment" required
            value={comment}
            onChange={(event) => {
                setComment(event.target.value);
            }}
          />
             
     
        <button className="button" type="submit" class="button"> Submit </button>
        </form>
        </div>
        </div>
    )
    
};
export default CommentBox;