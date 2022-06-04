import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Results({ ShortenUrl }) {
    let [Copy, setCopy] = useState(false)

    console.log(ShortenUrl)
    return (
        <div className='resultContainer'>
            <div>
                {ShortenUrl.length !== 0 ? ShortenUrl.map((item) => (
                    <div className='resultBox'>
                        <p>{item}</p>
                        <CopyToClipboard text={item}
                            onCopy={() => toast("copied!!")}>
                            <button>copy</button>
                        </CopyToClipboard>
                    </div>
                )) : null

                }

            </div>
        </div>
    )
}

export default Results