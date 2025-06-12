import { useState } from "react";

const CantadaAmoroza = ()=>{
    const[nome,setNome]=useState('');

    const cantadas = [
        "Você deve ser uma curva de alta velocidade, porque toda vez que eu te vejo, meu coração perde a aderência.",
        "Se eu fosse um foguete, você seria meu lançamento perfeito: tudo em você me faz querer sair da órbita.",
        "Seu sorriso tem mais impacto que um motor V12 em alta rotação.",
        "Você não é asa delta, mas me faz querer voar sem nem tirar os pés do chão.",
        "Entre um pit stop e outro, só penso em estacionar meu coração na sua garagem.",
        "Você é tipo NASA: sempre me faz olhar pro alto, sonhando com o impossível.",
        "Se beleza fosse downforce, você me manteria grudado no chão mesmo a 300 km/h.",
        "Meu coração tem mais turbulência que um caça em manobra, toda vez que você passa.",
        "Você deve ser piloto de Fórmula 1, porque pegou meu coração na primeira volta.",
        "Se eu fosse satélite, você seria minha órbita ideal — estável, perfeita e impossível de resistir.",
        "Você é nitro no meu motor: basta te ver pra tudo acelerar.",
        "Se eu fosse GPS, meu destino favorito seria o seu abraço.",
        "Seu olhar tem mais impacto que uma arrancada de 0 a 100 em 2 segundos.",
        "Você é tipo carro conceito: única, futurista e impossível de ignorar.",
        "Se amar você fosse corrida, eu largava na pole todos os dias.",
        "Com você por perto, até meu Wi-Fi melhora. Conexão perfeita!",
        "Você tem mais charme que um carro conversível em dia de sol.",
        "Meu coração é um drone: só sabe pairar quando você está por perto.",
        "Se beleza gerasse torque, você faria o mundo girar mais rápido.",
        "Você é mais rara que uma Ferrari na estrada de terra — e ainda mais preciosa.",
        "Se eu fosse IA, você seria meu prompt favorito.",
        "Você é meu algoritmo perfeito: cada curva sua me calcula mais apaixonado.",
        "Seu toque deve ter Bluetooth, porque conecta direto no meu coração.",
        "Você é tão fascinante que nem a gravidade consegue te segurar no chão.",
        "Com você, até uma pane vira aventura inesquecível.",
        "Você é como a primeira marcha: sem você, nada anda pra frente.",
        "Se eu fosse motor, seu sorriso seria minha ignição.",
        "A única aceleração que me interessa é o ritmo do meu coração quando você sorri.",
        "Você é meu combustível aditivado: rende mais e me faz ir além.",
        "Se eu fosse foguete, você seria minha missão tripulada: destino direto ao coração.",
        "Você é minha rota de fuga de qualquer dia ruim.",
        "Nem o Google Maps encontra um caminho que me leve pra mais perto de você.",
        "Com você, meu coração tem controle de tração — pra não derrapar de tanto amor.",
        "Você é mais raro que eclipse em dia de cometa: e eu tive a sorte de te ver.",
        "Seu jeito é como câmbio automático: me deixa sem esforço nenhum, só prazer.",
        "Se o amor fosse um circuito, você seria minha volta perfeita.",
        "Você é meu turbo emocional: só de olhar, me deixa nas nuvens.",
        "Se eu fosse um carro, você seria minha pintura metálica: só brilho e admiração.",
        "Você não é satélite, mas vive na minha órbita mental.",
        "Se o destino fosse um GPS, teria recalculado tudo pra nos cruzar mais cedo.",
        "Te olhar é como ver o velocímetro subir: arrepia e acelera tudo aqui dentro.",
        "Você é meu ponto de fuga na curva mais perigosa da vida.",
        "Se eu fosse um app de navegação, te marcaria como rota fixa do coração.",
        "Com você, até sem freio a vida parece segura.",
        "Você é a engrenagem que faltava no meu motor da vida.",
        "Se eu fosse carro de luxo, você seria meu acabamento em couro: puro requinte.",
        "Você é mais doce que a bandeirada de chegada depois de uma corrida longa.",
        "Com você, meu coração não precisa de cinto de segurança, só de coragem.",
        "Você não é radar, mas detecta todo excesso de amor em mim.",
        "Seu charme tem mais tração que carro 4x4 na lama.",
        "Você é como um Tesla no modo autônomo: me leva longe sem eu nem perceber.",
        "Se existisse um autódromo do amor, meu pit stop seria seu colo.",
        "Você não é motor, mas me faz vibrar por dentro.",
        "Seu cheiro é como o som de motor ronronando: impossível de ignorar.",
        "Você é como freio ABS: me impede de escorregar no gelo da solidão.",
        "Se eu fosse carro de rali, você seria o copiloto perfeito — guia e companhia.",
        "Você é mais envolvente que curva em Nürburgring.",
        "Nem foguete da SpaceX alcança o quanto você me faz sonhar alto.",
        "Você é tipo turbo lag: demora pra entender, mas quando vem, é irresistível.",
        "Se eu fosse drone de corrida, você seria a linha de chegada mais desejada.",
        "Você não é marcha, mas sempre muda tudo quando chega perto."
  ];


    //   const formCantada = nome + ' , ' + cantadas[0];
      const [frase,setFrase] = useState('✨ coloque o nome do seu crush e veja a magica acontecer✨');
      const numfrase = Math.floor(Math.random() *60);

      const verificaNome = () =>{
        if(nome ==''){
            setFrase('Digite o nome do seu chush!')
        }else{
        setFrase(nome + ',' + cantadas[numfrase])
      }
    }

    return(
        <div className="container">
            <h2 className="titulo">💘 Cantadas Amorosas Para o seu Crush</h2>
            <input type="text" placeholder="Nome do seu Crush" value={nome} onChange={(e)=> setNome(e.target.value)}/>
            <button onClick={() => verificaNome()} >Gerar cantadas </button>
            <p>{frase}</p>
        </div>
    )
}

export default CantadaAmoroza;