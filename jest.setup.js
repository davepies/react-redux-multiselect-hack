// need to polyfill requestAnimationFrame
// https://reactjs.org/blog/2017/09/26/react-v16.0.html#javascript-environment-requirements
import 'raf/polyfill'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
