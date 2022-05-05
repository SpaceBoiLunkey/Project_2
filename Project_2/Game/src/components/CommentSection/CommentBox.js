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
        <div className="container " id="container1" >
        <div className="input-container" >
        <form onSubmit={addComment}>
    <div className="pt-5">
          <label><h2>Alias:</h2></label>
          </div>
          <input
            type="text" name="alias" required
            value={alias}
            onChange={(event) => {
                setAlias(event.target.value);
            }}
          />
          <div className="pt-3">
          <label><h2>Comment:</h2></label>
          </div>
          <input className="col-8"
            type="text" name="comment" required
            value={comment}
            onChange={(event) => {
                setComment(event.target.value);
            }}
          />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     
        <button className="button" type="submit" class="btn btn-secondary btn-sg"> Submit </button>
        </form>
        </div>
        </div>
    )
    
};
export default CommentBox;