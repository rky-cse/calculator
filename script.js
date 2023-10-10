const gridItems = document.querySelectorAll('.grid-item');
let ans=0;
var tot=0
let sign =1;
let decimal =false;
let dc=0;

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('click', () => {
        // Toggle the "red" class on the clicked grid item
        gridItems[i].classList.toggle('red');
        //alert("ravi");
        // document.getElementById('input').append(i)
       console.log( document.getElementsByClassName('input'));
       
       if((i+1)%4!=0 && i<4){
        
        document.getElementById('input').append(i+1);
        if(decimal){
            dc++;
            ans+=(i+1)*Math.pow(0.1,dc);
        }
        else ans=(ans*10)+i+1;
        
       }
       else if((i+1)%4!=0 && i<8){
        
        document.getElementById('input').append(i);
        if(decimal){
            dc++;
            ans+=(i)*Math.pow(0.1,dc);
        }
        else
        ans=(ans*10)+i;
        
       }
       else if((i+1)%4!=0 && i<12){
        
        document.getElementById('input').append(i-1);
        if(decimal){
            dc++;
            ans+=(i-1)*Math.pow(0.1,dc);
        }
        else
        ans=(ans*10)+i-1;
       }
       if(i===12){
        document.getElementById('input').append(0);
        if(decimal){
            dc++;
            ans+=(0)*Math.pow(0.1,dc);
        }
        else
        ans=(ans*10)+0;

       }
       if(i===13){
        document.getElementById('input').append('.');
        decimal=true;
       }
       if(i===14){
        document.getElementById('input').append('+');
        tot+=(sign*ans);
        sign=1;
        ans=0;
        decimal=false;
        dc=0;

       }
       if(i===15){
        document.getElementById('input').append('-');
     
        
    tot+=(sign*ans);
    sign=-1;
    ans=0;
    decimal=false;
    dc=0;
       

       }

        
    });
   
   

}
console.log(tot);

document.getElementById('output').addEventListener("click",myf);
function myf(){
    document.getElementById('output').append(tot+=(sign*ans));
    console.log(tot);

}
