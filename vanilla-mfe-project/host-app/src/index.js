console.log("Host Application Booting Up...");

    // We dynamically import the module from the network
    import("remoteCart/Cart")
      .then((module) => {
        // Once downloaded, we extract the function and pass it our DOM ID
        const renderCart = module.renderCart;
        renderCart("remote-cart-container");
      })
      .catch((error) => {
        console.error("Failed to load the remote cart:", error);
        document.getElementById("remote-cart-container").innerHTML = 
            "<p style='color:red;'>Error loading cart from network.</p>";
      });