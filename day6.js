function fetchData(){
    console.log("fetch data called")
    let data = null
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data){
        console.log("promise success")
        return data.json();
    })
    .then(function(data){
        console.log("final data [0].username", data[0].username);
        let para = document.getElementById('username')
        for(let i = 0; i < data.length; i++){
            let eachuser = document.createElement('h6');
            eachuser.innerHTML = " Welcome " + data[i].username.toUpperCase()

            para.appendChild(eachuser)
        }
        para.style.color = "blue"
        para.style.fontSize = "25px"

    })
    .catch(function(err){
        console.log("Promise Failed", err);        
    })
}
// timebomb implementation
    let timerInSeconds = 10;  //seconds
    let Interval; 
    
    
    function updateTimer(){
        if(timerInSeconds < 0){
            clearInterval(Interval); //stopTheTimer
            alert('BOOM!!!')
        }
            else{
        const minutes = Math.floor(timerInSeconds / 60);
        const seconds = timerInSeconds % 60;

        const formattedTime = (minutes + ":" + seconds)
        document.getElementById('timebomb').innerHTML = formattedTime;
        timerInSeconds = timerInSeconds -1;
       
}
    }
Interval = setInterval(updateTimer, 1000) //call every second. (1000ms)