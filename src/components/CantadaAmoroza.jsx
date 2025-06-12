import { useState } from "react";

const CantadaAmoroza = ()=>{
    const[nome,setNome]=useState('');

    const cantadas = [
        "você deve ser uma curva de alta velocidade, porque toda vez que eu te vejo, meu coração perde a aderência.",
"se eu fosse um foguete, você seria meu lançamento perfeito: tudo em você me faz querer sair da órbita.",
"seu sorriso tem mais impacto que um motor V12 em alta rotação.",
"você não é asa delta, mas me faz querer voar sem nem tirar os pés do chão.",
"entre um pit stop e outro, só penso em estacionar meu coração na sua garagem.",
"você é tipo NASA: sempre me faz olhar pro alto, sonhando com o impossível.",
"se beleza fosse downforce, você me manteria grudado no chão mesmo a 300 km/h.",
"meu coração tem mais turbulência que um caça em manobra, toda vez que você passa.",
"você deve ser piloto de Fórmula 1, porque pegou meu coração na primeira volta.",
"se eu fosse satélite, você seria minha órbita ideal — estável, perfeita e impossível de resistir.",
"você é nitro no meu motor: basta te ver pra tudo acelerar.",
"se eu fosse GPS, meu destino favorito seria o seu abraço.",
"seu olhar tem mais impacto que uma arrancada de 0 a 100 em 2 segundos.",
"você é tipo carro conceito: única, futurista e impossível de ignorar.",
"se amar você fosse corrida, eu largava na pole todos os dias.",
"com você por perto, até meu Wi-Fi melhora. Conexão perfeita!",
"você tem mais charme que um carro conversível em dia de sol.",
"meu coração é um drone: só sabe pairar quando você está por perto.",
"se beleza gerasse torque, você faria o mundo girar mais rápido.",
"você é mais rara que uma Ferrari na estrada de terra — e ainda mais preciosa.",
"se eu fosse IA, você seria meu prompt favorito.",
"você é meu algoritmo perfeito: cada curva sua me calcula mais apaixonado.",
"seu toque deve ter Bluetooth, porque conecta direto no meu coração.",
"você é tão fascinante que nem a gravidade consegue te segurar no chão.",
"com você, até uma pane vira aventura inesquecível.",
"você é como a primeira marcha: sem você, nada anda pra frente.",
"se eu fosse motor, seu sorriso seria minha ignição.",
"a única aceleração que me interessa é o ritmo do meu coração quando você sorri.",
"você é meu combustível aditivado: rende mais e me faz ir além.",
"se eu fosse foguete, você seria minha missão tripulada: destino direto ao coração.",
"você é minha rota de fuga de qualquer dia ruim.",
"nem o Google Maps encontra um caminho que me leve pra mais perto de você.",
"com você, meu coração tem controle de tração — pra não derrapar de tanto amor.",
"você é mais raro que eclipse em dia de cometa: e eu tive a sorte de te ver.",
"seu jeito é como câmbio automático: me deixa sem esforço nenhum, só prazer.",
"se o amor fosse um circuito, você seria minha volta perfeita.",
"você é meu turbo emocional: só de olhar, me deixa nas nuvens.",
"se eu fosse um carro, você seria minha pintura metálica: só brilho e admiração.",
"você não é satélite, mas vive na minha órbita mental.",
"se o destino fosse um GPS, teria recalculado tudo pra nos cruzar mais cedo.",
"te olhar é como ver o velocímetro subir: arrepia e acelera tudo aqui dentro.",
"você é meu ponto de fuga na curva mais perigosa da vida.",
"se eu fosse um app de navegação, te marcaria como rota fixa do coração.",
"com você, até sem freio a vida parece segura.",
"você é a engrenagem que faltava no meu motor da vida.",
"se eu fosse carro de luxo, você seria meu acabamento em couro: puro requinte.",
"você é mais doce que a bandeirada de chegada depois de uma corrida longa.",
"com você, meu coração não precisa de cinto de segurança, só de coragem.",
"você não é radar, mas detecta todo excesso de amor em mim.",
"seu charme tem mais tração que carro 4x4 na lama.",
"você é como um Tesla no modo autônomo: me leva longe sem eu nem perceber.",
"se existisse um autódromo do amor, meu pit stop seria seu colo.",
"você não é motor, mas me faz vibrar por dentro.",
"seu cheiro é como o som de motor ronronando: impossível de ignorar.",
"você é como freio ABS: me impede de escorregar no gelo da solidão.",
"se eu fosse carro de rali, você seria o copiloto perfeito — guia e companhia.",
"você é mais envolvente que curva em Nürburgring.",
"nem foguete da SpaceX alcança o quanto você me faz sonhar alto.",
"você é tipo turbo lag: demora pra entender, mas quando vem, é irresistível.",
"se eu fosse drone de corrida, você seria a linha de chegada mais desejada.",
"você não é marcha, mas sempre muda tudo quando chega perto."
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