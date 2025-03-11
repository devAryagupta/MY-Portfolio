import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/RESUME_PDF.pdf";
import themePattern from "../../Assets/theme_pattern.svg"; // Assuming this is the path to your theme pattern image
import "./Mywork.css";

const Mywork = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mywork">
      <Container fluid className="resume-section">
        {/* Title */}
        <div className="mywork-title">
          <h1>Resume</h1>
          <img src={themePattern} alt="Theme Pattern" />
        </div>



        {/* PDF Document */}
        <div className="pdf-viewer">
          <iframe
            src={pdf}
            title="PDF Viewer"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        </div>

        {/* Download Button Duplicate */}
        <Row className="justify-content-center">
          <Button variant="primary" href={pdf} target="_blank" className="download-cv">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Mywork;