import React, { useState } from 'react'
import Background from '../Background'
import InputBox from '../InputBox'
import Results from '../Results';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Container() {

    let [ShortUrl, setShortUrl] = useState("")

    const setShortenUrl = (url) => {
        setShortUrl([...ShortUrl, url])
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <InputBox setShortenUrl={setShortenUrl} />
            <Results ShortenUrl={ShortUrl} />
            <Background />
        </>
    )
}

export default Container