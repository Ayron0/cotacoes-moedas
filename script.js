async function getvalues() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL');
        const data = await response.json();

        const usdRate = data.USDBRL;
        const gbpRate = data.GBPBRL;
        const eurRate = data.EURBRL;
        const arsRate = data.ARSBRL;
        const jpyRate = data.JPYBRL;

        const usdChangeElement = document.getElementById('usd-change');
        const gbpChangeElement = document.getElementById('gbp-change');
        const eurChangeElement = document.getElementById('eur-change');
        const arsChangeElement = document.getElementById('ars-change');
        const jpyChangeElement = document.getElementById('jpy-change');

        document.getElementById('usd-price').textContent = parseFloat(usdRate.bid).toFixed(2);
        document.getElementById('gbp-price').textContent = parseFloat(gbpRate.bid).toFixed(2);
        document.getElementById('eur-price').textContent = parseFloat(eurRate.bid).toFixed(2);
        document.getElementById('ars-price').textContent = parseFloat(arsRate.bid).toFixed(2);
        document.getElementById('jpy-price').textContent = parseFloat(jpyRate.bid).toFixed(2);

        usdChangeElement.textContent = `${parseFloat(usdRate.pctChange).toFixed(2)}% ${usdRate.pctChange > 0 ? '↑' : '↓'}`;
        gbpChangeElement.textContent = `${parseFloat(gbpRate.pctChange).toFixed(2)}% ${gbpRate.pctChange > 0 ? '↑' : '↓'}`;
        eurChangeElement.textContent = `${parseFloat(eurRate.pctChange).toFixed(2)}% ${eurRate.pctChange > 0 ? '↑' : '↓'}`;
        arsChangeElement.textContent = `${parseFloat(arsRate.pctChange).toFixed(2)}% ${arsRate.pctChange > 0 ? '↑' : '↓'}`;
        jpyChangeElement.textContent = `${parseFloat(jpyRate.pctChange).toFixed(2)}% ${jpyRate.pctChange > 0 ? '↑' : '↓'}`;

        if(usdRate.pctChange < 0){
            usdChangeElement.style.color = 'red'
        }              

        if(gbpRate.pctChange < 0) {
            gbpChangeElement.style.color = 'red'
        }

        if (eurRate.pctChange < 0) eurChangeElement.style.color = 'red';
        if (arsRate.pctChange < 0) arsChangeElement.style.color = 'red';
        if (jpyRate.pctChange < 0) jpyChangeElement.style.color = 'red';

    } catch (error) {
                
    }
}

getvalues()