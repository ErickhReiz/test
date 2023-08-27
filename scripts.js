function calculateTip(event) {
    event.preventDefault ();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if (bill == '' |  serviceQual == '0') {
        alert("Por favor preencha os valores.") 
        return;
    }

    if (numOfPeople == '' | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    
    document.getElementById('tip').innerHTML = total;
    document.getElementById('tipsResult').style.display = 'block'

    let totalPay = parseFloat(bill) + (parseFloat(total) * parseFloat(numOfPeople));

    document.getElementById('totalBill').innerHTML = totalPay;
    document.getElementById('billResult').style.display = 'block'

}

document.getElementById('tipsResult').style.display = "none"
document.getElementById('each').style.display = "none"
document.getElementById('billResult').style.display = "none"
document.getElementById('tipsForm').addEventListener('submit', calculateTip)

function login(event) {
    alert ("Olá! A seguir vamos solicitar alguns dados");

    let person = prompt("Por favor, digite seu nome:");
    let text;
    if (person == null || person == "") {
      alert ("usuário inválido.")
    };
    
    let agePesrson = prompt ("Olá " + person + " digite sua idade por favor");
    if (agePesrson < 18) {
        alert("Desculpe idade inválida.")
    } else if (agePesrson => 18) {
        let ageAgree = prompt ("Confirme sua idade:")
        if (ageAgree == agePesrson) {
            alert("Sucesso ao verificar seu usuário.\n" + "Nome: " + person + "\nIdade: " + agePesrson)
    
            document.getElementById('person').innerHTML = person;
            document.getElementById('agePerson').innerHTML = agePesrson;
            document.getElementById('person').style.display = "block"
            document.getElementById('agePerson').style.display = "block"

        } else {
            alert ("Não foi possível confirmar sua idade.")
        }

    } 
}

document.getElementById('person').style.display = "none"
document.getElementById('agePerson').style.display = "none"
document.getElementById('signIn').addEventListener('click', login)
document.getElementById('firtPeopleName')

function calculateAge(event) {
    event.preventDefault ();
    let NameUser1 = document.getElementById('FirstUserName').value;
    let ageUser1 = document.getElementById('FirstUserAge').value;
    let NameUser2 = document.getElementById('SecondUserName').value;
    let ageUser2 = document.getElementById('SecondUserAge').value;

    if (ageUser1, ageUser2  == '0' || ageUser1, ageUser2 == "") {
        alert("Idades inválidas..") 
        return;
    }

    if (NameUser1, NameUser2 == null || NameUser1, NameUser2 == "") {
        alert ("Usuários inválidos.")
        return
      } 
       else {

        let resultDiference = Math.abs(ageUser1 - ageUser2) 


        document.getElementById('ageResult').style.display = "flex"

        document.getElementById('resultName1').innerHTML = NameUser1;
        document.getElementById('resultAge1').innerHTML = ageUser1;
        document.getElementById('resultName2').innerHTML = NameUser2;
        document.getElementById('resultAge2').innerHTML = ageUser2;
        document.getElementById('diferenceAges').innerHTML = resultDiference;
      };  
}

document.getElementById('ageForm').addEventListener('submit', calculateAge)
document.getElementById('ageResult').style.display = "none"

function acelerationNAV(event) {
    event.preventDefault ();

    let pilotName = prompt("Digite seu nome para iniciar a viagem")

    let navVelocity = 0 

    let newNavVelocity = prompt("Digite a sua velocidade desejada em KM/h")

    let confirmNewVelocity = confirm("Velocidade desejada " + newNavVelocity)

    let statusNav = ""

    if (confirmNewVelocity) {
        navVelocity = newNavVelocity 
    }

    if (navVelocity <= 0) {
        alert("A nav está parada. Considere partir e aumentar a velocidade")
    } else if (navVelocity => 1) {
        document.getElementById('startNav').innerHTML = ("Ajustar velocidade")
        if (pilotName == null || pilotName == "") {
            alert ("Usuários inválidos.")
        } else {
            document.getElementById('userPilot').innerHTML = pilotName
        }
        if ( navVelocity < 40 ) {
            alert( navVelocity + "KM/h Você está devagar. Podemos aumentar mais")
            statusNav = "Status: Você está devagar. Podemos aumentar mais"
        } else {
            if ( navVelocity < 80 ) {
                alert ( navVelocity + "KM/h Parece uma boa velocidade")
                statusNav = "Status: Parece uma boa velocidade"
            } else {
                if ( navVelocity < 100) {
                  alert (navVelocity + "KM/h Velocidade alta. Considere diminuir." ) 
                  statusNav = "Status: Velocidade alta. Considere diminuir."
                } else {
                    if (navVelocity > 100 ) {
                        alert (navVelocity + "KM/h Velocidade perigosa. Controle automático forçado.")
                        statusNav = "Status: Velocidade perigosa. Controle automático forçado."
                    }
                }
            } 
        }

        document.getElementById('navVelocity').innerHTML = navVelocity + ("km/h")
        document.getElementById('infoVelocity').innerHTML = statusNav
        document.getElementById('infoVelocity').style.display = "block"
        document.getElementById('navResult').style.display = "block"
     } 
}

document.getElementById('infoVelocity').style.display = "none"
document.getElementById('navResult').style.display = "none"
document.getElementById('startNav').addEventListener('click', acelerationNAV)

function RecruteRec(event) {
    event.preventDefault();
    
    let firstName = prompt("Digite o nome do novo Recruta:");
    let lastName = prompt("Agora digite o sobrenome:");

    let digitPattern = /\d/;
    
    if (digitPattern.test(firstName) || digitPattern.test(lastName) || lastName === "" || firstName === "") {
        alert("Nome/sobrenome inválido, tente novamente.");
    } else {
        alert("Nome/sobrenome válido.");
    }

    console.log(firtName);
    console.log(lastName);

    let campoDeEstudo = prompt ("Digite o campo de estudo do recruta:");
    let birth = prompt ("Digite o ano de nascimento do recruta");
    let date = 2023;
    let name = firtName + " " + lastName;
    let age = date - birth;

    if (birth == " " || birth < 1995 ) {
        alert ("Idade inválida");
    } else  if (firtName, lastName == " " || firtName, lastName == undefined || firtName, lastName == null){
        alert ("Nome inválido.")
    } else if (confirm("Confime os dados a seguir:\n" + "Nome: " + name + "\nCampo de estudo: " + campoDeEstudo  + "\nAno de nascimento: " + birth )) {
        alert ("Sucesso ao cadastrar novo recruta.\nNome: " + name + "\nCampo de estudo " + campoDeEstudo + "\nIdade: " + age);
    } else {
        alert ("Algo deu errado ente novamente.")
    }

}

document.getElementById('calcRec').addEventListener('click', RecruteRec)

function testVelocity(event) {
    event.preventDefault();
    
    let user1 = prompt ("Digite seu nome:");
    let user2 = prompt ("Digite o nome do seu oponente:");
    let firtVelocyCar = parseFloat(prompt("Digite a velocidade do: " + user1));
    let secondVelocyCar = parseFloat(prompt("Digite a velocidade do: " + user2));


    if (firtVelocyCar < secondVelocyCar){
        alert (user1 + " ta amassando!!")
    } else if (firtVelocyCar > secondVelocyCar) {
        alert (user2 + " ta amassando!!")
    } else if (firtVelocyCar == secondVelocyCar) {
        alert ("Ta acirrado, Mesma velocidade.")
    }

    console.log (user1);
    console.log (user2);
    console.log (firtVelocyCar);
    console.log (secondVelocyCar);


}

document.getElementById('calcVelocity').addEventListener('click', testVelocity)

function damage(event) {
    event.preventDefault();
    
    let user1 = prompt ("Digite seu nome:");
    let user2 = prompt ("Digite o nome do seu oponente:");

    if (user1 == "") {
        alert ( user1 + " usuário inválido")
    } else if (user2 == "") {
        alert ( user2 + " usuário inválido")   
    } else {
        alert("Agora vamos definir as caracteristicas do " + user1)

        let damage = parseFloat(prompt("Digite qual o poder de ataque do " + user1));

        alert("você atribuiu " + damage + " de dano para o " + user1)
        alert("Agora vamos definir as caracteristicas do " + user2)
        
        let defence = parseFloat(prompt("Digite qual a defesa do " + user2));

        alert("você atribuiu " + defence + " de defesa para o " + user2)

        let shild = prompt("Digite se o " + user2 + " tem direito a armadura" + "\n(Apenas 1 armadura disponível.)");

        if (shild == "" || shild == null || shild == undefined ){
            alert("O " + user2 + " está sem escudo.")
            shild = 0
        } else {
            alert("O " + user2 + " está com escudo, dano sera redusido")
            shild = 1
        } 

        if ((damage > defence) && shild == 1) {
            alert ("O ataque do " + user1 + " no " + user2 + " foi de " + ((damage / 2) - defence));
        }else if (damage <= defence) {
            alert ("O ataque do " + user1 + " no " + user2 + " foi de 0");
        }else {
            alert ("O ataque do " + user1 + " no " + user2 + " foi de " + (damage - defence));
        }
    }
}

document.getElementById('calcDamege').addEventListener('click', damage)

function Converter(event) {
    event.preventDefault();

    let measurement = parseFloat(prompt("Digite sua distância em metros."));
    let converterValue= prompt("Agora digite a sua conversão desejada:\n" +
    + "1 - milímetro mm\n"
    + "2 - centímetro cm\n"
    + "3 - decímetro dm\n"
    + "4 - decâmetro da)\n"
    + "5 - hectômetro hm\n"
    + "6 - quilômetro km"); 

    let convertResult = ""

    switch (converterValue) {
        case "1": 
        convertResult = measurement * 1000
        alert ("A Distância de " + convertResult + " foi convertida para milímetro")
        break;
        case "2": 
        convertResult = measurement * 100
        alert ("A Distância de " + convertResult + " foi convertida para centímetro")
        break;
        case "3": 
        convertResult = measurement * 10
        alert ("A Distância de " + convertResult + " foi convertida para decímetro")
        break;
        case "4": 
        convertResult = measurement / 10
        alert ("A Distância de " + convertResult + " foi convertida para decâmetro")
        break;
        case "5": 
        convertResult = measurement / 100
        alert ("A Distância de " + convertResult + " foi convertida para hectômetro")
        break;
        case "6": 
        convertResult = measurement / 1000
        alert ("A Distância de " + convertResult + " foi convertida para quilômetro")
        break;
        default: 
        alert("Valor inválido.")
    }

} 

document.getElementById('measurementConverter').addEventListener('click', Converter)

function cityTourist(event) {
    event.preventDefault ();

    const nameTourist = prompt ("Digite seu nome:");
    let response = (confirm ("Você já viajou para alguma cidade?"));
    let citys = "";

    while (response === true) {
        let city = prompt("Qual cidade?");
        response = (confirm("Você já viajou para alguma outra cidade?"))

        citys += city + ", ";
        console.log(city);
        console.log(citys);
        console.log(response)
    }

    document.getElementById('resultCity').style.display = 'block';

    alert ("Nome: " + nameTourist + "\nCidades: " + citys);
}

document.getElementById('tripTourist').addEventListener('click', cityTourist);

function menu(envet) {
    envet.preventDefault ();

    let options;
    do {
      options = parseFloat(prompt("Ecolha uma das opções:\n" + 
        "\n(1) Opção 1" +
        "\n(2) Opção 2" +
        "\n(3) Opção 3" +
        "\n(4) Opção 4" +
        "\n(5) Encerrar"))
        switch (options) {
            case 1:
            alert ("opção 1")
            break;
            case 2:
            alert ("opção 2")
            break;
            case 3:
            alert ("opção 3")
            break;
            case 4:
            alert ("opção 4")
            break;
            case 6:
            alert ("opção inválida.")
        }
    }while(options !== 5);
    alert ("Encerrando...")
}

document.getElementById('menuInt').addEventListener('click', menu);

function moneyFinance(event) {
    event.preventDefault ();

    let baseMoney = parseFloat(prompt("Digite a quantidade de dinheiro inicial:"));
    let options;
    do {
      options = parseFloat(prompt("Ecolha uma das opções:\n" + 
        "\n(1) Sacar" +
        "\n(2) Depositar" +
        "\n(3) Transferir" +
        "\n(4) Esc"))
        switch (options) {
            case 1:
            let withdraw = parseFloat(prompt("Seu saldo atualmente é de R$" + baseMoney + " quanto deseja sacar?" ))
            alert ("Estamos efetuando o saque de R$" + withdraw + " para você...");
            if (withdraw > baseMoney) {
                alert ("Seu saldo é insuficiente para efetuar o saque")
            } else {
                baseMoney -= withdraw
                alert ("Sucesso ao efetuar o saque!\n Saldo atual é de R$" + baseMoney)
            }
            break;
            case 2:

            let deposit = parseFloat(prompt("Seu saldo atualmente é de R$" + baseMoney + " quanto deseja depositar?" ))
            alert ("Estamos efetuando o depósito  de R$" + deposit + " para você...")
            if (deposit < 0) {
                alert ("Não é possível efetuar o depósito desse valor, valor mínimo é R$ 1,00")
            } else {
                baseMoney += deposit
                alert ("Sucesso ao efetuar o depósito!\n Saldo atual é de R$" + baseMoney)
            }
            break;

            case 3:
            let transfer = parseFloat(prompt ("Seu saldo atualmente é de R$" + baseMoney + " quanto deseja transferir?"))
            alert ("Estamos efetuando a tranferência de R$" + transfer + " para você...");
            if (transfer > baseMoney) {
                alert ("Seu saldo é insuficiente para efetuar o saque")
            } else {
                let nameAccont = prompt("Digite a conta/nome que vamos transferir seu dinheiro:")
                baseMoney -= transfer
                alert ("Sucesso ao efetuar a transferência!\n " + nameAccont + " foi recebeu sua tranferência.\nSaldo atual é de R$" + baseMoney)
            }
            break;
        }
    }while(options !== 4);
    alert ("Fechando...")
}

document.getElementById('invest').addEventListener('click', moneyFinance);