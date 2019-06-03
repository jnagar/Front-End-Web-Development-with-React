import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    render() {
        const dish = this.props.dish;
        if(dish != null){
            const comments = dish.comments.map((comment)=>{
                return (
                    <RenderComment comment={comment.comment} author={comment.author} date={comment.date} />
                );
            });
            const dishDetails =  <RenderDish dish={dish}/>;

            return (
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            {dishDetails}
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            <div>
                                <h4>Comments</h4>
                                <ul className="list-unstyled">
                                    {comments}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
        else
            return (
              <div></div>
            );
    }
}
class RenderDish extends Component{
    render() {
        return(
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

}
class RenderComment extends Component{
    render() {
        let date = new Date(this.props.date);
        return(
            <li>
                <p>{this.props.comment}</p>
                <p><span>-- {this.props.author}, </span><span> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)))}</span></p>
            </li>
        );
    }
}

export default Dishdetail;