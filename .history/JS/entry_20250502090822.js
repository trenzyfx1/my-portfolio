// Function to get currency symbol from currency code
function getCurrencySymbol(code) {
    const symbols = {
        NGN: "₦", USD: "$", GBP: "£", EUR: "€", INR: "₹", CAD: "C$", JPY: "¥",
        AUD: "A$", CNY: "¥", BRL: "R$", ZAR: "R"
    };
    return symbols[code] || code + " ";
}

// Function to fetch user location and currency
function fetchUserCurrency() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const userCurrency = data.currency;
            convertDollarToLocal(userCurrency);
        })
        .catch(() => {
            document.getElementById("nairaPrice").textContent = "($20)";
        });
}

function convertDollarToLocal(currencyCode) {
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[currencyCode];
            if (rate) {
                const localAmount = (20 * rate).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                });
                const symbol = getCurrencySymbol(currencyCode);
                document.getElementById("nairaPrice").textContent = `(${symbol}${localAmount})`;
            } else {
                document.getElementById("nairaPrice").textContent = "($20)";
            }
        })
        .catch(() => {
            document.getElementById("nairaPrice").textContent = "($20)";
        });
}

// Call on page load
window.addEventListener("DOMContentLoaded", fetchUserCurrency);
