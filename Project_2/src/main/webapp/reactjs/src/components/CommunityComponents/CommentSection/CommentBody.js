import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import {
  BoxForComments,
  ComBody,
  Comm,
  Time,
  CommInfo,
  WhiteBoxes,
  CommThread,
  Replies,
  Author,
} from '../CommunityStyles';

const CommentBody = () => {
  const [comments, setNewComments] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/commentssection').then((response) => {
      setNewComments(response.data);
    });
  });

  return (
    <div className="c-inline-block">
      <BoxForComments>
        <WhiteBoxes>
          <CommThread>
            <details open {...Comm}>
              <CommInfo>
                <Author>
                  <b>Eric</b>
                </Author>

                <Time>Some time ago...</Time>
              </CommInfo>
              <ComBody>
                <b>I love this game so much make more! </b>
              </ComBody>
              <br />
              <Replies>
                <CommInfo>
                  <Author>
                    <b>Admin</b>
                  </Author>
                  <Time>later</Time>
                </CommInfo>
                <ComBody>
                  <b>Thanks, new games coming soon! </b>
                </ComBody>
              </Replies>
            </details>
          </CommThread>
        </WhiteBoxes>

        {comments.map((val, key) => {
          return (
            <WhiteBoxes>
              <CommThread>
                <details open {...Comm}>
                  <CommInfo>
                    <Author>
                      <b>{val.alias}</b>
                    </Author>

                    <Time>Some time ago...</Time>
                  </CommInfo>
                  <ComBody>
                    <b>{val.comment} </b>
                  </ComBody>
                  <br />
                  <Replies>
                    <CommInfo>
                      <Author>
                        <b>{val.admin}</b>
                      </Author>
                      <Time>{val.time}</Time>
                    </CommInfo>
                    <ComBody>
                      <b>{val.adminreply} </b>
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
