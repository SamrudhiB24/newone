//Login things
let auth=document.getElementById('auth')
let loginForm=document.getElementById('loginForm')
let loginemail=document.getElementById('email')
let loginpassword=document.getElementById('password')
let loginbutton=document.getElementById('button')
let loginerror=document.getElementById('error')
let registerButton=document.getElementById('registerButton')
let backToLogin=document.getElementById('backToLogin')


function toggleview(view) {
    auth.style.display=view==="auth"?"block":"none"
    register.style.display=view==="register"?"block":"none"
}

registerButton.addEventListener('click',()=>toggleview("register"))
backToLogin.addEventListener('click',()=>toggleview("auth"))
//
let register=document.getElementById('register')
let backtoLogin=document.getElementById('backToLogin')

loginForm.addEventListener('submit',handlelogin)




async function handlelogin(e) {
    e.preventDefault()


    let email=loginemail.value
    let password=loginpassword.value

    
    console.log(email);
    console.log(password);

    let res=await fetch("http://localhost:3000/users")
    let usert=await res.json()

    console.log(users);
    let arr=[]
    let user=arr.find((ele)=>ele.user===email && ele.user===password)

    if(user)
    {
        userNameSpan.textContent=user.user;
        console.log('login')
    }
    else{
        console.log('user not found')
    }
}