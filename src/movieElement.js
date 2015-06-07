var MovieElement = React.createClass({
    getInitialState: function () {
    	var image = '';//at first no pics are shown

        return {
        	image: image,
        	message: '',
            selected: false,
            hover: false
        };
    },
    onMouseClick: function () {
        this.setState({selected: !this.state.selected});
        this.setState({hover: false});
        if (this.state.image === ''){//if pic not previously loaded
        	var image = fetchImageURL(this.props.data.title, this.props.data.year, this.props.data.prefURI);
    		this.setState({image: image});
    		this.setState({message: ''});
        }
    },
    onMouseEnter: function () {
        this.setState({hover: true});
        if (this.state.image === ''){
        	this.setState({message: <p>click for details</p>});
        }
    },
    onMouseLeave: function () {
        this.setState({hover: false});
        if (this.state.image === ''){
        	this.setState({message: ''});
        }
    },

    render: function () {
        var divStyle = {
            borderRadius: '8px',
            background: '#616668',
            display: 'inline-block',
            margin: '5px',
            padding: '14px',
            verticalAlign: 'top',
        };
        var divInside = {
            display: 'inline-block',
            verticalAlign: 'top',
            textAlign: 'left',
            width: '310px',
            paddingLeft: '15px'
        };
        var divInsidePic = {
            display: 'inline-block',
            verticalAlign: 'top',
            textAlign: 'left',
            width: '150px',
            height: '350px'
        };
        var imgStyle = {
            display:'block',
            //backgroundImage: "url(" + this.state.image + ")",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            minHeight: '250px',
            width: '150px',
            fontFamily:'Muli',
            color: '#F2E8C4',
            margin: '0',
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '20px'
        };
        var titleStyle = {
            fontFamily:'Muli',
            color: '#F2E8C4',
            margin: '0',
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '20px'
        };
        var descStyle = {
            fontFamily:'Muli',
            color: '#F2E8C4',
            margin: '0',
            fontSize: '17px',
            lineHeight: '20px'
        };

    	var current = this.props.data;

        imgStyle.backgroundImage = "url(" + this.state.image + ")";
        divStyle.background = '#616668';
        

        if (this.state.hover) {
            divStyle.background = '#2B879E';
        }

        if (this.state.selected) {
            divStyle.textAlign = 'left';
            return (
                <div style={divStyle}>
                    <div style={divInsidePic}>
                        <div style = {imgStyle} onMouseEnter={this.onMouseEnter}
                         onMouseLeave={this.onMouseLeave} onClick={this.onMouseClick}>{this.state.message}</div>
                        <div style = {titleStyle} ><p>{current.title}</p></div>
                    </div>
                    <div style={divInside}>
                        <div style = {descStyle}><p>{current.desc}</p></div>
                        <ShowList data={current.showtimes}/>
                    </div>
                </div>
            );
        }
        else {
            divStyle.textAlign = 'center';
            divStyle.width = '150px';
            divStyle.height = '350px';
            return (
                <div style={divStyle} onClick={this.onMouseClick} onMouseEnter={this.onMouseEnter}
                     onMouseLeave={this.onMouseLeave}>
                    
                    <div style = {imgStyle} >{this.state.message}</div>
                    <div style = {titleStyle} ><p>{current.title}</p></div>
                </div>
            );
        }
    }
});