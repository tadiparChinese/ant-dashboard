import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Icon, Avatar } from 'antd'
import { openEditProfile } from '../../actions/profile_actions';
import ProfileDrawer from './profileDrawer';
const { Meta } = Card;

class ProfileView extends Component {
  state = {
    isDrawerOpen: false
  }
  render() {
    return (
      <div className="profile-view">
        {this.props.profile.name &&
          <div>

            <div className="panel-header">
              <h3>{this.props.profile.name}</h3>
            </div>
            <Card
              style={{ width: '100%' }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[
                <Icon onClick={() => console.log('settings clicked')} type="setting" />,
                <Icon type="edit" onClick={() => this.props.openEditProfile(this.props.profile)} />,
                <Icon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={this.props.profile.name}
                description={this.props.profile.email}
              />
            </Card>
          </div>

        }
        <ProfileDrawer />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.singleProfile
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openEditProfile
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);