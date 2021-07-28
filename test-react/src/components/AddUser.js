import {useParams} from 'react-router-dom';

const AddUser = ({status})=>{
    const {id:eid} = useParams();
    return(
        <div>
           <h2> This is {status} user page id: {eid} </h2>
           <form>
                Name: <input type='text' name='name' value=""/> <br/>
                ID: <input type='text' name='id' value="" /><br/>
                Dept: <input type='text' name='dpet' value="" /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </div> 
    );
}

export default AddUser;