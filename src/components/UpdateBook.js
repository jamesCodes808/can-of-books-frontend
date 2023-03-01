import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class UpdateSnackForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateBook({
            _id: this.props.book._id,
            title: e.target.formTitle.value,
            author: e.target.formAuthor.value,
            description: e.target.formDescription.value,
            status: e.target.formHaveRead.checked
        })
        this.props.toggle();
        this.props.getBooks();
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.toggle} centered>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title: </Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Book Title"
                                id="formTitle"
                                defaultValue={this.props.book?.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Author: </Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Book Author"
                                id="formAuthor"
                                defaultValue={this.props.book?.author} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Description: </Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Book Description" id="formDescription"
                                defaultValue={this.props.book?.description} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Check
                                type="checkbox"
                                label="Have Read"
                                id="formHaveRead"
                                defaultValue={this.props.book?.staus} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >Edit Book</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }

}

export default UpdateSnackForm;