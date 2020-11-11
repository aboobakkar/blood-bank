import React from 'react';
import './RequestForm.css'
import {useForm} from "./useForm";
const RequestForm = () => {

    const[values,handleChange]=useForm()
    return (
        <div className="card-form">
            <form className="signup" >
                <div className="form-title">Request for a blood</div>
                <div className="form-body">
                    <div className="row">
                        <input type="text" placeholder="Name" required name="name" value={values.name}/>
                        <input type="text" placeholder="Blood Type" name="bloodType" value={values.bloodType}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="City" required name="city" value={values.city}/>
                        <input type="text" placeholder="Hospital Name" name="hospitalName" value={values.hospitalName}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Email Address*" name="email" value={values.email}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Phone Number" name="phone" value={values.phone}/>
                    </div>
                </div>
                <div className="rule"></div>
                <div className="form-footer">
                    <a>Sign Me Up!<span className="fa fa-thumbs-o-up"></span></a>
                    <a>Not Now!<span className="fa fa-ban"></span></a>
                </div>
            </form>
        </div>
    );
};

export default RequestForm;