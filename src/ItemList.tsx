import Item from "./Item";

const resources = [
    {
        id: 1,
        time: "6/1/2025",
        desc: "Go to doctors"

    },
    {
        id: 2,
        time: "6/2/2025",
        desc: "Go to Bed"

    },
    {
        id: 3,
        time: "6/3/2025",
        desc: "Get married"

    },
]

export default function ItemList() {
    return (
        <div className="border border-danger p-2">
            <h2 className="text-center">Schedule</h2>
            {resources.map(resource => <Item key={resource.id} date={resource.time} description={resource.desc} />)}
        </div>
    )
}