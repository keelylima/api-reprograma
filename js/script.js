const container = document.querySelector('.maravilhosas__box');
const btn = document.querySelector('#btn');

//POST
btn.addEventListener('click', () => {

    const name = document.querySelector('#name').value;
    const img = document.querySelector('#img').value;

    fetch('http://localhost:5001/maravilhosas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': name,
            'metadata': {
                'image': {
                    'url': img,
                }
            }
        }),
    })
})


fetch('http://localhost:5001/maravilhosas')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        data.content.forEach((mulher) => {

            let box = document.createElement('div');
            box.setAttribute('class', 'maravilhosas__perfil');
            container.appendChild(box);

            let ancora = document.createElement('a');
            ancora.setAttribute('href', '#');
            box.appendChild(ancora);

            let img = document.createElement('img');
            img.setAttribute('class', 'img-responsive');

            mulher.metadata && mulher.metadata.image ? img.setAttribute('src', mulher.metadata.image.url) : img.setAttribute('src', './img/img-mulher.png');

            ancora.appendChild(img);

            let nome = document.createElement('p');
            nome.innerHTML = `${mulher.title}`;
            ancora.appendChild(nome);

            let btn__2 = document.createElement('button');
            btn__2.innerHTML = '✖';
            btn__2.setAttribute('data-id', mulher.id);
            box.appendChild(btn__2);

            btn__2.addEventListener('click', () => {
                fetch(`http://localhost:5001/maravilhosas/${mulher.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'id': btn__2.getAttribute('data-id')
                    })
                })
                .then(() => {
                    box.remove();
                })
                .catch((erro) => {
                    console.log(erro)
                })
            });

        })

    })
    .catch(function (erro) {
        console.log(erro);
    })