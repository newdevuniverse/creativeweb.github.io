const image = document.getElementById('memes');
const btn = document.getElementById('button');
let i=2;

btn.addEventListener("click", function()
{
getmemes();
});

function getmemes()
{
    
    const ajax = new XMLHttpRequest();
    const url = 'https://api.imgflip.com/get_memes';
    ajax.open("GET" , url ,true);
    ajax.onreadystatechange = function()
    {
        if(this.status === 200 && this.readyState == 4)
        {
            console.log(this.responseText);
            let pik = JSON.parse(this.responseText);
            image.innerHTML= ` <img src=${pik.data.memes[i].url} alt="error!!!!!!"  style="width:250px; height:200px; border-radius:20px "/>`;
           
        }
        else
        {
            image.textContent = "Error";
        }
    }
   
   ajax.send(); 
   i++;
}
