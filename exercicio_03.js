class MeuErro extends Error {
  constructor(message) {
    super(message);
    this.name = "Erro encontrado";
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try{
      return this.atributos();
    } catch(error){
      console.log(error);
    }
  } 
  atributos() {
    if (this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return{
        nome: this.estudante,
        idade: this.cosplay,
        turma: this.nota_cosplay
    };
   } else{
    throw new MeuErro("Todos os espaços deve ser preenchidos!");
  }
}
}

const aluno = new NerdIF("", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos);

//console.log(atributos.estudante); 
//console.log(atributos.cosplay);   
//console.log(atributos.nota_cosplay);

