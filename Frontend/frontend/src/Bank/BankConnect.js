import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Homepage.css';

export default function BankConnect() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.teller.io/connect/connect.js';
    script.async = true;

    script.onload = () => {
      if (window.TellerConnect) {
        const tellerConnect = window.TellerConnect.setup({
          applicationId: "app_p1klv808m9jtuv6a7c000",
          
          onInit: function() {
            console.log("Teller Connect has initialized");
          },

          onSuccess: function(enrollment) {
            console.log("User enrolled successfully", enrollment.accessToken);
            // Redirect to homepage after getting the token
            navigate('/');
          },

          onExit: function() {
            console.log("User closed Teller Connect");
          }
        });

        const el = document.getElementById("teller-connect");
        if (el) {
          el.addEventListener("click", function() {
            tellerConnect.open();
          });
        }
      }
    };

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [navigate]);

  return (
    <>
      <button className="card-button" id="teller-connect">Connect to your bank</button>
    </>
  );
}