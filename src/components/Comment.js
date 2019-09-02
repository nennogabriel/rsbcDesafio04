import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    const {author, content} = this.props.data;
    return (
      <div className='comment'>
        <img src={author.avatar}/>
        <div className="content">
          <strong>{author.name}</strong>
          <span>{content}</span>
        </div>
      </div>
    );
  }
}
