export const users = [];

export const createUser = (id, name) => {
    return {
        id,
        name,
        matches: [],
        totalScore: 0
    };
    
};


export const procesarUsuario = (usuario, match, score) => {
    return {
        ...usuario,
        matches: [...usuario.matches, match],
        totalScore: usuario.totalScore + score
    };
};



// deberiamos pasar al comonente equipo al usuario como prop
// usar localstorage para guardar los usuarios y los puntos
// const userIndex = users.findIndex(u => u.id === user.id);
// if (userIndex !== -1) {
//     users[userIndex].matches.push({
//         match: equipo,
//         result: {
//             equipo1: inputs.equipo1,
//             equipo2: inputs.equipo2
//         },
//         score: puntaje
//     });
//     users[userIndex].totalScore += puntaje;
// } else {
//     console.error("User not found");
// }