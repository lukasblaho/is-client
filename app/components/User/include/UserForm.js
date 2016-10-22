import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

const renderInput = field =>
    <div className="col-sm-10">
        <input className="form-control" type={field.type} placeholder={field.placeholder} {...field.input} />
        {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
    </div>

const renderInputHidden = field =>
        <input className="form-control" type={field.type} {...field.input} />

const UserFormTpl = (props) => {
    const {handleSubmit, submitting} = props

    return (
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleSubmit} className="form-horizontal">
                    <Field name="id" component={renderInputHidden} type="hidden" />

                    <div className="form-group">
                        <label className="col-sm-2 control-label">First Name</label>
                        <Field name="firstName" component={renderInput} type="text" placeholder="First name"/>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Last Name</label>
                        <Field name="lastName" component={renderInput} type="text" placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <Field name="email" component={renderInput} type="text" placeholder="Email" />
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

const validate = values => { console.log(values)
    const errors = {}

    if (!values.firstName) {
        errors.firstName = 'Required'
    }

    return errors
}

export default reduxForm({
    form: 'userForm',
    validate
})(UserFormTpl);
