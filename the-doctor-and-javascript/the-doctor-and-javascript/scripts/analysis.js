console.groupCollapsed('Doctor Who Actors :: for...of');

for (let actor of actors) {
    console.table(actor);
}
    
console.groupEnd();

console.groupCollapsed('Doctor Who :: Array.map()');

    actors.map(actor => console.table(actor));

console.groupEnd();

console.groupCollapsed('Doctor Who :: Full Name');

    actors.map(actor => console.log(actor.first_name, actor.last_name));

    //or another way to do it
    const fullNames = actors.map(doctor => `${doctor.first_name} ${doctor.last_name}`)

    console.table(fullNames);
console.groupEnd();

console.groupCollapsed('Doctor Who Classic Era')

    const classicEra = actors.filter(doctor => (doctor.tenure_start < 2005));

    console.table(classicEra);

console.groupEnd();

console.groupCollapsed('Doctor Who Modern Era')

    const modernEra = actors.filter(doctor => (doctor.tenure_start >= 2005));

    console.table(modernEra);

console.groupEnd();

console.groupCollapsed('Doctor Who Actors Sorted by Length of Tenure');

    const longestTenure = actors
        .sort((a, b) => {
            const lastDoctor = ((a.tenure_end - a.tenure_start) <= 0) ? 1 : (a.tenure_end - a.tenure_start);
            const nextDoctor = ((b.tenure_end - b.tenure_start) <= 0) ? 1 : (b.tenure_end - b.tenure_start);

            a.years = lastDoctor;
            b.years = nextDoctor;

            //same as the ternary operator that follows
            // if (lastDoctor > nextDoctor) {
            //     return -1;
            // } else {
            //     return 1;
            // }
            
            return (lastDoctor > nextDoctor) ? -1 : 1;
        })

        .map(doctor => `${doctor.first_name} ${doctor.last_name} [${doctor.years}]`);
        
    console.table(longestTenure);
console.groupEnd();
console.groupCollapsed('Doctor Who Actors Sorted by First Appearance');
        const firstTenure = actors
        .sort((a,b) => {
            return (a.tenure_start < b.tenure_start) ? -1 : 1;
        })

        .map(doctor => `${doctor.first_name} ${doctor.last_name} [${doctor.tenure_start}]`);

        console.table(firstTenure);
console.groupEnd();
console.groupCollapsed('Doctor Who Actors Sorted by Last Name');
        const lastName = actors
        .sort((a,b) => {
            const firstLastName = a.last_name.toLowerCase();
            const secondLastName = b.last_name.toLowerCase();

            // firstLastName.

            return (firstLastName < secondLastName) ? -1 : 1;
        })

        .map(doctor => `${doctor.last_name}, ${doctor.first_name}`);

        console.table(lastName);
console.groupEnd();
console.groupCollapsed('Top Rate Doctor Who Episodes');
        const topEpisodes = topRated
        .map(episode => `${episode.title} with ${episode.actor} as The Doctor.`);
        console.table(topEpisodes);
console.groupEnd();