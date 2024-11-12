import { Button, Label, Col, FormGroup} from 'reactstrap';
import { Container } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';
import "../styles/components/ContactPage/ContactPage.scss";
//testing
const ContactForm = () => {

    const handleSubmit = (values, { resetForm }) => {
        resetForm();
    }

    return (
        <Container className="form-container">
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
                onSubmit={handleSubmit}
                validate={validateContactForm}
            >

            <Form row>
                <FormGroup  
                    className="contact-info-group"
                    >
                    <Col md={4} className="contact-info-input">
                        <Label htmlFor='firstName'>
                                First Name
                        </Label>
                            <Field className='form-control' name='firstName' placeholder='First Name' />
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                    </Col>
                    <Col md={4} className="contact-info-input">
                        <Label htmlFor='lastName'>
                            Last Name
                        </Label>
                            <Field className='form-control' name='lastName' placeholder='Last Name' />
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup className="contact-info-group">
                    <Col  md={4} className="contact-info-input">
                        <Label htmlFor='phoneNum'>
                            Phone Number
                        </Label>
                        <Field className='form-control' name='phoneNum' placeholder='Phone Number' />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                    <Col  md={4} className="contact-info-input">
                        <Label htmlFor='email'>
                            Email
                        </Label>
                            <Field className='form-control' name='email' placeholder='Email' />
                            <ErrorMessage name='email'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup className="contact-info-group">
                    <Col md={4} lg={8} className="contact-info-input choice">
                        <Label check>
                            <Field 
                                name='agree'
                                type='checkbox'
                                className='form-check-input'
                            />{''}
                            May We contact you?
                        </Label>
                        <Field lg={4} className='form-control choice-select' name='contactType' as='select'>
                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup className="contact-info-group">
                    <Col  className="contact-info-input">
                        <Label htmlFor='feedback' className="feedback-label">
                            Your Feedback
                        </Label>
                        <Field className='form-control' name='feedback' as='textarea' rows='12' />
                    </Col>
                </FormGroup>
                <FormGroup className="contact-info-group">
                    <Col className="contact-info-btn">
                        <Button 
                            type='submit' 
                            className="feed-back-btn"
                        >
                            Send Feedback
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
            </Formik>
        </Container>
    )
}

export default ContactForm;