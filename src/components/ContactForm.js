import { Button, Label, Col, FormGroup} from 'reactstrap';
import { Container } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (
        <Container className="d-flex justify-content-center">
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
                    className="
                        row 
                        row-cols-md-2 
                        justify-content-center
                        justify-content-xxl-start
                        ms-xxl-5
                        "
                    >
                    <Col sm='10' md='4'  xxl='6' className="mb-3">
                        <Label htmlFor='firstName'>
                                First Name
                        </Label>
                            <Field className='form-control' name='firstName' placeholder='First Name' />
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                    </Col>
                    <Col  sm='10' md='4' xxl='6' className="mb-3">
                        <Label htmlFor='lastName'>
                            Last Name
                        </Label>
                            <Field className='form-control' name='lastName' placeholder='Last Name' />
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup 
                    className="
                        row 
                        rows-cols-1 
                        row-cols-md-2 
                        justify-content-center
                        justify-content-xxl-start
                        ms-xxl-5
                    "
                    >
                    <Col  sm='10' md='4' xxl='6' className="mb-3">
                        <Label htmlFor='phoneNum'>
                            Phone Number
                        </Label>
                        <Field className='form-control' name='phoneNum' placeholder='Phone Number' />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                    <Col  sm='10' md="4" xxl='6' className="mb-3">
                        <Label htmlFor='email'>
                            Email
                        </Label>
                            <Field className='form-control' name='email' placeholder='Email' />
                            <ErrorMessage name='email'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup 
                    className="
                        row 
                        row-cols-1  
                        row-cols-md-2 
                        justify-content-center
                        justify-content-xxl-start
                        ms-xxl-5
                    "
                >
                    <Col sm='4' md="8" xxl='6' className="mb-3">
                        <Label check md={{size: 10}}>
                            <Field 
                                name='agree'
                                type='checkbox'
                                className='form-check-input me-3'
                            />{''}
                            May We contact you?
                        </Label>
                        <Field className='form-control' name='contactType' as='select'>
                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup 
                    row 
                    className="
                        justify-content-center
                        justify-content-xxl-start
                        ms-xxl-5
                    "
                >
                    <Col sm='10' md="8" xxl='12' className="mb-3">
                        <Label htmlFor='feedback' className="feedback-label" md='4' xxl='6'>
                            Your Feedback
                        </Label>
                        <Field className='form-control' name='feedback' as='textarea' rows='12' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col className="d-flex">
                        <Button 
                            type='submit' 
                            className="
                                feed-back-btn 
                                mx-auto 
                                border-0 
                                rounded-0
                                px-2
                                py-2
                            "
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