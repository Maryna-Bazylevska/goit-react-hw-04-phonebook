import PropTypes from 'prop-types';
import { Wrapper, Input } from './Filter.styles';
const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <label>
        <p>Find contacts for name</p>
        <Input type="text" value={value} onChange={onChange} />
      </label>
    </Wrapper>
  );
};
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
