
import React, { Component } from 'react';
import {Card,CardImg,Button, CardBody,CardTitle,CardText, BreadcrumbItem, Breadcrumb,
        Modal,ModalBody, ModalHeader,Label, Row, Col} from 'reactstrap';
import { Control ,LocalForm, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';

const maxLength = (len) => (val) =>!(val) || (val.length <= len);
const minLength = (len) => (val) =>(val) && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
 
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSummit = this.handleSummit.bind(this);
    }

    handleSummit(values){
        this.toggleModal();
        console.log("current state is " + JSON.stringify(values));
        alert("Current state is : " + JSON.stringify(values));
     
    }

    toggleModal(){

        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render(){
        return(  
            <React.Fragment>
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comments </Button>
                <Modal isOpen ={this.state.isModalOpen} toggle={this.toggeModal}>
                    <ModalHeader toggle={this.toggeModal}>Submit Comment </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) =>this.handleSummit(values)}>
                                <Row className="form-group" >
                                    <Label for="firstname" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model = '.rating' id="rating" name="rating" 
                                            className="form-control">   
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option> 
                                            <option>5</option> 
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label for="name" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Control.text model = '.name' id="name" name="name" 
                                                className="form-control"
                                                placeholder="Your Name" 
                                                validators={{
                                                    minLength: minLength(3),
                                                    maxLength: maxLength(15)
                                                }}>
                                        
                                        </Control.text>
                                        <Errors className="text-danger" model=".name" show="touched"
                                                    messages={{
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}>
                                        </Errors>
                                    </Col>
                                </Row>           
                                <Row className="form-group">
                                    <Label htmlFor="message" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea  model = '.message' id="message" name="message" rows="6" className="form-control"></Control.textarea >
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="summit" color="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
            </React.Fragment>  
            );
    }
 
}


   const RenderDish =({dish}) => {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

   const RederComments = ({comments}) => {
        const com = comments.map((comment) => {
        return(
            <div key={comment.id} className="container"> 
                <p className="row">{comment.comment}</p>
                <div className="row">
                    <p>-- {comment.author} , &nbsp; </p>
                    <p> {
                        new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                      }).format(new Date(comment.date))}</p>
                </div>  
            </div> 
        );
    })

    return( 
        <div>
            {com}
            <CommentForm></CommentForm>
        </div> );   
   };

    const DishDetail = (props) =>{
        if(props.dish != null){
            return(   
                <div className="container" >
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem> <Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}></RenderDish>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h1>Comments</h1>
                            <RederComments comments ={props.comments}></RederComments>                            
                        </div> 
                    </div>
                </div>
            );
        }else{
            return(<div></div>)
        }   
    }
              
export default DishDetail;