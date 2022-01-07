import React, {memo} from 'react'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'

const My = (props) => {
    const {  } = props

    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    My
                </div>
            
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, {})(memo(My))
