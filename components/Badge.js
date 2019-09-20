import React from 'react';
import EventEmitter from 'EventEmitter';



export default class Badge extends React.Component{

    constructor (props){
        super(props);
        this._emitter = new EventEmitter();
    }

    render(){
        return ()
    }
} 