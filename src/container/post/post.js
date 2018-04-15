import React, { Component } from 'react';
import AddPost from "./addPost";
import PostList from './postList';
import { Button, Icon, Modal } from 'antd';
import './post.css'

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      isModalOpen: false
    }
    this.setIsModalOpen = this.setIsModalOpen.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  handlePostSubmit = (post) => {
    this.props.addPost(post);
    this.setState({
      isModalOpen: false
    })
  }
  setIsModalOpen = (bool) =>{
    this.setState({
      isModalOpen: false
    })
  }
  render() {
    return (
      <div className="post-wrapper">
        <div className="post-actions">
        <Button type="primary" icon="filter" >Filter</Button>
        <Button 
              type="primary" 
              icon="plus" 
              onClick={()=>this.setState({isModalOpen: true})}>
              Add Post</Button>
        </div>
        <Modal
          title="Speak your mind"
          maskClosable={true}
          wrapClassName="vertical-center-modal"
          visible={this.state.isModalOpen}
          onOk={() => this.setIsModalOpen(false)}
          onCancel={() => this.setIsModalOpen(false)}
          >
        <AddPost handlePostSubmit={this.handlePostSubmit}/>
        </Modal>
        <PostList/>
      </div>
    )
  }
}

export default Post;