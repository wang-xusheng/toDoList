import Item from './Item'

/**
 * 
 * @param {{affairList:Array,setAffairList:Function}} param0 
 * @returns {React.JSX.Element}
 */
export default function List({affairList,setAffairList}){
    return(
        <div className='List'>
            {affairList.map((value)=><Item key={value.id} {...value} affairList={affairList} setAffairList={setAffairList} />)}
        </div>
        
    )
}