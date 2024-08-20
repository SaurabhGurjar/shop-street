import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Container = styled.section`
  width: 100%;
  .tab-wrapper {
    display: flex;
    gap: 20px;
    button {
      position: relative;
      background: none;
      border: none;
      font-size: 1em;
    }
    .active {
      font-weight: bold;
      &::after {
        position: absolute;
        display: inline-block;
        left: 0;
        top: calc(1em + 14px);
        content: '';
        width: 100%;
        height: 2px;
        background-color: #000;
      }
    }
  }
  .separator {
    width: 100%;
    background-color: #cad5df;
    height: 1px;
    margin: 8px 0;
  }
`;

function Details({ data }) {
  const [activeTab, setActiveTab] = useState('descriptions');
  const [tabContent, setTabContent] = useState(data.description);

  const handleTabs = (tabId) => {
    if (tabId === 'descriptions') {
      setTabContent(data.description);
      setActiveTab('descriptions');
    } else if (tabId === 'additional-info') {
      setTabContent('No more information for this product!');

      setActiveTab('additional-info');
    } else if (tabId === 'reviews') {
      setTabContent('No reviews are available for this product!');

      setActiveTab('reviews');
    }
  };

  return (
    <Container>
      <div className="tab-wrapper">
        <button
          className={activeTab === 'descriptions' ? 'active' : ''}
          onClick={() => handleTabs('descriptions')}
        >
          Descriptions
        </button>
        <button
          className={activeTab === 'additional-info' ? 'active' : ''}
          onClick={() => handleTabs('additional-info')}
        >
          Additional Information
        </button>
        <button
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => handleTabs('reviews')}
        >
          Reviews
        </button>
      </div>
      <div className="separator"></div>
      <div className="tab-content-wrapper">
        <p>{tabContent}</p>
      </div>
    </Container>
  );
}

Details.propTypes = {
  data: PropTypes.object,
};

export default Details;
