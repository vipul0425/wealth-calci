import { Link } from "react-router-dom";
const Button = ( { text,fontSize,disable,path } ) => {
    let disableState = '' 
    if (disable) {
        disableState = 'disabled'
    }
    return (
        <button className={`btn btn-color mt-2 ${disableState}`} style={{fontSize : `${fontSize}px`}}>
            <Link to={path} className="link-dark text-decoration-none">
            {text}
            </Link>
        </button>
    )
}

export default Button