function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoDeNascimento = document.getElementById("anoDeNascimento")
    var idade = ano - anoDeNascimento.value
    var sexo = document.getElementsByName('radsex')

    if (anoDeNascimento.value.length == 0 || anoDeNascimento.value > ano) {
        window.alert('Dados incorretos. Por favor, verifique e tente novamente.')
    } else if (idade < 12 && sexo[0].checked) {
        imagem.src="http://s2.glbimg.com/sdzMNG84CrXTiFxE5tzmtpOJbmo=/620x0/s.glbimg.com/jo/eg/f/original/2015/06/21/jake-lloyd-star-wars-episodio-1-a-ameaca-fantasma.jpg"
    } else if (idade < 12 && sexo[1].checked) {
        imagem.src = "https://pt.jugomobile.com/wp-content/uploads/2022/05/1653978730_735_A-jovem-princesa-Leia-e-a-esperanca-o-coracao-e.jpg"
    } else if (idade > 11 && idade < 17 && sexo[0].checked) {
        imagem.src ="https://i.pinimg.com/originals/f1/32/f2/f132f227aef7df1f29b1bdaa6f2851d5.jpg"
    } else if (idade > 11 && idade < 17 && sexo[1].checked) {
        imagem.src = "https://deliriumnerd.com/wp-content/uploads/2017/01/5c3c9f21bfa7c26fc1d057ee99d84fc9.jpg"
    } else if (idade > 16 && idade < 58 && sexo[0].checked) {
        imagem.src = "https://rollingstone.uol.com.br/media/uploads/luke-retorno-de-jedi-lista-cortada.jpg"
    } else if (idade > 16  && idade < 58 && sexo[1].checked) {
        imagem.src = "https://veja.abril.com.br/wp-content/uploads/2016/12/entretenimento-carrie-fisher-19000101-002.jpg"
    } else if (idade > 59 && sexo[0].checked) {
        imagem.src = "https://miro.medium.com/max/780/1*ERqpxY1ca0T5MZxTh3LFwA.jpeg"
    } else if (idade > 59 && sexo[1].checked) {
        imagem.src = "https://super.abril.com.br/wp-content/uploads/2017/10/carrie-fisher-seria-um-destaque-no-c3baltimo-star-wars-diz-mark-hamill1.png?w=1024"
    }


}