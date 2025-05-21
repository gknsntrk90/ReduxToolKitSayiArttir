import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

export default configureStore({
    reducer: {counterReducer},
});

// configureStore PARAMETRE OLARAK BİZDEN BİR options OBJESİ İSTER.
// OBJE İÇERİSİNDE reducer DEĞERİ OLARAK reducer'ı TANIMLAR
// 1'den FAZLA reducer OLDUĞU DURUMDA reducer'ları OBJE İÇERİSİNE ALIR
