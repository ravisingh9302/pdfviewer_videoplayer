import React, { useState } from 'react'
// import Examplefile from "./files/berger.png"
import { useEffect } from 'react'

function Media_download({ medialink, mediaupload }) {
    console.log(medialink,"Media download",mediaupload)
    const [Examplefile, setExamplefile] = useState(null)

    useEffect(() => {
        fileProcess()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [medialink, mediaupload])



    const fileProcess = async (e) => {
        if (medialink) {
            await fetch(medialink).then(response => (
                // console.log("res", response),
                response.blob()
            )).then(blob => {
                // console.log(" blob:", blob)
                const url = window.URL.createObjectURL(blob);
                // console.log("url abcd:", url)
                setExamplefile(url)

            });
        }
        if (mediaupload) {
            console.log("selectedFile: ", mediaupload);
            let reader = new FileReader();
            reader.readAsDataURL(mediaupload);
            reader.onload = (e) => {
                // console.log("AfterReader:", e.target.result)
                setExamplefile(e.target.result);
            };
        }

    }

    const handleclick = (e) => {
        const link = document.createElement('a');
        link.download = 'Example_File';
        link.href = Examplefile;
        link.target = "_blank"
        link.rel = "noreferrer"
        link.click();
    }

    return (
        <>
            {Examplefile &&

<div>
                    {/* <a href={Examplefile} download="Example-PDF-document" target="_blank" rel="noreferrer">Download</a> */}
                    <button onClick={handleclick}>Download file</button>
                </div>
            }
            {!Examplefile && <div>No File to Download Please Upload first </div>}
        </>
    )
}

export default Media_download