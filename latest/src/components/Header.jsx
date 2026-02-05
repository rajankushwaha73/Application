import "./Header.css"
export default function Header(){
    return(
        <div>
        <h1>This is my first react App</h1>
    
        <nav className="navigation">
            <a href="https://www.google.com" title="Go to Google">Home</a>
            <a href="https://www.instagram.com" title="Go to Instagram">Instagram</a>
        </nav>

        </div>
    );
}