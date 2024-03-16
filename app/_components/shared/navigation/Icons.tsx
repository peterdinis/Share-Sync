import { SVGProps } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { SiFiles } from "react-icons/si";

export function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return <SiFiles {...props} />;
}

export function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return <CiMenuBurger {...props} />;
}
