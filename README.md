# 💱 Wikimoeda – Cotação e Comparação de Moedas em Tempo Real

**Wikimoeda** é uma aplicação web interativa que permite aos usuários **consultar e comparar cotações de moedas em tempo real**, utilizando tecnologias básicas da web: **HTML**, **CSS** e **JavaScript**.

---

## 📌 Objetivo

Criar uma interface limpa, responsiva e dinâmica que permita:

- Visualizar os valores atualizados de diferentes moedas (como Dólar, Euro, Libra e outras);
- Comparar moedas entre si ou com o Real brasileiro (BRL);
- Selecionar moedas a partir de menus suspensos;
- Exibir os resultados das comparações em tempo real, sem recarregar a página;
- Integrar cotações de **criptomoedas** (como Bitcoin, Ethereum, ADA) por meio de APIs externas como:
  - [CoinMarketCap](https://coinmarketcap.com/api/)
  - [CoinGecko](https://www.coingecko.com/pt/api)

---

## 🖼️ Demonstração (interface atual)

- Interface de navegação com links como: `COTAÇÃO`, `WIKI`, `NOTÍCIAS`, `CRIPTOMOEDAS`;
- Tabela com cotação ao vivo das moedas:
  - Dólar Americano (USD)
  - Libra Esterlina (GBP)
- Exibição de variação em 24h com **ícones ↑↓** e **cores dinâmicas** (verde/vermelho).

---

## ⚙️ Tecnologias Utilizadas

- `HTML5` – Estrutura da página.
- `CSS3` – Estilização e responsividade.
- `JavaScript` – Manipulação de dados e da interface.
- `Fetch API` – Consumo de APIs externas.
- API utilizada no momento:  
  [`https://economia.awesomeapi.com.br/json/last/USD-BRL,GBP-BRL`](https://economia.awesomeapi.com.br/)

---

## 🧠 Como Funciona

### Exemplo do código JavaScript:

```javascript
const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,GBP-BRL');
const data = await response.json();
document.getElementById('usd-price').textContent = parseFloat(data.USDBRL.bid).toFixed(2);
