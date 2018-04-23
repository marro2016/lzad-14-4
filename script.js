var movies = [
	{
		id: 1,
		title: 'Czterej pancerni i pies',
		desc: 'film wojenny',
		img: './img/pies.jpg'
	},
	{
		id: 2,
		title: 'W pustyni i w puszczy',
		desc: 'film przygodowy',
		img: './img/pustynia.jpg'
	},
	{
		id: 3,
		title: 'Kariera Nikodema Dyzmy',
		desc: 'film komediowy',
		img: './img/dyzma.jpg'
	},
	{
		id: 4,
		title: 'Testosteron',
		desc: 'film komediowy',
		img: './img/test.jpg'
	},
	{
		id: 5,
		title: 'Kroll',
		desc: 'film o wojsku',
		img: './img/kroll.jpg'
	},
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render : function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {img: this.props.movie.img})
			)
		)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render : function() {
		return React.createElement('p', {}, this.props.desc)
	}
});

var MovieTitle = React.createClass({
	propTypes: {
	   title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title)
	}
});

var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('img', {src: this.props.img})
	}
});

var moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key:movie.id, movie: movie})
});

var MovieList = React.createClass({
	render: function() {
		return React.createElement('ul', {}, moviesElements)
	}
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement(MovieList, {})
	);

ReactDOM.render(element, document.getElementById('app'));
