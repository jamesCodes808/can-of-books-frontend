import React from 'react';
import Container from 'react-bootstrap/Container';


class Welcome extends React.Component {

    render() {
        return (
            <Container
                className="text-center flex m-5">
                <h2>Welcome!</h2>
                <p>Please login to see your favorite books</p>
            </Container>
        )
    }
}

export default Welcome;