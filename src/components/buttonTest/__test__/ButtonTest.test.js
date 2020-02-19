import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../buttonTest/ButtonTest';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without dying', function (){
    const div = document.createElement("div");
    ReactDOM.render(<Button blabla={'dearMadam'}/>, div)
});

it('should renders good ', function () {
    const {getByTestId} = render(<Button blabla={'dearMadam'}/>)
    expect(getByTestId('test1')).toHaveTextContent("dearMadam")
});

it('should renders good ', function () {
    const {getByTestId} = render(<Button blabla={'dearMadam2'}/>)
    expect(getByTestId('test1')).toHaveTextContent("dearMadam2")
});

it('macthes with snapshot', function () {
    const smt = renderer.create(<Button blabla={'pota'}/>).toJSON();
    expect(smt).toMatchSnapshot();
});
////talk about jest, event, chai, snapshot