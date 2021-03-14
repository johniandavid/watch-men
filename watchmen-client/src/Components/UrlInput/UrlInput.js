import { Form } from 'react-bootstrap';

function UrlInput(props) {

    return(
            <Form>
              <Form.Group controlId="formUrl">
                <Form.Control type="url" placeholder="Enter Url" onChange={props.formUrl}/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Form>
    );

}
export default UrlInput;