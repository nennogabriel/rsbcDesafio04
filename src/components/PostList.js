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
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat justo non magna imperdiet, vitae maximus dui ullamcorper.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Vivamus id euismod felis, a euismod elit. In hac habitasse platea dictumst. Quisque elit odio, pellentesque vel metus pharetra, consequat tincidunt nunc. Aliquam sit amet leo pulvinar, vulputate sapien molestie, congue ligula. Vestibulum vitae neque ut velit viverra scelerisque."
          },
          {
            id: 4,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Integer gravida turpis nisl, pellentesque dapibus sapien maximus vitae. Ut consequat interdum metus, quis fermentum turpis scelerisque ut. In vulputate, sapien et vehicula hendrerit, lorem velit ullamcorper odio, ac ultrices mauris magna quis metus. Phasellus feugiat ipsum commodo, luctus nunc a, ullamcorper orci. Etiam vel erat quis massa dignissim scelerisque. Aliquam ultrices eros ac felis gravida, ut viverra augue ultrices. Donec malesuada tellus eu eros eleifend, id fringilla urna accumsan."
          },
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
        content: 'Ut rhoncus massa vitae purus aliquam aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet id nisl et tincidunt. Maecenas aliquet tellus non mi porta, quis dignissim erat viverra. Quisque hendrerit est id metus sagittis sodales. Sed interdum, dolor sed luctus venenatis, nulla enim laoreet nulla, non pulvinar odio libero ut orci. Quisque id felis ac urna consequat efficitur.',
        comments: [
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Duis id lectus orci. Aenean at pulvinar nunc. Aenean dictum malesuada risus. Nunc vehicula turpis enim, a pharetra velit malesuada eu. Fusce tincidunt et leo a sagittis. Phasellus faucibus mattis nisl, id egestas odio venenatis et. Ut maximus et eros a volutpat. Nulla facilisi."
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
