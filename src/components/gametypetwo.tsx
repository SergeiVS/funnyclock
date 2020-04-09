import React from 'react';
import { Container, Button, Card, Row, Col, Alert, Tooltip, OverlayTrigger, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Clock from "./clock";

interface IState 
{
    tasks: Task[],
    time: Date,
    success: boolean,
    error: boolean,
    help: boolean
}

interface Task 
{
    right: boolean,
    title: string,
    minutes: number,
    hours: number
}

export default class GameTypeTwoComponent extends React.Component<any, IState>
{

    private readonly hours_ru : string [] = 
    [
        "час",
        "два",
        "три",
        "четыре",
        "пять",
        "шесть",
        "семь",
        "восемь",
        "девять",
        "десять",
        "одиннадцать",
        "двенадцать"
    ]

    private readonly hours_ru_rod : string [] = 
    [
        "первого",
        "второго",
        "третьего",
        "четвертого",
        "пятого",
        "шестого",
        "седьмого",
        "восьмого",
        "девятого",
        "десятого",
        "одиннадцатого",
        "двенадцатого"
    ]

    private readonly minutes_ru : string [] = 
    [
        "Пять минут ",
        "Десять минут ",
        "Пятнадцать минут ",
        "Двадцать минут ",
        "Двадцать пять минут ",
        "Половина ",
        "Без двадцати пяти ",
        "Без двадцати ",
        "Без пятнадцати ",
        "Без десяти ",
        "Без пяти "
    ] 

    public readonly state: Readonly<IState> = 
    {
        tasks: [],
        time: new Date(),
        success: false,
        error: false,
        help: false
    }

    private generateTitleFromTime(hours: number, minutes: number) : string
    {
        if (hours >= 12) hours -= 12;
        let title = "";
        if (minutes == 0)
        {
            if (hours == 0) 
                hours = 11;
            else hours -= 1;
            title += this.hours_ru[hours] + " ровно";
            title = title.replace(title[0], title[0].toUpperCase());
        }
        else if (minutes == 30)
        {
            title += this.minutes_ru[5] + this.hours_ru_rod[hours];
        }
        else if (minutes < 30)
        {
            let index = minutes / 5 - 1;
            title += this.minutes_ru[index] + this.hours_ru_rod[hours];
        }
        else 
        {
            let index = minutes / 5 - 1;
            title += this.minutes_ru[index] + this.hours_ru[hours];
        }
        return title;
    }

    private newTask()
    {
        let count = 4;
        let rightIndex = Math.floor(Math.random() * 4);
        let hours = Math.floor(Math.random() * 24);
        let minutes = Math.round(Math.floor(Math.random() * 55) / 5) * 5;
        let tasks : Task[] = [];
        for (let i = 0; i < count; i++)
        {
            if (rightIndex == i)
            {
                let task : Task = 
                {
                    right: true,
                    title: this.generateTitleFromTime(hours, minutes),
                    minutes: minutes,
                    hours: hours
                }
                tasks.push(task);
            }
            else 
            {
                let hours2 = Math.floor(Math.random() * 24);
                let minutes2 = Math.round(Math.floor(Math.random() * 55) / 5) * 5;
                let task : Task = 
                {
                    right: false,
                    title: this.generateTitleFromTime(hours2, minutes2),
                    hours: hours2,
                    minutes: minutes2
                }
                tasks.push(task);
            }
        }
        let date = new Date();
        date.setHours(hours, minutes, 0);
        this.setState({
            tasks: tasks,
            time: date
        });
    }

    public componentDidMount()
    {
        this.newTask()
        if (localStorage.getItem("typetwo_help") != "done")
        {
            this.setState({ help: true });
            localStorage.setItem("typetwo_help", "done");
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
                                    <Col xs={12} className="d-flex flex-column justify-content-center align-items-center">
                                        <Clock size={300} isActive={false} time={ this.state.time } showSeconds={false}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="my-3">
                                        <Alert show={ this.state.success } variant="success" className="text-center">Верно!</Alert>
                                        <Alert show={ this.state.error } variant="danger" className="text-center">Подумай еще</Alert>
                                    </Col>
                                </Row>
                                <Row>
                                    { this.state.tasks.map((task, index) => 
                                    (
                                        <Col xs={6} key={index} className="my-1 d-flex flex-column justify-content-center align-items-center">
                                            <Button variant="outline-primary" className="w-100" onClick={ () => this.answer(task.right) } >{ task.title }</Button>
                                        </Col>
                                    )) }
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex flex-column justify-content-center align-items-center">
                                        <Button variant="outline-primary" onClick={() => this.newTask() }>Сброс</Button>
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
                            <p className="text-center">В центре рабочего окна нарисован циферблат со временем. Ниже представлены четыре кнопки с ответами, где ответ - это время, указанное как, например, "без десяти пять" или "пятнадцать минут восьмого". Но только один ответ правильный. Попробуй найти этот ответ и нажми на него.</p>
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
