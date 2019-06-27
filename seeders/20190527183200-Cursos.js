'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cursos', [{
      /*nombre: 'Historia geológica de la Tierra',
      descripcion: 'La historia geológica de la Tierra estudia los principales eventos del pasado terrestre según la escala temporal geológica, un sistema de medidas basado en el estudio de las capas rocosas del planeta (estratigrafía). La Tierra se formó hace unos 4540 millones de años por acumulación de la nebulosa solar, una masa de gas y polvo en forma de disco, residuo de la formación del Sol, de la que también se creó el resto del sistema solar. Poco después se formó la Luna, posiblemente como resultado de una fuerte colisión oblicua con un cuerpo del tamaño de Marte, de un 10 % de la masa terrestre. Parte de este objeto se incrustó en la Tierra, alterando de forma significativa su composición interna, y parte fue eyectada hacia el espacio. Parte del material sobrevivió y originó el satélite que orbita la Tierra. La desgasificación y la actividad volcánica produjeron la atmósfera primaria. El vapor de agua condensado, aumentado por el hielo procedente de los cometas, dio origen a los océanos. La superficie fue cambiando continuamente de forma a lo largo de millones de años, y de esta manera se formaron los continentes, se separaron, migraron por la superficie, combinándose ocasionalmente para formar supercontinentes. Hace unos 750 Ma, comenzó a separarse el supercontinente más antiguo, Rodinia. Los continentes volvieron a unirse para formar Pannotia hace 540 Ma, y finalmente Pangea, que se separó hace 200 Ma. El actual patrón de glaciaciones comenzó hace unos 40 Ma, y se intensificó a finales del Plioceno. Desde entonces, las regiones polares han experimentado varios ciclos de glaciación y deshielo, que se repiten cada 40 000-100 000 años. El último periodo glacial de la actual glaciación finalizó hace unos 10 000 años.',
      ruta: null,
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {*/
      nombre: 'Álgebra',
      descripcion: 'Curso de Álgebra.',
      ruta: '/algebra',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      nombre: "Cálculo I",
      descripcion: "Curso de Cálculo I",
      ruta: "/calculo1",
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      nombre: "Álgebra Lineal",
      descripcion: "Curso de Álgebra Lineal",
      ruta: "/lineal",
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      nombre: "Cálculo II",
      descripcion: "Curso de Cálculo II",
      ruta: "/calculo2",
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cursos', null, {});
  }
};
