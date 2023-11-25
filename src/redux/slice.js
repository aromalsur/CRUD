import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        AddEmployee: (state, action) => {
            state.push(action.payload)
        },
        DeleteEmployee: (state,action)=> {
          return state.filter((item) => item.id !== action.payload)
        },
        updateEmployee: (state, action) => {
            const{id,name, contactNo ,from,to,esAmount,date,time} = action.payload
            const uu = state.find(item => item.id == id)
            if (uu) {
                uu.name = name
                uu.contactNo = contactNo
                uu.from = from
                uu.to = to
                uu.esAmount = esAmount
                uu.date = date
                uu.time = time
            }
        }
    }
})

export const { AddEmployee,DeleteEmployee,updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer