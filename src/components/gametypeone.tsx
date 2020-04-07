import React from 'react';
import { Alert, Container, Row, Col, Button, Card, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import Clock from "./clock";

interface Task 
{
    right: boolean,
    date: Date
}

interface IState 
{
    hours: number,
    minutes: number,
    seconds: number,
    tasks: Task[],
    count: number,
    success: boolean,
    error: boolean,
    help: boolean
}

export default class GameTypeOneComponent extends React.Component<any, IState>
{

    public readonly state: Readonly<IState> = 
    {
        hours: 0,
        minutes: 0,
        seconds: 0,
        tasks: [], 
        count: 3,
        success: false,
        error: false,
        help: false
    }

    public componentDidMount()
    {
        this.newTask();
        if (localStorage.getItem("typeone_help") != "done")
        {
            this.setState({ help: true });
            localStorage.setItem("typeone_help", "done");
        }
    }

    private newTask()
    {
        let hours = Math.floor(Math.random() * 24);
        let minutes = Math.floor(Math.random() * 59);
        let seconds = Math.floor(Math.random() * 59);
        let tasks : Task[] = [];
        let rightIndex = Math.floor(Math.random() * 3);
        for (let i = 0; i < this.state.count; i++)
        {
            if (i == rightIndex) 
            {
                let date = new Date();
                date.setHours(hours, minutes, seconds);
                let task : Task = 
                {
                    right: true,
                    date: date
                }
                tasks.push(task);
            }
            else 
            {
                let date = new Date();
                date.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 59), Math.floor(Math.random() * 59));
                let task : Task = 
                {
                    right: false,
                    date: date
                }
                tasks.push(task);
            }
            this.setState({
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                tasks: tasks
            });
        }
    }

    private answer(answer: boolean)
    {
        if (answer)
        {
            this.setState({ success: true, error: false }, () => 
            {
                setTimeout(() => this.setState({ success: false }, () => this.newTask()), 1000);
            });
        } 
        else 
        {
            this.setState({ error: true }, () => 
            {
                setTimeout(() => this.setState({ error: false }), 1000);
            });
        }
    }

    public render()
    {
        return (
            <Container className="d-flex justify-content-center align-items-center h-100">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                { this.state.tasks.map((task, index) => 
                                (
                                    <Col xs={4} className="d-flex flex-column justify-content-center align-items-center" key={index}>
                                        <Clock size={ 200 } time={ task.date } isActive={ false }/>
                                        <Button variant="outline-primary" onClick={ () => this.answer(task.right)}>Выбрать</Button>
                                    </Col>
                                )) }
                                </Row>
                                <Row>
                                    <Col xs={12} className="my-3">
                                        <Alert show={ this.state.success } variant="success" className="text-center">Верно!</Alert>
                                        <Alert show={ this.state.error } variant="danger" className="text-center">Подумай еще</Alert>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex justify-content-center align-items-center">
                                        <h1 className="display-1">
                                            { 
                                                (this.state.hours > 9 ? this.state.hours.toString() : "0" + this.state.hours.toString())
                                                + ":" + 
                                                (this.state.minutes > 9 ? this.state.minutes.toString() : "0" + this.state.minutes.toString())
                                                + ":" + 
                                                (this.state.seconds > 9 ? this.state.seconds.toString() : "0" + this.state.seconds.toString())
                                            }
                                        </h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex flex-row justify-content-center align-items-center mb-2">
                                        <Button variant="outline-secondary" className="mx-1" onClick={ () => this.newTask() }>Сброс</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex flex-row justify-content-between">
                                        <OverlayTrigger placement="top" overlay={
                                            <Tooltip id="menu_tooltip">Вернуться в меню</Tooltip>
                                        }>
                                            <Button variant="outline-secondary" className="mx-1" onClick={ () => this.props.history.goBack() }><i className="fa fa-arrow-left fa-2x"></i></Button>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={
                                            <Tooltip id="help_tooltip">Помощь</Tooltip>
                                        }>
                                            <Button variant="outline-secondary" className="mx-1" onClick={ () => this.setState({ help: true })}><i className="fa fa-question fa-2x"></i></Button>
                                        </OverlayTrigger>
                                        
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Modal show={ this.state.help } size="lg" onHide={ () => this.setState({ help: false}) } centered>
                    <Modal.Header closeButton>
                        <span>Помощь</span>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <p className="text-center">Привет!</p>
                            <p className="text-center">Здесь ты можешь потренироваться определять время на часах.</p>
                            <p className="text-center">В центре рабоченго окна указано время в цифровом формате (часы:минуты:секунды). Сверху представлены три циферблата, но только на одном из них время такое же, как и указано в цифровом виде. Попробуй определить этот циферблат и нажми на кнопку "Выбрать" под ним.</p>
                            <p className="text-center">Если затрудняешься с ответом, нажми на кнопку "Сброс", и тогда появится новое время.</p>
                            <p className="text-center">Удачи!</p>
                        </div>
                        <Button variant="outline-primary" onClick={ () => this.setState({ help: false })}>Приступить</Button>
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }   
}
