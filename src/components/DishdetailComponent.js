import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

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
          <CommentForm />
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

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      };

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
      }

      render () {
        return (
          <React.Fragment>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
              
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Col>
                          <Label htmlFor="contacType">Rating</Label>
                          <Control.select model=".contactType" name="contactType" id="contacType"
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
                        <Col>
                          <Label htmlFor="name">Your Name</Label>
                          <Control.text model=".name" id="name" name="name"
                              placeholder="Name"
                              className="form-control"
                              validators={{
                                  required, minLength: minLength(3), maxLength: maxLength(15)
                              }}
                                />
                          <Errors
                              className="text-danger"
                              model=".name"
                              show="touched"
                              messages={{
                                  required: 'Required',
                                  minLength: 'Must be greater than 2 characters',
                                  maxLength: 'Must be 15 characters or less'
                              }} />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                          <Label htmlFor="message">Comment</Label>
                          <Control.textarea model=".message" id="message" name="message"
                            rows="6"
                            className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Button type="submit" color="primary">
                            Send Feedback
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
              </ModalBody>
            </Modal>
          </React.Fragment>
        );
      }
    }

export default DishDetail;