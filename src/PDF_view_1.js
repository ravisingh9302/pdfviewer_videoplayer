// npm install pdfjs-dist@3.4.120
// npm install @react-pdf-viewer/core@3.12.0

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import React, { useEffect, useState } from 'react'

function PDF_view_1({ pdflink, pdfupload }) {
    console.log(pdflink, "PDF", pdfupload)
    const [url, seturl] = useState(null)
    const newPlugins = defaultLayoutPlugin();


    useEffect(() => {
        fileProcess()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pdflink, pdfupload])

    const fileProcess = (e) => {
        if (pdflink && pdfupload) {
            return;
        }
        if (!pdflink && !pdfupload) {
            return;
        }
        if (pdflink) {
            seturl(pdflink);
            return;
        }
        if (pdfupload) {

            console.log("Selected File: ", pdfupload)
            let reader = new FileReader();
            reader.readAsDataURL(pdfupload);
            reader.onload = (e) => {
                console.log("AfterReader:", e.target.result)
                seturl(e.target.result)
            };
        }
    }

    return (
        <>
            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {url &&
                    <Viewer fileUrl={url} plugins={[newPlugins]} />
                }
                {!url && <>No PDF To show</>}
            </Worker> */}
            
        </>
    )
}


export default PDF_view_1