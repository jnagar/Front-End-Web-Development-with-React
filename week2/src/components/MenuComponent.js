import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetail from  './DishdetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  className="col-12 col-md-5 m-1" key={dish.id}>
                    <Dish dish={dish} onClick={this.props.onClick}/>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail dish={this.state.selectedDish} />
            </div>
        );
    }
}

class Dish extends Component{
    render() {
        const dish = this.props.dish;
        const clickListener = this.props.onClick;
        return(
            <Card key={dish.id} onClick={() => clickListener(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }
}

export default Menu;