/* globals describe, test, expect, jest */

import React from 'react'
import MultiSelect from '../MultiSelect'

import { mount, render } from 'enzyme'

// helpers
const generateRandomNumberOfValues = (minCount = 5, maxCount = 20) => {
  const selectablesLength = Math.ceil(Math.random() * (maxCount - minCount) + minCount)
  const selectables = Array(selectablesLength).fill('').map((v, i) => `${i}`)
  return selectables
}

describe('Multiselect', () => {
  test('renders', () => {
    const values = ['a', 'b', 'c']
    const multiSelectOutput = render(<MultiSelect values={values} />)

    expect(multiSelectOutput).toMatchSnapshot()
  })

  test('renders the correct amount of selectable list items', () => {
    // create an array with a random number of items
    const values = generateRandomNumberOfValues()
    const multiSelectWrapper = mount(<MultiSelect values={values} />)

    const valuesLi = multiSelectWrapper.find('.selectableItems li')
    expect(valuesLi.length).toBe(values.length)
  })

  test('reveals the list of selectable list items when the input is focused', () => {
    const multiSelectWrapper = mount(<MultiSelect />)

    const valuesUl = multiSelectWrapper.find('.selectableItems').get(0)
    const filterInput = multiSelectWrapper.find('input')

    expect(valuesUl.props.style.display).toBe('none')

    filterInput.simulate('focus')
    const updatedValuesUl = multiSelectWrapper.find('.selectableItems').get(0)
    expect(updatedValuesUl.props.style.display).not.toBe('none')
  })

  test('calls onFilterChange when the input value changes', () => {
    const onFilterChangeMock = jest.fn()
    const multiSelectWrapper = mount(<MultiSelect onFilterChange={onFilterChangeMock} />)

    const input = multiSelectWrapper.find('.filterValue')
    const inputValue = 'xyz'
    input.simulate('change', { target: { value: inputValue } })

    expect(onFilterChangeMock.mock.calls.length).toBe(1)
    expect(onFilterChangeMock.mock.calls[0][0]).toBe(inputValue)
  })

  test('calls onValueSelect when a selectable item is clicked', () => {
    // check that the list containing the selected items does not exist
    const values = generateRandomNumberOfValues()
    // mock the handler
    const onValueSelectMock = jest.fn()
    const multiSelectWrapper = mount(<MultiSelect values={values} onValueSelect={onValueSelectMock} />)

    const selectedItemsContainer = multiSelectWrapper.find('.selctedItems')
    expect(selectedItemsContainer.length).toBe(0)

    const filterInput = multiSelectWrapper.find('input')
    filterInput.simulate('focus')
    const firstSelectableItem = multiSelectWrapper.find('.selectableItems li').at(0).find('span')

    firstSelectableItem.simulate('click')
    expect(onValueSelectMock.mock.calls.length).toBe(1)
    // the first argument of the first call
    expect(onValueSelectMock.mock.calls[0][0]).toBe('0')

    const secondSelectableItem = multiSelectWrapper.find('.selectableItems li').at(1).find('span')
    secondSelectableItem.simulate('click')
    expect(onValueSelectMock.mock.calls.length).toBe(2)
    // the first argument of the second call
    expect(onValueSelectMock.mock.calls[1][0]).toBe('1')
  })
})
