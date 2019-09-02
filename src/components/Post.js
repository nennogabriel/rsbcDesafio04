import React, { Component } from 'react';
import Comment from './Comment';
import { comment } from 'postcss';

export default class Post extends Component {

  // data.comments.map(comment => <Comment key={comment.id} data={comment} />)

  render() {
    const { author, date, content, comments} = this.props.data;
    return (
      <div className='post'>
        <div className="postHeader">
          <img src={author.avatar}/>
          <div>
            <strong>{author.name}</strong>
            <span>{date}</span>
          </div>
        </div>
        <div className="postContent">
          <p>{content}</p>
        </div>
        <div className="postComments">
          {comments && comments.map(comment => <Comment key={comment.id} data={comment}/>)}
        </div>
      </div>

    );
  }
}
