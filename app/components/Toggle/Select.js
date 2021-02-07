import styled from 'styled-components';
import { device } from '../../containers/App/deviceBreakpoints';

const Select = styled.select`
  line-height: 1em;
  background-color: transparent;
  border-style: none;
  color: #fff;
  width: 70px;
  font-size: 14px;
  @media ${device.mobileL} {
    font-size: 12px;
  }
`;

export default Select;
