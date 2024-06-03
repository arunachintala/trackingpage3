

import React from 'react';
import Page1 from '../pages/page1';
import packing from '../../assets/Packing.svg';
import { Card } from 'antd';
import AddressBox from '../AddressBox/AddressBox';

function Page5() {
    return (
        <div style={{ position: 'absolute', backgroundColor: '#F5F8F8' }}>
            <div style={{ position: 'absolute', width: '1440px', left: '2px', height: '60px', backgroundColor: 'white' }}></div>
            <div>
                <p style={{ marginTop: '84px', marginLeft: '30px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
            </div>

            <Card style={{ marginLeft: '16px', marginRight: '16px', marginBottom: '16px', marginTop: '16px', width: '98%', height: 'auto' }}>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>
                            <div style={{ marginLeft: '16px', width: 'auto', height: 'auto', }}><p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#121114' }}>Tracking Status</p>
                                <p style={{ marginTop: '10px', marginBottom: '55px', fontFamily: 'Poppins', color: '#5F5A6B', fontWeight: '400', fontSize: '12px', lineHeight: '18px' }}>Quickly check your tracking status below or click on details see more info.</p></div>
                            <Page1 />
                        </div>
                        <div>
                            <div style={{ border: '1px solid #D9D9D9', borderRadius: '16px', width: '92%', paddingLeft: '20px', marginLeft: '59px', height: '736px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '120px', textAlign: 'center' }}>
                                    <img src={packing} alt="nologo" />

                                    <p>Sorry! Invalid Order ID</p>
                                </div>
                            </div>
                            <AddressBox />
                            <div style={{ height: '18px', display: 'flex', justifyContent: 'flex-end' }}>Powered by Zippyy</div>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    );
}

export default Page5;
