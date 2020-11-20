import css from "styled-jsx/css"

type OverflowType = "visible" | "hidden" | "clip" | "scroll" | "auto"

const overflowDivSyle = (overflow: OverflowType) =>
    css.resolve`
        div {
            border: 5px dashed var(--c0-primary);
            width: 400px;
            height: 100px;
            color: black;
            background-color: var(--dark);
            color: var(--c0-primary);
            overflow: ${overflow};
        }
    `

export const OverflowDiv = () => {
    const { className, styles } = overflowDivSyle("auto")
    return (
        <div className={className}>
            <p>
                This div will overflow. You can use the overflow property when you want to
                have better control of the layout. \ The overflow property specifies what
                happens if content overflows an element's box.
            </p>
            {styles}
        </div>
    )
}

const Demonstration = () => {
    return <OverflowDiv />
}

export default Demonstration
