import { Form } from 'react-bootstrap';

import "./UrlInput.css"

function UrlInput(props) {

    return(
            <Form className="url-input">
              <Form.Group controlId="formUrl">
                <Form.Control type="url" placeholder="Enter Url" value={props.urlValue}onChange={props.formUrl}/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Form>
    );

}
export default UrlInput;