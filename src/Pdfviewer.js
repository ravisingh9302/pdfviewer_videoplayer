import React, { useEffect, useState, useRef } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
import './App.css'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import RingLoader from 'react-spinners/RingLoader'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function Pdfviewer({ pdflink, pdfupload }) {
  // console.log(pdflink, "PDF", pdfupload)


  const [url, seturl] = useState(null)

  const ref = useRef()
  const canref = useRef()

  const [pageScale, setPageScale] = useState(1);
  const [numPages, setNumPages] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(pdf) {
    console.log("pdf", pdf.numPages)
    setNumPages(pdf?.numPages);
  }

  function handleZoomIn() {
    if (pageScale < 3) {
      setPageScale(pageScale + 0.2);
    }
  }

  function handleZoomOut() {
    if (pageScale > 0.3) {
      setPageScale(pageScale - 0.2);
    }
  }

  function handleNext() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }
  function handlePrevious() {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  }


  function load () {
    return (
      <RingLoader  color="#0d9bda" size={70} speedMultiplier={1.5} cssOverride={{ margin: '50% 50%' }} />
    )
  }


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

    <div className='pdfcont'>
      <div className='page-container'>
        <Document file={pdflink} onLoadSuccess={onDocumentLoadSuccess} loading={load} inputRef={ref} >
          <Page pageNumber={pageNumber} canvasRef={canref} scale={pageScale} />
        </Document>
      </div>

      <div className="footer">
        <div className="button-container">
          <button onClick={handleZoomIn} disabled={pageScale >= 3}>
            Zoom +
          </button>
          <button onClick={handleZoomOut} disabled={pageScale <= 0.3}>
            Zoom -
          </button>
        </div>
        <div className="page-text">
          Page {pageNumber} of {numPages}
        </div>
        <div className="button-container">
          <button onClick={handlePrevious} disabled={pageNumber === 1}>
            ‹ Previous
          </button>
          <button onClick={handleNext} disabled={pageNumber === numPages}>
            Next ›
          </button>
        </div>
      </div>
    </div>

  )
}


export default Pdfviewer