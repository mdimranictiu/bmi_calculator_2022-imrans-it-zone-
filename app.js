let btn=document.getElementById('btn');
let user_name=document.getElementById('uname');
let user_age=document.getElementById('uage');
let user_height=document.getElementById('height');
let user_weight=document.getElementById('weight');
let h_unit=document.getElementById('h_unit');
let w_unit=document.getElementById('w_unit');
btn.addEventListener('click',function(e){
    e.preventDefault();
    var cal=get_weight()/Math.pow(get_heigt(),2);
    document.getElementById("bmi").innerHTML=cal;
   document.getElementById('name').innerHTML=user_name.value;
   document.getElementById('age').innerHTML=user_age.value +" Years Old";
    document.getElementById('display').style.display="block";
    document.getElementById('uname').value="";
    document.getElementById('uage').value="";
    document.getElementById('height').value="";
    document.getElementById('weight').value="";
   
    
})
function get_weight(){
    let weight_unit_val=w_unit.value.trim();
    let user_weight_val=parseFloat(user_weight.value.trim());
    if(weight_unit_val=="kg"){
        return user_weight_val;
    }
    else if (weight_unit_val=="pound"){
        return user_weight_val/2.20462;
    }
}
function get_heigt(){
    let height_unit_val=h_unit.value.trim();
    let user_height_val=parseFloat(user_height.value.trim());
    if(height_unit_val=="meter"){
        return user_height_val;
    }
    else if(height_unit_val=="inch"){
        return user_height_val/39.3701;
        
    }
    else{
        return user_height_val/100;
    }
}


