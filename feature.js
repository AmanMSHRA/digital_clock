    const color1 = document.querySelector('.color1');
    const color2 = document.querySelector('.color2');
    const color3 = document.querySelector('.color3');
    const color4 = document.querySelector('.color4');
    const color5 = document.querySelector('.color5');
    const clock = document.querySelector('.clock-main');

    const gradient_array = [
        "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
        "linear-gradient(to bottom, #96fbc4 0%, #f9f586 100%)",
        "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",
        "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)",
        "linear-gradient(to top, #0fd850 0%, #f9f047 100%)"   
    ]
    const Back_gradient_array = [
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)",
        "linear-gradient(to top, #e14fad 0%, #f9d423 100%)",
        "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
        "linear-gradient(180deg, #2af598 0%, #009efd 100%)"   
    ]
    color1.addEventListener('click', () =>{
        var data = color1.getAttribute("data-color");
       
        clock.style.backgroundImage = gradient_array[data];
        document.body.style.backgroundImage = Back_gradient_array[data];
    })
    color2.addEventListener('click', () =>{
        var data = color2.getAttribute("data-color");
       
        clock.style.backgroundImage = gradient_array[data];
        document.body.style.backgroundImage = Back_gradient_array[data];
    })
    color3.addEventListener('click', () =>{
        var data = color3.getAttribute("data-color");
       
        clock.style.backgroundImage = gradient_array[data];
        document.body.style.backgroundImage = Back_gradient_array[data];
    })
    color4.addEventListener('click', () =>{
        var data = color4.getAttribute("data-color");
       
        clock.style.backgroundImage = gradient_array[data];
        document.body.style.backgroundImage = Back_gradient_array[data];
    })
    color5.addEventListener('click', () =>{
        var data = color5.getAttribute("data-color");
        
        clock.style.backgroundImage = gradient_array[data];
        document.body.style.backgroundImage = Back_gradient_array[data];
    })

function get_realTime(){
    const day = new Date();
    let h =  day.getHours();
    let m =  day.getMinutes();
    let s =  day.getSeconds();
    let session = "AM";
    
    if( h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
    }

    if( (day.getMinutes() < 10))
    {
        m = '0' + day.getMinutes();
    }
    
    if( (day.getSeconds() < 10))
    {
        s = '0' + day.getSeconds();
    }

    if(h < 24 && h >= 12)
    {
        session = "PM";
    }


    document.getElementById("hr").innerText = h + " "+ ":";
    document.getElementById("min").innerText = m + ' ' +  ":";
    document.getElementById("sec").innerText = s;
    document.getElementById("session").innerText = session;
}

get_realTime();
setInterval(get_realTime , 1000);