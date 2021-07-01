(function(){
    
    //By Jx5
    
    const load = () =>{
        
        let loader = document.getElementById('loader');
        
        window.addEventListener('load', ()=>{
            
            loader.style.display = 'none';
        });
    }
    
    load();
    
}())