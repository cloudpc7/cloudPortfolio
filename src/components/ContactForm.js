import { Button, Label, Col, FormGroup} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';
import "../styles/components/ContactPage/ContactPage.scss";
import DOMPurify from 'dompurify';
//testing
const ContactForm = () => {

    const handleSubmit = (values, { resetForm }) => {
        const sanitizedValues = {
            firstName: DOMPurify.sanitize(values.firstName),
            lastName: DOMPurify.sanitize(values.lastName),
            phoneNum: DOMPurify.sanitize(values.phoneNum), 
            email: DOMPurify.sanitize(values.email),
            agree: values.agree,
            contactType: DOMPurify.sanitize(values.contactType),
            feedback: DOMPurify.sanitize(values.feedback),
        };
    }

    return (
        <>
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

                <Form className="contact-form">
                    <FormGroup className="contact-info-group"
                    >
                        <Col xs={10} md={6} lg={4} className="contact-info-input">
                            <Label htmlFor='firstName'>
                                First Name
                            </Label>
                                <Field className='form-control' name='firstName' placeholder='First Name' />
                                <ErrorMessage name='firstName'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                        </Col>
                        <Col xs={10} md={6} lg={4} className="contact-info-input">
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
                        <Col xs={10} md={6}  lg={4}  className="contact-info-input">
                            <Label htmlFor='phoneNum'>
                                Phone Number
                            </Label>
                            <Field className='form-control' name='phoneNum' placeholder='Phone Number' />
                            <ErrorMessage name='phoneNum'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Col   xs={10} md={6} lg={4} className="contact-info-input">
                            <Label htmlFor='email'>
                                Email
                            </Label>
                                <Field className='form-control' name='email' placeholder='Email' />
                                <ErrorMessage classnName='error-message-col' name='email'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup className="contact-info-group">
                        <Col  xs={10} lg={4} className="contact-info-input choice">
                            <Label check>
                                <Field 
                                    name='agree'
                                    type='checkbox'
                                    className='form-check-input'
                                />
                                    May We contact you?
                            </Label>
                        <Col lg={4}>
                            <Field  className='form-control choice-select' name='contactType' as='select'>
                                <option>By Phone</option>
                                <option>By Email</option>
                            </Field>
                        </Col>
                                
                        </Col>
                    </FormGroup>
                    <FormGroup className="contact-info-group feedback">
                        <Col  xs={10} md={12} className="contact-info-input">
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
        </>
    )
}

export default ContactForm;