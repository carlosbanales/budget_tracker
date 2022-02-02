import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemtext, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    
    const transactions = [
        { id: 1, type: "Income"}
    ];

    return(
        <MUIList dense={false} className={classes.list}>
            {transaction.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                     </ListItem>
                </Slide>
            ))}
        </MUIList>
    
};

export default List;
