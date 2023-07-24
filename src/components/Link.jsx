import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo, forwardRef } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


export default function RouterLink({ icon, primary, to }) {

    const CustomLink = useMemo(
        () =>
            forwardRef(function LinkCustom(
                linkProps,
                ref,
            ) {
                return <Link ref={ref} to={to} {...linkProps} />;
            }),
        [to],
    );

    return (
        <li>
            <ListItemButton component={CustomLink}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary} />
            </ListItemButton>
        </li>
    );
}

RouterLink.propTypes = {
    icon: PropTypes.element.isRequired,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}