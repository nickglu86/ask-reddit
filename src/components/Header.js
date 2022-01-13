import reddit from '../images/reddit.jpg';

const Header = () => {
    return ( 
        <header className="pt-3 pb-3">
            <div className="header-wrapper">
                <img src={reddit} />
                <h1 className="text-light ">Ask Reddit Anything</h1>
            </div>
        </header>
     );
}

export default Header;