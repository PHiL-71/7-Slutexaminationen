import './Error.css';

import { Link } from 'react-router-dom';

function Error() {
    return(
        <div className="error">This page does not exist.<br /><br /><Link to="/">Go home</Link></div>
    );
}

export default Error;