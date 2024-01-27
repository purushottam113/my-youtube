export const RandomNameGenrator = ()=>{
    
    // Arrays of names
    const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown"];
    
    // Function to generate a random name
    function generateRandomName() {
        const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
        const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);

        const randomFirstName = firstNames[randomFirstNameIndex];
        const randomLastName = lastNames[randomLastNameIndex];

        return randomFirstName + " " + randomLastName;
    }

    // Example usage
    const randomName = generateRandomName();
    return randomName;

}