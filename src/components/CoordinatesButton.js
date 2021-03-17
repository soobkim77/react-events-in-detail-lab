// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinateButton extends React.Component{
    
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render(){
        return(
            <button onClick={this.handleClick}>Coord Btn</button>
        )
    }
}