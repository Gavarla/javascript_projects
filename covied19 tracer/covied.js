let covieddata = []
const btn = document.getElementById('btn')
btn.addEventListener('click', addcountry)
function addcountry() {

    const inputcountry = document.getElementById('country').value
    alert(inputcountry)
    covieddata.forEach(element => {
        if(inputcountry===element.Country){
           // alert(element.TotalConfirmed)
            const displaydiv = document.getElementById("display") // { }
            displaydiv.innerText = element.TotalConfirmed
        }
           

        
    });

}

(function () {
    fetch('https://api.covid19api.com/summary').then(function (result) {
        result.json().then(function (res) {
            covieddata=res.Countries
        })
    })

})()