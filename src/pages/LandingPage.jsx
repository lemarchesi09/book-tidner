
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <h1>Landing Page</h1>
            <Link className=' bg-red-500' to="/finder"> 
                <button>Find a Book</button>
            </Link>
        </div>
    );
}

export default LandingPage;