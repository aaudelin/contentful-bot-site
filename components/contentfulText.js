export default function ContentfulText({text}) {
    return (
        <span className="text-rose-700">{text ?? "Contentful"}</span>
    );
}