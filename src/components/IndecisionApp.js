import React from 'react';
import AddOptions from './AddOptions';
import Header from './Header';
import Options from './Options';
import Action from './Action';

export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
    handleDeleteOptions(){
        this.setState(() => ({options:[]}))
    }
    /*Life cycle methods begin*/
    componentDidMount()
     {
         try
         {
             const options = JSON.parse(localStorage.getItem('options'));
            if (options)
            {
                this.setState(() => ({options}));
            }
         }
         catch(e)
         {
             //Do nothing
         }                
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.options.length != this.state.options.length)
        {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem('options', options);
        }        
    }
    /*Life cycle methods end*/
    handleDeleteOption(option)
    {        
        this.setState((prevState) => 
        {
            return{
            options:prevState.options.filter((i) => {
                    return option != i;
                    })
                }
        })
    }

    handleAddOption(option){        
        if(!option)
        {
            return 'Enter a valid value to add item.';
        }
        else if (this.state.options.indexOf(option) > -1)
        {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
                options: prevState.options.concat(option) // not using push bcoz it modifies the orignal array
           }))
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[randomNum]);
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer';    
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}