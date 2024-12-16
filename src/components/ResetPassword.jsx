import React, { useEffect, useState } from 'react';

const ResetPassword = () => {
  const [redirectFailed, setRedirectFailed] = useState(false);

    useEffect(() => {
      const token = new URLSearchParams(window.location.search).get('token');
      const tokenId = new URLSearchParams(window.location.search).get('tokenId');
      if (!token || !tokenId) {
        console.error("Missing token or tokenId parameters.");
        setRedirectFailed(true);
        return;
      }

      const redirectUrl = `gx://resetpassword?token=${token}&tokenId=${tokenId}`;

      // Attempt automatic redirection
      window.location.href = redirectUrl;

      // If redirection doesn't happen within a short period, show manual option
      const timeoutId = setTimeout(() => {
        setRedirectFailed(true);
      }, 2000); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
    }, []);

    return (
      <div>
        {redirectFailed && (
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            <p>If you're not automatically redirected, please click below.</p>
            <button onClick={() => window.location.href = `gx://resetpassword?token=${token}&tokenId=${tokenId}`}>
              Open in App
            </button>
            {/* Include further instructions or a link to the app store as needed */}
          </div>
        )}
      </div>
    );
};

export default ResetPassword;
