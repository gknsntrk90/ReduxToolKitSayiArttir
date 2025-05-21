import { createSlice } from "@reduxjs/toolkit";


/*
! Hem reducer'ları hem de action'ları farklı dosyalarda oluşturmak yerine slice dosyasında oluşturacağız
? Slice Kurulum:
* 1- Öncelikle gerekli olan methodu çağıracağız; createSlice methodunu import et "import { createSlice } from "@reduxjs/toolkit";"
* 2- createSlice yaz option istediği için obje olacak createSlice({})
* 3- name : slice ismi
* 4- initialState: başlangıç state'i
* 5- reducer objesi istiyor reducers{}: aksiyonları ve store'a yapıcakları ekiyi tanımlayacağız 
*/

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers:{
        increase: (state) => {
            state.count +=1;
        },
        decrease: (state) => {
            state.count -=1;
        },
        // PAYLOAD DEĞERİNİ KULLANDIĞIMIZ ZAMAN ACTİON'I PARAMETRE OLARAK ALIYORUZ
        setCount: (state,action) => {
            state.count = action.payload;
        } 
    },
});

// 2. Aşama : counterSlice içerisindeki actions'ları export etme
export const {increase, decrease, setCount } = counterSlice.actions;

//3. Aşama : createSlice'ın OLUŞTURULDUĞU REDUCER'I EXPORT ETME
export default counterSlice.reducer;