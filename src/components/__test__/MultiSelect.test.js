/* globals describe, test, expect */

import React from 'react'
import MultiSelect from '../MultiSelect'

import { mount, render } from 'enzyme'

describe('Multiselect', () => {
  test('simple render', () => {
    const values = ['a', 'b', 'c']
    const multiSelectOutput = render(<MultiSelect values={values} />)

    expect(multiSelectOutput).toMatchSnapshot()
  })

  test('renders the same mount of list items as given values', () => {
    const listItemsLength = Math.ceil(Math.random() * 20)
    const values = Array(listItemsLength).fill('value')
    const multiSelectWrapper = mount(<MultiSelect values={values} />)

    const valuesLi = multiSelectWrapper.find('li')
    expect(valuesLi.length).toBe(values.length)
  })

  test('displays list of selectable values when focused', () => {
    const multiSelectWrapper = mount(<MultiSelect />)

    const valuesUl = multiSelectWrapper.find('ul').get(0)
    const filterInput = multiSelectWrapper.find('input')

    expect(valuesUl.props.style.display).toBe('none')

    filterInput.simulate('focus')
    const updatedValuesUl = multiSelectWrapper.find('ul').get(0)
    expect(updatedValuesUl.props.style.display).not.toBe('none')

    // expect(multiSelect).toMatchSnapshot()
    // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

  })
})
