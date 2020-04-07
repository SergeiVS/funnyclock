import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class NotFound extends React.Component
{
    render()
    {
        return (
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="align-self-center"><h2>Ресурс не найден</h2></div>
                <LinkContainer to="/"><Button variant="primary" className="w-100 my-1">На главную</Button></LinkContainer>
            </div>
        )
    }
}