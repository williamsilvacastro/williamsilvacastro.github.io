const validation = {
    name(event){
        let elemento =event.target;
        let value = event.target.value
        console.log(value)
        for (let letra of value){
            if (!isNaN(value)){
                alert("Não digite números no nome");
                errorInput(elemento)
                return;
            }
            let letraspermitidas="ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ";
            let ok=false;
            for (let letra2 of letraspermitidas ){
                if (letra==letra2){
                    ok=true;
                }
             }
             if (!ok){
                alert("Não digite caracteres que não sejam letras ou espaços");
                errorInput(elemento)        
                return; 
             }
        }
        
    },
    cpf(event){
        var elemento =event.target;
        var strCPF = event.target.value.replaceAll('.',"").replaceAll('-',"")
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000"){
            errorInput(elemento);
            alert("CPF inválido");
        }

        for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) {
            errorInput(elemento);
            alert("CPF inválido");
        };

        Soma = 0;
        for (var i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) {
            errorInput(elemento);
            alert("CPF inválido");
        };
    },
    date(event){
        var elemento =event.target;
        var value = event.target.value
        var data_array = value.split("/")
        var data = "";
        if(data_array[0].length != 4){
            data = data_array[1]+"-"+data_array[0]+"-"+data_array[2]; // remonto a data no formato yyyy/MM/dd
        }
        var hoje = new Date();
        var nasc = new Date(data);
        var idade = hoje.getFullYear() - nasc.getFullYear();
        var m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

        if (idade < 18) {
            alert("Pessoas menores de 18 não podem se cadastrar.");
            errorInput(elemento);
        }else if (idade >= 18 && idade <= 100) {
            alert("Maior de 18, pode se cadastrar.");
        }else{
            alert("Maior de 100 anos, não pode se cadastrar.");
            errorInput(elemento);
        }
    },
    email(event){
        var elemento =event.target;
        var value = event.target.value
        var re = /\S+@\S+\.\S+/;
        if(!re.test(value)){
            errorInput(elemento);
            alert("Email inválido");
        }
    },
    phone(event){
        var elemento =event.target;
        var value = event.target.value
        if(value!="(00) 00000-0000"){
            errorInput(elemento);
            alert("Telefone inválido");
        }
        
    },
    cep(event){
        var elemento =event.target;
        var value = event.target.value
        var re = new RegExp('[0-9]{5}-[0-9]{3}')
        if(!(re.test(value)&& value !="00000-00")){
            errorInput(elemento);
            alert("CEP inválido");
        }
    }
}
function errorInput(elemento){
    if (elemento.classList) elemento.classList.add("errorInput");
    else elemento.className += " errorInput";
}

export default validation;