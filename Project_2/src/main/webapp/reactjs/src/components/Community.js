import React from 'react';
import TopSection from './CommunityComponents/TopSection';
import BottomSection from './CommunityComponents/BottomSection';
import { BlackBar, Head } from './CommunityComponents/CommunityStyles';
import { Link } from 'react-router-dom';

function Community() {
  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5 ">
      <h1 className="pt-5 text-center font-link">Zombie Apocalypse</h1>
      <BlackBar>
        <Head>
          {/* <h1 className="pt-5 text-center font-link "> */}
          Community Page
          {/* </h1> */}
        </Head>
      </BlackBar>

      <div>
        <TopSection />
      </div>
      <BlackBar>
        <Head>
          <Link
            to="/PopUpForm"
            type="submit"
            className="btn btn-success btn-lg btn-block"
          >
            <h4>You're a writer? * click me *</h4>
          </Link>
        </Head>
      </BlackBar>
      <div>
        <BottomSection />
      </div>
    </form>
  );
}

export default Community;
