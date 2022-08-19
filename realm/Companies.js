import Realm from "realm";
const Companies = {
  name: "Company",
  properties: {
    _id: "int",
    name: "string",
  },
  primaryKey: "_id",
};
// open a local realm with the 'Cat' schema
const realm = await Realm.open({
  schema: [Cat],
});
