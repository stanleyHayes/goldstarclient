import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'TTSquares, EuclidCircularA, EuclidCircularB, Gilroy'
    },
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#BBA14f'
        },
        text: {
            primary: '#384054',
            secondary: '#b0b7c9',
            accent: '#BBA14f',
            title: '#384054'
        },
        background: {
            default: 'rgb(228, 235, 241)',
            paper: '#ffffff',
            transparent: 'rgba(255,255,255,0.50)'
        },
        light: {
            secondary: 'rgba(187,161,79,0.15)'
        },
        mode: "light"
    },
    shape: {
        borderRadius: 32
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'TTSquares, EuclidCircularA, EuclidCircularB,Gilroy'
    },
    palette: {
        primary: {
            main: '#121212'
        },
        secondary: {
            main: '#BBA14f'
        },
        text: {
            primary: '#cfd1d6',
            secondary: '#717488',
            accent: '#BBA14f',
            title: '#dcdce0'
        },
        background: {
            default: '#0f0f11',
            paper: '#1b1c20',
            transparent: 'rgba(45,51,59,0.50)',
            drawer: '#232428'
        },
        light: {
            secondary: 'rgba(187,161,79,0.15)'
        },
        mode: 'dark'
    },
    shape: {
        borderRadius: 32
    }
});

export const THEMES = {lightTheme, darkTheme};
