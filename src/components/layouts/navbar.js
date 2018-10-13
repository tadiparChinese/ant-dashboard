import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Layout, Menu, Icon, Badge, Table } from 'antd';
import './navbar.css';
import BundleLoading from '../loading/bundleLoading'
import NavMenu from './navMenu';
import GooglePlace from '../google/googlePlace';
import AppBoundary from '../../errorHandler/appBoundary';
import NotificationPopover from '../popover/notificationPopover';
import { ApplicationWrapper } from "../UI/Layout";
import Theme from '../../container/settings/Theme/Theme';
const { Header, Sider, Content } = Layout;

const AsyncDashboard = Loadable({
    loader: () => import('../../container/dashboard/dashboard'),
    loading: BundleLoading
})
const AsyncCalendar = Loadable({
    loader: () => import('../../container/calendar/calendar'),
    loading: BundleLoading
})
const AsyncProfile = Loadable({
    loader: () => import('../../container/profile/profile'),
    loading: BundleLoading
})
const AsyncPost = Loadable({
    loader: () => import('../../container/post/post'),
    loading: BundleLoading
})
const AsyncDND = Loadable({
    loader: () => import('../../container/DND/DND'),
    loading: BundleLoading
})
const AsyncForms = Loadable({
    loader: () => import('../../container/forms/forms'),
    loading: BundleLoading
})
const AsyncTables = Loadable({
    loader: () => import('../../container/tables/tables'),
    loading: BundleLoading
})
const AsyncSettings = Loadable({
    loader: () => import('../../container/settings/settings'),
    loading: BundleLoading
})
const AsyncCharts = Loadable({
    loader: () => import('../../container/charts/charts'),
    loading: BundleLoading
})
const AsyncMyMap = Loadable({
    loader: () => import('../../container/map/map'),
    loading: BundleLoading
})
const AsyncDrag = Loadable({
    loader: () => import('../../container/drag/drag'),
    loading: BundleLoading
})
const AsyncSinglePost = Loadable({
    loader: () => import('../../container/post/singlePost'),
    loading: BundleLoading
})
const AsyncTreeSort = Loadable({
    loader: () => import('../../container/treesort/treeSort'),
    loading: BundleLoading
})
const AsyncCustomField = Loadable({
    loader: () => import('../../container/custom/customField'),
    loading: BundleLoading
})
const AsyncFullCalendar = Loadable({
    loader: () => import('../../container/FullCalendar/FullCalendar'),
    loading: BundleLoading
})
const AsyncNotFound = Loadable({
    loader: () => import('../../container/notFound/notFound'),
    loading: BundleLoading
})

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            theme: 'dark'
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    toggleTheme = (value) => {
        console.log(value)
        this.setState({
            theme: value ? 'dark' : 'light',
        })
    }
    render() {
        const background = this.state.theme === 'light' ? '#fff' : null
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{ minHeight: '100vh', background }}
                >
                    <div className="logo">
                        <h2>Ant {!this.state.collapsed && <span> Dashboard</span>}</h2>
                    </div>
                    <NavMenu
                        collapsed={this.state.collapsed}
                        toggleCollapsed={this.toggle}
                        toggleTheme={this.toggleTheme}
                        theme={this.state.theme} />
                </Sider>
                <Layout>
                    <Header className="flex-container" style={{ background: '#fff', padding: 0, height: 45, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <div style={{ height: 45, display: 'flex', alignSelf: 'flex-start', alignItems: 'center' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-end', marginRight: 50, height: 45 }}>
                            <a href="#" style={{ margin: 15 }}>
                                <Badge count={1} >
                                    <Icon type="bell" />
                                </Badge>
                            </a>
                            <a href="#" style={{ margin: 15 }}>
                                <Badge count={5} >
                                    <Icon type="user" />
                                </Badge>
                            </a>
                            <a href="#" style={{ margin: 15 }}>
                                <NotificationPopover />
                            </a>
                            <Theme />
                        </div>
                    </Header>
                    <ApplicationWrapper>
                        <Content>
                            <Switch>
                                <Route exact path='/' component={AsyncDashboard} />
                                <Route exact path='/calendar' component={AsyncCalendar} />
                                <Route exact path='/profile' component={AsyncProfile} />
                                <Route exact path='/post' component={AsyncPost} />
                                <Route exact path='/post/:id' component={AsyncSinglePost} />
                                <Route exact path='/forms' component={AsyncForms} />
                                <Route exact path='/tables' component={AsyncTables} />
                                <Route exact path='/settings' component={AsyncSettings} />
                                <Route exact path='/dnd' component={AsyncDND} />
                                {/* <AppBoundary> */}
                                <Route exact path='/charts' component={AsyncCharts} />
                                {/* </AppBoundary> */}
                                <Route exact path='/map' component={AsyncMyMap} />
                                <Route exact path='/drag' component={AsyncDrag} />
                                <Route exact path='/tree' component={AsyncTreeSort} />
                                <Route exact path='/custom' component={AsyncCustomField} />
                                <Route exact path='/fullCalendar' component={AsyncFullCalendar} />
                                <Route path='**' component={AsyncNotFound} />
                            </Switch>
                        </Content>
                    </ApplicationWrapper>
                </Layout>
            </Layout>
        );
    }
}

export default Navbar;