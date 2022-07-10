import { useState } from "react";
import styles from '../styles/homes.module.css'
import Modal from "./Modal";

const Form = () => {

    const [formValues, setFormValues] = useState([{ fieldName: "Name", fieldValue: "" },
    { fieldName: "Age", fieldValue: "" },
    { fieldName: "Blood_Group", fieldValue: "" },
    { fieldName: "Gender", fieldValue: "" }])
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClickClose = () => {
        setOpen(false)
    }

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i]["fieldName"] = e.target.name;
        newFormValues[i]["fieldValue"] = e.target.value;
        setFormValues(newFormValues);
    }

    const addFields = (fieldName, fieldValue) => {
        setFormValues([...formValues, { "fieldName": fieldName, "fieldValue": fieldValue }])
    }

    let addFormFields = () => {
        // setFormValues([...formValues, { name: "" }])
        handleClickOpen()
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert("Submitted");
    }

    return (
        <div className={styles.container}>
            <Modal open={open} handleClose={handleClickClose} addFields={addFields} />
            <form onSubmit={handleSubmit}>
                {formValues.map((element, index) => (
                    <div className={styles.form_inline} key={index}>
                        <div style={{
                            width: "80%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <label>{element.fieldName}</label>
                            <input type="text" name={element.fieldName} value={element.fieldValue || ""} onChange={e => handleChange(index, e)} />
                        </div>
                        {
                            index ?
                                <button type="button" className={styles.remove} onClick={() => removeFormFields(index)}>Remove</button>
                                : null
                        }
                    </div>
                ))}
                <div className={styles.button_section}>
                    <button className={styles.add} type="button" onClick={() => addFormFields()}>Add a field</button>
                    <button className={styles.submit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default Form