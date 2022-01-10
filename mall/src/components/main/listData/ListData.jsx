import React from 'react'
import {Top, TopItem} from './listData.style'
import { NavLink } from 'react-router-dom'
import ListItem from './listitem/ListItem'

const ListData = (props) => {
    const { list } = props
    console.log(list, '------------------')
    return (
        <>
            <Top>
                    <NavLink to="/home/main" activeClassName="selected">
                        <TopItem>
                            <div className="personal-info-card">
                                <div className="personal-info-num">生活百科</div>
                                <div className="personal-info-num-name">爱生活</div>
                            </div>
                        </TopItem>
                    </NavLink>
                    {/*  */}
                    <NavLink to="/a" activeClassName="selected">
                    <TopItem>
                            <div className="personal-info-card">
                                <div className="personal-info-num">健康生活</div>
                                <div className="personal-info-num-name">关注健康</div>
                            </div>
                        </TopItem>
                    </NavLink>
                    <NavLink to="/b" activeClassName="selected">
                    <TopItem>
                            <div className="personal-info-card">
                                <div className="personal-info-num">宝爸宝妈</div>
                                <div className="personal-info-num-name">育儿指南</div>
                            </div>
                        </TopItem>
                    </NavLink>
                    <NavLink to="/c" activeClassName="selected">
                    <TopItem>
                        <div className="personal-info-card">
                            <div className="personal-info-num">家居改造</div>
                            <div className="personal-info-num-name">
                                <span>该造家</span> </div>
                        </div>
                    </TopItem>
                </NavLink>
            </Top>
            {
                list.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))
            }
        </>
    )
}

export default ListData