function conversor(){
    
	var string = document.forms[0].elements[0].value;
    var letra = document.forms[0].elements[1].value;
    var cantidadV = string.match(/[aeiou]/gi).length;
    var cantidadC = string.match(/[qwrtypsdfghjklñzxcvbnm]/gi).length;
    var vecesLetra=0;
    var nuevaString="";
    for(i=0; i<=string.length; i++){
        if(string.charAt(i)==letra){
            vecesLetra++;
        }
    }
    for(i=0; i<=string.length; i++){
        if((i%2)==0){
            nuevaString+=string.charAt(i).toUpperCase();
        }
        else{
            nuevaString+=string.charAt(i).toLowerCase();
        }
        
    }
    document.forms[0].elements[3].value=cantidadV;
    document.forms[0].elements[4].value=cantidadC;
    document.forms[0].elements[6].value=vecesLetra;
    document.forms[0].elements[5].value=nuevaString;
}