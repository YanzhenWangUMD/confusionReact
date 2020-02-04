
import React from 'react';
import {Card,CardImg, CardBody,CardTitle,CardText, BreadcrumbItem, Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';

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

    return( <div>{com}</div> );   
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