//criança-mulher : https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1
//criança-homem : https://images.pexels.com/photos/9034084/pexels-photo-9034084.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1
//jovem-mulher : https://images.pexels.com/photos/16268823/pexels-photo-16268823/free-photo-of-lindo-bonito-atraente-elegante.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1
//jovem-homem : https://images.pexels.com/photos/6749743/pexels-photo-6749743.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1
//mulher-adulta : https://images.pexels.com/photos/2115681/pexels-photo-2115681.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1
//homem-adulto : https://images.pexels.com/photos/8521187/pexels-photo-8521187.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1
//mulher-idosa : https://images.pexels.com/photos/7020695/pexels-photo-7020695.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1
//homem-idoso : https://images.pexels.com/photos/2655471/pexels-photo-2655471.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1


function identificar(){
    var agora = new Date()

    var ano = agora.getFullYear()

    var nasc = document.querySelector('input#nasc')

    var res = document.getElementById('res')

    if (nasc.value.length == 0 || Number(nasc.value) > ano){
        window.alert('Erro, verifique os dados e tente novamente!')
    } else{
        var sexf = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')//no html <img id='foto' =) >
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.borderRadius = '50%'
        img.style.border = '1px solid black'
        img.style.background = 'cover'
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.marginTop = '0.25rem'
        if (sexf[0].checked){
            genero ='Homem'
            if (idade >=0 && idade <=12){
                img.setAttribute('src', 'https://images.pexels.com/photos/9034084/pexels-photo-9034084.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1')
            }
            else if(idade < 21){
                img.setAttribute('src', 'https://images.pexels.com/photos/6749743/pexels-photo-6749743.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1' )
            }
            else if(idade < 50){
                img.setAttribute('src', 'https://images.pexels.com/photos/8521187/pexels-photo-8521187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }
            else{
                img.setAttribute('src', 'https://images.pexels.com/photos/2655471/pexels-photo-2655471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }
        } else if (sexf[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                img.setAttribute('src', ' https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }
            else if (idade < 21){
                img.setAttribute('src', 'https://images.pexels.com/photos/16268823/pexels-photo-16268823/free-photo-of-lindo-bonito-atraente-elegante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }
            else if (idade < 50){
                img.setAttribute('src', 'https://images.pexels.com/photos/2115681/pexels-photo-2115681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }
            else{
                img.setAttribute('src', 'https://images.pexels.com/photos/7020695/pexels-photo-7020695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu genêro é ${genero} com ${idade}`
        res.appendChild(img)
    }


}