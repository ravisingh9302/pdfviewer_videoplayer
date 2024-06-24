import React, { useState, useEffect,useRef } from 'react'
import DocViewer, { DocViewerRenderers} from "@cyntler/react-doc-viewer";


function Document_View({ documentlink, documentupload, filetype }) {
    console.log(documentlink, "doc viewer", documentupload, filetype)
    // const docs = [];
    const [url, seturl] = useState(null)
    const docViewerRef = useRef(null)


    useEffect(() => {
        fileProcess()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filetype, documentupload])

    const fileProcess = (e) => {
        if (documentlink && documentupload) {
            return;
        }
        if (!documentlink && !documentupload) {
            return;
        }
        if (documentlink && filetype) {
            const doc = [
                {
                    uri: documentlink,
                    fileType: filetype
                    // fileName: "mypdf.pdf"
                    // uri: "https://firebasestorage.googleapis.com/v0/b/my-project-91bf9.appspot.com/o/css_chearsheet.pdf?alt=media&token=15e986fe-b980-4b34-b367-5ded6ff0ade4"

                }
            ]
            seturl(doc);
            return;
        }
        if (documentupload) {

            console.log("Selected File: ", documentupload)
            console.log(documentupload.type)
            let reader = new FileReader();
            reader.readAsDataURL(documentupload);
            reader.onload = (e) => {
                // console.log("AfterReader:", e.target.result)
                const docu = [
                    {
                        uri: e.target.result,
                        fileType: documentupload.type,
                        fileName:documentupload.name
                    }
                ]
                seturl(docu)
            };
        }
    }
    
    return (
        <>
            {url &&
                <DocViewer documents={url} pluginRenderers={DocViewerRenderers} ref={docViewerRef} config={{ header: { disableHeader: true } }}/>
            }
            {!url && <div>No Document to show</div>}

        </>

    )
}

export default Document_View