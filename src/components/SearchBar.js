import { useRef } from "react";

const SerachBar = ({search}) => {
    const nameForm = useRef(null);
    
    const handleSearchClick = () => {
       const form = nameForm.current;
        search(form['searchword'].value);
    }
    return ( 
        <div className="form-group d-flex  mb-3">
            <form ref={nameForm} onSubmit={handleSearchClick} >
               <input  name="searchword" type="text" className="form-control" placeholder="Type Your Subject..." />
               <button type="submit" className="btn btn-primary mb-2" >Search</button>
 
            </form>  
         </div>
     );
}

export default SerachBar;