const params = new URLSearchParams(window.location.search);
const album = params.get('album');

const musicas = {
    'reino-gospel': [
        { title: 'Música 1', link: 'link_musica_1.mp3', duration: '3:40' },
        { title: 'Música 2', link: 'link_musica_2.mp3', duration: '4:11' },
    ],
    'gif-pop-br': [
        { title: 'Música A', link: 'link_musica_a.mp3', duration: '2:50' },
        { title: 'Música B', link: 'link_musica_b.mp3', duration: '3:10' },
    ],
};

const albumData = {
    'reino-gospel': {
        title: 'Reino Gospel',
        cover: 'capa_reino_gospel.png',
        artist: 'Artistas Gospel'
    },
    'gif-pop-br': {
        title: 'GIF Pop BR',
        cover: 'capa_gif_pop_br.png',
        artist: 'Vários Artistas'
    },
};

const albumInfo = albumData[album] || { title: 'Álbum Desconhecido', cover: '', artist: '' };
document.getElementById('album-title').innerText = albumInfo.title;
document.getElementById('album-cover').src = albumInfo.cover;
document.getElementById('album-artist').innerText = albumInfo.artist;

const listaMusicas = document.getElementById('track-body');
(musicas[album] || []).forEach((musica, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${index + 1}</td>
        <td onclick="playMusica('${musica.link}')">${musica.title}</td>
        <td>${musica.duration}</td>
    `;
    listaMusicas.appendChild(tr);
});

function playMusica(link) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = link;
    audioPlayer.play();
}

function playAll() {
    const firstTrack = musicas[album][0];
    if (firstTrack) playMusica(firstTrack.link);
}
