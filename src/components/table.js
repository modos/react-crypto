import React from "react";
import { Link } from "react-router-dom";
export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = { list: [] };
    }

    // call api when component mounted
    async componentDidMount() {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
        let req = await fetch(url);
        req = await req.json();

        this.setState({ list: req });

    }


    render() {

        // filter list by user search query
        let l = this.state.list;
        if (!this.props.query == "") {
             l = this.state.list.filter(e => {
                return e.id.includes(this.props.query);
            })
        }
        return (
            <div className="search-page-table-component">
                <table className="search-page-table">
                    <thead className="search-page-table-heading">
                        <tr>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>24h Change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {l.map((element, index) => {
                            return <tr key={index} className='search-page-table-row'>
                                <td>
                                    <div style={{display: 'inline-flex', gap: '8px'}}>
                                    <Link to={'/coin/' + element.id} state={{id: element.id}}><img src={element.image} alt="crypto" width="45px" height="45px"/></Link>
                                    <div>
                                    <p style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{element.symbol}</p>
                                    <p>{element.id}</p>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    $ {element.current_price}
                                </td>
                                <td>
                                    <p style={{color: 'red'}}>{(Math.round(element.price_change_percentage_24h * 100) / 100).toFixed(2)}%</p>
                                </td>
                                <td>
                                    $ {element.market_cap}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}