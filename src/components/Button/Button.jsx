// src/components/Button/Button.jsx

/**
 * A reusable pill-shaped call-to-action link, styled with the brand
 * gradient and a visible focus ring for keyboard accessibility.
 *
 * Renders as an `<a>` rather than a `<button>` since it's meant to
 * navigate to a real destination rather than trigger an in-page action.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The button's visible label/content.
 * @param {string} props.href - The URL this button navigates to.
 */


function Button({ children, href }) {
    return (
        <a
        href={href}
        className="inline-block focus-ring focus-ring-navy w-full rounded-full bg-navy-950 py-4 text-center font-bold text-white text-[1.125rem] leading-[1.3] transition-colors duration-200 hover:bg-linear-to-b hover:from-button-gradient-from hover:to-button-gradient-to"
        >{children}</a>
    );
}

export default Button;