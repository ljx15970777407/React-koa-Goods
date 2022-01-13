import React from 'react'
import { Head } from './HeaderComponent.style.js';
import { useHistory } from 'react-router-dom';

const HeaderComponent = (props) => {
    const { title } = props;
    const { handleShare } = props;
    const history = useHistory();

    const handleback = () => {
        history.go(-1)
    }
    return (
        <Head>
            <div className="leftimg iconfont" onClick={handleback}>
                &#xe670;
                {/* <img src={add} alt=""/> */}
            </div>
            <span>{title}</span>
            <div className=" share" onClick={handleShare}>
                <div className=" iconfont righticon">
                    &#xe600;
                </div>
                {/* <img src={add} alt=""/> */}
            </div>
        </Head>
    )
}
export default HeaderComponent;
