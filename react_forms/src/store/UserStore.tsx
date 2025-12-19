/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';



export const UserStore = create((set)=>({
     userData: {} ,
     setUserData : (data:any) => set({userData:data})
}))