var ShowList = React.createClass({
    render: function () {

        return (
            <div >
                {
                    this.props.data.map(function (element, i) {
                        return <ShowtimeElement key={i} data={element}/>
                    })
                }

            </div>
        );
    }
});