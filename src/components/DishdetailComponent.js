import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(dish){
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

    renderDish(dish) {
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
            {this.renderComments(dish)}
          </div>  
        );
        else
            return(
                <div></div>
            );
    }

    render() {
      const dish=this.props.dish;
      return(
        this.renderDish(dish)
      );
    }
}

export default DishDetail;