/**
 * app.js
 * Define Vue code for loading into index.html
 */

 // Instantiate a Vue application instance
const app = Vue.createApp({
    // data, functions, template
    // template: '<h2>I am the template for this component</h2>'
    data() {
        return {
            showBooks: false,
            books: [
                {
                    title: 'The Three Body Problem',
                    author: 'Cixin Liu',
                    age: 46,
                    img: 'https://m.media-amazon.com/images/I/61BuE8S6iKL._SL500_.jpg',
                    isFav: false,
                },
                {
                    title: 'The Dark Forest',
                    author: 'Cixin Liu',
                    age: 46,
                    img: 'https://images-na.ssl-images-amazon.com/images/I/71ecQZJlQYL.jpg',
                    isFav: true,
                },
                {
                    title: 'Deaths End',
                    author: 'Cixin Liu',
                    age: 46,
                    img: 'https://m.media-amazon.com/images/I/61lpfif-xHL.jpg',
                    isFav: false
                },
                {
                    title: 'The Magicians',
                    author: 'Lev Grossman',
                    isFave: false,
                },
                {
                    title: 'The Magician King',
                    author: 'Lev Grossman',
                    isFav: false,
                },
                {
                    title: 'The Magicians Land',
                    author: 'Lev Grossman',
                    isFav: true,
                },
            ],
            x: 0,
            y: 0,
            url: 'https://supermanzer.github.io'
        }
    },
    methods: {
        changeTitle(title) {
            console.log(title);
            this.title = title
        },
        handleEvent(e, data) {
            console.log(`Event has been triggered!`);
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        buttonMessage() {
            return (this.showBooks ? 'Hide Books': 'Show Books')
        },
        favoriteBooks() {
            return  this.books.filter((book) => book.isFav)
        }
    }
})

 // Mount our Vue app to a specific element on index.html
app.mount('#app')


