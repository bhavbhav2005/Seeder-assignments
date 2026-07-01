import { createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#7C5CFC"
        },
        secondary:{
            main:"#171821"
        },
        background:{
            default:"#11131A",
            paper:"#171821"
        },
        text:{
            primary:"#FFFFFF",
            secondary:"#9A9CB5"
        }
    },
    typography:{
        fontFamily:[
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif"
        ].join(","),
        h1:{
            fontWeight:700,
            fontSize:"60px",
            lineHeight:1.1,
            letterSpacing:"-0.03em"
        },
        h2:{
            fontWeight:700,
            fontSize:"54px",
            lineHeight:1.15,
            letterSpacing:"-0.02em"
        },
        h3:{
            fontWeight:700,
            fontSize:"40px",
            lineHeight:1.2
        },
        h4:{
            fontWeight:700,
            fontSize:"32px",
            lineHeight:1.25
        },
        h5:{
            fontWeight:700,
            fontSize:"24px",
            lineHeight:1.3
        },
        h6:{
            fontWeight:600,
            fontSize:"20px",
            lineHeight:1.3
        },
        body1:{
            fontWeight:400,
            fontSize:"16px",
            lineHeight:1.5
        },
        body2:{
            fontWeight:400,
            fontSize:"14px",
            lineHeight:1.5
        },
        button:{
            fontWeight:600,
            fontSize:"16px",
            textTransform:"none"
        }
    },
    shape:{
        borderRadius:16
    },
    components:{
        MuiCssBaseline:{
            styleOverrides:{
                html:{
                    fontFamily:"Inter, sans-serif"
                },

                body:{
                    fontFamily:"Inter, sans-serif",
                    background:"#11131A",
                    color:"#FFFFFF"
                },

                "*":{
                    fontFamily:"Inter, sans-serif",
                    boxSizing:"border-box"
                }

            }

        }

    }

});

export default theme;