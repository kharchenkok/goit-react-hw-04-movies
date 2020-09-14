import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getPopular} from '../../services/GetFetch'
import Styles from './PopularFilmListStyles.module.css'



export default class PopularFilmList extends Component{
    state={
        popularList:[],
        error:null
    }
    async componentDidMount(){
        await getPopular().then(data => {

            this.setState(()=>({
                popularList:[...data]
            }))
        })
        .catch(error=>this.setState({error:error}))
    }
    render(){
        const{popularList}=this.state
        return <ul className={Styles.popularList}>
        {popularList.map((item) => (
          <li key={item.id}>
            <Link
              to={{
                pathname: `/movies/${item.id}`,
              }}
            >
              {item.title ?? item.name}
            </Link>
          </li>
        ))}
      </ul>
        
    }
}