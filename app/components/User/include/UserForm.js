import React, {Component} from 'react'
import {reduxForm} from 'redux-form'

const UserFormTpl = (props) => {
    const {
        fields: {id, firstName, lastName, email},
        handleSubmit,
        submitting
    } = props

    return (
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleSubmit} className="form-horizontal">
                    <input className="form-control" type="hidden" {...id}/>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="First Name" {...firstName}/>
                        </div>
                        {firstName.touched && firstName.error && <span>{firstName.error}</span>}
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Last Name" {...lastName}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="email" placeholder="Email" {...email}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-10">
                            <button className="btn btn-default" type="submit" disabled={submitting}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const asyncValidate = values => {
    return fetch()
        .then(status)
        .then(json => {
            if (json.isError) {
                throw json.errors;
            }
        })
        .catch(error => {
            throw {text: 'Error on validating form'}
        })
}

const validate = values => {
    const errors = {}

    if (!values.firstName) {
        errors.firstName = 'Required'
    }

    return errors
}

const UserForm = reduxForm({
    form: 'user',
    fields: ['id', 'firstName', 'lastName', 'email'],
    validate,
    //asyncValidate,
})(UserFormTpl);

export default UserForm;
