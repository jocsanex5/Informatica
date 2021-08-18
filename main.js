(function(){
    
    //By Jx5
    
    const load = () =>{
        
        let loader = document.getElementById('loader');

        let cont=0, time = setInterval(()=>{ cont++;

            if(cont==1){

                clearInterval(time);
                loader.style.display = 'none';
            }

        }, 3000);
    }
    
    load();
    
}())