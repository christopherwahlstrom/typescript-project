console.log("Hello World");

interface DinosaurData {
    dinosaur: string;
    legs: number;
}

const data: DinosaurData[] = [
    {
    dinosaur: 'Triceratops',
    legs: 4
    },
    {
        dinosaur: 'Tyrannosaurus',
        legs: 2
    }
]


printDinos(data)

function printDinos(dinos: DinosaurData[]){    
dinos.forEach(dino => {
    console.log(dino.dinosaur);
});
}
