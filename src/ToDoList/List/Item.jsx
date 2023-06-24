import './List.css'
export default function Item(props){
    const {id,note,date,time,affairList,setAffairList} = props
    
    function deleteAffair(){
        setAffairList(affairList.filter((item)=>item.id!==id))
    } 
    return (
        <div className="Item">
            <div>
                <h3>{note}</h3>
                <p>{`${date}——${time}`}</p>
            </div>
            
            <button onClick={deleteAffair}>删除</button>
        </div>
    )
}