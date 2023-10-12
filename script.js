function newAlert(){
    return new Promise((resolve, reject) => {
        resolve("Hello, Welcome!")
    })
}

let enterbtn = document.getElementById("btn");

enterbtn.addEventListener('click',() =>{
    newAlert()
        .then((msg) =>alert(`${msg}`))
        .catch(msg => alert("ERROR"))
})