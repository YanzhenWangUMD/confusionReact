import React, {Component} from 'react';
import {Card,CardImg, CardText,CardTitle,CardBody,CardSubtitle} from 'reactstrap';


function RenderCard ({item}){
    return(
    <Card>
        <CardImg width="100%" src={item.image} alt={item.name}></CardImg>
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
                {item.designation? < CardSubtitle>item.designation</CardSubtitle> : null}
                <CardText> {item.description} </CardText>
            </CardBody>
    </Card>
    );
}
function Home({dish,leader,promotion}){
    return(
        <div className="container">
            <div className ="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={dish}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={promotion}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={leader}></RenderCard>
                </div>
            </div>
        </div>
    );
    }
    export default Home