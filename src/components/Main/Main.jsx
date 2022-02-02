import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {
	return (
		<Card className={classes.root}>
			<CardHeader title="Expense Tracker" subheader="poweredBySpeechly" />
		</Card>
	)
}

export default Main
