import React from 'react'
import Navbar from './Navbar'

const Error = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "100px", marginTop: '30px' }}>
                Opps! Something Went Wrong
            </div>
        </>
    )
}

export default Error