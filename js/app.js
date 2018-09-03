var news = [
  {
    author: 'Кристина',
    text: 'Ля-ля-ля, мне нечего сказать'
  }, {
    author: 'Иван',
    text: 'Жить стало проще, жить стало веселее'
  }, {
    author: 'Александр',
    text: 'Абырвалг'
  }
];

var News = React.createClass({
  render: function() {
    var data = this.props.data;
    var template = data.map(function(item, index) {
      return (
        <div key={index}>
          <p>{item.author}:</p>
          <p>{item.text}</p>
        </div>
      )
    })

    return (
      <div>
        {template}
      </div>
    );
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <News data={news} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
