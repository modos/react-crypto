import React from "react";

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { coin1: { image: "", market_data: {current_price: {usd: ""}} },
                       coin2: { image: "", market_data: {current_price: {usd: ""}} },
                       coin3: { image: "", market_data: {current_price: {usd: ""}} },
                       show1: false,
                       show2: false,
                       show3: false };
    }

    // get last 3 items that user searched (using localstorage)

    async componentDidMount() {
        let items = "";
        if (localStorage.getItem("items")) {
            items = localStorage.getItem('items').split(",");

        }
        if (items[1]) {
           try {
            const url1 = "https://api.coingecko.com/api/v3/coins/" + items[1].trim();
            let req1 = await fetch(url1);
            req1 = await req1.json();
            this.setState({coin1: req1});
            console.log("item 1", req1);
            this.setState({show1: true});
           } catch (error) {
               console.log(error)
           }

        }

        if (items[2]) {
           try {
            const url2 = "https://api.coingecko.com/api/v3/coins/" + items[2].trim();
            let req2 = await fetch(url2);
            req2 = await req2.json();
            this.setState({coin2: req2});
            console.log("item 1", req2);
            this.setState({show2: true});
           } catch (error) {
               console.log(error);
           }
        }

        if (items[3]) {
            try {
            const url3 = "https://api.coingecko.com/api/v3/coins/" + items[3].trim();
            let req3 = await fetch(url3);
            req3 = await req3.json();
            this.setState({coin3: req3});
            console.log("item 1", req3);
            this.setState({show3: true});
            } catch (error) {
                console.log(error);
            }
        }

    }

    render() {
        // check if items exist then render block
        return (
            <div className='footer'>
                {
                    this.state.show1 ? <div className='history-item'>
                    <div style={{display: 'flex'}}>
                    <img src={this.state.coin1.image.thumb} alt="coin"/>
                    <p style={{marginLeft: '8px'}}>$ {this.state.coin1.market_data.current_price.usd}</p>
                    </div>
                    <p>{this.state.coin1.name}</p>
                </div> : <div></div>
                }
                {
                    this.state.show2 ? <div className='history-item'>
                    <div style={{display: 'flex'}}>
                        <img src={this.state.coin2.image.thumb} alt="coin"/>
                        <p style={{marginLeft: '8px'}}>$ {this.state.coin2.market_data.current_price.usd}</p>
                        </div>
                        <p>{this.state.coin2.name}</p>
                    </div> : <div></div>
                }
                {
                    this.state.show3 ? <div className='history-item'>
                    <div style={{display: 'flex'}}>
                        <img src={this.state.coin3.image.thumb} alt="coin"/>
                        <p style={{marginLeft: '8px'}}>$ {this.state.coin3.market_data.current_price.usd}</p>
                        </div>
                        <p>{this.state.coin3.name}</p>
                    </div> : <div></div>
                }
            </div>
        );

    }
}