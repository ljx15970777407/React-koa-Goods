import React from 'react'
import './Classify.css'
import Scroll from '../../../baseUI/scroll'

const Classify = (props) => {
    const { classify } = props

    return (
        <>
            <Scroll
                direction="horizental"
                refresh={true}
            >
                <div className="classify">
                    <div className="classify-box">
                    {
                        classify.map((item, index) => {
                            return (
                                <span 
                                    className="classify-item"
                                    key={index}
                                    onClick={() => {
                                        handleclick(item)
                                    }}
                                >{item}</span>
                            )
                        })
                    }
                    </div>
                </div>
            </Scroll>
        </>
    )
}

export default Classify
