
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
            state.messageSaved = '';
        },
        setNotes: (state, action ) => {
            state.notes = action.payload;
            //! TODO: mensaje de error...
            state.messageSaved = '';
        },
        setSaving: (state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action ) => { // payload: note
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ){
                    return action.payload;
                }
                return note;
            })

            //* Todo: mostrar mensaje de actualización...
            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotoToActiveNote: (state, action ) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action ) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
        },
   }
});

export const {
    addNewEmptyNote, 
    clearNotesLogout,
    creatingNewNote,
    deleteNoteById,
    setActiveNote,
    setNotes,
    setPhotoToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions;