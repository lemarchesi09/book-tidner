import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: "Libro 1",
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623082235-41jHivFbfHS._SL500_.jpg",
        estado: "bueno"
    },
    {
        title: "Libro 2",
        img: "https://marketplace.canva.com/EAEg0K1cMF0/1/0/1024w/canva-blanco-azulado-foto-con-filtro-bosque-suspenso-tapa-de-libro-seOR1stHAsI.jpg",
        estado: "como nuevo"
    },
    {
        title: "Libro 3",
        img: "https://s3.amazonaws.com/virginia.webrand.com/virginia/344/UAr1p90-6z4/15ef99d3621dba3c18818ad9cc0407f5.jpg?1649068341",
        estado: "usado"
    },
    {
        title: "Libro 4",
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623078210-la-naranja-mecanica-anthony-burgess-201505261226.jpg?crop=1xw:1xh;center,top&resize=480:*",
        estado: "muy usado"
    },
];

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        add: (state) => {
            state.push("otro libro")
        }
    }
})

export const {add} = booksSlice.actions;

export default booksSlice.reducer;

