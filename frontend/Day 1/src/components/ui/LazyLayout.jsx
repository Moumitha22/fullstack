import { Suspense } from "react";
import PropTypes from 'prop-types';

import Loader from "./Loader";

const LazyLayout = ({ component : Component, ...rest }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Component {...rest} />
        </Suspense>
    )
}


LazyLayout.propTypes = {
    component:PropTypes.elementType.isRequired
}

export default LazyLayout;