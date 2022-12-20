import {Field} from "formik";
import Form from "react-bootstrap/Form";
import React, {useState} from "react";

export default function Question(){
    const [loading, setLoading] = useState(false);

    return(
        <>
            <Form>
                <div>
                    <label htmlFor="disabledSelect">Question</label>
                    <Field name="question_name" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                        <span>Add Question</span>
                    </button>
                </div>
            </Form>
        </>
    )
}