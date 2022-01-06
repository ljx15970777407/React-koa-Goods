import React from 'react';
// import './Server.style.js'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll'

const Server = (props) => {
    const { category } = props

    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Server
                </div>
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.server.category
    }
}
export default connect(mapStateToProps, {})(Server)