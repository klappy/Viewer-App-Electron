const leveldb = require('pouchdb-adapter-leveldb');
const PouchDB = require('pouchdb-core').plugin(leveldb);

PouchDB.debug.enable('*');

let _targetDb, _referenceDb, _lookupsDb;

const lookupsDb = () => {
  console.log('init lookupsDB');
  _lookupsDb = _lookupsDb || new PouchDB("db/lookupsDB", {adapter: 'leveldb'});
  return _lookupsDb;
};

const targetDb = () => {
  console.log('init targetDB');
  _targetDb = _targetDb || new PouchDB("db/targetDB", {adapter: 'leveldb'});
  return _targetDb;
};

const referenceDb = () => {
  console.log('init referenceDB');
  _referenceDb = _referenceDb || new PouchDB.plugin(require('pouchdb-quick-search'))("db/referenceDB", {adapter: 'leveldb'});
  return _referenceDb;
};

module.exports = {
  targetDb,
  referenceDb,
  lookupsDb,
}
