import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '0%',
    },
    label: {
        color: "white",
    }
}));

function getSteps() {
    return ['Bording & Travelling details', 'Payment', 'Ticket'];
}



export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();


    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label} >
                        <StepLabel >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

        </div>
    );
}
