import React, { useState } from 'react';

const Terms = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for expanded content

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Toggle state
  };

  return (
    <div className="modal-content">
      <h2>Terms of Use</h2>
      <p>
        This application provides users with access to features for tracking health and physical activity.
        By using our application, you agree to the terms set forth in these Terms of Use.
      </p>
      
      <p>
        We strongly recommend that you carefully read these terms before using the application.
      </p>

      {/* Button to expand/collapse additional information */}
      <button onClick={toggleContent} className="expand-btn">
        {isExpanded ? 'Collapse Information' : 'Expand Details'}
      </button>

      {isExpanded && (
        <div className="expanded-content">
          <div className="scrollable-content">
            <h3>1. General Provisions</h3>
            <p>
              The application is intended for personal use only. You agree to use it within legal purposes
              and comply with all applicable laws and regulations.
            </p>

            <h3>2. Registration and Account</h3>
            <p>
              To use certain features of the application, you may need to create an account. You agree to provide
              accurate and up-to-date information during registration and keep your account information current.
            </p>

            <h3>3. User Responsibility</h3>
            <p>
              You are fully responsible for your use of the application. The application is not responsible for any errors,
              health issues, or injuries that may result from using the information provided in the application.
            </p>

            <h3>4. Limitation of Liability</h3>
            <p>
              The application is provided "as is". We do not guarantee error-free operation or absence of technical issues.
              We are not liable for any damage that may occur due to errors, failures, or other malfunctions in the application.
            </p>

            <h3>5. Data Protection</h3>
            <p>
              We adhere to a strict privacy policy regarding your data. We will not share your data with third parties without your consent,
              except when required to comply with legal obligations.
            </p>

            <h3>6. Changes to the Terms of Use</h3>
            <p>
              We may update the Terms of Use from time to time, and changes will take effect upon their publication.
              We will notify you of significant changes through in-app notifications.
            </p>

            <h3>7. Termination of Use</h3>
            <p>
              We reserve the right to suspend or terminate access to the application at any time without prior notice
              if you violate the Terms of Use or under other circumstances we deem necessary.
            </p>

            <h3>8. Final Provisions</h3>
            <p>
              In case of disputes between you and us, they will be resolved according to the laws of your jurisdiction.
              If any provision of these Terms of Use is found invalid, it will not affect the validity of the remaining provisions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terms;
