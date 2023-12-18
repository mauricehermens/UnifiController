db.getSiblingDB("unifi").createUser({user: "MONGO_UNIFIUSER", pwd: "KDN#829Dddi", roles: [{role: "dbOwner", db: "unifi"}]});
db.getSiblingDB("unifi_stat").createUser({user: "MONGO_UNIFIUSER", pwd: "KDN#829Dddi", roles: [{role: "dbOwner", db: "unifi_stat"}]});
