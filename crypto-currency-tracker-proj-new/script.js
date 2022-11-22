const form = document.querySelector('#searchForm');
const res =  document.querySelector('#tableResult');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ctype=form.elements.coinType.value;
    fetchPrice(ctype);
})
const fetchPrice=async(ctype)=>{
    const r= await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    console.log(r);
    const name=r.data.coin.name
    const price=r.data.coin.price;
    const volume=r.data.coin.volume;
    const change=r.data.coin.priceChange1d;
    const marketCap=r.data.coin.marketCap;

    res.innerHTML=`<tr style="background-color:blue; color:white; font-weight:600">
    <td> Property</td>
    <td> Value </td>
    </tr>
    <tr>
    <td> Name</td>
    <td> ${name} </td>
    </tr>
    <tr>
    <td> Price</td>
    <td> ${price} </td>
    </tr>
    <tr>
    <td> Volume</td>
    <td> ${volume} </td>
    </tr>
    <tr>
    <td> Change</td>
    <td> ${change} </td>
    </tr>
    <tr>
    <td> Market Cap</td>
    <td> ${marketCap} </td>
    </tr>`;

  
}