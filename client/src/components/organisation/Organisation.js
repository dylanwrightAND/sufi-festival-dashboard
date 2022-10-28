import React from 'react';
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

export default function Organisation({ organisations }) {
  return (
    <div>
      <h1>Organisation</h1>

      <ul>
        {organisations.map((o, index) => (
          <li key={`org-${index}`}>
            <CCard style={{ width: '18rem' }}>
              <CCardImage
                orientation="top"
                src="client/src/components/organisation/eventbrite.png"
              />
              <CCardBody>
                <CCardTitle>{o.name}</CCardTitle>
                <CCardText>{o.id}</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
