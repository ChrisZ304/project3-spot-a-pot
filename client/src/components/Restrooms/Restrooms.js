import React from 'react';

export default class FetchRestrooms extends React.Component {
    state = {
        loading: true,
        restroom: null
    }
    
    async componentDidMount() {
        const url = "https://www.refugerestrooms.org/api/v1/restrooms";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({restroom: data.results, loading: false })
        console.log(data);

    }

    render() {
    return (
    <div>
    {this.state.loading || !this.state.restroom ? (
    <div>loading...</div>
    ) : ( 
        <div>{this.state.Restrooms.name}</div>,
        <div>{this.state.Restrooms.accessible}</div>,
        <div>{this.state.Restrooms.unisex}</div>,
        <div>{this.state.Restrooms.comment}</div>
    
    )}
</div>
    );

    }

}