var Header = React.createClass({
        
        getInitialState: function () {
            return {button: true}; //show button
        },
        useLocation: function (){
            this.setState({button: false});//hide button
            getCoordinates();
        },
        
        render: function () {

        var buttonStyle = {
            position:'fixed',
            top:'60px',
            marginLeft:'-200px',
                left: '50%',
            textAlign: 'center',
            lineHeight: '44px',
            lineSpacing: '-2',
            width: '400px',
            display: 'inline-block',
            padding: '10px',
            background: '#08C',
            /* Font styles */
            fontFamily:'Muli',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px',
            textDecoration: 'none'
        };
        var messageStyle ={
            marginTop: '110px',
            paddingTop: '30px',
            width:'100%',
            fontFamily:'Muli',
            color: '#444',
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '44px',
            lineSpacing: '-2',
            fontWeight: 'bold'
        };

            if (!this.state.button){
                buttonStyle.display = 'none';
            }

            return (
                    <div >
                        <div style = {buttonStyle} onClick = {this.useLocation}>let us determine your location</div>    
                        <div style = {messageStyle} id = "message">movie finder</div>
                	</div>
            )
        }
});