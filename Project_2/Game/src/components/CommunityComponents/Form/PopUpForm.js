// import react from 'react';
import { Link } from 'react-router-dom';
import { FormBox } from '../CommunityStyles';

const PopForm = () => {
  return (
    <>
      <form className="flex justify-content max-w-xs mx-auto mt-5 ">
        <div className="pt-5 mt-5">
          <div class="text-center">
            <h1 className="font-link ">Zombie Apocalypse</h1>
            <br></br>

            <h3>Pitch Your Story!</h3>
            <br></br>
            <FormBox>
              <h3>So you think you can write a better story?</h3>
              <h3>Prove it...</h3>
            </FormBox>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </form>

      <div className="col text-center ">
        <span class="bg-dark d-inline-block p-5 mr-3 rounded">
          <div className="">
            <label>
              <h5>Name</h5>
            </label>
            <input
              required
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>

          <br></br>

          <div className="">
            <label>
              <h5>Email</h5>
            </label>
            <input
              required
              type="email"
              name="logEmail"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <br></br>
          <div className="">
            <label>
              <h5>Your Story</h5>
            </label>
            <textarea
              required
              type="text"
              name="pass"
              className="form-control"
              placeholder="Enter Story"
              maxlength="1000"
            />
          </div>
          <br></br>
          <div className="">
            <label>
              <h5>Type your name to sign.</h5>
            </label>
            <input
              required
              type="text"
              name="pass"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <br></br>
          <div>
            <h5>
              *by signing you give us permission to read, share or steal your
              story :D
            </h5>
          </div>
          <div>
            <Link
              to="/Community"
              type="submit"
              className="btn btn-success btn-lg btn-block"
            >
              <h5>Submit</h5>
            </Link>
            {/* <button onClick={handleSubmit} className="btn btn-success btn-lg btn-block" type="submit" >Submit</button> */}
            <div className="mt-3"></div>
          </div>
        </span>
      </div>
    </>
  );
};

export default PopForm;
