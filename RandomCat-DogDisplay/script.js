/*FOR CAT*/
const cat_Btn=document.getElementById('cat_btn');
const cat_result=document.getElementById('cat_result');
cat_Btn.addEventListener('click',getRandomCat);
function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())      
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="Something went Wrong" />`       
		});
}

/*FOR COG*/
const dog_Btn=document.getElementById('dog_btn');
const dog_result=document.getElementById('dog_result');
dog_Btn.addEventListener('click',getRandomDog);
function getRandomDog() {
	fetch('https://dog.ceo/api/breeds/image/random')
		.then(res => res.json())  
		.then(data => {
			dog_result.innerHTML = `<img src=${data.message} alt="Something went Wrong" />`      
		});
}
