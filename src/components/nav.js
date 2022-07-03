import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { change } from "../features/theme";
import { useEffect } from "react";

export default function Nav() {
    const count = useSelector((state) => state.theme.value);
  const dispatch = useDispatch()

  function toggleTheme() {
    if (count) {
      document.getElementsByClassName('search-page-heading')[0].style.backgroundColor = "red";
    }else {
      document.getElementsByClassName('search-page-heading')[0].style.backgroundColor = "grey";
    }
    
    dispatch(change());
}

useEffect(() => {
    if (count) {
        document.getElementsByClassName('search-page-heading')[0].style.backgroundColor = "red";
    }else {
        document.getElementsByClassName('search-page-heading')[0].style.backgroundColor = "grey";
    }
  })

    return(
        <div className="search-page-nav">
        <Link to={"/"} style={{textDecoration: 'none', color: "white"}}><h3>IE Final Project</h3></Link>
        <button style={{cursor: "pointer"}} onClick={() => toggleTheme()}>Change Theme</button>
    </div>
    );
}