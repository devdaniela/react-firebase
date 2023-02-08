
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active:{
        //     id: 'ABC123',
        //     title:'',
        //     body:'',
        //     date:1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
        // }
   },
   reducers: {
        creatingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload );
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload;
            state.isSaving = false;
        },
        setNotes: (state, action ) => {
            state.notes = action.payload;
            //! TODO: mensaje de error...
        },
        setSaving: (state ) => {
            state.isSaving = true;
        },
        updateNote: (state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ){
                    return action.payload;
                }
                return note;
            })

            //* TODO: mensaje de actualización...
        },
        deleteNoteById: (state, action ) => {
                
        },
   }
});

export const {
    creatingNewNote,
    addNewEmptyNote, 
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;