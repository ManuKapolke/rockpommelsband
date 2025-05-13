import { useState } from "react";
import { PersonImage } from "./PersonImage";
import { Person, persons } from "./persons";

export const BandImage = () => {
    const [activePersons, setActivePersons] = useState<Record<Person["name"], boolean>>({});
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const togglePerson = (name: Person["name"]) => {
        setActivePersons((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    // Find maximum dimensions needed for the container
    const maxWidth = "800px"; // Set reasonable container size based on your images
    const maxHeight = "600px"; // Set reasonable container size based on your images

    console.log({ hoveredIndex });


    return (
        <div
            style={{
                position: "relative",
                width: maxWidth,
                height: maxHeight,
                margin: "0 auto" // Center the container
            }}
        >
            {persons.map((person, index) => (
                <PersonImage
                    key={person.name}
                    person={person}
                    isActive={!!activePersons[person.name]}
                    onClick={() => togglePerson(person.name)}
                    zIndex={hoveredIndex === index ? persons.length : persons.length - index - 1}
                    onHoverChange={(isHovered) => {
                        setHoveredIndex(isHovered ? index : null);
                    }}
                />
            ))}
        </div>
    );
};
