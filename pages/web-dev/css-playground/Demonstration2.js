import css from "styled-jsx/css"

const overflowDivStyle = () =>
    css.resolve`
        div {
            border: 5px dashed var(--c0-primary);
            border-radius: 20px;
            margin: 10px;
            width: 300px;
            height: 200px;
            color: black;
            padding: 15px;
            background-color: var(--dark);
            color: var(--c0-primary);
            overflow: auto;
        }
    `

export const Square = ({
    borderColor = "var(--c0-primary-faded)",
    position = "static",
    top = null,
    left = null,
    float = "left",
} = {}) => {
    return (
        <div
            style={{
                position,
                top,
                left,
                float,
                width: "70px",
                height: "70px",
                margin: "5px",
                borderRadius: "20px",
                border: `5px dashed ${borderColor}`,
            }}
        ></div>
    )
}
const SampleParagraph = () => (
    <p>
        This div will overflow. You can use the overflow property when you want to have
        better control of the layout. \ The overflow property specifies what happens if
        content overflows an element's b ox.
    </p>
)
export const OverflowDiv = ({ children = <SampleParagraph />, style = {} } = {}) => {
    const { className, styles } = overflowDivStyle()
    return (
        <div {...{ className, style }}>
            {children} {styles}
        </div>
    )
}

export const PositionExample = ({
    position,
    top = null,
    left = null,
    containerPosition = "static",
} = {}) => {
    return (
        <OverflowDiv style={{ position: containerPosition }}>
            <>
                <p>Look at the green box.</p>
                <Square />
                <Square
                    {...{ position, top, left, borderColor: "var(--c1-secondary)" }}
                />
                <Square />
                <SampleParagraph />
            </>
        </OverflowDiv>
    )
}

export const FloatExample = ({ float = left } = {}) => (
    <OverflowDiv>
        <Square {...{ float }} />
        <SampleParagraph />
    </OverflowDiv>
)

const Demonstration = () => {
    return <OverflowDiv />
}

export default Demonstration
