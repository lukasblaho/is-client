import React, {Component} from 'react'
import {reduxForm} from 'redux-form'

const ClientFormTpl = (props) => {
    const {
        fields: {id, number, name, quality, rejection, sellingPrice, eppp, epppot, rejectedPalettePrice,
            transportationCosts, quantity, licenseFee, stackedPalettePrice},
        handleSubmit,
        submitting
    } = props

    return (
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleSubmit} className="form-horizontal">
                    <input className="form-control" type="hidden" {...id}/>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Number</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Number" {...number}/>
                        </div>
                        {number.touched && number.error && <span>{number.error}</span>}
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Name" {...name}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quality</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Quality" {...quality}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Rejection (%)</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Rejection" {...rejection}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Selling price</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Selling price" {...sellingPrice}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Price per palette</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Price per palette" {...eppp}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Price per palette overtime</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Price per palette overtime"
                                   {...epppot}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Rejection (%)</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Rejection" {...rejection}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Transportation cost</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Transportation cost"
                                   {...transportationCosts}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Rejected palette price</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Rejected palette price"
                                   {...rejectedPalettePrice}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Rejection (%)</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Rejection" {...rejection}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quantity</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Quantity" {...quantity}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">License fee</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="License fee" {...licenseFee}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Stacked palette price</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Stacked palette price"
                                   {...stackedPalettePrice}/>
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

const ClientForm = reduxForm({
    form: 'client',
    fields: ['id', 'number', 'name', 'quality', 'rejection', 'sellingPrice', 'eppp', 'epppot', 'rejectedPalettePrice',
        'transportationCosts', 'quantity', 'licenseFee', 'stackedPalettePrice'],
    validate,
    //asyncValidate,
})(ClientFormTpl);

export default ClientForm;
