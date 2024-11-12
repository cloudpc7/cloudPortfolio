export const validateProjectForm = (values) =>{
    const errors = {};
    if(values.firstName.length < 2) {
        errors.firstName = 'Name must be at least 2 characters.';
    } else  if(values.firstName.length > 15) {
        errors.lastName = 'Must be 15 characters or less.'
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
      } else if (values.lastName.length < 2) {
        errors.lastName = 'Last name must be at least 2 characters.';   
    
      } else if (values.lastName.length > 15) {
        errors.lastName = 'Last name must be 15 characters or less.';
      }

    if(!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ){
        errors.email = 'Invalide email address';
    }

    if(!values.businessName) {
        errors.businessName = 'Required';
    } else if (values.businessName.length < 2) {
        errors.businessName = 'Business name must be at least 2 characters.'
    } else if (values.businessName.length > 15) {
        errors.businessName = 'Business name must be 15 characters or less.'
    }

    if(!values.reason) {
        errors.reason = 'Please provide a description of the project.'
    }
    return errors;
}