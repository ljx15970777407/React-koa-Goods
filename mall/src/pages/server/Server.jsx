import React, { memo, useState } from 'react'
// import './Server.style.js'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'
import ServerSearchInput from '@/components/server/ServerSearchInput'
import SererPopup from '@/components/server/serverPopup/ServerPopup'

const Server = (props) => {
    const { category } = props
    const [serverDisplay, setServerDisplay] = useState(false)
    const handleonclick = () => {
        // console.log('-------------------------')
        setServerDisplay(!serverDisplay)
    }
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    <ServerSearchInput handlenOnclick={handleonclick}/>
                    <SererPopup 
                        display={serverDisplay}
                        handleOnclick={handleonclick}
                        />
                </div>
            
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) =>　{
    return {
        category: state.server.category
    }
}
export default connect(mapStateToProps, {})(memo(Server))
