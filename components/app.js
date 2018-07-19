var GIPHY_API_URL = "http://api.giphy.com";
var GIPHY_PUB_KEY = "iY1scEBoYDc4pIhhgmgt3lNHtLk3SWN4";

App = React.createClass({

    getInitialState () {
      return {
        loading: false,
        searchingText: '',
        gif: {}
      }
    },

    handleSearch: function (searchingText) {
      this.setState({
        loading: true
      })

      this.getGif(searchingText).then((response) => {

          this.setState({
            loading: false,
            gif: {
              url: response.data.data.fixed_width_downsampled_url,
              sourceUrl: response.data.data.url
            },
            searchingText: searchingText
          })

      })
    },

    getGif: function(searchingText) {
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
        return axios.get(url);
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', url);
        // xhr.onload = function() {
        //     if (xhr.status === 200) {
        //        var data = JSON.parse(xhr.responseText).data;
        //         var gif = {
        //             url: data.fixed_width_downsampled_url,
        //             sourceUrl: data.url
        //         };
        //         callback(gif);
        //     }
        // };
        // xhr.send();
    },

    render: function () {
      var styles = {
        margin: '0 auto',
        textAlign: 'center',
        width: '60%'
      }

      return (
        <div style={styles}>
          <h1>Wyszukiwarka GIFów!</h1>
          <p>Znajdź GIFy na: <a href='http://giphy.com'>
              giphy.com</a> <br /> Wciśnij enter aby załadować więcej.
          </p>
          <Search onSearch={this.handleSearch} />
          <Gif
            loading={this.state.loading}
            url={this.state.gif.url}
            sourceUrl={this.state.gif.sourceUrl}
          />
        </div>
      )
    }
  })

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));