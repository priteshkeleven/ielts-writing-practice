import React, {Fragment, useState, useEffect} from 'react';
import "./MainBody.css";

const MainBody = () => {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [radio, setRadio] = useState("task1");

    const handleChange = (e) => {
        const {value} = e.target;
        setText(value);
    }

    const handleRadio = (e) => {
        const {value} = e.target
        setRadio(value);
    }

    useEffect(() => {
        setCount(text ? text.match(/\b\S+\b/g).length : 0)
    }, [text])

    return (
        <Fragment>
            <div className={"radio-div"}>
                <label><input type={"radio"} value={"task1"} checked={radio === "task1"} onChange={handleRadio}/> Task 1</label>
                <label><input type={"radio"} value={"task2"} checked={radio === "task2"} onChange={handleRadio}/> Task 2</label>
            </div>
            <div className={"text-area"}>
                <textarea onChange={handleChange} value={text} spellCheck={"false"}/>
            </div>
            <div className={"counter"}>
                <strong># of words: <span className={
                    (radio === "task1" && count < 150) || (radio === "task2" && count < 250) ? "red" : "green"
                }>{count}</span></strong>
            </div>
        </Fragment>
    );
};

export default MainBody;
