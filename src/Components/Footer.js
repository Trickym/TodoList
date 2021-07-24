import React from 'react'

export const Footer = () => {
    let footerr={
        position:"relative",
        top:"84vh",
        width:"100%"
    }
    return (
        <div className="bg-dark text-light" style={footerr}>
            <p className="text-center">Copyright &copy; Trickym.com</p>
        </div>
    )
}
