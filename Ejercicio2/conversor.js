function convertir(){

	var numero = parseInt(document.forms[0].elements[0].value);
    document.forms[0].elements[3].value=(numero.toString(2));
    document.forms[0].elements[1].value=(numero.toString(8));
    document.forms[0].elements[2].value=(numero.toString(16));
    
}