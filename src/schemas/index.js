/*
Normilizr permite normalizar la información que se 
recibe desde la base de datos o desde una api.

La normalización tiene como objetivo evitar la
redundancia de datos y haceer que acceder a esos datos sea más fácil.
*/

import api from '../api.json';

import { normalize, schema } from 'normalizr';

//const media = new schema.Entity(key, definición de mi esquema , opciones)
const media = new schema.Entity('medias', {} , {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value, category: parent.id})
})

const category = new schema.Entity('categories', {
    playlist: new schema.Array(media)
})

const categories = { categories: new schema.Array(category)}

const normalizedData = normalize(api, categories);

export default normalizedData;