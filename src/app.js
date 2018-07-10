class IndecisionApp extends React.Component{
    render(){
        const title = 'Indicision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Two', 'Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOptions />
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    handlePick(){
        alert('asdasdas');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick.bind(this)}>What should I do?</button>
            </div>
        );
    }    
}

class Options extends React.Component{
    constructor(props)
    {
        super(props);
        console.log(this.handleRemoveAll);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        console.log(this.handleRemoveAll);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            <p>Here are your options:</p>
                <ol>
                {this.props.options.map((option) => <Option key={option} option={option}/>)}
                </ol>                
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return <li key={this.props.option}>{this.props.option}</li>;
    }
}
class AddOptions extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option){
            alert('adding option');
        }
        
    }
    render(){
        return (
            <form onSubmit={this.handleAddOption.bind(this)}>
                <input type="text" name="option" />
                <button>Add Option</button>
          </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app')) 