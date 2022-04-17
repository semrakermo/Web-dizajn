fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => processData(data));

const processData = data => {
    const mainElement = document.getElementById('data-list');

    data.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
    
        const firstDiv = document.createElement('div');
        firstDiv.classList.add('media', 'align-items-lg-center', 'flex-column', 'flex-lg-row', 'p-3');
    
        const secondDiv = document.createElement('div');
        secondDiv.classList.add('media-body', 'order-2', 'order-lg-1');
    
        const h5 = document.createElement('h5');
        h5.classList.add('mt-0', 'font-weight-bold', 'mb-2');
        h5.innerHTML =  'Name: ' + element.name;
    
        const p = document.createElement('p');
        p.classList.add('font-italic', 'text-muted', 'mb-0', 'small');
        p.innerHTML = 'Company name: ' + element.company.name;
    
        const h6 = document.createElement('h6');
        h6.classList.add('font-weight-bold', 'my-2');
        h6.innerHTML = 'Username: ' + element.username;
    
        const img = document.createElement('img');
        img.classList.add('ml-lg-5', 'order-1', 'order-lg-2');
        img.alt = element.name;
        img.width = 200;
    
    
        secondDiv.appendChild(h5);
        secondDiv.appendChild(h6);
        secondDiv.appendChild(p);
        firstDiv.appendChild(secondDiv);
        firstDiv.appendChild(img);
    
        li.appendChild(firstDiv);
        mainElement.appendChild(li);
    });
}