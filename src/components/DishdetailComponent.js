import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

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
                    <Comment comment={comment.comment} author={comment.author} date={comment.date} />
                );
            });
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
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

            );
        }
        else
            return (
              <div></div>
            );
    }
}
class Comment extends Component{
    render() {
        let date = new Date(this.props.date);
        date = date.toDateString();
        date = date.substring(4);
        date = date.substring(0,6) + "," + date.substring(6);
        return(
            <li>
                <p>{this.props.comment}</p>
                <p><span>-- {this.props.author}, </span><span> {date}</span></p>
            </li>
        );
    }
}

export default Dishdetail;