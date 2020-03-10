     
//Mammafunktionen

    //------Lägga till föremål---//
    function addItemToList(){
        const item = document.getElementById('todo').value,
           list = document.getElementById('list'),
           li = document.createElement('li'),
           label = document.createElement('label'),
           select = document.createElement('input'),
           button = document.createElement('button'),
           textNode = document.createTextNode(item);

           
       
           //-----Markera föremål som färdiga.---//
           select.setAttribute("type","checkbox"); 
           select.setAttribute("class","box");
         
    
           let d = new Date();
           select.setAttribute("id", d);
           label.setAttribute("for", d);       
       
           writeFromScript();
           resetForm();
           itemLeft();
         
       
           function writeFromScript(){
               list.appendChild(li);
               li.appendChild(select);
               li.appendChild(label);
               li.appendChild(textNode);
               li.appendChild(button);   
           
               event.preventDefault();  
               
        
           }

           //KOMPLETTERING - rensar formuläret på text vid enter
           function resetForm(){
            document.getElementById('myForm').reset();   
           }

            //-----Ta bort föremål------- //      
            button.addEventListener("click", function(){       
                list.removeChild(li);
                li.removeChild(select);
                itemLeft();
            });

            //Se hur många ofärdiga föremål som återstår ("X items left")för tryck på selectknapparna
            select.addEventListener("click", function(){ 
                let items = document.querySelectorAll('input[type="checkbox"]:not(:checked).box').length;
                document.getElementById("left").innerHTML = items;
                itemLeft();
            });

      //Se hur många ofärdiga föremål som återstår ("X items left")för funktioner
    function itemLeft(){
        let items = document.querySelectorAll('input[type="checkbox"]:not(:checked).box').length;
        document.getElementById("left").innerHTML = items;
    }   
            
       
    }//Slut på mamma funktion

    //Se hur många ofärdiga föremål som återstår ("X items left")för funktioner
    function itemLeft(){
        let items = document.querySelectorAll('input[type="checkbox"]:not(:checked).box').length;
        document.getElementById("left").innerHTML = items;
    }   
    
    
    //------Markera alla föremål som färdiga/ofärdiga.--//
    function selectAll(source) {
        let checkboxes = document.getElementsByClassName('box');
        for(let i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
        }
        itemLeft();
    }

           
       
    function showAll(){
        let texts = document.querySelectorAll('li');
            for(let i = 0; i<texts.length; i++){ 
                let txt = texts[i];
                texts[i].style.display = "flex";
            }   
            itemLeft();    
    }
       
    function active(){
        let texts = document.querySelectorAll('li');
        let boxes = document.querySelectorAll('.box');
            
            for(let i = 0; i<boxes.length; i++){
                let box = boxes[i];
                let txt = texts[i];
                if(box.checked){
                texts[i].style.display = "none";  
                }else{
                texts[i].style.display = "flex";   
                }

            }

        }   
           
       
    function completed(){
        let texts = document.querySelectorAll('li');
        let boxes = document.querySelectorAll('.box');
            
            for(let i = 0; i<boxes.length; i++){
                let box = boxes[i];
                let txt = texts[i];
                if(box.checked){
                texts[i].style.display = "flex"; 
                }else{
                texts[i].style.display = "none";
                }
            }

        } 
           
        function removeCompleted(){
                let texts = document.querySelectorAll('li');
                let boxes = document.querySelectorAll('.box');
                
                for(let i = 0; i<boxes.length; i++){
                    let box = boxes[i];
                    let txt = texts[i];
                    if(box.checked){
                        box.parentNode.removeChild(box);
                        txt.parentNode.removeChild(txt);
                    }
                }
        }
    
           
       
           
       