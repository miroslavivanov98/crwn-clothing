import React,{Component} from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'


class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'Hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'Sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 4
            },
            {
                title: 'Womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large'
            },
            {
                title: 'Mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                size: 'large'
            }
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, id , imageUrl, size}) => (
                        <MenuItem key = {id} title = {title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;