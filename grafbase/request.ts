// query User {
//   userCollection(first: 10) {
//     edges {
//       node {
//         id
//       }
//     }
//   }
// }

// mutation InitUserPlanet {
//   userCreate(input: {name: "myname", planet: {create: {name: "myplanet"}}}) {
//     user {
//       id
//       planet {
//         id
//       }
//     }
//   }
// }

// mutation UserDelete {
//   userDelete(by: {id: "user_01H7RG2FQCA4RMDDDXYT1XZ6C9"}) {
//     deletedId
//   }
// }

export const PlanetByIdQuery = `
query GetPlanetById($id: ID!) {
  planet(by: {id: $id}) {
    id
    name
    metalMineLevel
    crystalMineLevel
    deuteriumMineLevel
    updatedAt
    resources {
      metal
      crystal
      deuterium
      updatedAt
    }
    fleet {
      lightFighterCount
    }
  }
}`;

export const planetCollectionQuery = `{
  planetCollection(first: 10) {
    edges {
      node {
        id
        name
      }
    }
  }
}`;

export const upgradeMetalMineByPlanetId = `
mutation UpgradeMetalMineByPlanetId($id: ID!) {
  planetUpdate(by: {id: $id}
    input: {
      metalMineLevel: {increment:1}
    }
  ) {
    planet {
      name
      id
      metalMineLevel
    }
  }
}`;
