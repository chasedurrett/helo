import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            posts: [],
            search: '',
            userPosts: true
        }
    }

    render(){
        return (
            <div>Dashboard
                <input />
                <button name="search" >Search</button>
                <button>Reset</button>
                <input type="checkbox"/>
            </div>
        )
    }
}

export default Dashboard