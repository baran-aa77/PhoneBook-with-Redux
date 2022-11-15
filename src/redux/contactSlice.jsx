import {createSlice} from "@reduxjs/toolkit";
const initialState=
[
    {id:1,name:'Ali',phoneNumber:'09126788578',favorite: 'unFavoriteContact'},
    {id:2,name:'Mohamad',phoneNumber:'09195696478',favorite: 'favoriteContact'},
    {id:3,name:'Baran',phoneNumber:'09109744598',favorite: 'unFavoriteContact'},
    ]


export const contactSlice=createSlice({
    name:'contact',
    initialState,
    reducers:{
DeleteContact:(state,action)=>{
    const payload=action.payload
const index=state.findIndex(contact=>contact.id===payload)


    state.splice(index,1)
},
AddContact:(state,action)=>{
            const payload=action.payload

state.push({id:Math.floor(Math.random()*1000),name:payload.Name,phoneNumber:payload. PhoneNumber})

        },
        updateContact: (state, action) => {
            const {payload} = action
            const index = state.findIndex(state => state.id === payload.id)
            state[index] = payload
        }
    }
})

export const {DeleteContact,AddContact,updateContact}=contactSlice.actions
export default contactSlice.reducer