import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client 
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjId)
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const useraccount = await this.account.create(ID.unique(), email, password, name);
            if(useraccount){
                // use another method
                return useraccount;
            }else{

            }

        }catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password);
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Appwrite Service : : Get current user : error : ", error);
        }

        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite Service : : Get current user : error : ", error);
        }

        return null;
    }
}

const authService = new AuthService();

export default authService