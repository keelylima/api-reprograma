const container = document.querySelector('.maravilhosas__box');
const btn = document.querySelector('#btn');


let button = btn.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    console.log(name);
    const img = document.querySelector('#img').value;
    console.log(img);

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
    location.reload();
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

            // SEGUNDO
            // if(mulher.metadata && mulher.metadata.image){
            //     img.setAttribute('src', mulher.metadata.image.url);
            // } else {
            //     img.setAttribute('src', './img/img-mulher.png');
            // }


            // PRIMEIRO
            // if (mulher.metadata) {
            //     if (mulher.metadata.image) {
            //         if (mulher.metadata.image.url) {
            //             img.setAttribute('src', mulher.metadata.image.url);
            //         }
            //     } else {
            //         img.setAttribute('src', './img/img-mulher.png');
            //     }
            // } else {
            //     img.setAttribute('src', './img/img-mulher.png');
            // }

            ancora.appendChild(img);

            let nome = document.createElement('p');
            nome.innerHTML = `${mulher.title}`;
            ancora.appendChild(nome);

        })

    })
    .catch(function (erro) {
        console.log(erro);
    })













            // function mulherMetaData() {
            //     if (mulher.metadata) {
            //       return mulher.metadata;
            //     } else {
            //         img.setAttribute('src', './img/img-mulher.png');
            //     }
            // }

            // function mulherMetaDataImg(){
            //     if(mulher.metadata.image){

            //         return mulher;
            //     } else{
            //     img.setAttribute('src', './img/img-mulher.png');
            //     }
            // }

            // function mulherMetaDataImgUrl(mulherMetaDataImg){
            //     if(mulherMetaDataImg){
            //         mulherMetaDataImg();
            //     } 
            // }

            // mulherMetaData()
            // mulherMetaDataImg();
            // mulherMetaDataImgUrl();