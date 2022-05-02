class Cliente{ //A classe é o molde para o que o objeto vai ter!
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    //#saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; //É uma convenção da comunidade, por não haver ainda algum comando de privacidade,        
                //que qualquer atributo com _ antes é um atributo privado.

    sacar(valor){//Sacar é um metodo, que iremos usar como molde para qualquer conta corrente
        if(this._saldo >= valor){ //O THIS é usado para acessar qualquer conta corrente, ou seja, o metodo 
            this._saldo -= valor; //fica usavel para ESSA conta corrente que queremos sacar. 
            return valor; //Retorna o valor sacado para a pessoa que pediu esse metodo, para que possa
                          //pagar alguma coisa ou transferir esses dinheiro.
        }
    }

    depositar(valor){  //Metodo depositar adiciona dinheiro ao saldo
        if(valor <= 0){ //Early Return = a condição só sera executada se todos os parametros foram aceitos,
            return;     //caso isso não aconteca em alguma fase, a operação retorna para o inico e nada é 
                        //alterado. Esse tipo de return é usado em quando se tem muitas condições!
        }
        this._saldo += valor;
    }
}

//O cliente1 é uma instancia da classe Cliente, ele é o objeto que iremos prencher.
const cliente1 = new Cliente();
const cliente2 = new Cliente();

//Aqui temos os dados de cada Objeto, só prenchemos os dados de acordo com o molde da Classe Cliente.
cliente1.nome = "Rafael";
cliente1.cpf = 00460507023;
cliente1.rg = 12094203482;

cliente2.nome = "Roberta";
cliente2.cpf = 00460563023;

const contaCorrenteRafael = new ContaCorrente();
const contaCorrenteRoberta = new ContaCorrente();

contaCorrenteRafael.agencia = 1001;

contaCorrenteRoberta.agencia = 1001;

//Assim usamos os metodos, o autocomplete aparece para botar o metodos e o valor que deseja sacar.
contaCorrenteRafael.depositar(200);
contaCorrenteRafael.depositar(-1); //Esse deposito não sera processado pois o seu valor é menor que zero.

const valorSacado = contaCorrenteRafael.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRafael);
// console.log(cliente1,"\n",cliente2);
