import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import { NavLink } from "react-router-dom"

configure({adapter : new Adapter()})

describe('<NavigationItems/>', ()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems/>)

    })
    it('should render two Navigation items if user is not authenticated', ()=>{
        expect(wrapper.find('li')).toHaveLength(2)
    })
    it('should render three Navigation items if user is authenticated', ()=>{
        //wrapper = shallow(<NavigationItems isAuthenticate/>)
        wrapper.setProps({isAuthenticate : true})
        expect(wrapper.find('li')).toHaveLength(3)
    })

    // it('should return true if logout link is available once a user authenticated', ()=>{
    //     //wrapper = shallow(<NavigationItems isAuthenticate/>)
    //     wrapper.setProps({isAuthenticate : true})
    //     expect(wrapper.contains(<li><NavLink className={({isActive, isPending}) => isPending ? null : isActive ? classes.active : null} to="/logout">Logout</NavLink></li>)).toEqual(true)
    // })
})