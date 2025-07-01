import { lazy } from "react";

const SignIn = lazy(() => import("./auth/SignIn"));
const SignUp = lazy(() => import("./auth/SignUp"));
const Students = lazy(() => import("./logs/Students"));
const Driver = lazy(() => import("./logs/Driver"));
const Logs = lazy(() => import("./logs/Index"));
const Products = lazy(() => import("./Product"));

export { SignIn, SignUp, Students, Driver, Logs, Products };
