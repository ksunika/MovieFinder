var MovieList = React.createClass({
    render: function () {

    var headerStyle ={
        height:'60px',
        background:'rgba(255, 255, 255, 0.8)',
        position:'fixed',
        top:'0px',
        padding:'30px',
        left:'0px',
        width:'100%',
        fontFamily:'Muli',
        color: '#444',
        fontSize: '50px',
        textAlign: 'center',
        lineHeight: '44px',
        lineSpacing: '-2',
        fontWeight: 'bold'
    };

    return (
        <div >
            <div style = {headerStyle}>{this.props.header}</div>
			{
                this.props.data.map(function (element, i) {
                    return <MovieElement key={i} data={element}/>
                })
            }
        </div>)
    }
});