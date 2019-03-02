const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tp1_database');
const db = mongoose.connection;
const spells = db.collection('spells');

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connection to MongoDB successful'));

// filter to know whereas a spell is correct or not
const respondsToCriterions = spell => (spell.level <= 4 && spell.components.includes('V') && spell.components.length > 1) ? true : false;

// we map the spells based on those criterions
const map = () => {
    if (respondsToCriterions(this.spell)) emit(true, this.spell);
    else emit(false, this.spell);
};

// if the key is true, values = spells that corresponds to the criterions
const reduce = (key, values) => {
    if (key === true) return values.map(value => value.name); // lets return the names of the corresponding spells
    return null;
};

// proceed to mapReduce
spells.mapReduce(
    map,
    reduce,
    {
        out: "filtered_spells" // out to a new collection, filtered_spells
    }
);
