import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class Coin extends React.Component {

    // state schema required when api giving null (escape from render error)
    constructor(props) {
        super(props);
        this.state = { coin: { image: "", description: {en: ""}, market_data: {current_price: {usd: ""}, market_cap: {usd: ""}} } };
    }

    async componentDidMount() {
        const url = "https://api.coingecko.com/api/v3/coins/" + this.props.match.params.id;
        let req = await fetch(url);
        req = await req.json();

        this.setState({ coin: req });

    }

    render() {
        return (
            <div className="coin-page">
                 <div className="search-page-nav">
        <Link to={"/"} style={{textDecoration: 'none', color: "white"}}><h3>IE Final Project</h3></Link>
    </div>
                <div className="coin-page-main">
                    <div>
                    <img src={this.state.coin.image.large} alt="coin" width="128px" height="128px" />
                    </div>
                    <h1>{this.state.coin.name}</h1>
                    <p className="coin-page-main-desc">{this.state.coin.description.en.substring(1, 512)}</p>
                    <h1>Rank: {this.state.coin.market_cap_rank}</h1>
                    <h1>Current Price: $ {this.state.coin.market_data.current_price.usd}</h1>
                    <h1>Market Cap: $ {this.state.coin.market_data.market_cap.usd}</h1>
                </div>
            </div>
        );
    }
}

export default withRouter(Coin);
