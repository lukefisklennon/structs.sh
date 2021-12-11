import PauseIcon from '@mui/icons-material/PauseCircleOutline';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Box, IconButton, useTheme } from '@mui/material';
import Slider from '@mui/material/Slider';
import React, { FC, useEffect, useState } from 'react';
import ModeSwitch from '../ModeSwitch/ModeSwitch';
import styles from './Control.module.scss';

interface Props {
    terminalMode: boolean;
    setTerminalMode: (mode: boolean) => void;
    handlePlay: () => void;
    handlePause: () => void;
    handleStepForward: () => void;
    handleStepBackward: () => void;
    handleSliderDrag: (val: number) => void;
    // Value between 0 and 100
    animationProgress: number;
}

const Controls: FC<Props> = ({
    terminalMode,
    setTerminalMode,
    handlePlay,
    handlePause,
    handleStepForward,
    handleStepBackward,
    handleSliderDrag,
    animationProgress,
}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const theme = useTheme();

    useEffect(() => {
        if (animationProgress >= 100) {
            setIsPlaying(false);
        }
    }, [animationProgress]);

    return (
        <div className={styles.root}>
            <IconButton>
                <SkipPreviousIcon
                    onClick={() => handleStepBackward()}
                    sx={{ fill: theme.palette.text.primary }}
                />
            </IconButton>
            {isPlaying ? (
                <IconButton>
                    <PauseIcon
                        onClick={() => {
                            handlePause();
                            setIsPlaying(false);
                        }}
                        sx={{ fill: theme.palette.text.primary }}
                    />
                </IconButton>
            ) : (
                <IconButton>
                    <PlayIcon
                        onClick={() => {
                            handlePlay();
                            setIsPlaying(true);
                        }}
                        sx={{ fill: theme.palette.text.primary }}
                    />
                </IconButton>
            )}
            <IconButton>
                <SkipNextIcon
                    onClick={() => handleStepForward()}
                    sx={{ fill: theme.palette.text.primary }}
                />
            </IconButton>

            <Box className={styles.sliderContainer}>
                <Slider
                    onChange={(_, newValue) => handleSliderDrag(Number(newValue))}
                    className={styles.slider}
                    value={animationProgress}
                    min={0}
                    max={100}
                />
            </Box>

            <Box className={styles.modeSwitchContainer}>
                <ModeSwitch switchMode={terminalMode} setSwitchMode={setTerminalMode} />
            </Box>
        </div>
    );
};

export default Controls;
