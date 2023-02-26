import React from 'react';

function PayoutBtn({ onClick }) {
  return (
    <button className='payout-btn' onClick={onClick}>Payout?</button>
  );
}

export default PayoutBtn;