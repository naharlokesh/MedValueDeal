import React, { useContext, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container, CardImg, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css';
import google_pay_scanner from './google_pay.jpg';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showGooglePayModal, setShowGooglePayModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const totalAmount = cart.reduce((sum, medicine) => sum + medicine.Price, 0);

    const handlePaymentModalClose = () => setShowPaymentModal(false);
    const handleGooglePayModalClose = () => setShowGooglePayModal(false);
    const handleSuccessClose = () => setShowSuccess(false);

    const handleShowPaymentModal = () => setShowPaymentModal(true);

    const handlePaymentOption = (option) => {
        if (option === 'COD') {
            setShowPaymentModal(false);
            setShowSuccess(true);
        } else if (option === 'Online') {
            setShowPaymentModal(false);
            setShowGooglePayModal(true);
        }
    };

    const handlePaymentDone = () => {
        setShowGooglePayModal(false);
        setShowSuccess(true);
    };

    return (
        <Container style={{ marginTop: '5rem' }}>
            <Card>
                <CardBody style={{ display: 'flex' }}>
                    <CardBody>
                        {cart.length === 0 ? (
                            <CardText style={{ textAlign: 'center' }}>No items in Cart</CardText>
                        ) : (
                            cart.map((medicine, index) => (
                                <Card key={index} className="mb-3" style={{ display: 'flex' }}>
                                    <CardBody style={{ display: 'flex', background: 'linear-gradient(135deg, #fff, #c3cfe2)' }} className='Cart-item-card'>
                                        <div>
                                            <CardImg src={medicine.Medicine_image} alt={medicine.Medicine_name} style={{ width: '70px', marginTop: '2rem', marginLeft: '2rem' }} />
                                        </div>
                                        <div style={{ marginLeft: '4rem' }}>
                                            <CardTitle style={{ fontSize: '18px', color: 'rgb(0, 119, 119)' }}>{medicine.Medicine_name}</CardTitle>
                                            <CardText style={{ fontSize: '14px', color: 'grey', marginTop: '.5rem', marginBottom: '1rem' }}>{medicine.Company_name}</CardText>
                                            <CardText style={{ fontSize: '14px', color: 'grey' }}>{medicine.Quantity}</CardText>
                                            <CardText style={{ fontSize: '16px', color: 'black', marginTop: '1rem' }}><b>MRP ₹ {medicine.Price} *</b></CardText>
                                            <CardText style={{ fontSize: '14px', color: '#283739', marginBottom: '1rem' }}>  Delivery 🚚 Within 1 Hour</CardText>
                                            <Button
                                                variant="danger"
                                                onClick={() => removeFromCart(index)}
                                                style={{ marginTop: '0.5rem' }}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))
                        )}
                    </CardBody>

                    <CardBody style={{ background: 'linear-gradient(90deg, #fff, #a3cde6)', marginTop: '1rem' }}>
                        {cart.length > 0 && (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <CardText style={{ fontSize: '17px', color: '#283739', marginTop: '1rem', textAlign: 'center' }}>Cart Total :<span style={{ fontSize: '20px' }}> ₹ {totalAmount}</span></CardText>
                                <Button style={{ marginTop: '1rem', backgroundColor: '#008B8B', width: '20rem', marginLeft: '4rem' }}>
                                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Continue Shopping</Link>
                                </Button>
                                <Card style={{ display: 'flex', flexDirection: 'row', width: '20rem', background: 'linear-gradient(135deg, #fff, #c3cfe2)', marginLeft: '4rem', marginTop: '1rem', height: '2.5rem', alignItems: 'center', border: '0.5px solid #283739' }}>
                                    <CardImg src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg?dim=32x32&q=75" style={{ width: '20px', marginLeft: '1rem' }}></CardImg>
                                    <CardText style={{ marginLeft: '2rem' }}>Apply Coupon</CardText>
                                    <CardText style={{ marginLeft: '7rem' }}>{'>'}</CardText>
                                </Card>
                                <Card style={{ width: '23rem', marginLeft: '3rem', marginTop: '3rem' }}>
                                    <CardTitle style={{ color: '#283739', margin: '1.5rem 0 1.5rem 1rem', textAlign: 'center' }}>Bill Summary</CardTitle>
                                    <hr />
                                    <CardText style={{ color: 'grey', display: 'flex', justifyContent: 'space-between', fontSize: '16px', marginTop: '1rem' }}><span style={{ marginLeft: '1rem' }}>Total MRP</span> <span style={{ marginRight: '1rem' }}>₹ {totalAmount}</span></CardText>
                                    <CardText style={{ color: 'grey', display: 'flex', justifyContent: 'space-between', fontSize: '16px', marginTop: '1rem' }}><span style={{ marginLeft: '1rem' }}>Delivery Charges</span> <span style={{ marginRight: '1rem' }}>₹ 15</span></CardText>
                                    <CardText style={{ color: 'grey', display: 'flex', justifyContent: 'space-between', fontSize: '16px', marginTop: '1rem' }}><span style={{ marginLeft: '1rem' }}>Discount On MRP</span> <span style={{ marginRight: '1rem' }}>₹ 0</span></CardText>
                                    <CardText style={{ color: 'grey', display: 'flex', justifyContent: 'space-between', fontSize: '16px', marginTop: '1rem' }}><span style={{ marginLeft: '1rem' }}>Cart Value </span> <span style={{ marginRight: '1rem' }}>₹ {totalAmount + 15}</span></CardText>
                                    <hr />
                                    <CardText style={{ color: '#283739', display: 'flex', justifyContent: 'space-between', fontSize: '18px', marginTop: '1rem', marginBottom: '1rem' }}><span style={{ marginLeft: '1rem' }}>Cart Value </span> <span style={{ marginRight: '1rem' }}>₹ {totalAmount + 15}</span></CardText>
                                </Card>

                                <Button style={{ marginTop: '1rem', backgroundColor: '#008B8B', width: '20rem', marginLeft: '4rem' }} onClick={handleShowPaymentModal}>
                                    Proceed To Pay
                                </Button>
                            </div>
                        )}
                    </CardBody>
                </CardBody>
            </Card>

            <Modal show={showPaymentModal} onHide={handlePaymentModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Payment Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ textAlign: 'center' }}>
                        <Button style={{ margin: '1rem' }} onClick={() => handlePaymentOption('COD')}>Cash on Delivery</Button>
                        <Button style={{ margin: '1rem' }} onClick={() => handlePaymentOption('Online')}>Pay Online</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePaymentModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showGooglePayModal} onHide={handleGooglePayModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pay with Google Pay</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ textAlign: 'center' }}>
                        <img src={google_pay_scanner} alt="Google Pay QR Code" style={{ width: '200px' }} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handlePaymentDone}>
                        Payment Done <i class="bi bi-check2-circle" style={{color:"green"}}></i>
                    </Button>
                    <Button variant="secondary" onClick={handleGooglePayModalClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSuccess} onHide={handleSuccessClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Placed Successfully <i class="bi bi-check2-circle" style={{color:"green"}}></i></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ textAlign: 'center' }}>
                        <p>Your order has been placed successfully.</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSuccessClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Cart;
