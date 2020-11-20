import css from "styled-jsx/css"

type OverflowType = "visible" | "hidden" | "clip" | "scroll" | "auto"

const overflowDivSyle = (
    overflow: OverflowType,
    height: Number = 100,
    width: Number = 300
) =>
    css.resolve`
        div {
            border: 5px dashed var(--c0-primary);
            border-radius: 20px;
            width: ${width}px;
            height: ${height}px;
            color: black;
            background-color: var(--dark);
            color: var(--c0-primary);
            overflow: ${overflow};
        }
    `

const SampleParagraph = () => (
    <p>
        This div will overflow. You can use the overflow property when you want to have
        better control of the layout. \ The overflow property specifies what happens if
        content overflows an element's b ox.
    </p>
)
export const OverflowDiv = ({ children = <SampleParagraph /> }) => {
    const { className, styles } = overflowDivSyle("auto")
    return (
        <div className={className}>
            {children} {styles}
        </div>
    )
}

const Demonstration = () => {
    return <OverflowDiv />
}

export default Demonstration
