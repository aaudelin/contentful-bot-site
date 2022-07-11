export default function Anchor({name}) {
    return (
        <a style={{
            display: "block",
            position: "relative",
            top: "-250px",
            visibility: "hidden"
        }} id={name}></a>
    )
}