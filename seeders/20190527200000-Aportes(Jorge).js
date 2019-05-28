'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "es_MX";

var id_usuario = 1;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Aportes', [{
      id_usuario: id_usuario,
      titulo: 'Precámbrico - Eón Hádico',
      descripcion: 'El precámbrico abarca aproximadamente el 90 % del tiempo geológico. Se extiende desde hace 4600 millones de años al comienzo del periodo Cámbrico (alrededor de 541 Ma. Incluye tres eones: el Hádico, el Arcaico y el Proterozoico.',
      contenido: 'Durante la época Hádica (4,6 – 4 Ga), el sistema solar estaba formándose, probablemente dentro de una gran nube de gas y polvo que rodeaba el sol, llamada disco de acrecimiento, a partir de la cual se formó la Tierra hace unos 4500 millones de años. El eón Hádico no ha sido oficialmente reconocido, pero marca el tiempo del que no existe un registro adecuado de rocas sólidas. Las más antiguas que se han datado se remontan a unos 4400 Ma. En principio, la Tierra se encontraba en estado líquido debido a la extrema actividad volcánica y a las frecuentes colisiones con otros cuerpos celestes. Cuando el agua comenzó a acumularse en la atmósfera, la capa externa del planeta se enfrió y formó una corteza terrestre sólida. Poco después se formó la Luna, posiblemente como resultado de una fuerte colisión oblicua4​ con un cuerpo del tamaño de Marte (un 10% de la masa terrestre).5​ Parte de este objeto se incrustó en la Tierra, alterando de forma significativa su composición interna, y parte fue eyectada hacia el espacio. Parte del material sobrevivió y originó el satélite que orbita la Tierra. La desgasificación y la actividad volcánica produjeron la atmósfera primaria. El vapor de agua condensado, aumentado por el hielo procedente de los cometas, dio origen a los océanos. Durante el Hádico se produjo el bombardeo intenso tardío (aproximadamente hace 3800-4100 millones de años), durante el que se cree que se formaron un gran número de cráteres de impactos en la Luna, y por deducción, también en la Tierra, Mercurio, Venus y Marte.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Precámbrico - Eón Arcaico',
      descripcion: 'El precámbrico abarca aproximadamente el 90 % del tiempo geológico. Se extiende desde hace 4600 millones de años al comienzo del periodo Cámbrico (alrededor de 541 Ma. Incluye tres eones: el Hádico, el Arcaico y el Proterozoico.',
      contenido: 'Al principio del Eón Arcaico (hace 4000-2500 millones de años) la tectónica de la Tierra era probablemente distinta. En esa época, la corteza terrestre se enfrió lo suficiente para que se comenzaran a formar las rocas y las placas continentales. Algunas corrientes de la Geología sostienen que el calor que acumulaba el planeta causó que la actividad tectónica fuera más intensa que en la actualidad, lo que dio como resultado un reciclado más activo de los materiales de la corteza, lo que habría evitado la cratonización y la formación de continentes hasta que el manto terrestre se enfrió y se ralentizó su convección. Otras argumentan que el manto litosférico subcontinental es demasiado ligero para sufrir una subducción y la escasez de rocas del eón Arcaico es una consecuencia de la erosión y de los acontecimientos tectónicos derivados.En contraste con el Proterozoico, las rocas del Arcaico se encuentran a menudo en forma de sedimentos submarinos muy metamorfoseados, como las grauvacas, lutitas y sedimentos volcánicos de hierro bandeado. Los cinturones de rocas verdes son formaciones típicas del Arcaico, consistentes en capas alternas de rocas metamórficas de alto y bajo grado. Las rocas de alto grado derivaron de los arcos insulares volcánicos, mientras que las rocas metamórficas de bajo grado son sedimentos submarinos erosionados de las islas vecinas, depositados en la ensenada de un retroarco. En resumen, los cinturones de rocas verdes son protocontinentes fusionados. Hace unos 3500 millones de años, se estableció el campo magnético de la Tierra. El flujo de viento solar era aproximadamente 100 veces mayor que el actual, por lo que la presencia de un campo magnético ayudó a evitar la desaparición de la atmósfera del planeta, que fue probablemente lo que sucedió con la atmósfera de Marte. No obstante, su intensidad era menor que la actual y la longitud del radio de la magnetosfera era aproximadamente la mitad que la del radio moderno.​',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Precámbrico - Eón Proterozoico',
      descripcion: 'El precámbrico abarca aproximadamente el 90 % del tiempo geológico. Se extiende desde hace 4600 millones de años al comienzo del periodo Cámbrico (alrededor de 541 Ma. Incluye tres eones: el Hádico, el Arcaico y el Proterozoico.',
      contenido: 'El registro geológico del Proterozoico (hace 2500-541 millones de años) es más completo que el del eón precedente, el Arcaico. A diferencia de los depósitos submarinos del Arcaico, el Proterozoico presenta numerosos estratos depositados en extensos mares epicontinentales de poca profundidad. Además, muchas de esas rocas están menos metamorfoseadas que las de la era Arcaica, y en numerosas ocasiones se encuentran inalteradas. El estudio de estas rocas muestra que el eón evidencia un rápido crecimiento continental (característica del Proterozoico), ciclos supercontinentales y una actividad orogénica totalmente moderna.10​ Hace unos 750 millones de años11​ comenzó a desgajarse el supercontinente más antiguo que se conoce, Rodinia. Después se recombinaron los continentes para formar Pannotia, hace entre 600 – 540 millones de años.Las primeras glaciaciones conocidas se produjeron durante el Proterozoico: una comenzó muy al principio del eón, y hubo al menos cuatro durante el Neoproterozoico, llegando a su máxima expresión durante la «Tierra bola de nieve» o glaciación global.​',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Proterozoico',
      descripcion: 'El registro geológico del Proterozoico (hace 2500-541 millones de años) es más completo que el del eón precedente, el Arcaico.',
      contenido: 'A diferencia de los depósitos submarinos del Arcaico, el Proterozoico presenta numerosos estratos depositados en extensos mares epicontinentales de poca profundidad. Además, muchas de esas rocas están menos metamorfoseadas que las de la era Arcaica, y en numerosas ocasiones se encuentran inalteradas.​ El estudio de estas rocas muestra que el eón evidencia un rápido crecimiento continental (característica del Proterozoico), ciclos supercontinentales y una actividad orogénica totalmente moderna. Hace unos 750 millones de años​ comenzó a desgajarse el supercontinente más antiguo que se conoce, Rodinia. Después se recombinaron los continentes para formar Pannotia, hace entre 600 – 540 millones de años. Las primeras glaciaciones conocidas se produjeron durante el Proterozoico: una comenzó muy al principio del eón, y hubo al menos cuatro durante el Neoproterozoico, llegando a su máxima expresión durante la «Tierra bola de nieve» o glaciación global.​',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico',
      descripcion: 'El Fanerozoico es el eón actual de la escala geológica.',
      contenido: 'Abarca alrededor de 514 millones de años. Durante este periodo se produjo la deriva de los continentes, finalmente reunidos en una única masa terrestre conocida como Pangea, que después se dividió para formar los modernos continentes. El Fanerozoico se divide en tres eras: el Paleozoico, el Mesozoico y el Cenozoico.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Paleozoica',
      descripcion: 'El Fanerozoico es el eón actual de la escala geológica.',
      contenido: 'El Paleozoico se extiende de 541 a 252 millones de años atrás​ y se divide en seis períodos geológicos, que del más lejano al más cercano son: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico. Geológicamente, el Paleozoico comienza poco después de la división del supercontinente llamado Pannotia y el fin de una era glacial global. Durante el principio de esta era, la masa terrestre de la Tierra se escindió en numerosos continentes relativamente pequeños. Hacia su final, estos continentes se unieron en un supercontinente denominado Pangea, que comprendía la mayor parte del área terrestre del planeta.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Paleozoica - Periodo Cámbrico',
      descripcion: 'El Paleozoico se extiende de 541 a 252 millones de años atrás​ y se divide en seis períodos geológicos, que del más lejano al más cercano son: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico.',
      contenido: 'El Cámbrico es una división de la escala temporal geológica que comienza hace 541,0 ± 1,0 millones de años.​ Se cree que los continentes de este periodo fueron el resultado de la división de un supercontinente neoproterozoico llamado Pannotia. En el Cámbrico, las áreas con agua parecen haber sido muy abundantes y poco profundas, y el índice de deriva continental, anormalmente alto. Laurentia, Báltica y Siberia se convirtieron en continentes independientes tras la escisión del supercontinente Pannotia, y Gondwana comenzó su deriva hacia el Polo Sur. El océano Panthalassa cubría la mayor parte del hemisferio sur, y existían otros océanos menores, como el Proto-Tetis, el Jápeto y el Janty.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Paleozoica - Periodo Ordovícico',
      descripcion: 'El Paleozoico se extiende de 541 a 252 millones de años atrás​ y se divide en seis períodos geológicos, que del más lejano al más cercano son: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico.',
      contenido: 'El periodo Ordovícico comienza con una extinción masiva denominada extinción del Cámbrico-Ordovícico, hace unos 485,4 ± 1,9 millones de años.2​ Durante este periodo, los continentes del sur se unieron en un solo continente llamado Gondwana, que comenzó el periodo en latitudes ecuatoriales y se movió hacia el Polo Sur a lo largo del Ordovícico.Durante el Ordovícico Inferior (la primera época), los continentes de Laurentia, Báltica y Siberia aún eran independientes, formados tras la escisión de Pannotia, pero a medida que avanzaba el periodo, Báltica comenzó a desplazarse hacia Laurentia, lo que provocó la desaparición del océano Jápeto que se encontraba entre ambos. El microcontinente de Avalonia se separó de Gondwana y comenzó a moverse hacia el norte, hacia Laurentia, formando como resultado el océano Reico. Hacia el final del periodo, Gondwana se encontraba muy próximo al polo y estaba congelado en su mayor parte. El Ordovícico terminó con una serie de extinciones que, en conjunto, forman segunda extinción masiva más importante de la historia de la Tierra en cuanto al porcentaje de géneros extinguidos, solo por detrás de la extinción masiva del Pérmico-Triásico. Estos hechos ocurrieron aproximadamente hace unos 447-444 millones de años,​ y marcan el límite entre el Ordovícico y el siguiente periodo, el Silúrico. La teoría más aceptada es que estos acontecimientos fueron causados por el comienzo de una era glacial en la etapa Hirnantiense que terminó con las estables condiciones de invernadero típicas del Ordovícico. Es probable que la glaciación fuera más corta de lo que se pensó en un principio: el estudio de los isótopos del oxígeno en los fósiles de braquiópodos muestra que posiblemente duró solo entre 0,5 y 1,5 millones de años.​ La extinción masiva vino precedida de una reducción del dióxido de carbono atmosférico (de 7000 a 4400 ppm) que afectó de forma selectiva a los mares poco profundos en los que vivían la mayoría de los organismos. Cuando el supercontinente Gondwana se desplazó hacia el Polo Sur, se cubrió de capas de hielo, como prueban los estratos rocosos del Ordovícico Superior de África del Norte y la entonces adyacente Sudamérica, que en esa época se encontraban en el Polo Sur.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Paleozoica - Periodo Silúrico',
      descripcion: 'El Paleozoico se extiende de 541 a 252 millones de años atrás​ y se divide en seis períodos geológicos, que del más lejano al más cercano son: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico.',
      contenido: 'El Silúrico es una división de la escala temporal geológica que comenzó hace unos 443,8 ± 1,5 millones de años.2​ Durante el Silúrico, Gondwana siguió desplazándose lentamente hacia latitudes del sur, pero existen pruebas de que las capas de hielo de este periodo eran menos extensas que las de la última glaciación del Ordovícico. La fusión de las capas de hielo y de los glaciares contribuyó a un aumento de los niveles del mar, reconocible por que los sedimentos silúricos se depositaron sobre sedimentos ordovícicos erosionados, dando lugar a una discordancia. Otro cratones y fragmentos de continentes se desplazaron hasta juntarse cerca del ecuador, comenzando la formación de un segundo supercontinente, conocido como Euramérica. El océano Panthalassa cubría la mayor parte del hemisferio sur, y existían otros océanos menores, como el Proto-Tetis, el Paleo-Tetis, el océano Reico, una vía marítima del océano Jápeto (entre Avalonia y Laurentia) y el recién formado océano Ural.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Paleozoica - Periodo Devónico',
      descripcion: 'El Paleozoico se extiende de 541 a 252 millones de años atrás​ y se divide en seis períodos geológicos, que del más lejano al más cercano son: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico.',
      contenido: 'El Devónico se extiende de 419 a 5-359 millones de años atrás.2​ Fue una época de fuerte actividad tectónica, al acercarse Laurasia y Gondwana. El continente de Euramérica, también conocido como Laurusia se formó al principio del Devónico por la colisión de Laurentia y Báltica, que rotó hacia la zona seca que se extiende a lo largo del trópico de Capricornio. En esas áreas casi desérticas se formaron lechos sedimentarios de arenisca roja antigua, que tomaron su color del óxido férrico de la hematita característica de los climas muy secos. Pangea comenzó a consolidarse cerca del ecuador a partir de las placas de Norteamérica y Europa, elevando la parte norte de los montes Apalaches y formando las montañas Caledonianas en Gran Bretaña y Escandinavia. Los continentes del sur siguieron unidos en el supercontinente de Gondwana. El resto de la moderna Eurasia quedaba en el hemisferio norte. El nivel del mar era alto en todo el mundo, y buena parte de la tierra estaba sumergida bajo mares de poca profundidad. El enorme y profundo océano Panthalassa (el «océano universal») cubría el resto del planeta. Otros océanos menores eran el Paleo-Tetis, el Reico y el Ural (que se cerró tras la colisión con Siberia y Báltica).',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Paleozoica - Periodo Carbonífero',
      descripcion: 'El Paleozoico se extiende de 541 a 252 millones de años atrás​ y se divide en seis períodos geológicos, que del más lejano al más cercano son: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico.',
      contenido: 'El Carbonífero abarca de hace unos 358,9 ± 0,4 a 298,9 ± 0,15 millones de años. El descenso global del nivel del mar a finales del Devónico se invirtió a principio del Carbonífero, creando numerosos mares epicontinentales y provocando la deposición de carbonatos misisípicos. También hubo una caída de las temperaturas en el Polo Sur: el sur de Gondwana estuvo helado durante ese periodo, aunque no es seguro si la capa de hielo era un remanente del Devónico. Estas condiciones no parecen haber tenido mucha influencia en los trópicos, donde florecieron los pantanos carboníferos. A mediados del periodo, un descenso del nivel del mar precipitó una extinción marina masiva que afectó de forma particularmente severa a los crinoideos y a los amonites. Este descenso del nivel marítimo y la discordancia asociada a él que se aprecia en Norteamérica separan el periodo Misisípico del Pensilvánico. El Carbonífero fue una época de fuerte orogénesis provocada por la formación del supercontinente Pangea. Los continentes del sur siguieron fusionados en el supercontinente Gondwana, que colisió con Euramérica (Laurusia) a lo largo de la actual línea de la costa este de Norteamérica. Esta colisión continental dio como resultado la orogenia varisca en Europa y la orogenia apalache en Norteamérica; también se formaron las montañas Ouachita, que en un principio fueron una extensión hacia el sudoeste de los recién formados montes Apalaches.​ En la misma época se soldó con Europa la mayor parte de la placa Euroasiática a lo largo de los montes Urales. En el Carbonífero había dos grandes océanos: el Panthalassa y el Paleo-Tetis. También se formaron otros océanos menores, como el Reico —generado por la fusión de América del Norte y del Sur—, el pequeño océano Ural, poco profundo —formado por la colisión los continentes de Báltica y Siberia, que dio lugar a los montes Urales— y el océano Proto-Tetis.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Paleozoica - Periodo Pérmico',
      descripcion: 'El Paleozoico se extiende de 541 a 252 millones de años atrás​ y se divide en seis períodos geológicos, que del más lejano al más cercano son: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico.',
      contenido: 'El Pérmico se extiende de hace unos 298,9 ± 0,15 a 252,17 ± 0,06 millones de años. Durante el Pérmico, todas las grandes masas terrestres de la Tierra, excepto ciertas partes de Asia, se unieron en un solo supercontinente conocido como Pangea, que se extendía a ambos lados del ecuador y llegaba a los polos, con el correspondiente efecto en las corrientes oceánicas del único gran océano, Panthalassa, el «mar universal», y el océano Paleo-Tetis, un gran mar situado entre Asia y Gondwana. El continente Cimmeria se desplazó desde Gondwana al norte, hacia Laurasia, provocando la reducción del océano Paleo-Tetis. En su extremo sur se formaba un nuevo océano, el Tetis, que dominaría buena parte del Mesozoico. Las grandes masas continentales crearon climas con variaciones extremas de calor y frío (clima continental) y condiciones monzónicas con patrones de precipitaciones muy asociados a las estaciones. En Pangea parecen haber abundado los desiertos.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Mesozoica',
      descripcion: 'El Fanerozoico es el eón actual de la escala geológica.',
      contenido: 'El Mesozoico se extiende de hace unos 252 a hace 66 millones de años. Tras la fuerte actividad tectónica de finales del Paleozoico, la deformación del Mesozoico resulta comparativamente leve. No obstante, la era vio la dramática ruptura del supercontinente Pangea, que se dividió gradualmente en un continente norte, Laurasia, y otro al sur, Gondwana. Esta división creó el talud continental que caracteriza la mayor parte de la costa Atlántica actual.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Mesozoica - Periodo Triásico',
      descripcion: 'El Mesozoico se extiende de hace unos 252 a hace 66 millones de años.',
      contenido: 'El Triásico abarca de hace unos 252,17 ± 0,06 a hace 201,3 ± 0,2 millones de años. Durante el Triásico, casi toda la masa terrestre del planeta se concentraba en un solo supercontinente centrado más o menos en el ecuador, llamado Pangea («toda la tierra»). Este supercontinente tomó la forma de un Pac-Man gigante, en el que la «boca», orientada al Este, constituía el mar de Tetis, un enorme golfo que se abrió más hacia el oeste a mediados del Triásico a expensas del decreciente océano Paleo-Tetis, un mar que existía durante el Paleozoico. El resto estaba ocupado por el océano mundial conocido como Panthalassa («todo el mar»). Los sedimentos depositados en el fondo de los océanos durante el Triásico han desaparecido por la subducción de las placas oceánicas, por lo que se conoce muy poco sobre los océanos abiertos del Triásico. El supercontinente Pangea se desgajó durante el Triásico —sobre todo a finales del período— pero aún no se dividió. Los primeros sedimentos no marinos del rift marcan la separación inicial de Pangea —que separó Nueva Jersey de Marruecos— y se remontan al Triásico Superior. A causa de la costa limitada de una sola masa continental, los depósitos marinos del Triásico son relativamente raros en todo el mundo, a pesar de su prominencia en Europa Occidental, donde se estudió por primera vez este período. Por tanto, la estratigrafía triásica se basa sobre todo en organismos que vivieron en lagos y entornos hipersalinos, como los crustáceos estheria y vertebrados terrestres.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Mesozoica - Periodo Jurásico',
      descripcion: 'El Mesozoico se extiende de hace unos 252 a hace 66 millones de años.',
      contenido: 'El periodo Jurásico abarca de hace unos 201,3 ± 0,2 a hace 145 millones de años. Al principio del Jurásico, el supercontinente Pangea se fragmentó en el continente norte Laurasia y el supercontinente sur Gondwana. El golfo de México se abrió en el nuevo rift entre Norteamérica y lo que hoy es la península del Yucatán. El Atlántico Norte del Jurásico era relativamente estrecho, mientras que el Atlántico Sur no se formó hasta el siguiente periodo, el Cretáceo, cuando se dividió Gondwana. Se cerró el océano Tetis y apareció la ensenada Neotetis. Los climas eran templados, sin evidencias de glaciaciones. Al igual que en el Triásico, parece que no había ni tierras ni grandes extensiones de hielo cerca de los polos terrestres. En Europa oriental hay un buen registro geológico del Jurásico: las extensas secuencias marinas son indicio de una época en la que buena parte del continente estaba sumergido bajo mares tropicales poco profundos, como puede verse en el sitio Patrimonio de la Humanidad de la costa Jurásica, o en los célebres lagerstätten de Holzmaden y Solnhofen.​ Por el contrario, el registro jurásico en Norteamérica es el más escaso del Mesozoico, con pocos afloramientos en la superficie.​ Aunque el mar epicontinental de Sundance dejó depósitos marinos en zonas de las llanuras norte de Estados Unidos y Canadá a finales del Jurásico, la mayor parte de los sedimentos expuestos de este periodo son continentales, como los depósitos aluviales de la formación Morrison. También hay exposiciones jurásicas en Rusia, India, América del Sur, Japón, Australasia y el Reino Unido.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Mesozoica - Periodo Cretáceo',
      descripcion: 'El Mesozoico se extiende de hace unos 252 a hace 66 millones de años.',
      contenido: 'El periodo Cretácico o Cretáceo abarca de hace unos 145 a hace 66 millones de años. Durante el Cretáceo, el supercontinente de Pangea, aparecido entre finales del Paleozoico y principios del Mesozoico, completó su división en los continentes actuales, aunque sus posiciones eran muy diferentes a las de hoy. Al ensancharse el océano Atlántico, las orogenias convergentes que se habían creado continuaron en la cordillera Americana. Aunque Gondwana seguía intacto al principio del Cretácico, se fragmentó cuando Sudamérica, la Antártida y Australia se separaron de África (aunque India y Madagascar se mantuvieron unidas). De esta manera se formaron el Atlántico Sur y el océano Índico. Esta actividad originó grandes cadenas montañosas submarinas a lo largo de las líneas de separación entre placas, lo que elevó el nivel del mar en todo el mundo. Al norte de África, el mar de Tetis siguió estrechándose. A lo largo de Norteamérica y Europa avanzaron los mares poco profundos, que retrocedieron más adelante en este periodo, dejando espesos depósitos marinos entre lechos carboníferos. En el cénit de la transgresión cretácica, un tercio de la actual masa terrestre de la Tierra estaba sumergida. El cretáceo es célebre por sus cretas. De hecho, se formó más creta en el Cretáceo que en ningún otro periodo del Fanerozoico.​ La actividad de la dorsal mediooceánica —o mejor, la circulación de agua marina a través de las crestas— enriqueció de calcio los océanos, lo que aumentó su saturación, además de incrementar la disponibilidad de este elemento para el nanoplancton calcáreo.​ Estos extendidos carbonatos y otros depósitos sedimentarios hacen el registro rocoso cretáceo especialmente óptimo. Entre las más célebres formaciones de Norteamérica están la de Smoky Hill Chalk en Kansas y la fauna terrestre de finales del Cretácico de la formación Hell Creek. También en Europa y China existen importantes exposiciones cretácicas. En la zona que hoy ocupa India se depositaron muy a finales del Cretáceo y a principios del Paleoceno grandes lechos de lava denominados traps del Decán.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Mesozoica - Periodo Triásico',
      descripcion: 'El Mesozoico se extiende de hace unos 252 a hace 66 millones de años.',
      contenido: 'El Triásico abarca de hace unos 252,17 ± 0,06 a hace 201,3 ± 0,2 millones de años. Durante el Triásico, casi toda la masa terrestre del planeta se concentraba en un solo supercontinente centrado más o menos en el ecuador, llamado Pangea («toda la tierra»). Este supercontinente tomó la forma de un Pac-Man gigante, en el que la «boca», orientada al Este, constituía el mar de Tetis, un enorme golfo que se abrió más hacia el oeste a mediados del Triásico a expensas del decreciente océano Paleo-Tetis, un mar que existía durante el Paleozoico. El resto estaba ocupado por el océano mundial conocido como Panthalassa («todo el mar»). Los sedimentos depositados en el fondo de los océanos durante el Triásico han desaparecido por la subducción de las placas oceánicas, por lo que se conoce muy poco sobre los océanos abiertos del Triásico. El supercontinente Pangea se desgajó durante el Triásico —sobre todo a finales del período— pero aún no se dividió. Los primeros sedimentos no marinos del rift marcan la separación inicial de Pangea —que separó Nueva Jersey de Marruecos— y se remontan al Triásico Superior. A causa de la costa limitada de una sola masa continental, los depósitos marinos del Triásico son relativamente raros en todo el mundo, a pesar de su prominencia en Europa Occidental, donde se estudió por primera vez este período. Por tanto, la estratigrafía triásica se basa sobre todo en organismos que vivieron en lagos y entornos hipersalinos, como los crustáceos estheria y vertebrados terrestres.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Mesozoica - Periodo Jurásico',
      descripcion: 'El Mesozoico se extiende de hace unos 252 a hace 66 millones de años.',
      contenido: 'El periodo Jurásico abarca de hace unos 201,3 ± 0,2 a hace 145 millones de años.Al principio del Jurásico, el supercontinente Pangea se fragmentó en el continente norte Laurasia y el supercontinente sur Gondwana. El golfo de México se abrió en el nuevo rift entre Norteamérica y lo que hoy es la península del Yucatán. El Atlántico Norte del Jurásico era relativamente estrecho, mientras que el Atlántico Sur no se formó hasta el siguiente periodo, el Cretáceo, cuando se dividió Gondwana. Se cerró el océano Tetis y apareció la ensenada Neotetis. Los climas eran templados, sin evidencias de glaciaciones. Al igual que en el Triásico, parece que no había ni tierras ni grandes extensiones de hielo cerca de los polos terrestres. En Europa oriental hay un buen registro geológico del Jurásico: las extensas secuencias marinas son indicio de una época en la que buena parte del continente estaba sumergido bajo mares tropicales poco profundos, como puede verse en el sitio Patrimonio de la Humanidad de la costa Jurásica, o en los célebres lagerstätten de Holzmaden y Solnhofen.​ Por el contrario, el registro jurásico en Norteamérica es el más escaso del Mesozoico, con pocos afloramientos en la superficie.​ Aunque el mar epicontinental de Sundance dejó depósitos marinos en zonas de las llanuras norte de Estados Unidos y Canadá a finales del Jurásico, la mayor parte de los sedimentos expuestos de este periodo son continentales, como los depósitos aluviales de la formación Morrison. También hay exposiciones jurásicas en Rusia, India, América del Sur, Japón, Australasia y el Reino Unido.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Mesozoica - Periodo Cretáceo',
      descripcion: 'El Mesozoico se extiende de hace unos 252 a hace 66 millones de años.',
      contenido: 'El periodo Cretácico o Cretáceo abarca de hace unos 145 a hace 66 millones de años. Durante el Cretáceo, el supercontinente de Pangea, aparecido entre finales del Paleozoico y principios del Mesozoico, completó su división en los continentes actuales, aunque sus posiciones eran muy diferentes a las de hoy. Al ensancharse el océano Atlántico, las orogenias convergentes que se habían creado continuaron en la cordillera Americana. Aunque Gondwana seguía intacto al principio del Cretácico, se fragmentó cuando Sudamérica, la Antártida y Australia se separaron de África (aunque India y Madagascar se mantuvieron unidas). De esta manera se formaron el Atlántico Sur y el océano Índico. Esta actividad originó grandes cadenas montañosas submarinas a lo largo de las líneas de separación entre placas, lo que elevó el nivel del mar en todo el mundo. Al norte de África, el mar de Tetis siguió estrechándose. A lo largo de Norteamérica y Europa avanzaron los mares poco profundos, que retrocedieron más adelante en este periodo, dejando espesos depósitos marinos entre lechos carboníferos. En el cénit de la transgresión cretácica, un tercio de la actual masa terrestre de la Tierra estaba sumergida. El cretáceo es célebre por sus cretas. De hecho, se formó más creta en el Cretáceo que en ningún otro periodo del Fanerozoico.​ La actividad de la dorsal mediooceánica —o mejor, la circulación de agua marina a través de las crestas— enriqueció de calcio los océanos, lo que aumentó su saturación, además de incrementar la disponibilidad de este elemento para el nanoplancton calcáreo.​ Estos extendidos carbonatos y otros depósitos sedimentarios hacen el registro rocoso cretáceo especialmente óptimo. Entre las más célebres formaciones de Norteamérica están la de Smoky Hill Chalk en Kansas y la fauna terrestre de finales del Cretácico de la formación Hell Creek. También en Europa y China existen importantes exposiciones cretácicas. En la zona que hoy ocupa India se depositaron muy a finales del Cretáceo y a principios del Paleoceno grandes lechos de lava denominados traps del Decán.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica',
      descripcion: 'El Fanerozoico es el eón actual de la escala geológica.',
      contenido: 'La era Cenozoica abarca los 66 millones de años desde la extinción masiva del Cretácico-Paleógeno hasta el presente. A finales del Mesozoico, los continentes se habían dividido hasta adquirir prácticamente su aspecto actual. Laurasia se convirtió en Norteamérica y Eurasia, mientras que Gondwana se dividió en Sudamérica, África, Australia, la Antártida y el subcontinente indio, que colisionó con la placa asiática, provocando un impacto que dio lugar al Himalaya. El mar de Tetis, que había separado los continentes de África e India, comenzó a cerrarse, formando el mar Mediterráneo.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Paleógeno',
      descripcion: 'La era Cenozoica abarca los 66 millones de años desde la extinción masiva del Cretácico-Paleógeno hasta el presente.',
      contenido: 'El periodo Paleógeno o Terciario Temprano es una unidad de la escala temporal geológica que comenzó hace 66 Ma y terminó hace 23,03 Ma. Comprende la primera parte de la era Cenozoica, y abarca la épocas Paleocénica, Eocénica y Oligocénica.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Paleógeno - Época Paleocénica',
      descripcion: 'El periodo Paleógeno o Terciario Temprano es una unidad de la escala temporal geológica que comenzó hace 66 Ma y terminó hace 23,03 Ma.',
      contenido: 'El Paleoceno duró de hace 66 Ma a hace 56 Ma. En muchos aspectos, en el Paleoceno continuaron procesos que habían comenzado a finales del Cretáceo. Durante el Paleoceno, los continentes siguieron desplazándose hacia su posición actual. El supercontinente Laurasia aún no se había dividido en tres continentes. Europa y Groenlandia seguían vinculadas; Norteamérica y Asia se conectaban de forma intermitente por un puente terrestre, mientras que Groenlandia y Norteamérica comenzaban a separarse.​ En el oeste de Norteamérica, aún separada de Sudamérica por mares ecuatoriales, la orogenia Laramide siguió elevando las montañas Rocosas; Gondwana siguió dividiéndose en África, Sudamérica, la Antártida y Australia. África se dirigía al norte, hacia Europa, cerrando lentamente el océano Tetis, e India inició su migración hacia Asia que provocaría una colisión tectónica y la formación del Himalaya.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Paleógeno - Época Eocénica',
      descripcion: 'El periodo Paleógeno o Terciario Temprano es una unidad de la escala temporal geológica que comenzó hace 66 Ma y terminó hace 23,03 Ma.',
      contenido: 'Durante el Eoceno (56,0 Ma – 33,9 Ma),2​ los continentes continuaron desplazándose hacia sus posiciones actuales. Al principio del periodo, Australia y la Antártida seguían conectadas, y las corrientes cálidas ecuatorianas se mezclaron con aguas antárticas más frías, distribuyendo el calor por todo el mundo y manteniendo alta la temperatura global. Pero cuando Australia se separó del continente sur, hace unos 45 Ma, las corrientes cálidas ecuatorianas se desviaron lejos de la Antártida, y entre los dos continentes se formó un canal de agua fría. La región antártica se enfrió y los océanos que la rodeaban empezaron a helarse, enviando agua fría y hielo hacia el norte, aumentando el enfriamiento. El actual patrón de glaciaciones se inició hace unos 40 Ma. El supercontinente norte de Laurasia comenzó a dividirse en Europa, Groenlandia y América del Norte. La orogenia del oeste norteamericano comenzó en el Eoceno, y se formaron grandes lagos en las altas cuencas planas entre montañas. En Europa, el mar de Tetis desapareció por completo, convertido en el mar Mediterráneo y aislado por la formación de los Alpes. Pese al ensanchamiento del océano Atlántico, hay indicios de que quedara una conexión terrestre entre Norteamérica y Europa, como indica el hecho de que las faunas de las dos regiones sean muy similares. India siguió alejándose de África y comenzó a colisionar con Asia, creando la orogenia del Himalaya.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Paleógeno - Época Oligocénica',
      descripcion: 'El periodo Paleógeno o Terciario Temprano es una unidad de la escala temporal geológica que comenzó hace 66 Ma y terminó hace 23,03 Ma.',
      contenido: 'El Oligoceno abarca de 34 Ma a 23 Ma.2​ Durante esta época, los continentes siguieron desplazándose hacia sus posiciones actuales. La Antártida se fue aislando cada vez más y acabó por desarrollar un casquete de hielo permanente. En el oeste de Norteamérica siguieron elevándose las montañas, y en Europa surgieron los Alpes como consecuencia de la presión que ejercía la placa africana contra la placa Euroasiática hacia el norte. El puente terrestre que probablemente unía Europa y Norteamérica siguió existiendo. Durante el Oligoceno, Sudamérica se separó finalmente de la Antártida y se desplazó hacia el norte, aproximándose a Norteamérica, lo que también permitió que la corriente Circumpolar Antártica fluyera libremente y enfriara el continente con rapidez.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Neógeno',
      descripcion: 'La era Cenozoica abarca los 66 millones de años desde la extinción masiva del Cretácico-Paleógeno hasta el presente.',
      contenido: 'El Neógeno es una unidad de la escala temporal geológica que comenzó hace 23,3 Ma y terminó hace 2,588 Ma. El periodo Neógeno sigue al periodo Paleógeno y precede al periodo Cuaternario. El Neógeno comprende las épocas Mioceno y Pleistoceno.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Neógeno - Época Miocénica',
      descripcion: 'El Neógeno es una unidad de la escala temporal geológica que comenzó hace 23,3 Ma y terminó hace 2,588 Ma.',
      contenido: 'El Mioceno abarca de hace unos 23,03 Ma a 5,333 Ma.2 Durante el Mioceno, los continentes siguieron desplazándose hacia sus posiciones presentes. Los accidentes geológicos eran los mismos que los actuales, a excepción del puente terrestre entre Norteamérica y Sudamérica, que se formó con posterioridad. La zona de subducción a lo largo de la costa pacífica de Sudamérica provocó la formación de los Andes y la expansión hacia el sur de la península mesoamericana. India continuó presionando contra Asia, y el paso marítimo de Tetis siguió reduciéndose hasta desaparecer cuando África colisionó con Eurasia en la región turco–árabe hace entre 19 y 12 Ma. La subsecuente elevación de montañas en el Mediterráneo occidental y un descenso global del nivel del mar se combinaron para causar una sequía temporal del mar Mediterráneo que dio como resultado la Crisis salina del Messiniense hacia el final del Mioceno.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Neógeno - Época Pliocénica',
      descripcion: 'El Neógeno es una unidad de la escala temporal geológica que comenzó hace 23,3 Ma y terminó hace 2,588 Ma.',
      contenido: 'El Plioceno abarca de hace unos 5,333 Ma a 2,588 Ma.2​ Durante esta época, los continentes siguieron desplazándose, recorriendo probablemente hasta 250 km desde la ubicación en la que se encontraban hasta enclaves a solo 70 km de sus posiciones actuales. Sudamérica se unió con Norteamérica por medio del istmo de Panamá, dando lugar a la migración de animales entre ambos continentes, fenómeno denominado gran intercambio americano, uno de cuyos efectos fue la práctica extinción de la fauna nativa de la América del Sur. La formación del istmo tuvo importantes consecuencias en la temperatura global, ya que se interrumpieron ciertas corrientes cálidas del ecuador y comenzó un ciclo de enfriamiento del Atlántico, en el que las aguas frías de los polos redujeron las temperaturas del océano, ahora aislado. La colisión de África con Europa formó el mar Mediterráneo, eliminando los restos del océano Tetis. El cambio en los niveles marítimos expusieron el puente terrestre entre Alaska y Asia. Hacia el final del Plioceno, hace unos 2,58 Ma (al comienzo del periodo Cuaternario), comenzó la actual edad de hielo. Desde entonces, las regiones polares han experimentado ciclos repetidos de entre 40 000 y 100 000 años de congelación y deshielo.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Cuaternario',
      descripcion: 'La era Cenozoica abarca los 66 millones de años desde la extinción masiva del Cretácico-Paleógeno hasta el presente.',
      contenido: 'El período Cuaternario es una división de la escala temporal geológica que pertenece a la Era Cenozoica; dentro de esta, el Cuaternario sigue al Neógeno. Se inició hace 2,59 millones de años y llega hasta la actualidad.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Cuaternario - Época Pleistocénica',
      descripcion: 'El período Cuaternario es una división de la escala temporal geológica que pertenece a la Era Cenozoica.',
      contenido: 'El Pleistoceno abarca desde hace 2,5 Ma hasta hace 11.700 años.2​ Los modernos continentes se encontraban en sus posiciones actuales, probablemente las placas sobre las que se asientan no se movieron más de 100 km respecto a las demás desde el principio del periodo.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id_usuario: id_usuario,
      titulo: 'Eón Fanerozoico - Era Cenozoica - Periodo Cuaternario - Época Holoocénica',
      descripcion: 'El período Cuaternario es una división de la escala temporal geológica que pertenece a la Era Cenozoica.',
      contenido: 'El Holoceno comenzó hace unos 11 700 años2​ y es la época en la que estamos actualmente. Durante el Holoceno, el movimiento de los continentes ha sido de menos de 1 km. El último periodo glacial de la actual glaciación terminó hace 10 000 años.26​ El deshielo causó una subida del nivel del mar de unos 35 m a principios del Holoceno. Además, por encima del paralelo 40 norte se habían formado numerosas depresiones por el peso de los glaciares del Pleistoceno y el Holoceno que se elevaron hasta 180 m, y aún siguen subiendo hoy. El alto nivel del mar y las depresiones temporales de la tierra permitieron incursiones marinas en zonas que hoy quedan lejos de la costa. Se han encontrado fósiles marinos del Holoceno en Vermont, Quebec, Ontario y Michigan. También se encuentran fósiles de este tipo en fondos de lagos, terrenos inundables y depósitos en cuevas. Los fósiles marinos del Holoceno son raros en las costas de latitudes bajas, ya que el aumento del nivel del mar durante este periodo excede a cualquier posible impulso ascendente que no sea de origen glacial. En Escandinavia, el ajuste postglacial causó la emergencia de áreas costeras alrededor del mar Báltico, entre ellas buena parte de Finlandia. La región aún sigue elevándose, lo que provoca pequeños seísmos en Europa septentrional. El fenómeno equivalente en Norteamérica fue el ajuste de la bahía de Hudson, formada por la reducción del mar postglacial de Tyrrel hasta su actual línea costera.',
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Aportes', null, {});
  }
};
