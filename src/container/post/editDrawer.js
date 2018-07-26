import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Drawer, Button } from 'antd';
import DrawerTitle from './drawerTitle';
import './post.css';

class EditDrawer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Drawer
                    title={<DrawerTitle title={this.props.singlePost.title}/>}
                    placement="right"
                    width={600}
                    closable={true}
                    wrapClassName={'red-background'}
                    onClose={this.props.handleClose}
                    visible={this.props.open}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        singlePost: state.postReducer.singlePost
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EditDrawer);