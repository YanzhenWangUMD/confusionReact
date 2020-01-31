
import React, { Component } from 'react';
import {Card,CardImg, CardBody,CardTitle,CardText} from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish) {
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
    render(){
        if(this.props.dish!= null){
            const comments = this.props.dish.comments.map((comment) => {
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
            });
            return(    
               <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                   <div className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        {comments}
                   </div>
                </div>
            );
        }else{
            return(
                <div></div>
            )
        }
        
    }
}

export default DishDetail;