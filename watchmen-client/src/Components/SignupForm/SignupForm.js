import { Form } from 'react-bootstrap';

function SignupForm (props){

    return (
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" onChange={props.formName} />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Control type="text" placeholder="Phone Number" onChange={props.formPhoneNum}/>
                  </Form.Group>
                </Form>
    );
}

export default SignupForm;