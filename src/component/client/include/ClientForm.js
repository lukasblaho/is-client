import React from 'react'
import {reduxForm, Field} from 'redux-form'

const renderInput = field =>
    <div className="col-sm-10">
        <input className="form-control" type={field.type} placeholder={field.placeholder} {...field.input} />
        {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
    </div>

const renderHidden = field =>
    <input className="form-control" type="hidden" name="" {...field.input} />


const ClientFormTpl = (props) => {
    const {
        handleSubmit,
        submitting,
        title
    } = props

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>{title}</h1>
                <form onSubmit={handleSubmit} className="form-horizontal">
                    <Field name="id" type="hidden" component={renderHidden} />

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Number</label>
                        <Field name="number" type="text" component={renderInput} placeholder="Number" />

                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <Field name="name" type="text" component={renderInput} placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quality</label>
                        <Field name="quality" type="text" component={renderInput} placeholder="Quality" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Rejection (%)</label>
                        <Field name="rejection" type="text" component={renderInput} placeholder="Rejection" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Selling price</label>
                        <Field name="sellingPrice" type="text" component={renderInput} placeholder="Selling price" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Price per palette</label>
                        <Field name="eppp" type="text" component={renderInput} placeholder="Price per palette" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Price per palette overtime</label>
                        <Field name="epppot" type="text" component={renderInput}
                               placeholder="Price per palette overtime" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Transportation cost</label>
                        <Field name="transportationCosts" type="text" component={renderInput}
                               placeholder="Transportation cost" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Rejected palette price</label>
                        <Field name="rejectedPalettePrice" type="text" component={renderInput}
                               placeholder="Rejected palette price" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">License fee</label>
                        <Field name="licenseFee" type="text" component={renderInput} placeholder="License fee" />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Stacked palette price</label>
                        <Field name="stackedPalettePrice" type="text" component={renderInput}
                               placeholder="Stacked palette price" />
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

const ClientForm = reduxForm({
    form: 'client',
    validate,
})(ClientFormTpl);

export default ClientForm;
