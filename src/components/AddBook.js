import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddBook extends React.Component {
    submitBook = (event) => {
        event.preventDefault();
        const data = {
            title: event.target.formTitle.value,
            author: event.target.formAuthor.value,
            description: event.target.formDescription.value,
            status: event.target.formHaveRead.checked
        }

        this.props.postBook(data);
    }

    render() {
        return (
            <Form onSubmit={this.submitBook}>
                <Form.Group className="mb-3" >
                    <Form.Label>Title: </Form.Label>
                    <Form.Control type="name" placeholder="Enter Book Title" id="formTitle" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Author: </Form.Label>
                    <Form.Control type="name" placeholder="Enter Book Author" id="formAuthor" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="name" placeholder="Enter Book Description" id="formDescription" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Have Read" id="formHaveRead" />
                </Form.Group>
                <Button variant="primary" type="submit" >Add Book</Button>
            </Form>
        );
    }
}

export default AddBook;