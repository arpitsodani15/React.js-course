import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderComments(comments){
      const list= comments.comments.map((comment) => {
        return(
          <ul className="list-unstyled" key={comment.id}>
              <li>{comment.comment}</li>
              <li>-- {comment.author} , {comment.date}</li>
          </ul>
        );
      })
      return (
        <div>
          <h4>Comments</h4>
          { list }
        </div>
      );
    }

    function RenderDish(dish) {
        return(
          <Card>
            <CardImg top width="100%" src={dish.dish.image} alt={dish.dish.name} />
            <CardBody>
              <CardTitle>{dish.dish.name}</CardTitle>
              <CardText>{dish.dish.description}</CardText>
            </CardBody>
          </Card>
        );
    }

    function DishDetail(props) {
      return(
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>                
          </div>          
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.comments} />
            </div>
          </div>
        </div>
      );
    }

export default DishDetail;