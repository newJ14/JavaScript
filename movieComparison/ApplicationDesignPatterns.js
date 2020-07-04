// const fetchData = async (searchTerm) => {
//     const response = await axios.get("http://www.omdbapi.com/", {
//         params: {
//             apikey: '626a9577',
//             s: searchTerm
//         }
//     });
    
//     // console.log(response)
//     if(response.data.Error){
//         return [];
//     }
    
//     return response.data.Search;
// };
const autoCompleteConfig = {
    renderOption(movie) {
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
            <img src = "${imgSrc}"/>
            ${movie.Title} (${movie.Year})
        `
    },

    inputValue(movie){
        return movie.Title;
    },
    async fetchData (searchTerm)  {
        const response = await axios.get("http://www.omdbapi.com/", {
            params: {
                apikey: '626a9577',
                s: searchTerm
            }
        });
        
        // console.log(response)
        if(response.data.Error){
            return [];
        }
        
        return response.data.Search;
    }
};

createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('#left-autocomplete'),
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
    },
});

createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('#right-autocomplete'),
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
    },
});

let leftMovie;
let rightMovie;

const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: '626a9577',
            i: movie.imdbID
        }
    });
    // console.log(response)
    // document.querySelector("#summary").innerHTML = movieTemplate(response.data);
    summaryElement.innerHTML = movieTemplate(response.data);
    console.log(response)
    if(side === 'left'){
        leftMovie = response.data;
    } else {
        rightMovie = response.data;
    }

    if(leftMovie && rightMovie){ 
        runComparison();
    }
};

const runComparison = () => {
    const leftSideStats = document.querySelectorAll('#left-summary .notification');
    const rightSideStats = document.querySelectorAll('#right-summary .notification');

    leftSideStats.forEach((leftStat, index) => {
        const rightStat = rightSideStats[index];

        const leftSideValue = parseInt(leftStat.dataset.value);
        const rightSideValue = parseInt(rightStat.dataset.value);
        
        if(rightSideValue > leftSideValue){
            leftStat.classList.remove('is-primary');
            leftStat.classList.add('is-warning');
        } else {
            rightStat.classList.remove('is-primary');
            rightStat.classList.add('is-warning')
        }
    })

};

const movieTemplate = (movieDetail) => {
    const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
    const metascore = parseInt(movieDetail.Metascore);
    const ImdbRating = parseFloat(movieDetail.imdbRating);
    const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));
    
    const awards = movieDetail.Awards.split(' ').reduce((prev, word) => {
        const value = parseInt(word);
        if(isNaN(value)){
            return prev; 
        } else {
            return prev + value;
        }
    }, 0);

    return `
        <article class = "media">
            <figure class = "media-left">
                <p class = "image">
                    <img src = "${movieDetail.Poster}"/>
                </p>
            </figure>
            <div class = "media-content">
                <div class = "content">
                    <h1>${movieDetail.Title}</h1>
                    <h4>${movieDetail.Genre}</h4>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>
        </article>
        <article data-value = ${awards} class ="notification is-primary">
            <p class = "title">${movieDetail.Awards}</p>
            <p class = "subtitle">Awards</p>
        </article>

        <article data-value = ${dollars} class ="notification is-primary">
            <p class = "title">${movieDetail.BoxOffice}</p>
            <p class = "subtitle">Box Office</p>
        </article>

        <article data-value = ${metascore} class ="notification is-primary">
            <p class = "title">${movieDetail.Metascore}</p>
            <p class = "subtitle">Metascore</p>
        </article>

        <article data-value = ${ImdbRating} class ="notification is-primary">
            <p class = "title">${movieDetail.imdbRating}</p>
            <p class = "subtitle">IMDB Rating</p>
        </article>

        <article data-value = ${imdbVotes} class ="notification is-primary">
            <p class = "title">${movieDetail.imdbVotes}</p>
            <p class = "subtitle">IMDB Votes</p>
        </article>
    `;
}







// const root = document.querySelector('.autocomplete')
// root.innerHTML = `
//     <label><b>Search for a movie</b></label>
//     <input class = "input" />
//     <div class= "dropdown">
//         <div class = "dropdown-menu">
//             <div class = "dropdown-content results"></div>
//         </div>
//     </div>
// `;

// const input = document.querySelector('input'); 
// const dropdown = document.querySelector('.dropdown');
// const resultsWrapper = document.querySelector('.results');


// const onInput = async event => {
//     const movies = await fetchData(event.target.value);

//     if(!movies.length){
//         dropdown.classList.remove('is-active');
//         return;
//     }

//     resultsWrapper.innerHTML = '';
//     dropdown.classList.add('is-active');
//     for (let movie of movies){
//         const option = document.createElement('a');
//         const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

//         option.classList.add('dropdown-item')
//         option.innerHTML = `
//             <img src = "${imgSrc}"/>
//             ${movie.Title}
//         `;

//         option.addEventListener('click', () => {
//             dropdown.classList.remove('is-active');
//             input.value = movie.Title;
//             onMovieSelect(movie);
//         });

//         resultsWrapper.appendChild(option);
//     }
// };


// input.addEventListener('input', debounce(onInput, 500));

// document.addEventListener('click', event => {
//     if(!root.contains(event.target)){
//         dropdown.classList.remove('is-active');
//     }
// })