import './Landing.css';
import imageLeft from '../graphics/intro-graphic-left.svg';
import imageRight from '../graphics/intro-graphic-right.svg';
import imageCenter from '../graphics/airbean-landing.svg';
import { useDispatch } from 'react-redux';
import { setLoaded } from '../actions/airbeanActions.jsx';

function Landing() {
    const dispatch = useDispatch();
    
    setTimeout(function () {
        dispatch(setLoaded(1));
    }, 5000);

    function loaded() {
        dispatch(setLoaded(1));
    }

    return(
        <div className="landingMain">
            <div className="landingLeft">
                <img src={ imageLeft } alt="landing_left" />
            </div>
            <div className="landingCenter">
            <img src={ imageCenter } onClick={ loaded } alt="landing_center" />
            </div>
            <div className="landingRight">
                <img src={ imageRight } alt="landing_right" />
            </div>
        </div>
    );
}

export default Landing;