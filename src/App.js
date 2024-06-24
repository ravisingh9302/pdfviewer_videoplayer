import "./App.css";
import { useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PDF_view_1 from "./PDF_view_1";
import Media_download from "./Media_download";
import PDF_maker from "./PDF_maker";
import Vedio_player_1 from "./Vedio_player_1";
import Document_View from "./Document_View";
import Vedio_player_2 from "./Vedio_player_2";
import Pdfviewer from "./Pdfviewer";

function App() {

  const [Medialink, setMedialink] = useState(null);
  const [MediaUpload, setMediaUpload] = useState(null);
  const [Pdflink, setPdflink] = useState(null);
  const [PdfUpload, setPdfUpload] = useState(null);
  const [DocuUpload, setDocuUpload] = useState(null);
  const [Dcoulink, setDoculink] = useState(null);
  const [Dcoufiletype, setDocufiletype] = useState(null);
  const [Vediolink1, setVediolink1] = useState(null);
  const [VedioUpload1, setVedioUpload1] = useState(null);
  const [Vediolink2, setVediolink2] = useState(null);
  const [VedioUpload2, setVedioUpload2] = useState(null);


  return (
    <>
      {/* <iframe src={pdf} width="800" height="700"> </iframe> */}
      {/* <object data={viewPdf} width="1000" height="700"> </object> */}
      {/* <embed src="./files/ABC_id.pdf" width="800" height="500" /> */}



      {/* *************** DOWNLOAD MEDIA *******************/}
      <div style={{ border: "2px solid black", margin: "20px 50px", padding: "20px" }}>
        <h2>To Download media</h2>
        <input type="file" onChange={(e) => (setMediaUpload(e.target.files[0]))} />
        <p>OR</p>
        <input type="text" onBlur={(e) => (setMedialink(e.target.value))} style={{ width: "100%", marginBottom: "20px" }} placeholder="paste media link" />
        {/* <PDFViewer medialink={Medialink} mediaupload={MediaUpload} /> */}
        <Media_download medialink={Medialink} mediaupload={MediaUpload} />
      </div>

      {/* *************** SHOW PDF*******************/}
      <div style={{ border: "2px solid black", margin: "20px 50px", padding: "20px" }}>
        <h2>To show pdf</h2>
        <input type="file" accept=".pdf" onChange={(e) => (setPdfUpload(e.target.files[0]))} />
        <p>OR</p>
        <input type="text" style={{ width: "100%", marginBottom: "20px" }} onBlur={(e) => (setPdflink(e.target.value))} placeholder="paste link here" />
        {/* <PDF_view_1 pdflink={Pdflink} pdfupload={PdfUpload} /> */}
        <Pdfviewer pdflink={Pdflink} pdfupload={PdfUpload} />
        
      </div>

      {/* *************** DOCUMENT VIEWER *******************/}
      <div style={{ border: "2px solid black", margin: "20px 50px", padding: "20px" }}>
        <h2>Document viewer</h2>
        <input type="file" onChange={(e) => (setDocuUpload(e.target.files[0]))} />
        <p>OR</p>
        <input type="text" style={{ width: "100%", marginBottom: "20px" }} onBlur={(e) => { setDoculink(e.target.value) }} placeholder="paste link here" />
        <input type="text" style={{ width: "40%", marginBottom: "20px" }} onBlur={(e) => { setDocufiletype(e.target.value) }} placeholder="file type" />
        <Document_View documentlink={Dcoulink} documentupload={DocuUpload} filetype={Dcoufiletype} />
      </div>

      {/* *************** MEDIA PLAYER *******************/}
      <div style={{ border: "2px solid black", margin: "20px 50px", padding: "20px" }}>
        <h2>To show Player 1 </h2>
        <input type="file" accept=".mp4,.mkv" onChange={(e) => (setVedioUpload1(e.target.files[0]))} />
        <p>OR</p>
        <input type="text" style={{ width: "100%", marginBottom: "20px" }} onBlur={(e) => (setVediolink1(e.target.value))} placeholder="paste link here" />
        <Vedio_player_1 vediolink={Vediolink1} vedioupload={VedioUpload1} />
      </div>

      {/* *************** MEDIA PLAYER *******************/}
      <div style={{ border: "2px solid black", margin: "20px 50px", padding: "20px" }}>
        <h2>To show Player 2 </h2>
        <input type="file" accept=".mp4,.mkv" onChange={(e) => (setVedioUpload2(e.target.files[0]))} />
        <p>OR</p>
        <input type="text" style={{ width: "100%", marginBottom: "20px" }} onBlur={(e) => (setVediolink2(e.target.value))} placeholder="paste link here" />
        <Vedio_player_2 vediolink={Vediolink2} vedioupload={VedioUpload2} />
      </div>

      {/* *************** CREATE DOCUMENT *******************/}
      <div style={{ border: "2px solid black", margin: "20px 50px", padding: "10px" }}>
        <PDFViewer width={["50%"]} height={["400px"]} style={{ margin: "50px auto", display: "block" }}>
          <PDF_maker />
        </PDFViewer>
        <PDFDownloadLink document={<PDF_maker />}>
          {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
        </PDFDownloadLink>
      </div>

    </>

  );
}

export default App;




// const request = new Request("./files/ABC_id.pdf");
// const url = request.url;
// const method = request.method;
// const credentials = request.credentials;
// console.log("url:", request)
// console.log("url:", url)
// console.log("url:", method)
// console.log("url:", credentials)

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "image/jpeg");
// myHeaders.append("Access-Control-Allow-Origin", "https://admin.example.com");
// myHeaders.append("Access-Control-Allow-Credentials", true);

// const myInit = {
//   method: "GET",
//   headers: myHeaders,
//   mode: "cors",
//   cache: "default",
// };











{
  /* <div>
import DocViewer,{DocViewerRenderers} from "@cyntler/react-doc-viewer";
const docs = [
    { uri: require("./files/ABC_id.pdf"),
      fileType:"pdf",
      fileName:"htmlcheatsheet.pdf"
    },
    { uri: "https://youtu.be/E0aK6CKsSNg",
      fileType:"mp4",
      fileName:"htmlcheatsheet.mp4"
    },
    { uri: require("./files/javascriptNotes.docx"),
      fileType:"docx",
      fileName:"htmlcheatsheet.docx"
    },
    { uri: require("./files/excelpractice.xlsx"),
      fileType:"xlsx",
      fileName:"htmlcheatsheet.xlsx"
    },
    
    { uri: require("./files/read.txt"),
      fileType:"txt",
      fileName:"htmlcheatsheet.txt"
    },
    { uri: require("./files/Classification_of_Polymers.pptx"),
      fileType:"pptx",
      fileName:"htmlcheatsheet.pptx"
    },
    
  ];

<DocViewer
    pluginRenderers={DocViewerRenderers}
    initialActiveDocument={docs[1]}
     documents={docs} style={{height:1000}} />
</div> */
}
