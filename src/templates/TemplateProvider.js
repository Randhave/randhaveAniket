import React from 'react'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { createContext } from 'react'

const TemplateContext = createContext(null)

export const TemplateProvider = ({ children }) =>{
    const theme = createMuiTheme({
        overrides: {
          
            MuiButton:{
                root:{
                    color:'unset',
                    '&:hover':{
                        backgroundColor:'none'
                    }
                }
            }
        }
    })
    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    {children}
             </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider

// Context used for applying whole project
// and above this code for applying or overriding global css 