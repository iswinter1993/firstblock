import devToken from '../../public/DevToken.json';
export const getABI = async () => {
  return devToken;
};
///api/v3/ticker/price
export const getprice = async () => {
    let a = `{
        bundle(id: "1" ) {
          ethPrice
        }
       }`
      console.log(a)
      try {
        const keepConnect = new WebSocket('wss://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2')
        keepConnect.onopen = (e) => {
            console.log('connect open...')
            keepConnect.send(JSON.stringify({query:a}))
        }
        keepConnect.onmessage = (data) => {
            console.log(data)
        }
        keepConnect.onclose = (e) => {
            console.log('connect closed')
            console.log(e)
        }
        const data = await fetch('https://api.binance.com/api/v3/ticker/bookTicker?symbol=LTCBTC',)
        console.log(data)
      } catch (error) {
          console.log(error)
      }
    
}