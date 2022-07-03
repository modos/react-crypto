import { useState } from "react";
import Table from "../components/table";
import Nav from "../components/nav";
export default function SearchPage() {

    const [query, setQuery] = useState('');

    function typing(event) {
        setQuery(event.target.value);
    }

    function search(event) {

        let items = localStorage.getItem("items");

        if (items) {
            if (items.split(",").length > 3) {
                items = "";
                localStorage.setItem("items", items + ", " + event.target.value)
            }else {
                localStorage.setItem("items", items + ", " + event.target.value)

            }
        }else {
            localStorage.setItem("items", items + ", " + event.target.value)
        }

        
    }
    return (
        <div className="search-page">
           <Nav />

            <div className="search-page-heading">
                <h1>Search Coin</h1>
                <p>Get Information From Here</p>
            </div>

            <div className="search-page-main">
                <h2>Cryptocurrency Prices By Market Cap</h2>
                <input type={'search'} placeholder='Search For A Cryptocurrency Correctly... (Then Press Enter)' onChange={event => {typing(event)}} onKeyPress={event => {if (event.key === "Enter") {search(event)}}}></input>
            </div>

            <Table query={query}/>
        </div>
    );
}