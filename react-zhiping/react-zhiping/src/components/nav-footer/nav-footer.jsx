import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TabBar,Badge } from 'antd-mobile'
import './nav-footer.css'
//希望在非路由组件中使用路由库 api？
//withRouter() 高阶组件

const Item = TabBar.Item;
class Navfooter extends Component {
    static propTypes = {
        navList: PropTypes.array.isRequired
    }
    render() {
      
        let { navList } = this.props;
        const { pathname } = this.props.location
        navList = navList.filter((nav) => {
            return !nav.hide
        })
        const { unReadCount} = this.props.userMessage;
        return (
            <div>
                <TabBar>
                    {
                        navList.map(nav => {

                            return (
                                <Item
                                  
                                   
                                   badge={nav.path==='/message'? unReadCount:0}
                                    title={nav.text}
                                    key={nav.path}
                                    icon={{ uri: require(`./img/${nav.icon}.png`) }}
                                    selectedIcon={{ uri: require(`./img/${nav.icon}-selected.png`) }}
                                    selected={pathname === nav.path}
                                    onPress={() => {
                                        this.props.history.replace(nav.path)
                                    }}
                                />
                            )

                        }
                        )
                    }
                </TabBar>
            </div>
        )
    }
}
//内部会向组件中传入一些路由组件特有的属性 location match history
export default connect(
    (state)=>({
        userMessage:state.userMessage
    })
)(withRouter(Navfooter));
