import React, {useEffect, useState} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AddContact,updateContact} from "../../redux/contactSlice";
import { useParams,useNavigate} from 'react-router-dom'
const FormContact=()=>{
    const{Id}=useParams()
    const[state,setstate]=useState('add')
    const dispatch=useDispatch();
   const navigate=useNavigate();
   const contacts=useSelector(state=>state.contact);
    const[formdata,setformdata]=useState({
        Name:'',
        PhoneNumber:'',
        favorite: ''
    })

    useEffect(() => {
        const a = contacts.filter(item=>item.id === Number(Id))[0]
        if (a) {
            setformdata(a);
            setstate('update')
        }
    }, [])

    const handlesubmit=(e)=>{
        e.preventDefault()
        if (state === 'add') {
            dispatch(AddContact(formdata))
        } else if (state === 'update') {
            dispatch(updateContact(formdata))
        }
        setformdata({
            Name:'',
            PhoneNumber:'',
            favorite: ''})
        navigate('/')
    }


    const handleChange=(e)=>{
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    }
    return(
        <Grid sx={{textAlign:'center'}}>
            <Grid sx={{m:'10px'}}><Typography>Add Contact </Typography></Grid>
<form onSubmit={handlesubmit}>
    <Grid sx={{m:'10px'}}>
        <Grid><TextField name='Name' value={formdata.Name} type='text' placeholder='Name' onChange={handleChange} sx={{m: '10px'}}/></Grid>
        <Grid><TextField name='PhoneNumber' value={formdata.PhoneNumber} type='number' placeholder='Phone-Number' onChange={handleChange}></TextField></Grid>
        <Grid sx={{m:'10px'}}>
            <select name={'favorite'}onChange={handleChange} value={formdata.favorite} >
                <option value="FavoriteContact">favoriteContact</option>
                <option value="unFavoriteContact">unFavoriteContact</option>
            </select>
        </Grid>
        <Button type='submit' variant='contained'>Submit</Button>
    </Grid>

</form>
        </Grid>
    )
}
export default FormContact