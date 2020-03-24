import React from 'react'
import axios from 'axios'
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            apiInfo: null
        };
    }
    async getDataAxios(){
        const response =
            await axios.get("http://localhost:2525",
                { headers: {'Access-Control-Allow-Origin': '*'}}
            )
        this.setState({
            isLoaded: true,
            apiInfo: response.data
        })
        console.log(response.data)
    }
    componentDidMount() {
       this.getDataAxios();
    }

    render() {
        const { error, isLoaded, apiInfo } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
               <h6>{apiInfo}</h6>
            );
        }
    }
}
export default MyComponent;