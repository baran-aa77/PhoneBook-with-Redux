import React from 'react'
import {Button,Grid} from "@mui/material";
import {Link} from 'react-router-dom';
import deletepic from '../../Images/delete.png'


const CardContact=({Name,Phonenumber,favorite,handleShowMessage,Id})=>{

    return(


        <Grid item xs={11} md={10} container sx={{justifyContent:'space-around',border:'1px solid #478833',mx:'auto',mt:'10px',bgcolor:'background',boxShadow:4}} >
            <Grid xs={2} item ><Link to={`/ShowContact/${Id}`}><img width='100px' src={`https://joeschmoe.io/api/v1/${Id}`} /></Link></Grid>
<Grid xs={10} container item sx={{justifyContent:'space-around'}}>
    <Grid item xs={5} md={10} container item sx={{flexDirection:'column',textAlign:'center',my:'auto'}}>
        <Grid item>{Name}</Grid>
        <Grid item>{Phonenumber}</Grid>
        <Grid item >{favorite}</Grid>
    </Grid>
    <Grid xs={4} md={2} sx={{textAlign:'center',my:'auto'}} item><Grid variant={'contained'} onClick={handleShowMessage}><img src={deletepic} width='50px'/></Grid></Grid>


</Grid>

        </Grid>
    )

}
export default CardContact