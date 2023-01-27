import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { startSetActiveNote } from '../../store/journal';


export const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( startSetActiveNote({ id, title, body, date, imageUrls  }) );
    }

    const newTitle = useMemo( () => {
        return title.length > 17 
            ? title.substring(0, 17) + '...'
            : title;
    }, [ title] );

    return (
        <ListItem key={id} disablePadding>
        <ListItemButton onClick={ onClickNote } >
            <ListItemIcon>
            <TurnedInNot />
            </ListItemIcon>
            <Grid container>
            <ListItemText primary={ newTitle } />
            <ListItemText secondary={ body } />
            </Grid>
        </ListItemButton>
        </ListItem>
    );
};
