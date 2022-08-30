import { AUTH, CREDENTIALS, MEMBERS } from "./api";
import axios from 'axios';
import store from "../redux/store";
import { LOAD_USERS, UPLOAD_USER } from "../redux/actions/usersActions";



export async function authToken (){

    try{
        const response = await axios.post(AUTH, CREDENTIALS)
        const token = response.data.token
        localStorage.setItem('currentToken', token)
    } catch (err) {
        console.log(err)
    }   

}

export async function loadUsers(){

    authToken();

    const token = localStorage.getItem('currentToken')
    if(token){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try{
            const response = await axios.get(MEMBERS, config)
            const users = response.data
            store.dispatch(LOAD_USERS(users))
        } catch (err){
            console.log(err)
        }

    }
}

export async function uploadUser(user){

    authToken();

    const token = localStorage.getItem('currentToken')
    if(token){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try{
            const response = await axios.post(MEMBERS,user, config)
            console.log(response)
            store.dispatch(UPLOAD_USER(user))
            return response
        } catch (err){
            console.log(err)
            return err.response.data.message
        }

    }

}