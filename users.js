// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. 

const url = "https://jsonplaceholder.typicode.com/users";

try {
    fetch(url).then((response) => response.json()).then((json) => {
        const data = json;
        console.log(data);
        getActivity(data);

        const pictureBoxEl = document.querySelector('.cards-box');
        data.forEach((element) => {
            const picture = `
            <div class="card">
                <h3>Пользователь ${element.id}</h3>
                <p class="name">Имя: ${element.name}</p>
                <p class="username">Ник: ${element.username}</p>
                <p class="email">Email: ${element.email}</p>
                <h4 class="email">Address:</h4> 
                <p class="city">City: ${element.address.city}</p>
                <p class="street">Street: ${element.address.street}</p>
                <p class="suite">Suite: ${element.address.suite}</p>
                
                <h4 class="company">Company:</h4>
                <p class="city">Название: ${element.company.name}</p>
                <p class="catchPhrase">Отдел: ${element.company.catchPhrase}</p>
                <p class="suite">Вид деятельности: ${element.company.bs}</p>
                <button class="btn__del">Удалить пользователя</button>
            </div>
            `
            pictureBoxEl.insertAdjacentHTML("beforeend", picture)
        })
        const deleteBtn = document.querySelectorAll('.btn__del');
        
        deleteBtn.forEach((button) => {
            button.addEventListener('click', () => {
              const product = button.closest('.card');
              product.remove();
            })
        })
            return data;  
    })
} catch (error) {
    console.error('что-то пошло не так');
};

function getActivity(data) {
    const divEl = document.createElement("div");
    divEl.textContent = data.activity;
    document.body.appendChild(divEl);
};