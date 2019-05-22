const container = document.querySelector('.maravilhosas__box');

fetch('https://theblackwomanhistory.firebaseio.com/.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        data.content.forEach((mulher) => {

            // console.log(mulher.metadata);

            let box = document.createElement('div');
            box.setAttribute('class', 'maravilhosas__perfil');
            container.appendChild(box);

            let ancora = document.createElement('a');
            ancora.setAttribute('href', '#');
            box.appendChild(ancora);

            let img = document.createElement('img');
            img.setAttribute('class', 'img-responsive');

            function mulherMetaData() {
                if (mulher.metadata) {
                  return mulher.metadata;
                } else {
                    img.setAttribute('src', './img/img-mulher.png');
                }
            }

            function mulherMetaDataImg(){
                if(mulher.metadata.image){
                    return mulher;
                } else{
                img.setAttribute('src', './img/img-mulher.png');
                }
            }

            function mulherMetaDataImgUrl(mulherMetaDataImg){
                if(mulherMetaDataImg){
                    mulherMetaDataImg();
                } 
            }

            mulherMetaData()
            mulherMetaDataImg();
            mulherMetaDataImgUrl();

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