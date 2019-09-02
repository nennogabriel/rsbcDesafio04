import React, { Component } from 'react';
import Post from './Post';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Pedro Moreno',
          avatar: 'https://avatars3.githubusercontent.com/u/1161565?v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Pedro Moreno',
          avatar: 'https://avatars3.githubusercontent.com/u/1161565?v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
      },
      {
        id: 3,
        author: {
          name: 'Pedro Moreno',
          avatar: 'https://avatars3.githubusercontent.com/u/1161565?v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
    ]
  };

  // posts.map(post => <Post key={post.id} data={post} />)

  render() {
    return (
      <div className='postlist'>
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    );
  }
}
