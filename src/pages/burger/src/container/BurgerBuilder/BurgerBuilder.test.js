import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import {BurgerBuilder} from "./BurgerBuilder";
import BuildControls from "../../components/BuildControls/BuildControls";

configure({adapter : new Adapter()})

 describe('<BurgerBuilder />', ()=>{
     let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<BurgerBuilder onIngredientSet={()=>{}}/>)
    })

    it('Should return buildcontrols when ingredients are passed', ()=>{
        wrapper.setProps({ing: {salad : 1}})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})