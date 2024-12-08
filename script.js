const socket = new WebSocket('https://localhost:9090');

        // Connection opened
        socket.addEventListener('open', function (event) {
            socket.send('Hello_ Server!');
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            console.log( event.data);
        });

        // Connection closed
        socket.addEventListener('close', function (event) {
            console.log('Connection closed: ', event);
        });

        // Error handling
        socket.addEventListener('error', function (event) {
            console.error('WebSocket error: ', event);
        });



        function getTextValue() {
          const inputValue = document.getElementById('inputField').value;
          console.log(inputValue);
          socket.send(inputValue);
      }
      function login(){
        let Username =document.getElementById('username').value;
        let Password=document.getElementById('password').value;
        let request='login_request:'+Username+':'+Password+';';
        socket.send(request);

      }





      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
      //document.addEventListener('keydown', function(e) {
       // if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
          //  e.preventDefault();
       // }
    //});
   // Disable Ctrl + Mouse Wheel Zoom
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// Disable Ctrl + Arrow Keys
document.addEventListener('keydown', function(e) {
    if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.ctrlKey) {
        e.preventDefault();
    }
});

// Disable Ctrl + Plus and Ctrl + Minus
document.addEventListener('keydown', function(e) {
    if ((e.key === '=' || e.key === '-' || e.key === '+') && e.ctrlKey) {
       e.preventDefault();
    }
});
document.addEventListener('keydown', function(e) {
    if ((e.key === 'R' || e.key === 'r') && e.ctrlKey) {
        e.preventDefault();
    }
});

    
    










      function toggleLanguage() {
            const elementsToTranslate = document.querySelectorAll('.container h2, .form-control::placeholder, .btn, .switch-btn, .toggle-btn');

            elementsToTranslate.forEach(element => {
                if (element.textContent.includes('Sign In')) {
                    element.textContent = 'تسجيل الدخول';
                } else if (element.textContent.includes('Sign Up')) {
                    element.textContent = 'إنشاء حساب';
                } else if (element.placeholder === 'Username') {
                    element.placeholder = 'اسم المستخدم';
                } else if (element.placeholder === 'Password') {
                    element.placeholder = 'كلمه السر';
                } else if (element.placeholder === 'Email') {
                    element.placeholder = 'البريد الإلكتروني';
                } else if (element.value === 'Sign In') {
                    element.value = 'تسجيل الدخول';
                } else if (element.value === 'Sign Up') {
                    element.value = 'اشتراك';
                } 
                else if(element.textContent.includes('English')){
                  element.textContent='العربية';
                }
                else if (element.textContent.includes('تسجيل الدخول')) {
                    element.textContent = 'Sign In';
                } else if (element.textContent.includes('اشتراك')) {
                    element.textContent = 'Sign Up';
                }
                else if(element.textContent.includes('العربية')){
                  element.textContent='English';
                }
                else if(element.textContent.includes('إنشاء حساب')){
                  element.textContent='Sign Up';
                }
            });

            document.getElementById('signInContainer').classList.toggle('signIn');
            document.getElementById('signInContainer').classList.toggle('signInAr');
            document.getElementById('signUpContainer').classList.toggle('signUp');
            document.getElementById('signUpContainer').classList.toggle('signUpAr');
        }
    
    






let pass=false;
   
function showSignUp() {
    document.getElementById('signInContainer').classList.add('hidden');
    document.getElementById('signInContainer').classList.remove('visible');
    setTimeout(() => {
        document.getElementById('signUpContainer').classList.remove('hiddenRight');
        document.getElementById('signUpContainer').classList.add('visible');
    }, 200); // match the transition duration
}

function showSignIn() {
    
    document.getElementById('signUpContainer').classList.add('hiddenRight');
    document.getElementById('signUpContainer').classList.remove('visible');
    setTimeout(() => {
        document.getElementById('signInContainer').classList.remove('hidden');
        document.getElementById('signInContainer').classList.add('visible');
        
    }, 200); // match the transition duration
}

function handleSignIn() {
    
    
    setTimeout(() => {
        hideWithFade();
    }, 300);
    
    
    
    hideToBottom();
    
    setTimeout(() => {
        document.querySelector('.nav').classList.add('fade-in');
        document.querySelector('.nav').classList.remove('hidden');
        document.getElementById('GAMES').classList.add('fade-in');
        document.getElementById('GAMES').classList.remove('hidden');
        document.querySelector('body').classList.remove('center');
        document.getElementById('signInContainer').classList.add('fullHide');
        document.getElementById('signInContainer').style.pointerEvents = 'none';
        document.getElementById('signUpContainer').style.pointerEvents = 'none';
        document.getElementById('signUpContainer').classList.add('fullHide');

    }, 1800);
    const username = document.querySelector('#signInForm input[type="text"]').value;
    const password = document.querySelector('#signInForm input[type="password"]').value;
    
    event.preventDefault();
    
    console.log(`Sign In -> Username: ${username}, Password: ${password}`);
    
    document.getElementById('signInForm').reset();
}

function handleSignUp() {
    const username = document.querySelector('#signUpForm input[type="text"]').value;
    const email = document.querySelector('#signUpForm input[type="email"]').value;
    const password = document.querySelector('#signUpForm input[type="password"]').value;
    
    event.preventDefault();
    
    console.log(`Sign Up -> Username: ${username}, Email: ${email}, Password: ${password}`);
    
    document.getElementById('signUpForm').reset();
}



function hideToBottom(){
    
    document.getElementById('signInContainer').classList.add('hiddenBottom');
    document.getElementById('signInContainer').classList.remove('visible');
    
}

function hideWithFade() {
    
    document.getElementById('lb').classList.add('fade-out');
    const videoBg = document.querySelector('.video-background');
    document.getElementById('signInContainer').classList.add('fade-out');
    document.getElementById('signUpContainer').classList.add('fade-out');
    videoBg.classList.add('fade-out');
    
    
    setTimeout(function() {
        videoBg.classList.add('hide');
    }, 2000); // Match the duration of the fade-out transition
}


function showGames(){
    
    document.querySelector('.video-background').classList.add('hide');
    document.getElementById('signInContainer').classList.add('hide');
    document.getElementById('signUpContainer').classList.add('hide');
    document.getElementById('lb').classList.add('hide');
}

function showLogin(){
    // If you want to show it again:
    
}

function RunMinecraft(){
    let command="RUN_Minecraft";
    socket.send(command);
}
function RunValo(){
    socket.send('RUN_Valo');
}
function RunWZ(){
    socket.send('RUN_WZ')
}
function RunCS(){
    socket.send('RUN_CS')
}



function setSelected(element, index) {
    const links = document.querySelectorAll('.nav-link');
    const highlight = document.querySelector('.highlight');
    const total = links.length;
    
    links.forEach(link => link.classList.remove('selected'));
    element.classList.add('selected');
    
    document.documentElement.style.setProperty('--index', index);
    document.documentElement.style.setProperty('--total', total);
}

// Set the first item as selected by default
document.getElementById('GAMES').classList.add('hidden');
document.getElementById('navg').classList.add('hidden');
document.getElementById('GAMES').classList.add('unselectable');
setSelected(document.querySelector('.nav-link'), 0);

document.querySelector('body').classList.add('center');