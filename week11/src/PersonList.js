import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import './PersonList.css';

class PersonList extends Component {
    //Define state default values
    state = {
        persons: []
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toISOString();
    }

    calculateAge(dateString) {
        const birthDate = new Date(dateString);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    render() {
        return (
            <div className="person-list-container">
                <div className="header-section">
                    <h1>User List</h1>
                </div>
                <Container className="user-list-container">
                    {this.state.persons.map(person => (
                        <Card key={person.login.uuid} className="user-card">
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <h3 className="user-header">
                                            {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}
                                        </h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} className="profile-picture-section">
                                        <Image 
                                            src={person.picture.large} 
                                            roundedCircle 
                                            className="profile-picture"
                                        />
                                        <Button variant="primary" className="details-button">Details</Button>
                                    </Col>
                                    <Col md={9} className="user-info-section">
                                        <div className="user-info">
                                            <p><strong>User Name:</strong> {person.login.username}</p>
                                            <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                                            <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                                            <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                                            <p><strong>Email:</strong> {person.email}</p>
                                            <p><strong>Birth Date and Age:</strong> {this.formatDate(person.dob.date)} ({this.calculateAge(person.dob.date)})</p>
                                            <p><strong>Register Date:</strong> {this.formatDate(person.registered.date)}</p>
                                            <p><strong>Phone#:</strong> {person.phone}</p>
                                            <p><strong>Cell#:</strong> {person.cell}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </div>
        );
    }
}

export default PersonList;

