import {Field} from "formik";
import React from "react";

export default function InputAnswer() {
    return (
        <>
            <label htmlFor="disabledSelect" className="form-label">Question</label>
            <label htmlFor="disabledSelect" className="form-label">Answer 1</label>

            <Field name="answers[0].answer" type="text" className="form-control"/>
            <input className="form-check-input" type="radio"/>
            <label htmlFor="disabledSelect" className="form-label">Answer 2</label>

            <Field name="answers[1].answer" type="text" className="form-control"/>
            <input className="form-check-input" type="radio"/>
            <label htmlFor="disabledSelect" className="form-label">Answer 3</label>

            <Field name="answers[2].answer" type="text" className="form-control"/>
            <input className="form-check-input" type="radio"/>
            <label htmlFor="disabledSelect" className="form-label">Answer 4</label>

            <Field name="answers[3].answer" type="text" className="form-control"/>
            <input className="form-check-input" type="radio"/>
        </>
    )
}