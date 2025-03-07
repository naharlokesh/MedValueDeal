import React, { useEffect, useState } from "react";
import { Card, CardImg, Container, CardBody, CardText, CardTitle, Button, CardSubtitle, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LabTest.css";
import googlePayQr from './google_pay.jpg'; // Import the Google Pay QR code image

function LabTest() {
    // State variables
    const [labtest, setLabtest] = useState([]);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false); // For displaying payment modal
    const [showQrModal, setShowQrModal] = useState(false); // For displaying QR code modal
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false); // For displaying payment success modal
    const [showCashOnDeliverySuccess, setShowCashOnDeliverySuccess] = useState(false); // For displaying cash on delivery success modal

    // Fetch lab tests data
    useEffect(() => {
        const fetchLabtest = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/labtest/all'); // replace with your actual API
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setLabtest(data);
            } catch (error) {
                console.error("Error fetching the lab tests:", error);
                setError(error.message);
            }
        };

        fetchLabtest();
    }, []);

    // Function to handle opening payment modal
    const handleShow = () => setShow(true);

    // Function to handle closing payment modal
    const handleClose = () => setShow(false);

    // Function to handle opening QR code modal
    const handleShowQrModal = () => setShowQrModal(true);

    // Function to handle closing QR code modal
    const handleCloseQrModal = () => setShowQrModal(false);

    // Function to handle opening payment success modal
    const handlePaymentSuccessClose = () => setShowPaymentSuccess(false);

    // Function to handle payment completion
    const handlePaymentComplete = () => {
        // Close the QR code modal
        handleCloseQrModal();
        // Show payment success modal
        setShowPaymentSuccess(true);
    };

    // Function to handle closing cash on delivery success modal
    const handleCashOnDeliverySuccessClose = () => setShowCashOnDeliverySuccess(false);

    if (error) {
        return <div>Error fetching the lab tests: {error}</div>;
    }

    return (
        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '5rem' }}>
            <Container style={{ display: 'flex', flexDirection: 'column', flexBasis: '45%' }}>
                {labtest.map((labtests, index) => (
                    <Card key={index} style={{ width: '30rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '1rem', boxShadow: '2px 2px 10px rgb(0, 119, 119)' }} className="mt-3 mb-3" >
                        <CardImg variant="top" style={{ width: '3rem', height: '3rem' ,marginLeft:'1rem' }} src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg" alt={labtests.Test_name} />
                        <CardBody>
                            <CardTitle style={{ fontSize: '22px' , color: "rgb(0, 119, 119)"}} className="mb-1">{labtests.Test_name}</CardTitle>
                            <CardSubtitle style={{ fontWeight: '400' ,color: "grey",fontSize:"14px"}} className="mt-1">Includes {labtests.Test_Count} tests</CardSubtitle>
                            <CardSubtitle style={{ fontSize: '15px' ,color: "grey" }} className="mb-5 mt-1">Available at {labtests.Available_at} Certified lab</CardSubtitle>
                            <CardBody style={{ display:'flex', justifyContent:'space-between', padding: '0' ,}}>
                                <CardText style={{ fontSize: '18px' }}>
                                    Rs <span style={{color: "rgb(0, 119, 119)"}}>{labtests.Price}</span> Onwards
                                </CardText>
                                <Button style={{ backgroundColor: '#008B8B' }} className="button-cart" onClick={handleShow}>
                                    Book Now <i class="bi bi-bag-check"></i>
                                </Button>
                            </CardBody>
                        </CardBody>
                    </Card>
                ))}
            </Container>
            <Card style={{ border: 'none', flexBasis: '40%' }} className="Prescription-Details">
                <CardTitle>Please add item(s) to proceed</CardTitle>
                <Link to='/cart'>
                    <Button style={{ marginTop: '1rem', backgroundColor: '#008B8B', width: '50%' }}>View Cart <i class="bi bi-cart4"></i> </Button>
                </Link>
                <Card style={{ border: 'none', width: '22rem', boxShadow: '2px 2px 10px Grey', marginTop: '3rem' }}>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 0 0 1rem' }}>
                        <CardImg src="https://res.cloudinary.com/hwfihgbjm/image/upload/v1619815694/production/fx4xpyy4bdvdzrhve8ss.png" style={{ width: "40px", height: '40px', marginRight: '1rem' }} alt="Valid prescription" />
                        <CardTitle style={{ marginTop: '0.5rem' }}>What is a valid prescription?</CardTitle>
                    </Card>
                    <hr />
                    <CardText style={{ marginLeft: '0.5rem' }}>A valid prescription contains:</CardText>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 2rem 0 1rem' }}>
                        <CardImg src="https://inmoment.com/wp-content/uploads/2020/09/Elective-Surgery-Specialists.svg" style={{ width: "40px", marginRight: '1rem' }} alt="Doctor details" />
                        <CardText style={{ marginTop: '0.5rem' }}>Doctor Details</CardText>
                    </Card>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 2rem 0 1rem' }}>
                        <CardImg src="https://i.pinimg.com/564x/38/24/c0/3824c05b6583955d654f84fa352e899c.jpg" style={{ width: "40px", marginRight: '1rem' }} alt="Date of prescription" />
                        <CardText style={{ marginTop: '0.5rem' }}>Date Of Prescription</CardText>
                    </Card>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 2rem 0 1rem' }}>
                        <CardImg src="https://nolongerbound.com/wp-content/uploads/2020/12/NLB-age-requirements-icon.png" style={{ width: "40px", marginRight: '1rem' }} alt="Patient details" />
                        <CardText style={{ marginTop: '0.5rem' }}>Patient Details</CardText>
                    </Card>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 2rem 0 1rem' }}>
                        <CardImg src="https://img.freepik.com/premium-vector/jar-with-medicine-pills-pills-medical-kit-concepts-can-be-used-web-mobile-devices-vector_414360-2591.jpg?w=740" style={{ width: "40px", marginRight: '1rem' }} alt="Dosage details" />
                        <CardText style={{ marginTop: '0.5rem' }}>Dosage Details</CardText>
                    </Card>
                </Card>
            </Card>
            
            {/* Payment Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" onClick={handleShowQrModal} style={{ marginRight: '10px' }}>Pay Online</Button>
                    <Button variant="success" onClick={() => setShowCashOnDeliverySuccess(true)}>Cash on Delivery</Button>
                </Modal.Body>
            </Modal>

            {/* QR Code Modal */}
            <Modal show={showQrModal} onHide={handleCloseQrModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Pay with Google Pay</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ textAlign: 'center' }}>
                        <img src={googlePayQr} alt="Google Pay QR Code" style={{ width: '200px' }} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handlePaymentComplete}>Payment Complete</Button>
                    <Button variant="secondary" onClick={handleCloseQrModal}>Cancel</Button>
                </Modal.Footer>
            </Modal>

            {/* Payment Success Modal */}
            <Modal show={showPaymentSuccess} onHide={handlePaymentSuccessClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Successful <i class="bi bi-check2-circle" style={{color:"green"}}></i></Modal.Title>
                </Modal.Header>
                <Modal.Body>Your payment has been successfully completed.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePaymentSuccessClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            {/* Cash on Delivery Success Modal */}
            <Modal show={showCashOnDeliverySuccess} onHide={() => setShowCashOnDeliverySuccess(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cash on Delivery <i class="bi bi-check2-circle" style={{color:"green"}}></i></Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank you! Your order has been successfully placed.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCashOnDeliverySuccess(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default LabTest;

