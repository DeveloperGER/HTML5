

/* function def_act(dias,horas) {
	if (dias < 1) {
		return "desactivo";
	}
	else if (dias >= 1 && dias < 4) {
		
		if (horas > 4) {
			return "activo constante"	
		}
		else if (horas <= 4 && horas > 1) {
			return "activo normal"		
		}
		else if (horas <= 1) {
			return "activo poco constante"
		}
		
	}
	else if (dias >= 4 && dias <= 7) {

		if (horas > 4) {
			return " MUY activo constante"	
		}
		else if (horas <=4 && horas > 1) {
			return "MUY activo normal"		
		}
		else if (horas <=1) {
			return "MUY activo poco constante"
		}

	} else {
		return "imposible"
	}

}

actividad = def_act(4,6);
document.write(actividad);



/*function edad(edad) {
	if(edad == 3) {
		return "Bebe";	
	} 
	else if (edad > 3 && edad <= 7) {
		return "Niño";
	} 
	else if (edad > 7 && edad <= 12) {
		return "Niño Grande"
	}
	else if (edad > 12 && edad <= 15) {
		return "Adolecente menor"
	}
	else if (edad > 15 && edad <= 17) {
		return "Adolecente mayor"
	}
	else if (edad > 18 && edad <= 21) {
		return "mayor de Edad"
	}
	else if (edad > 21 && edad <= 40) {
		return "Adulto"
	}
	else if (edad > 40 && edad <= 60) {
		return "Adulto mayor"
	}
	else {
		return "Señor mayor"
	}
}

miedad = edad(61);
document.write(miedad);

/*function bienvenido(nombre) {
	document.write("Bienvenido" + nombre + "!" )
}

bienvenido("German")

/*function resta(a,b){	
return( a -	b);

}

resultado = resta(40,5);

document.write(resultado);


/*usuario = "German79222" ;
tamaño = usuario.length;
if (tamaño > 10) {
	alert("Su Nombre de usuario no puede tener mas de 10 caracteres")
} else {
	alert("Todo correcto")
}



---ejemplo de condiciones JS--
num = 1;

if ( num == 2) {
	alert("ok")
}
else if(num == 44) {
	alert("segunda condicion ok")	
}
else if(num == 55) {
	alert("tercera condicion ok")	
}
else if(num == 66) {
	alert("cuarta condicion ok")	
}
else if(num == 77) {
	alert("quinta condicion ok")	
}
else if(num == 88) {
	alert("sexta condicion ok")	
}
else {
 alert("no se cumplio ninguna condicion")
}


/*

texto = "Hola, macuinola, denuncialo maquinola"
texto_real = texto.length;


for(a = 0; a < texto_real;  a++) {
	document.write("Numero actual:  "+ a + "<br>");
}



/*alert("Hola mundo");

variable1 = "ger";
alert(variable1);*/

/*numero1= 20;
numero2= 30;

resultado = numero1 + numero2;
alert(resultado);

primer_texto = "German";
primer_numero = 43;
primer_valor = true;

/*document.write( "<h1>Su Numero es : " +primer_numero+ "<br />"+ primer_texto + "<br />" + primer_valor);


array_inicial = Array(4,10,40);
rigoberto = 6

numero_1 = 1;
numero_2 = 50;
numero_3 = 130;/*
array = Array(numero_1,numero_2,numero_3,array_inicial);
array_num = Array(numero_1,array);
document.write(array[3][2]) /*

/*array asociativo */
/*
array_normal = Array("jorge","roberto","roroororr");

array = {
	"J" : "primer dato",
	"jorgito" : "segundo_dato",
};

document.write(array["jorgito"][0]);

first_input =  document.getElementById("num1").value;
document.write(first_input);*/

