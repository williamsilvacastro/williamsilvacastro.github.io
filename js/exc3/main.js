import masks from "./modules/masks.js";
import validation from "./modules/validation.js";

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js
  
    $input.addEventListener('input', e => {
      e.target.value = masks[field](e.target.value)
    }, false)
    $input.addEventListener('blur', e => {
      validation[field](e);
    }, false)
  })

function Cadastrar(){
  var inputsComErro = document.querySelectorAll('.errorInput');
  if(inputsComErro.length>0){
    alert("Corrija os campos antes de prosseguir!")
  }else{
    var bool = true;
    document.querySelectorAll('input').forEach($input => {
      if($input.value=='')
        bool = true;
    })
    if(bool){
      alert("Preencha os campos antes de prosseguir!")
    }else{
      alert("Usuário Cadastrado com sucesso!")
    }
  }
}