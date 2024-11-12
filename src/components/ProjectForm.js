import { Container, Button, Label, Col, Modal, ModalHeader, ModalBody, FormGroup} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { createProject } from '../features/createnewprojects/createProjectSlice';
import "../styles/components/projectModal/projectModal.scss";
import { validateProjectForm } from '../utils/validateProjectForm';
const ProjectForm = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const project = {
            id: values.businessName,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            businessName: values.businessName,
            reason: values.reason,
            date: startDate,
        };
        dispatch(createProject(project))
        console.log(project);
        setModalOpen(false);
    }

    

    return (
        <Container className='project-modal-container'>
            <Button className="call-to-action" onClick={() => setModalOpen(true)}>
                Lets Create
            </Button>
            <Modal
                isOpen={modalOpen}
                className='modal-container'
            >
                <ModalHeader
                    toggle={() => setModalOpen(false)}
                    className='modal-header'
                >
                    Create Project
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            firstName:'',
                            lastName: '',
                            email: '',
                            businessName:'',
                            reason: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateProjectForm}
                    >
                        <Form>
                            <FormGroup>
                                <Col className='project-form-input'>
                                    <Label
                                        htmlFor='firstName'
                                    >
                                        First Name
                                    </Label>
                                        <Field 
                                            name='firstName'
                                            placeholder='First Name'
                                            className='form-control'
                                        />
                                        <ErrorMessage name='firstName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                </Col>
                                <Col className='project-form-input'>
                                    <Label
                                        htmlFor='lastName'
                                    >
                                        Last Name
                                    </Label>
                                        <Field  
                                            name='lastName' 
                                            placeholder='Last Name'
                                            className='form-control'
                                        />
                                        <ErrorMessage name='lastName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col className='project-form-input'>
                                    <Label
                                        htmlFor='email'
                                    >
                                        Email    
                                    </Label>
                                        <Field 
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                        />
                                        <ErrorMessage name='email'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                </Col>
                                <Col className='project-form-input'>
                                    <Label
                                        htmlFor='businessName'
                                    >
                                        Business Name
                                    </Label>
                                        <Field 
                                            name='businessName'
                                            placeholder='Business Name'
                                            className='form-control'
                                        />
                                        <ErrorMessage name='businessName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                </Col>
                                <Col className='project-form-input'>
                                    <Label
                                        htmlFor='date'
                                    >
                                        Schedule Meeting
                                    </Label>
                                        <div className='date-picker-container'>
                                            <DatePicker 
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                className='form-control'
                                            />
                                        </div>
                                        
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col className='project-form-input'>
                                    <Label
                                        htmlFor='reason'
                                    >
                                       Reason for Website
                                    </Label>
                                    <Field 
                                        name='reason'
                                        as='textarea'
                                        rows='12'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='reason'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col className='submit-col'>
                                    <Button
                                        type='submit'
                                        className='call-to-action'
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </Container>
        
    )
}

export default ProjectForm;