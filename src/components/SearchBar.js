import { useRef } from "react";

const SerachBar = ({search}) => {
    const nameForm = useRef(null);
    const handleSearchClick = () => {
       const form = nameForm.current;
        search(form['searchword'].value);
    }
    return ( 
        <div className="form-group d-flex">
            <form ref={nameForm} >
               <input  name="searchword" type="text" className="form-control" />
            </form>  
            <button type="submit" className="btn btn-primary mb-2" onClick={handleSearchClick}>Search</button>
        </div>
     );
}

export default SerachBar;