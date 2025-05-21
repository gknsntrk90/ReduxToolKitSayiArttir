# ReduxToolKitSayiArttir
![Screen Recording 2025-05-21 at 04 51 59 15 PM](https://github.com/user-attachments/assets/4174dc42-a840-4fea-b7d4-c7bc301679f0)

# video: 

# Redux Toolkit

Faydaları;

- Redux'a göre daha az kod içeriyor.
- Dahili olarak thunk yanında geliyor.
- Devtools eklentisi sayesinde proje geliştirirken store'u reducer aksiyonları izleyebiliyor
- Ve yönetimi daha kolaydır.

# Kurulum

- Kütüphaneler
-- @reduxjs/toolkit
-- react-redux


Kurulum Adımları:

? Slice Kurulum:
* 1- createSlice methodunu import et
* 2- Gerekli parametreleri tanımla
* > > name : slice ismi
* > > initialState: başlangıç state'i
* > > reducers{} : aksiyonları ve store'a yapacakları eki'yi tanımlayacağız

- store.js oluştur.
- - `createStore` yerine `configureStore`
- - `configureStore` içerisinde thunk tanımlı olarak gelir bu sayede extra kütüphane indirmeden thunk kullanmış oluruz.
- - reducer'ları kendi içerisinde otomatik olarak birleştirir.
- - reducer'ları store'a tanıt
- - Store'u export et
- - Store'u projeye main.js'de tanıt (proiver)
