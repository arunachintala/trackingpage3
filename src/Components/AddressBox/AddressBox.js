import React from 'react';

import box from '../../assets/Vector.svg';
import phone from '../../assets/Phone.svg';

function AddressBox() {
    return (
        <div style={{ marginLeft: '60px', borderRadius: '0px', marginTop: '20px', backgroundColor: '#F5F8F8', justifyContent: 'flex-end', height: '151px', width: '693px', border: '1px solid white' }}>
            <div style={{ paddingTop: '22px', paddingLeft: '38px', color: "#121114", fontFamily: 'Poppins', fontWeight: '500', fontSize: '22px', lineHeight: '33px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <p>Contact Information</p>
                <div style={{ color: '#5F5A6B' }}>
                    <img src={box} alt="logo" />
                    <span style={{ paddingLeft: '10px', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> support@godash.ai</span>
                </div>
                <div style={{ color: '#5F5A6B' }}>
                    <img src={phone} alt="logo" />
                    <span style={{ paddingLeft: '10px', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> 1800097866</span>
                </div>
            </div>

        </div>
    );
}

export default AddressBox;
