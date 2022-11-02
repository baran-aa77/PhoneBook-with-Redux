import React, {useState} from 'react'
import {Button, Grid, TextField} from "@mui/material";
import CardContact from "../../components/CardContact/CardContact";
import {useDispatch, useSelector} from "react-redux";
import {DeleteContact} from "../../redux/contactSlice";
import {Link} from "react-router-dom";
import addcontactPic from '../../Images/add.png'
const Home=()=>{
    const dispatch=useDispatch()
    const contacts=useSelector((state)=>state.contact);
    const [showMessage, setShowMessage] = useState('none')
    const [Id, setId] = useState('0')
    const [search, setSearch] = useState('')
    const filterData = [
        {id: 1, title: 'allContact'},
        {id: 2, title: 'favoriteContact'},
        {id: 3, title: 'unFavoriteContact'},
    ]
    const [filter, setFilter] = useState('allContact')
    const handleShowMessage = id => {
        console.log(2)
        setShowMessage('flex')
        setId(id)
    }
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    const hanldeDelete=()=>{
        dispatch(DeleteContact(Id))
        setShowMessage('none')
    }
    const handleFilterBtn = title => {
        setFilter(title)
    }

    const handleDisMessage = () => {
        setShowMessage('none')
    }
    return(
        <Grid container sx={{flexDirection:'column'}}>

            <Grid sx={{display: showMessage}} item>
                <p style={{margin:'10px'}}>
                    Are you sure to delete contact?
                </p>
                <Button onClick={hanldeDelete}>
                    yes
                </Button>
                <Button onClick={handleDisMessage}>
                    no
                </Button>
            </Grid>
<Grid container sx={{alignItems:'center',flexDirection:'column'}}>
    <Grid container item sx={{justifyContent:'center',mt:'10px'}}>
        <Grid item xs={8} md={4}> <input onChange={handleSearch} value={search} placeholder='Search Contact' style={{width:'200px',marginTop:'10px',border:' 2px solid #478833'}}/></Grid>
        <Grid item><Link to={'Add-Contact'}><img src={addcontactPic} width='50px'/></Link></Grid>
    </Grid>
    <Grid sx={{mt:'10px'}}>
        {filterData.map(filterBtn => (
            <button onClick={() => handleFilterBtn(filterBtn.title)}
                    style={{backgroundColor: filterBtn.title === filter ? '#478833' : 'white', color: filterBtn.title === filter ? 'white' : 'black',border:'1px solid #478833'}}>
                {filterBtn.title}
            </button>
        ))}
    </Grid>
</Grid>

            {contacts.filter(item => item.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'allContact' ? true : item.favorite === filter)).map((item)=>(
                <CardContact  Name={item.name} Phonenumber={item.phoneNumber} Id={item.id}favorite={item.favorite}handleShowMessage={()=>handleShowMessage(item.id)}></CardContact>
            ))}
        </Grid>
    )
}
export default Home