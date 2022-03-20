let nameScreen = document.getElementById('name-screen')
let emailScreen = document.getElementById('email-screen')
let birthdayScreen = document.getElementById('birthday-screen')
let localScreen = document.getElementById('local-screen')
let celScreen = document.getElementById('cel-screen')
let passScreen = document.getElementById('pass-screen')
let imageScreen = document.getElementById('image-pessoa')
geraNovaPessoa()
function geraNovaPessoa(){
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data.results[0])
    
            let name = data.results[0].name.first + ' ' + data.results[0].name.last
            let email = data.results[0].email
            let birthday = data.results[0].dob.date // APAGAR TUDO QUE TIVER DEPOIS DO :
            let local = data.results[0].location.city + ' - ' + data.results[0].location.country
            let cel = data.results[0].phone
            let pass = data.results[0].login.password
            let image = data.results[0].picture.large
    
            let people = new User(name, email, birthday, local, cel, pass, image)
    
            nameScreen.innerHTML = '<i class="me-2 fas fa-user"></i>' + people.name
            emailScreen.innerHTML = '<i class="me-2 fas fa-envelope"></i>' + people.email
            birthdayScreen.innerHTML = '<i class="me-2 fas fa-birthday-cake"></i>' + people.birthday
            localScreen.innerHTML = '<i class="me-2 fas fa-map-marked-alt"></i>' + people.local
            celScreen.innerHTML = '<i class="me-2 fas fa-phone-alt"></i>' + people.cel
            passScreen.innerHTML = '<i class="me-2 fas fa-lock"></i>' + people.pass
            imageScreen.src = people.image
            imageScreen.setAttribute('alt', 'Uma imagem de ' + people.name)
        }).catch(err => {
            console.log(err)
        })
}

function gerarNovo(){
    geraNovaPessoa()
}

// function copyContent(id){
//     let item = document.getElementById(id)
//     item = item.childNodes[1].data
//     console.log(item)
//     item.select()
//     document.exec

//     alert('Texto copiado é ' + item)
// }

function User (name, email, birthday, local, cel, pass, image){
    this.name = name
    this.email = email
    this.birthday = birthday
    this.local = local
    this.cel = cel
    this.pass = pass
    this.image = image
}