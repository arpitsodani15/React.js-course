import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderComments(dish){
      const marks= dish.comments.map( (comment) =>{
          return(
            <ul className="list-unstyled">
              <li>{comment.comment}</li>
              <li>-- {comment.author} , {comment.date}</li>
            </ul>
          );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {marks}
        </div>
      );
    }

    function RenderDish(dish) {
      if (dish != null)
        return(
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                  <CardImg top width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
            </div>
            {RenderComments(dish)}
          </div>  
        );
        else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {
      const dish=props.dish;
      return(
        <div class="container">
          {RenderDish(dish)}
        </div>
      );
    }

export default DishDetail;