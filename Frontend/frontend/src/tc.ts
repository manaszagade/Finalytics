<html>
  <head></head>
  <body>
    <!-- When element is clicked, Teller Connect will open -->
    <button id="teller-connect">Connect to your bank</button>

    <!-- Body of your page... -->

    <!-- Part 1. Include the client library -->
    <script src="https://cdn.teller.io/connect/connect.js"></script>
    <script>
      // Part 2. Initialize & configure the client library
      document.addEventListener("DOMContentLoaded", function() {
        var tellerConnect = TellerConnect.setup({
          applicationId: "app_p1klv808m9jtuv6a7c000",
          onInit: function() {
            console.log("Teller Connect has initialized");
          },
          // Part 3. Handle a successful enrollment's accessToken
          onSuccess: function(enrollment) {
            console.log("User enrolled successfully", enrollment.accessToken);
          },
          onExit: function() {
            console.log("User closed Teller Connect");
          }
        });

        // Part 4. Hook user actions to start Teller Connect
        var el = document.getElementById("teller-connect");
        el.addEventListener("click", function() {
          tellerConnect.open();
        });
      });
    </script>
  </body>
</html>
