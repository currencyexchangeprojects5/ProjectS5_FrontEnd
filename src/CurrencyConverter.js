import React, { useState } from "react"; 
import axios from "axios"; 
 
function CurrencyConverter() { 
  const [fromCurrency, setFromCurrency] = useState("USD"); 
  const [toCurrency, setToCurrency] = useState("EUR"); 
  const [amount, setAmount] = useState(1); 
  const [convertedAmount, setConvertedAmount] = useState(null); 
 
  const handleExchangeRate = async () => { 
    const exchangeRate = await getExchangeRateFromBackend(); 
    if (exchangeRate !== null) { 
      console.log("Received exchange rate:", exchangeRate); 
      // You can use the exchange rate here, e.g., update state, perform calculations, etc. 
    } else { 
      console.log("Failed to fetch exchange rate"); 
    } 
  }; 
 
  handleExchangeRate(); 
 
  return ( 
    <div> 
      <h1>Currency Converter</h1> 
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      /> 
      <select 
        value={fromCurrency} 
        onChange={(e) => setFromCurrency(e.target.value)} 
      > 
        <option value="USD">USD</option> 
        <option value="EUR">EUR</option> 
        <option value="AMD">AMD</option> 
        <option value="RUB">RUB</option> 
      </select> 
      <span> to </span> 
      <select 
        value={toCurrency} 
        onChange={(e) => setToCurrency(e.target.value)} 
      > 
        <option value="USD">USD</option> 
        <option value="EUR">EUR</option> 
        <option value="AMD">AMD</option> 
        <option value="RUB">RUB</option> 
      </select> 
      <button onClick={handleConvert}>Convert</button> 
 
      {convertedAmount !== null && ( 
        <div> 
          <h2>Converted Amount: {convertedAmount}</h2> 
        </div> 
      )} 
    </div> 
  ); 
} 
 
export default CurrencyConverter;