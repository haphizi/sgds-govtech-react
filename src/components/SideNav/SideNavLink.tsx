import NavLink, { NavLinkProps } from '../Nav/NavLink';
import * as React from 'react';
import { BsPrefixRefForwardingComponent } from '../helpers';
import SideNavContext from './SideNavContext';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface SideNavLinkProps extends Omit<NavLinkProps, 'eventKey'> {
  eventKey: string;
}

const propTypes = {
  eventKey: PropTypes.string.isRequired
}
const SideNavLink: BsPrefixRefForwardingComponent<'a', SideNavLinkProps> =
  React.forwardRef<HTMLAnchorElement, SideNavLinkProps>(
    ({ eventKey, ...props }, ref) => {
      const {  activeLinkKey } = React.useContext(SideNavContext);
      return (
        <NavLink
          {...props}
          ref={ref}
          eventKey={eventKey}
          className={classNames( activeLinkKey === eventKey && 'active' )}
        />
      );
    }
  );

  SideNavLink.displayName = 'SideNavLink'
  SideNavLink.propTypes = propTypes
export default SideNavLink;