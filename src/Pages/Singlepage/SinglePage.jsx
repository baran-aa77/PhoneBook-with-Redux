import React, {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"
const SinglePage=()=>{
    const[user,setuser]=useState({})
    const Contacts=useSelector(state=>state.contact)
    const {Id}=useParams();

useEffect(()=>{
    setuser(Contacts.filter(item=>item.id===Number(Id))[0])

},[])
    return(

        <Grid xs={12} container item>
            <Grid>
                <Link to={'/'}>
                    <Button >
                        back
                    </Button>
                </Link>

            </Grid>
            <Grid md={5}xs={12}item flexDirection='column' sx={{textAlign:'center',mt:'30px',mx:'auto'}}>
<Grid>
    <img width='100px' src={`https://joeschmoe.io/api/v1/${Id}`} />
</Grid>
<Grid>

    <Grid>{user.name}</Grid>
    <Grid>{user.phoneNumber}</Grid>

</Grid>
            <Grid>
                <Link to={`/Edit-Contact/${Id}`}>
                    <Button>
                        Update Contact
                    </Button>
                </Link>

            </Grid>
            </Grid>
        </Grid>
    )
}
export default SinglePage