import React from "react";
import { PersonImage } from "./PersonImage";
import { Person, persons } from "./persons";

export const BandImage = () => {
    const [activePersons, setActivePersons] = React.useState<Record<Person["name"], boolean>>({});

    const togglePerson = (name: Person["name"]) => {
        setActivePersons((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <div style={{ position: "relative" }}>
            {persons.map((person) => (
                <PersonImage
                    key={person.name}
                    person={person}
                    isActive={!!activePersons[person.name]}
                    onClick={() => togglePerson(person.name)}
                />
            ))}
        </div>
    );
};
