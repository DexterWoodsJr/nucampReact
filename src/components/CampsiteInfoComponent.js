<<<<<<< HEAD
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
=======
import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
>>>>>>> 93b50983c1c5a388974c3ccaf8c4f89bcd71a67c

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
<<<<<<< HEAD
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="mb-3">
              <p>{comment.text}</p>
              <p>
                -{comment.author}{" "}
=======
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <p>
                {comment.author} -{" "}
>>>>>>> 93b50983c1c5a388974c3ccaf8c4f89bcd71a67c
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
<<<<<<< HEAD
          </div>
        ))}
=======
          );
        })}
>>>>>>> 93b50983c1c5a388974c3ccaf8c4f89bcd71a67c
      </div>
    );
  }
  return <div />;
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;
