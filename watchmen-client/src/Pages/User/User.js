import { Container, Button } from 'react-bootstrap'
import {deleteUser} from "../../Data/userRequests";

function User(props) {

    async function handleOnClicked() {
        await deleteUser(props.user_id)
        window.localStorage.removeItem("user_id")
        window.localStorage.removeItem("name")
        window.location.reload();
    }

    return (
        <Container>
            <h5>User ID: {props.user_id}</h5>
            <Button onClick={handleOnClicked}>Delete User</Button>
        </Container>
    );
}

export default User;