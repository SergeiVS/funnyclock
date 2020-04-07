import React from 'react';
import { Container, Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class MenuComponent extends React.Component
{
    public render()
    {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center h-100">
                <Card>
                    <Card.Body>
                        <p className="display-4">Главное меню</p>
                        <LinkContainer to="/typeone"><Button variant="primary" className="w-100 my-1">Определи время</Button></LinkContainer>
                        <LinkContainer to="/typetwo"><Button variant="primary" className="w-100 my-1">Правильно назови время</Button></LinkContainer>
                        <p className="mt-2 text-center">Copyright © Sergei Shekshuev, 2020</p>
                    </Card.Body>
                </Card>
            </Container>
        )
    }   
}
