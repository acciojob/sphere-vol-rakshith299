function volume_sphere() {

    let form = document.getElementById("MyForm").addEventListener('submit', function(event){
        event.preventDefault();
    })

    

    const radius = document.getElementById("radius");
	const volume = document.getElementById("volume");

	let input = radius.value;

    console.log(input);

	let res = (4/3) * Math.PI * (input * input* input);

   let roundedres = res.toFixed(4);
	volume.value = roundedres;
  
} 




window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
