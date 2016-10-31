import React from 'react'
import {reduxForm, Field} from 'redux-form'

const renderInput = field =>
    <div className="col-sm-10">
        <input className="form-control" type={field.type} placeholder={field.placeholder} {...field.input} />
        {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
    </div>

const renderInputHidden = field =>
    <input className="form-control" type={field.type} {...field.input} />

const renderSelect = field => {
    const items = field.options

    const options = [
        <option key="NA" value="">Not selected</option>
    ]
    items.forEach((item) => {
        options.push(
            <option key={item.value} value={item.value}>{item.name}</option>
        )
    })

    return (
        <div className="col-sm-10">
            <select className="form-control" {...field.input}>
                {options}
            </select>
        </div>
    )
}

const UserFormTpl = (props) => {
    const {handleSubmit, submitting, userOptions, clientOptions} = props

    return (
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleSubmit} className="form-horizontal">
                    <Field name="id" component={renderInputHidden} type="hidden"/>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Users</label>
                        <Field name="userId" options={userOptions} component={renderSelect} type="select"/>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Client</label>
                        <Field name="clientId" options={clientOptions} component={renderSelect} type="select"/>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Palettes count</label>
                        <Field name="palettesCount" component={renderInput} type="text" placeholder="Palettes count"/>
                    </div>
                    
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Palettes count OT</label>
                        <Field name="palettesCountOT" component={renderInput} type="text" placeholder="Palettes count overtime"/>
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

const validate = values => {
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
