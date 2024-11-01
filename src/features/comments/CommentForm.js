import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';
import { useDispatch } from 'react-redux';
import { postComment } from './commentsSlice';
import "../../styles/components/commentForm/commentForm.scss";

const CommentForm = ({projectId}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const comment =  {
            projectId: parseInt(projectId),
            rating: values.rating,
            author: values.author,
            text: values.commentText,
            date: new Date(Date.now()).toISOString()
        };
        console.log(comment);
        dispatch(postComment(comment));
        setModalOpen(false);
    }

    return (
        <>
            <Button
                outline
                onClick={() => setModalOpen(true)}
                className="comment-btn"
            >
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal
                isOpen={modalOpen}
                className="modal"
            >
                <ModalHeader
                    toggle={() => setModalOpen(false)}
                >
                    Add Comment
                </ModalHeader>
                <ModalBody>
                <Formik initialValues={{
                    rating: undefined, 
                    author: '', 
                    commentText: '',
                    }}
                    onSubmit={handleSubmit}
                    validate={validateCommentForm}
                >
                    <Form>
                        <FormGroup>
                            <Label 
                                htmlFor='rating'
                            >
                            Rating
                            </Label>
                            <Field
                                name='rating'
                                as='select'
                                className='form-control'
                            >
                            <option>Select...</option> 
                            <option>1</option> 
                            <option>2</option> 
                            <option>3</option> 
                            <option>4</option> 
                            <option>5</option>    
                            </Field>
                            <ErrorMessage name='rating'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label 
                                htmlFor='author'
                            >
                            Author
                            </Label>
                            <Field
                                name='author'
                                placeholder='Your Name'
                                className='form-control'
                            >
                            </Field>
                            <ErrorMessage name='author'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label
                                htmlFor='commentText'
                            >
                            Comment
                            </Label>
                            <Field
                              name='commentText'
                              as='textarea'
                              rows='12'
                              className='form-control'  
                            >
                            </Field>
                        </FormGroup>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Form>
                </Formik>
                </ModalBody>
            </Modal>
        </>
    )
} 

export default CommentForm;
