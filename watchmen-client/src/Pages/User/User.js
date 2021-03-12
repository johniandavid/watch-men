import { Container } from 'react-bootstrap'

function User(props) {

    return (
        <Container>
            <h5>User ID: {props.user_id}</h5>
        </Container>
    );
}

export default User;