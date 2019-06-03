import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    ModalHeader,
    ModalBody, Form, FormGroup, Label, CustomInput,Input, Button, Modal
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.state = {
            selectedDish: null,
            isCommentModalOpen: false
        };
    }

    toggleCommentModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }
    handleCommentSubmit(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={this.props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={this.props.comments} />
                        <CommentForm toggleButton={this.toggleCommentModal}/>
                    </div>
                </div>

                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleCommentSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <CustomInput type="select" id="rating" name="rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </CustomInput>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name" placeholder="Your Name"
                                       innerRef={(input) => this.name = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment"
                                       innerRef={(input) => this.comment = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
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
class RenderComments extends Component{
    render() {
        const comments = this.props.comments.map((comment)=>{
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p><span>-- {comment.author}, </span><span> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</span></p>
                </li>
            );
        });
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );
    }
}
class CommentForm extends Component{
    render() {
        return(
            <div>
                <Button outline onClick={this.props.toggleButton}><span className="fa fa-pencil fa-md"></span> Submit Comment</Button>
            </div>
        );
    }
}
export default Dishdetail;