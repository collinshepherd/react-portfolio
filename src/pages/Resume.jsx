import { useState } from "react";
import resume from "/Resume.pdf";
import { Document, Page } from "react-pdf";
import "../styles/ResumePage.scss";

import { pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-container">
      <div className="d-flex justify-content-center">
        <button className="mx-1" onClick={() => setPageNumber(1)}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} color="#ffd700" />
        </button>
        <p className="page-number mx-1">{pageNumber}</p>
        <button className="mx-1" onClick={() => setPageNumber(2)}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} color="#ffd700" />
        </button>
      </div>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <a
        className="d-flex justify-content-center btn text-primary"
        href="/Resume.pdf"
        download="resume.pdf"
      >
        Download
      </a>
    </div>
  );
}
