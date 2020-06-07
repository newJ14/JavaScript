const {hash} = window.location;

const message = (atob(hash.replace('#', '')));

if (message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    // The browser is designed to send the event to the backend server by default.
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    
    const input = document.querySelector('#message-input');
    // ASCII -> Base64
    const encrypted = btoa(input.value);
    
    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();

    // message.com/index.html/?color=red#value
    // Domain     /Path      /QueryS String / Hash&fragment
})