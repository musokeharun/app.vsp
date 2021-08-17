import React from "react";
import Navigation from './Navigation'

export default Navigation

export const navigationRef = React.createRef();

export const navigate = (name, params) => navigationRef.current?.navigate(name, params);
