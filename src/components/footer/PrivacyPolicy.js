import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for expanded content

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Toggle state
  };

  return (
    <div className="modal-content">
      <h2>Privacy Policy</h2>
      <p>
        We value your privacy and strive to protect your personal data. In this privacy policy,
        we explain how we collect, use, process, and safeguard your information.
      </p>
      
      <p>
        By using our application, you agree to the terms outlined in this privacy policy.
      </p>

      {/* Button to expand/collapse additional information */}
      <button onClick={toggleContent} className="expand-btn">
        {isExpanded ? 'Collapse Information' : 'Expand Details'}
      </button>

      {isExpanded && (
        <div className="expanded-content">
          <h3>What data do we collect?</h3>
          <ul>
            <li><strong>Personal data:</strong> Name, email address, date of birth.</li>
            <li><strong>Health data:</strong> Information about your physical condition, activity, sleep, etc.</li>
            <li><strong>Device data:</strong> Device type, operating system, unique device identifiers.</li>
            <li><strong>App interaction data:</strong> Data about how you use the app, which features you frequently use, etc.</li>
          </ul>

          <h3>How do we use your data?</h3>
          <p>
            We use your data for the following purposes:
          </p>
          <ul>
            <li>Providing personalized health recommendations.</li>
            <li>Analyzing and improving app service quality.</li>
            <li>Sending notifications about new features and app updates.</li>
            <li>Ensuring the security of your account and the app overall.</li>
          </ul>

          <h3>How do we protect your data?</h3>
          <p>
            We take all necessary measures to protect your data, including:
          </p>
          <ul>
            <li><strong>Encryption:</strong> All data is transmitted using secure encryption protocols (e.g., HTTPS).</li>
            <li><strong>Restricted access:</strong> Only authorized users and staff can access your data.</li>
            <li><strong>Regular security audits:</strong> We regularly conduct audits to protect against leaks and attacks.</li>
          </ul>

          <h3>How long do we keep your data?</h3>
          <p>
            We retain your data for as long as necessary to fulfill the purposes for which it was collected, unless otherwise required by law.
          </p>

          <h3>How can you control your data?</h3>
          <ul>
            <li>You can update your personal data anytime in the app settings.</li>
            <li>You can delete your account, which will remove all your data from the system.</li>
            <li>You can contact us to request deletion or modification of your data.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
