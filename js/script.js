const form = document.querySelector('#search');

const Profile = document.querySelector('.Profile');
const api = 'https://api.github.com/users/' ;
function getdata(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
    
}
const showdata = (data) => {
    data!== undefined? 
    Profile.innerHTML = `
    <div class="Card">

    <img id="i" src="img/download.png" alt="" class="equo">
    <div class="blue"></div>
    <div class="userinfo"> <img src="${data.avatar_url}">
        <h2>
            ${data.name}
        </h2>
        <div class="location">
            <p>
               ${data.bio} 
            </p>
        </div>
 <br/>
 <br/>

        <button>
            view content
        </button>
    </div>
    </div>
</div>
    ` :alert('not found');


}
form .addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.querySelector('#user').value;
    getdata(api + user).then(data => showdata(data) );
   
}
);
