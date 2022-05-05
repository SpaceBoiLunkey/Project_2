import React from 'react';
import CommentBox from './CommentBox';
import CommentBody from './CommentBody';
import {
  Container,
  RowTwo,
  ColumnTwo,
  } from "../FooterStyles";
const CommentSection= () => {



  return (
    <>
       <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

<h1 className="pt-5 text-center font-link ">
  Zombie Apocalypse Community
</h1>

<br></br>
<Container>
  <RowTwo>
    <ColumnTwo>
      <h3>Community</h3>
      <p>Welcome to the General Discussion forum! This forum is here to provide you with a friendly environment where you can discuss all aspects of World of Warcraft with other players.</p>
<p>
Community forums work best when participants treat their fellow posters with respect and courtesy, so we ask that you take the time to read through the forum Code of Conduct and guidelines before posting. </p>
<p>Guidelines

In addition to the forum Code of Conduct 587, here are some common courtesy guidelines to follow. While these do technically fall within the bounds of the Code of Conduct, they cover more specific examples of common errors that will lead to thread deletions or posting privileges being revoked.

The Zombie Apocalypse forums are for discussion of topics directly related to Zombie Apocalypse.

The forums here are specifically to discuss the game and related topics. Any topics not related to Zombie Apocalypse, CYOA.net, or CYOA Entertainment are subject to deletion.

Don’t post in all capital letters, use a misleading title, excessive punctuation, and/or non-standard symbols, etc.</p>
    </ColumnTwo>
    <ColumnTwo>
      <h3>Press</h3>
      <p>SHANGHAI, China, April 25, 2022 (GLOBE NEWSWIRE) -- CYOA Games — acclaimed Chinese developer of popular mobile games — announced today the launch of its new global game publishing brand, Zombie Apocalypse Games. The company’s mission is to bring the very best games to players all over the world.

To date, CYOA Games has launched critically acclaimed titles such as Soul Hunters, Art of Conquest, AFK Arena, Rise of Kingdoms, and Warpath. Each of these games has explored new and exciting ways to bring CYOA Game unique brand of fun to players worldwide. The establishment of Zombie Apocalypse Games is the company’s next significant step in its ongoing mission.

“The launch of Zombie Apocalypse Game represents a significant upgrade to our strategy of 'global localization’,” said Zombie Apocalypse Games Founder and CEO Kenny Wang. “We want to recruit top talent from around the world to provide more localized service to players around the world.”</p>
    </ColumnTwo>
    <ColumnTwo>
      <h3>Comments</h3>
    <div >     
      <CommentBox />
      
      </div>
      <div >        
  <CommentBody />
    </div>
    </ColumnTwo>
  </RowTwo>
    </Container>
    </form>


    
    </>
  );





};
export default CommentSection;