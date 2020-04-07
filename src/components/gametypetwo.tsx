import React from 'react';
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class GameTypeTwoComponent extends React.Component
{
    public render()
    {
        return (
            <Container className="d-flex justify-content-center align-items-center h-100">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xs={12} className="d-flex flex-column justify-content-center align-items-center">
                                        <p className="display-4">В разработке...</p>
                                        <LinkContainer to="/"><Button variant="primary" className="w-100">Вернуться в меню</Button></LinkContainer>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        )
    }   
}
