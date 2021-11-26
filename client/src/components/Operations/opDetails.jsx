import { Collapse, List, ListItem, ListItemIcon } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { LastLink, Link } from './Links';
import { useTheme } from '@mui/styles';

// in case to change the lable color in the future
// const labelStyle = {
//     style: { color: 'black' },
// };

const useStyles = makeStyles({
    opListContainer: {
        display: 'flex',
        '& div': {
            display: 'flex',
        },
    },
    longLink: {
        marginLeft: '31px',
        flex: '1',
    },
    opList: {
        flex: '8',
        paddingLeft: '40px',
        '& > li': {
            paddingTop: '0px',
            paddingBottom: '0px',
        },
        '& input': {
            height: '7px',
        },
    },
    last: {
        paddingLeft: '110px',
    },
    outline: {
        borderColor: 'black',
    },
    opBtn: {
        height: '30px',
        width: '60px',
    },
    btnText: {
        fontSize: '16px',
        color: '#fff',
    },
});

const OpDetails = ({ op, isLast, showOp, executeCommand }) => {
    const classes = useStyles();
    const [args, setArguments] = useState([]);

    const theme = useTheme();
    const textPrimaryColour = theme.palette.text.primary;

    const handleSetArguments = (e, index) => {
        const newArgs = [...args];
        newArgs[index] = e.target.value;
        setArguments(newArgs);
    };

    return (
        <Collapse
            in={showOp[op.command]}
            timeout="auto"
            unmountOnExit
            className={classes.opListContainer}
        >
            {!isLast && (
                <svg width="10" height="166" className={classes.longLink}>
                    <line
                        x1="5"
                        y1="1"
                        x2="5"
                        y2="166"
                        stroke={textPrimaryColour}
                        stroke-dasharray="50 4"
                        strokeWidth="2"
                    />
                </svg>
            )}
            <List className={isLast ? `${classes.opList} ${classes.last}` : classes.opList}>
                {op.args.map((eachArg, i) => (
                    <ListItem key={i}>
                        <ListItemIcon>
                            <Link colour={textPrimaryColour} />
                        </ListItemIcon>
                        <TextField
                            label={eachArg}
                            //InputLabelProps={labelStyle}
                            //InputProps={{ classes: { notchedOutline: classes.outline } }}
                            variant="outlined"
                            onChange={(e) => handleSetArguments(e, i)}
                        />
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemIcon>
                        <LastLink colour={textPrimaryColour} />
                    </ListItemIcon>
                    <Button className={classes.opBtn} variant="contained" color="primary">
                        <div
                            className={classes.btnText}
                            onClick={() => executeCommand(op.command, ...args)}
                        >
                            Go
                        </div>
                    </Button>
                </ListItem>
            </List>
        </Collapse>
    );
};

OpDetails.propTypes = {
    op: PropTypes.object,
    isLast: PropTypes.bool,
    showOp: PropTypes.object,
};

export default OpDetails;
