import React, { useState } from 'react'; 
import { Container, Row, Col, Form, Button, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap'; 
import styles from "./prescription.css"; 
 
const Prescription = () => { 
    const [progress, setProgress] = useState(0); 
 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        setProgress(100); 
    }; 
 
    return ( 
        <div className={styles["prescription-page"]}> 
            <Container className={styles["upload-container"]}> 
                <Row> 
                    <Col md={{ span: 8, offset: 2 }}> 
                        <h1 className="text-center mb-4">Upload Prescription <i class="bi bi-file-earmark-check-fill"></i></h1> 
                        <Form onSubmit={handleSubmit} action="/upload-prescription" method="post" encType="multipart/form-data"> 
                            <Form.Group> 
                                <Form.Label> 
                                    Select prescription file 
                                    <OverlayTrigger 
                                        placement="right" 
                                        overlay={<Tooltip>Please upload a clear image or PDF of your prescription.</Tooltip>} 
                                    > 
                                        <i className="bi bi-info-circle tooltip-icon"></i> 
                                    </OverlayTrigger> 
                                </Form.Label> 
                                <Form.Control type="file" id="prescription" name="prescription" required /> 
                            </Form.Group> 
                            <Form.Group> 
                                <Form.Label>Additional Information (Remarks)</Form.Label> 
                                <Form.Control as="textarea" id="additional-info" name="additional_info" rows="3" /> 
                            </Form.Group> 
                            <br /> 
                            <Button type="submit" className={`btn btn-primary btn-block ${styles["upload-button"]}`}>Upload Prescription</Button> 
                        </Form> 
                        <ProgressBar animated striped className="mt-4" now={progress} label={`${progress}%`} style={{ height: '20px' }} /> 
                    </Col> 
                </Row> 
                <main> 
                    <div className={styles["info-section"]}> 
                        <div className={styles["info-point"]}> 
                            <h2><i class="bi bi-cursor-fill"></i>1 Lakh+ Products</h2> 
                            <p>We maintain strict quality controls on all our partner zetailers, so that you always get standard quality products.</p> 
                        </div> 
                        <div className={styles["info-point"]}> 
                            <h2><i class="bi bi-cursor-fill"></i> Secure Payment</h2> 
                            <p>100% secure and trusted payment protection.</p> 
                        </div> 
                        <div className={styles["info-point"]}> 
                            <h2><i class="bi bi-cursor-fill"></i> Easy Return</h2> 
                            <p>We have a new and dynamic return window policy for medicines and healthcare items. Refer FAQs section for more details.</p> 
                        </div> 
                        
                        <div className={styles["info-point"]}> 
                            <h2><i class="bi bi-cursor-fill"></i> Trust</h2> 
                            <p> A licensed pharmacy would be delivering your order basis availability of product & fastest delivery..</p> 
                        </div> 
                    </div> 
                </main> 
 
 
            </Container> 
        </div> 
    ); 
}; 
 
export default Prescription;