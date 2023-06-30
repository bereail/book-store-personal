import React, { useState } from "react";

const LinksForm = (props) => {
    const initialStateValues = {
        url: '',
        name: '',
        description: ''
    }

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const { name, value } = e.target;
        console.log(name, value);
        setValues({ ...values, [name]: value });

    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
        props.addOrEdit();
    }

    return (
        <>
            <form className="card card-body" onSubmit={handleSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">insert_link</i>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="http://someurl.com"
                        name="url"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">create</i>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="name"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        rows="3"
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary btn-block">
                    Save
                </button>
            </form>
        </>
    );
};

export default LinksForm;
