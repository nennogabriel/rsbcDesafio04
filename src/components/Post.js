import React, { Component } from 'react';
import Comment from './Comment';
import { comment } from 'postcss';

export default class Post extends Component {

  // data.comments.map(comment => <Comment key={comment.id} data={comment} />)

  render() {
    const { author, date, content, comments} = this.props.data;
    return (
      <div className='post'>
        <div>
          <img src={author.avatar}/>
          <div>
            <strong>{author.name}</strong>
            <span>{date}</span>
          </div>
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
        <div className="comments">
          {comments && comments.map(comment => <Comment key={comment.id} data={comment}/>)}
        </div>
      </div>

    );
  }
}
