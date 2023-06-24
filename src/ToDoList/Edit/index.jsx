import './Edit.css'
import { useState } from 'react';
function Edit({ setAffairList }) {
    //将输入的值进行双向绑定
    const [note, setNote] = useState("");
    function noteChange(e) {
        setNote(e.target.value);
    }

    const [date, setDate] = useState("");
    function dateChange(e) {
        setDate(e.target.value);
    }

    const [time, setTime] = useState("");
    function timeChange(e) {
        setTime(e.target.value);
    }


    function addAffair() {
        setAffairList((prop)=>{
            return [
                {
                    note,
                    date,
                    time,
                    id: new Date().getTime().toString()
                },
                ...prop
            ]
        })
    }
    return (
        <div className="Edit">
            <h2>备忘录</h2>
            <h4>记事：</h4>
            <input type="text" className='affair-input' value={note} onChange={noteChange}/>
            <h4>时间</h4>
            <div className='dateAndTime-input'>
                <input type="date" value={date} onChange={dateChange} />
                <input type="time" value={time} onChange={timeChange} />
            </div>
            <button onClick={addAffair}>添加到日程</button>

        </div>
    );
}
export default Edit;