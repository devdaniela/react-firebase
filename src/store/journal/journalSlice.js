
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
        },
        setSaving: (state ) => {
                
        },
        updateNote: (state, action ) => {
                
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