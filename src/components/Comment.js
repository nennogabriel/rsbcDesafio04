import React, { Component } from 'react';

export default class Comment extends Component {
  // comments: [
  //   {
  //     id: 1,
  //     author: {
  //       name: 'Diego Fernandes',
  //       avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
  //     },
  //     content: "Conteúdo do comentário"
  //   }
  render() {
    const {author, content} = this.props.data;
    return (
      <div className='comment'>
        <img src={author.avatar}/>
        <div className="content">
          <strong>{author.name}</strong>
          <p>{content}</p>
        </div>
      </div>

    );
  }
}
