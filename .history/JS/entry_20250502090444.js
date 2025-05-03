// Utility function to get currency symbol
function getCurrencySymbol(code) {
    const symbols = {
      USD: "$", NGN: "₦", GBP: "£", EUR: "€", INR: "₹",
      JPY: "¥", CAD: "C$", AUD: "A$", ZAR: "R", GHS: "₵"
    };
    return symbols[code] || code + " ";
  }
  
  // Update display with formatted currency
  function updatePriceText(text) {
    const priceSpan = document.getElementById("nairaPrice");
    priceSpan.innerHTML = `<strong>(${text})</strong>`;
  }
  
  // Show animated loading while fetching
  function showLoadingDots() {
    const priceSpan = document.getElementById("nairaPrice");
    priceSpan.innerHTML = `
      <span class="dots-loader">
        (loading<span class="dots"><span>.</span><span>.</span><span>.</span></span>)
      </span>`;
  }
  
  showLoadingDots(); // Trigger loading first
  
  // Fetch IP & currency info
  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      const currencyCode = data.currency || "USD";
  
      return fetch("https://open.er-api.com/v6/latest/USD")
        .then(res => res.json())
        .then(rateData => {
          const rate = rateData.rates[currencyCode] || 1;
          const localAmount = (20 * rate).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
          const symbol = getCurrencySymbol(currencyCode);
          updatePriceText(`${symbol}${localAmount}`);
        });
    })
    .catch(err => {
      console.error("Currency fetch error:", err);
      updatePriceText("$20");
    });
  