<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js"
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import Button from "$lib/components/ui/button/button.svelte";

    let listItems = [{
  "_id": {
    "$oid": "6612a2335434689fb1c8820e"
  },
  "id": "AAA",
  "name": "None",
  "legend": "Ermmm this is a nothing accessory",
  "mainType": "Accessory",
  "rarity": "None",
  "imageId": "https://i.imgur.com/ynJYNoA.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 0,
  "minLevel": 0,
  "maxLevel": 0,
  "statsPerLevel": [],
  "validModifiers": [],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6612a2605434689fb1c8820f"
  },
  "id": "AAB",
  "name": "None",
  "legend": "Nope. Big nothingburger chestplate here.",
  "mainType": "Chestplate",
  "rarity": "None",
  "imageId": "https://i.imgur.com/Uj7r6Fm.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 0,
  "minLevel": 0,
  "maxLevel": 0,
  "statsPerLevel": [],
  "validModifiers": [],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6612b02498bf37e76f23cb61"
  },
  "id": "AAE",
  "name": "None",
  "legend": "This modifies NOTHING it serves ZERO PURPOSE it should disappear NOW!!",
  "mainType": "Modifier",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/modifier/0.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "6616574569ec18efb31335ae"
  },
  "id": "AAG",
  "name": "The Lost Crown of Ravenna [Calvus]",
  "legend": "A crown made out of sun-forged bronze, a technique invented by the Samerians. It was specifically made for King Calvus IV, the Third King of Ravenna, and was stolen from him after he was killed in Ravenna Castello, at the heart of the Ravenna Realm in the Bronze Sea.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Calvus/calvusCrown.jpg",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 13,
      "agility": 11,
      "attackSize": 11
    },
    {
      "level": 110,
      "power": 14,
      "agility": 12,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 15,
      "agility": 13,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 17,
      "agility": 14,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 18,
      "agility": 15,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616583b69ec18efb31335b0"
  },
  "id": "AAI",
  "name": "Ravenna Fallen King Boots [Calvus]",
  "legend": "A pair of dark red metal boots trimmed in bronze. They were specifically made for King Calvus IV.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Calvus/calvusBoots.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 13,
      "agility": 11,
      "attackSize": 11
    },
    {
      "level": 110,
      "power": 14,
      "agility": 12,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 15,
      "agility": 13,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 17,
      "agility": 14,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 18,
      "agility": 15,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661658fd69ec18efb31335b1"
  },
  "id": "AAJ",
  "name": "Mantello of Ravenna's Fallen King [Calvus]",
  "legend": "A cape made out of fine red cloth with an orange fur collar, emblazoned with the symbol of the Ravenna Realm. It was specifically made for King Calvus IV, the Third King of Ravenna, and was stolen from him after he was killed in Ravenna Castello, at the heart of Ravenna Realm in the Bronze Sea.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Calvus/calvusCape.jpg",
  "deleted": false,
  "subType": "Back",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 13,
      "agility": 11,
      "attackSize": 11
    },
    {
      "level": 110,
      "power": 14,
      "agility": 12,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 15,
      "agility": 13,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 17,
      "agility": 14,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 18,
      "agility": 15,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616705964045b65b82dbbc3"
  },
  "id": "AAR",
  "name": "Theurgist Hat",
  "legend": "A hat once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Theurgist/theurgistHat.jpg",
  "deleted": false,
  "subType": "Hat",
  "gemNo": 3,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "attackSpeed": 26,
      "warding": 1
    },
    {
      "level": 130,
      "attackSpeed": 29,
      "warding": 1
    },
    {
      "level": 140,
      "attackSpeed": 42,
      "warding": 1
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616723764045b65b82dbbc5"
  },
  "id": "AAT",
  "name": "Sunken Warrior Leggings",
  "legend": "A set of green and gold leggings made out of arcanium metal that have spent hundreds of years underwater, causing their properties to change. They seem to constantly produce water.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Sunken%20Warrior/sunkenWarriorPants.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 178,
      "attackSpeed": 16
    },
    {
      "level": 110,
      "defense": 196,
      "attackSpeed": 18
    },
    {
      "level": 120,
      "defense": 213,
      "attackSpeed": 20
    },
    {
      "level": 130,
      "defense": 231,
      "attackSpeed": 21
    },
    {
      "level": 140,
      "defense": 249,
      "attackSpeed": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616749364045b65b82dbbc9"
  },
  "id": "AAX",
  "name": "Sunken Iron Armor",
  "legend": "A set of armour made out of arcanium metal that has spent hundreds of years underwater, causing its properties to change. It seems to constantly produce water.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Sunken%20Iron/sunkenChestplate.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 50,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 50,
      "defense": 118,
      "attackSize": 11
    },
    {
      "level": 60,
      "defense": 142,
      "attackSize": 13
    },
    {
      "level": 100,
      "defense": 237,
      "attackSize": 22
    },
    {
      "level": 110,
      "defense": 261,
      "attackSize": 24
    },
    {
      "level": 120,
      "defense": 285,
      "attackSize": 27
    },
    {
      "level": 130,
      "defense": 308,
      "attackSize": 29
    },
    {
      "level": 140,
      "defense": 332,
      "attackSize": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None",
  "scaling": {
    "defense": 0.72,
    "attackSize": 0.45
  }
},
{
  "_id": {
    "$oid": "661674e464045b65b82dbbca"
  },
  "id": "AAY",
  "name": "Sunken Iron Helmet",
  "legend": "A helmet made out of arcanium metal that has spent hundreds of years underwater, causing its properties to change. It seems to constantly produce water.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Sunken%20Iron/sunkenHelmet.jpg",
  "deleted": false,
  "subType": "Helmet",
  "gemNo": 2,
  "minLevel": 50,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 178,
      "attackSize": 16
    },
    {
      "level": 110,
      "defense": 196,
      "attackSize": 18
    },
    {
      "level": 120,
      "defense": 213,
      "attackSize": 20
    },
    {
      "level": 130,
      "defense": 231,
      "attackSize": 21
    },
    {
      "level": 140,
      "defense": 249,
      "attackSize": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616767e64045b65b82dbbcc"
  },
  "id": "AAa",
  "name": "Aereus Robes",
  "legend": "A set of dark purple robes lined with bronze, obtained from a Dark Sealed Chest.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Aereus/aereusRobe.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "attackSize": 52,
      "intensity": 36
    },
    {
      "level": 130,
      "attackSize": 56,
      "intensity": 39
    },
    {
      "level": 140,
      "attackSize": 60,
      "intensity": 42
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66167a5f64045b65b82dbbd0"
  },
  "id": "AAe",
  "name": "Vatrachos Helmet",
  "legend": "A brightly colored helmet imbued with some strange kind of power, it seems to grant the wearer great power... at a price.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Vatrachos/vatrachosHelmet.jpg",
  "deleted": false,
  "subType": "Helmet",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "power": 28,
      "defense": 89,
      "drawback": 2
    },
    {
      "level": 130,
      "power": 30,
      "defense": 96,
      "drawback": 2
    },
    {
      "level": 140,
      "power": 33,
      "defense": 103,
      "drawback": 2
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66167d819761b5babd2b2b6a"
  },
  "id": "AAl",
  "name": "Attack Size Amulet [Fair]",
  "legend": "A rugged, peridot gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Attack size.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Amulets/Attack%20Size/amuletAttackSize.jpg",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSize": 74
    },
    {
      "level": 110,
      "attackSize": 82
    },
    {
      "level": 120,
      "attackSize": 89
    },
    {
      "level": 130,
      "attackSize": 97
    },
    {
      "level": 140,
      "attackSize": 104
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616812b2c8f15f2b8aa40c9"
  },
  "id": "AAn",
  "name": "Dark Bronze Armor",
  "legend": "A set of finely crafted black iron armor with trims of bronze, obtained from a Dark Sealed Chest.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Dark%20Bronze/darkBronzeArmor.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 120,
      "defense": 118,
      "attackSpeed": 48
    },
    {
      "level": 130,
      "defense": 128,
      "attackSpeed": 52
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616841dd52529101cc209c3"
  },
  "id": "AAq",
  "name": "Cernyx's Sleeveless Robe",
  "legend": "A sleeveless robe top made out of fine green fabric, specifically made to fit the large upper body of Cernyx, the Archon of the Greenwish Cult residing in the Forest of Cernunno. It was taken from him after he was defeated in combat.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Cernyx/cernyxChestplate.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 60,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 60,
      "defense": 115,
      "attackSpeed": 12
    },
    {
      "level": 70,
      "defense": 135,
      "attackSpeed": 14
    },
    {
      "level": 80,
      "defense": 154,
      "attackSpeed": 16
    },
    {
      "level": 90,
      "defense": 174,
      "attackSpeed": 18
    },
    {
      "level": 100,
      "defense": 193,
      "attackSpeed": 20
    },
    {
      "level": 110,
      "defense": 213,
      "attackSpeed": 22
    },
    {
      "level": 120,
      "defense": 232,
      "attackSpeed": 24
    },
    {
      "level": 130,
      "defense": 250,
      "attackSpeed": 26
    },
    {
      "level": 140,
      "defense": 270,
      "attackSpeed": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616854fd52529101cc209c5"
  },
  "id": "AAs",
  "name": "Archon Quartz Amulet [Cernyx]",
  "legend": "A large green quartz gemstone embedded in a polished silver socket, designed to increase the wearer's defense and attack speed. It was taken from Cernyx, the Archon of the Greenwish Cult, after he was defeated in combat.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Cernyx/cernyxAmulet.jpg",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 60,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 70,
      "defense": 144,
      "attackSpeed": 15
    },
    {
      "level": 80,
      "defense": 165,
      "attackSpeed": 18
    },
    {
      "level": 90,
      "defense": 185,
      "attackSpeed": 20
    },
    {
      "level": 100,
      "defense": 206,
      "attackSpeed": 22
    },
    {
      "level": 110,
      "defense": 226,
      "attackSpeed": 24
    },
    {
      "level": 120,
      "defense": 247,
      "attackSpeed": 26
    },
    {
      "level": 130,
      "defense": 268,
      "attackSpeed": 29
    },
    {
      "level": 140,
      "defense": 288,
      "attackSpeed": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6617fe2c064e17ecf40354ae"
  },
  "id": "RN5",
  "name": "Ravenna Apostle Gi [Carina]",
  "legend": "A finely sewn gi that was specifically made to be worn by Lady Carina, a noble of the Ravenna Realm. It was stolen from her after she was defeated in the Shining Plains of Ravenna.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Carina/carinaChestplate.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 90,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 90,
      "power": 15,
      "attackSpeed": 18
    },
    {
      "level": 100,
      "power": 17,
      "attackSpeed": 20
    },
    {
      "level": 110,
      "power": 19,
      "attackSpeed": 22
    },
    {
      "level": 120,
      "power": 21,
      "attackSpeed": 24
    },
    {
      "level": 130,
      "power": 22,
      "attackSpeed": 26
    },
    {
      "level": 140,
      "power": 24,
      "attackSpeed": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180028064e17ecf40354b1"
  },
  "id": "Nks",
  "name": "Ravenna Noble Boots [Elius]",
  "legend": "A pair of well-made leather boots with a gold trim. These boots were specifically made to be worn by the nobles of the Ravenna Realm, and were stolen from Lord Elius after he was defeated in the sky of the Bronze Sea.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Elius/eliusBoots.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 60,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 60,
      "power": 7,
      "agility": 9
    },
    {
      "level": 70,
      "power": 9,
      "agility": 10
    },
    {
      "level": 80,
      "power": 10,
      "agility": 12
    },
    {
      "level": 90,
      "power": 11,
      "agility": 13
    },
    {
      "level": 100,
      "power": 13,
      "agility": 15
    },
    {
      "level": 110,
      "power": 14,
      "agility": 16
    },
    {
      "level": 120,
      "power": 15,
      "agility": 18
    },
    {
      "level": 130,
      "power": 17,
      "agility": 19
    },
    {
      "level": 140,
      "power": 18,
      "agility": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6618017d064e17ecf40354b4"
  },
  "id": "q9Q",
  "name": "Collared Cape [Elius]",
  "legend": "A flowing collared cape made out of fine cloth.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Elius/eliusCape.jpg?raw=true",
  "deleted": false,
  "subType": "Back",
  "gemNo": 2,
  "minLevel": 60,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 60,
      "power": 7,
      "agility": 9
    },
    {
      "level": 70,
      "power": 9,
      "agility": 10
    },
    {
      "level": 80,
      "power": 10,
      "agility": 12
    },
    {
      "level": 90,
      "power": 11,
      "agility": 13
    },
    {
      "level": 100,
      "power": 13,
      "agility": 15
    },
    {
      "level": 110,
      "power": 14,
      "agility": 16
    },
    {
      "level": 120,
      "power": 15,
      "agility": 18
    },
    {
      "level": 130,
      "power": 17,
      "agility": 19
    },
    {
      "level": 140,
      "power": 18,
      "agility": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180206064e17ecf40354b5"
  },
  "id": "Rvx",
  "name": "Siren Pants",
  "legend": "A white robe usually worn by Sirens, dangerous mythical creatures found in the Dark Sea which appear as beautiful women singing, only to lure in sailors and kill them with their wings and fangs.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Siren/sirenPants.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 18,
      "attackSpeed": 31
    },
    {
      "level": 110,
      "agility": 20,
      "attackSpeed": 34
    },
    {
      "level": 120,
      "agility": 22,
      "attackSpeed": 37
    },
    {
      "level": 130,
      "agility": 24,
      "attackSpeed": 40
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180257064e17ecf40354b6"
  },
  "id": "Egb",
  "name": "Siren Top",
  "legend": "A revealing top usually worn by Sirens, which are dangerous mythical creatures found in the Dark Sea. They appear as beautiful women, singing, only to lure in sailors and kill them with their wings and fangs.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Siren/sirenTop.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 25,
      "attackSpeed": 41
    },
    {
      "level": 110,
      "agility": 27,
      "attackSpeed": 45
    },
    {
      "level": 120,
      "agility": 30,
      "attackSpeed": 50
    },
    {
      "level": 130,
      "agility": 32,
      "attackSpeed": 54
    },
    {
      "level": 140,
      "agility": 35,
      "attackSpeed": 58
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6618086f72e59c8cc45b5514"
  },
  "id": "Uoo",
  "name": "Titanium Leggings",
  "legend": "A bulky pair of boots reinforced with titanium metal to provide a decent amount of protection.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/titaniumLeggings.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 148
    },
    {
      "level": 110,
      "defense": 163
    },
    {
      "level": 120,
      "defense": 178
    },
    {
      "level": 130,
      "defense": 193
    },
    {
      "level": 140,
      "defense": 207
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180a9f4c1cd43e002d1e26"
  },
  "id": "krV",
  "name": "Sorcerer Pants",
  "legend": "The lower part of a finely knitted robe, usually worn by experienced magic-users.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/sorcererPants.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 13
    },
    {
      "level": 110,
      "power": 14
    },
    {
      "level": 120,
      "power": 15
    },
    {
      "level": 130,
      "power": 17
    },
    {
      "level": 140,
      "power": 18
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180b2a4c1cd43e002d1e27"
  },
  "id": "mfi",
  "name": "Sorcerer Robes",
  "legend": "A robe made out of finely knitted fabric, usually worn by experienced magic-users.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/sorcererRobes.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 17
    },
    {
      "level": 110,
      "power": 19
    },
    {
      "level": 120,
      "power": 21
    },
    {
      "level": 130,
      "power": 22
    },
    {
      "level": 140,
      "power": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180ea34c1cd43e002d1e2d"
  },
  "id": "eU8",
  "name": "Elite Knight's Pauldrons",
  "legend": "An ornate set of pauldrons with a black cape, usually worn by renowned knights and warriors.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/eliteKnightsPauldrons.jpg?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSize": 28,
      "intensity": 16
    },
    {
      "level": 110,
      "attackSize": 30,
      "intensity": 18
    },
    {
      "level": 120,
      "attackSize": 33,
      "intensity": 20
    },
    {
      "level": 130,
      "attackSize": 36,
      "intensity": 21
    },
    {
      "level": 140,
      "attackSize": 39,
      "intensity": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180f3f4c1cd43e002d1e2f"
  },
  "id": "wLR",
  "name": "Caped Golden Pauldrons",
  "legend": "An ornate set of golden pauldrons with a cape.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/capedGoldenPauldrons.jpg?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSpeed": 28,
      "intensity": 16
    },
    {
      "level": 110,
      "attackSpeed": 30,
      "intensity": 18
    },
    {
      "level": 120,
      "attackSpeed": 33,
      "intensity": 20
    },
    {
      "level": 130,
      "attackSpeed": 36,
      "intensity": 21
    },
    {
      "level": 140,
      "attackSpeed": 39,
      "intensity": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661810774c1cd43e002d1e31"
  },
  "id": "46q",
  "name": "Deluxe Iron Armor",
  "legend": "A set of iron armor with a colored trim, usually worn by renowned knights.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/deluxeIronArmor.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 148,
      "resistance": 15
    },
    {
      "level": 110,
      "defense": 163,
      "resistance": 16
    },
    {
      "level": 120,
      "defense": 178,
      "resistance": 18
    },
    {
      "level": 130,
      "defense": 193,
      "resistance": 19
    },
    {
      "level": 140,
      "defense": 207,
      "resistance": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661818a53dcf3d2abe1ac431"
  },
  "id": "d7S",
  "name": "Attack Speed Amulet [Dull]",
  "legend": "A rugged, emerald gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Attack speed.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Attack%20Speed/amuletAttackSpeedDull.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 50,
  "maxLevel": 100,
  "statsPerLevel": [
    {
      "level": 50,
      "attackSpeed": 30
    },
    {
      "level": 60,
      "attackSpeed": 36
    },
    {
      "level": 70,
      "attackSpeed": 42
    },
    {
      "level": 80,
      "attackSpeed": 48
    },
    {
      "level": 90,
      "attackSpeed": 54
    },
    {
      "level": 100,
      "attackSpeed": 60
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661820dce370ec90edc251fd"
  },
  "id": "nbu",
  "name": "Attack Speed Amulet [Poor]",
  "legend": "A rugged, emerald gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Attack speed.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Attack%20Speed/amuletAttackSpeedPoor.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 10,
  "maxLevel": 50,
  "statsPerLevel": [
    {
      "level": 10,
      "attackSpeed": 5
    },
    {
      "level": 20,
      "attackSpeed": 10
    },
    {
      "level": 30,
      "attackSpeed": 15
    },
    {
      "level": 40,
      "attackSpeed": 20
    },
    {
      "level": 50,
      "attackSpeed": 25
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661821e3dfa6a4bffd8c9d74"
  },
  "id": "QDj",
  "name": "Attack Size Amulet [Poor]",
  "legend": "A rugged, peridot gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Attack size.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Attack%20Size/amuletAttackSizePoor.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 10,
  "maxLevel": 50,
  "statsPerLevel": [
    {
      "level": 10,
      "attackSize": 5
    },
    {
      "level": 20,
      "attackSize": 10
    },
    {
      "level": 30,
      "attackSize": 15
    },
    {
      "level": 40,
      "attackSize": 20
    },
    {
      "level": 50,
      "attackSize": 25
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66182b165e52c44e3cb4a485"
  },
  "id": "Tf4",
  "name": "Brisks",
  "legend": "+2.625 points of Attack Speed for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantBrisk.jpg?raw=true",
  "deleted": false,
  "attackSpeedIncrement": 2.625,
  "enchantTypes": {
    "gear": {
      "attackSpeedIncrement": 2.625
    },
    "ship": {
      "hull": {
        "speed": 7,
        "turning": 15
      },
      "sail": {
        "speed": 15
      }
    }
  }
},
{
  "_id": {
    "$oid": "66182b505e52c44e3cb4a486"
  },
  "id": "JEI",
  "name": "Charged",
  "legend": "0.61 points of Power for every 10 levels +1.41 points of Intensity for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantCharged.jpg?raw=true",
  "deleted": false,
  "powerIncrement": 0.609375,
  "intensityIncrement": 1.40625,
  "enchantTypes": {
    "gear": {
      "powerIncrement": 0.609375,
      "intensityIncrement": 1.40625
    }
  }
},
{
  "_id": {
    "$oid": "66182bfa5e52c44e3cb4a48a"
  },
  "id": "RlR",
  "name": "Virtuous",
  "legend": "+4.5 points of Defense for every 10 levels +1 point of Warding  Removes Atlantean Modifier",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantVirtuous.jpg?raw=true",
  "deleted": false,
  "defenseIncrement": 4.5,
  "warding": 1,
  "enchantTypes": {
    "gear": {
      "defenseIncrement": 4.5,
      "warding": 1
    }
  }
},
{
  "_id": {
    "$oid": "66182c455e52c44e3cb4a48b"
  },
  "id": "Xjp",
  "name": "Strong",
  "legend": "+0.5 points of Power for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Rare/enchantStrong.jpg?raw=true",
  "deleted": false,
  "powerIncrement": 0.5,
  "enchantTypes": {
    "gear": {
      "powerIncrement": 0.5
    },
    "ship": {
      "ram": {
        "ramStrength": 450
      },
      "hull": {
        "ramStrength": 300,
        "stability": 10
      }
    }
  }
},
{
  "_id": {
    "$oid": "66182d975e52c44e3cb4a492"
  },
  "id": "9pe",
  "name": "Painite",
  "legend": "The world shall know pain.",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectPainite.jpg?raw=true",
  "deleted": false,
  "defense": 150,
  "drawback": 1
},
{
  "_id": {
    "$oid": "66182f535e52c44e3cb4a49d"
  },
  "id": "fY6",
  "name": "Attack Speed Gem",
  "legend": "Max Attack Speed Gem Innit",
  "mainType": "Gem",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/gemAttackSpeedMaxPlaceholder.jpg?raw=true",
  "deleted": false,
  "attackSpeed": 10
},
{
  "_id": {
    "$oid": "66182fa35e52c44e3cb4a49f"
  },
  "id": "0ma",
  "name": "Agility Gem",
  "legend": "Max Agility Gem Innit",
  "mainType": "Gem",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/gemAgilityMaxPlaceholder.jpg?raw=true",
  "deleted": false,
  "agility": 10
},
{
  "_id": {
    "$oid": "661c4242f8ee17deeb3f5852"
  },
  "id": "st9",
  "name": "Fire Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting fire magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 18,
      "attackSize": 9
    },
    {
      "level": 140,
      "power": 19,
      "attackSize": 10
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic",
  "scaling": {
    "power": 0.192857142857143
  }
},
{
  "_id": {
    "$oid": "661c426bf8ee17deeb3f5853"
  },
  "id": "nYd",
  "name": "Glass Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting glass magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 19,
      "defense": -28
    },
    {
      "level": 110,
      "power": 21,
      "defense": -31
    },
    {
      "level": 120,
      "power": 23,
      "defense": -34
    },
    {
      "level": 130,
      "power": 25,
      "defense": -36
    },
    {
      "level": 140,
      "power": 26,
      "defense": -39
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic",
  "scaling": {
    "power": 0.192857142857143
  }
},
{
  "_id": {
    "$oid": "661c42a3f8ee17deeb3f5854"
  },
  "id": "qzx",
  "name": "Ice Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting ice magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "power": 8,
      "defense": 33,
      "resistance": 26
    },
    {
      "level": 130,
      "power": 9,
      "defense": 35,
      "resistance": 29
    },
    {
      "level": 140,
      "power": 9,
      "defense": 38,
      "resistance": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic",
  "scaling": {
    "power": 0.192857142857143
  }
},
{
  "_id": {
    "$oid": "661c42f2f8ee17deeb3f5855"
  },
  "id": "Gd9",
  "name": "Light Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting light magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 7,
      "attackSpeed": 37,
      "attackSize": -8
    },
    {
      "level": 110,
      "power": 7,
      "attackSpeed": 41,
      "attackSize": -9
    },
    {
      "level": 120,
      "power": 8,
      "attackSpeed": 44,
      "attackSize": -10
    },
    {
      "level": 130,
      "power": 9,
      "attackSpeed": 48,
      "attackSize": -10
    },
    {
      "level": 140,
      "power": 9,
      "attackSpeed": 52,
      "attackSize": -11
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c43b4f8ee17deeb3f5858"
  },
  "id": "v0q",
  "name": "Metal Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting metal magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "defense": 143,
      "agility": -9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c43d9f8ee17deeb3f5859"
  },
  "id": "zKK",
  "name": "Plasma Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting plasma magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 19,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c446ef8ee17deeb3f585b"
  },
  "id": "hxE",
  "name": "Sand Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting sand magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "defense": 36,
      "attackSize": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c44eaf8ee17deeb3f585e"
  },
  "id": "ERj",
  "name": "Water Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting water magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480517430181938/watersphere.png?ex=66299c6d&is=66284aed&hm=fe29d36118eb2d6a58f49186fc52754cb753fa9d9a8e7fee769885cca422a8e1&",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "attackSize": 28,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661d31b094621d2a70e9810a"
  },
  "id": "XmZ",
  "name": "Captain Maria's Hat",
  "legend": "A pirate hat adorned with a gold trim and a red feather representing the colors of Pirate Lord Duke De'Roy. It was taken after she was defeated in the Nimbus Sea.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Captain%20Maria/captainMariaHat.jpg",
  "deleted": false,
  "subType": "Hat",
  "gemNo": 2,
  "minLevel": 110,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "power": 14,
      "resistance": 16
    },
    {
      "level": 120,
      "power": 15,
      "resistance": 18
    },
    {
      "level": 130,
      "power": 17,
      "resistance": 19
    },
    {
      "level": 140,
      "power": 18,
      "resistance": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661d5d8d65d40067fa05a4da"
  },
  "id": "3AH",
  "name": "Captain Maria's Boots",
  "legend": "A pair of black boots lined with gold and trims of purple, representing the colors of Pirate Lord Duke De'Roy. It was taken after she was defeated in the Nimbus Sea.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Captain%20Maria/captainMariaPants.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 110,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "power": 14,
      "resistance": 16
    },
    {
      "level": 120,
      "power": 15,
      "resistance": 18
    },
    {
      "level": 130,
      "power": 17,
      "resistance": 19
    },
    {
      "level": 140,
      "power": 18,
      "resistance": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661d5dbc65d40067fa05a4db"
  },
  "id": "YEg",
  "name": "Captain Maria's Cape",
  "legend": "A faded red cape, representing the colors of Pirate Lord Duke De'Roy. It was taken by Captain Maria after she was defeated in the Nimbus Sea.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Captain%20Maria/captainMariaCape.jpg",
  "deleted": false,
  "subType": "Back",
  "gemNo": 2,
  "minLevel": 110,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "power": 14,
      "resistance": 16
    },
    {
      "level": 120,
      "power": 15,
      "resistance": 18
    },
    {
      "level": 130,
      "power": 17,
      "resistance": 19
    },
    {
      "level": 140,
      "power": 18,
      "resistance": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6620d90777dc529bca6e4e52"
  },
  "id": "EHw",
  "name": "Cannon Fist Belt",
  "legend": "A thick belt made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "intensity": 10,
      "piercing": 10
    },
    {
      "level": 110,
      "defense": 114,
      "intensity": 12,
      "piercing": 12
    },
    {
      "level": 120,
      "defense": 124,
      "intensity": 13,
      "piercing": 13
    },
    {
      "level": 130,
      "defense": 135,
      "intensity": 14,
      "piercing": 14
    },
    {
      "level": 140,
      "defense": 145,
      "intensity": 15,
      "piercing": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620d98977dc529bca6e4e54"
  },
  "id": "KPG",
  "name": "Cannon Fist Handwraps",
  "legend": "A set of handwraps made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSpeed": 28,
      "intensity": 10,
      "piercing": 10
    },
    {
      "level": 110,
      "attackSpeed": 30,
      "intensity": 12,
      "piercing": 12
    },
    {
      "level": 120,
      "attackSpeed": 33,
      "intensity": 13,
      "piercing": 13
    },
    {
      "level": 130,
      "attackSpeed": 36,
      "intensity": 14,
      "piercing": 14
    },
    {
      "level": 140,
      "attackSpeed": 39,
      "intensity": 15,
      "piercing": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620dcbf6a24609a3d5be048"
  },
  "id": "7lc",
  "name": "Cannon Fist Armor",
  "legend": "A set of lightweight armor made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 138,
      "intensity": 14,
      "piercing": 14
    },
    {
      "level": 110,
      "defense": 152,
      "intensity": 16,
      "piercing": 16
    },
    {
      "level": 120,
      "defense": 166,
      "intensity": 18,
      "piercing": 18
    },
    {
      "level": 130,
      "defense": 180,
      "intensity": 19,
      "piercing": 19
    },
    {
      "level": 140,
      "defense": 194,
      "intensity": 20,
      "piercing": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620dce86a24609a3d5be049"
  },
  "id": "crz",
  "name": "Cannon Fist Leggings",
  "legend": "A set of lightweight armored leggings made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "intensity": 10,
      "piercing": 10
    },
    {
      "level": 110,
      "defense": 114,
      "intensity": 12,
      "piercing": 12
    },
    {
      "level": 120,
      "defense": 124,
      "intensity": 13,
      "piercing": 13
    },
    {
      "level": 130,
      "defense": 135,
      "intensity": 14,
      "piercing": 14
    },
    {
      "level": 140,
      "defense": 145,
      "intensity": 15,
      "piercing": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620de6f6b213745a28e0eb9"
  },
  "id": "HDC",
  "name": "Sailor Style Leggings",
  "legend": "A set of lightweight armored leggings made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleLeggings.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "attackSize": 10
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620de886b213745a28e0eba"
  },
  "id": "stf",
  "name": "Sailor Style Belt",
  "legend": "A thick belt made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleBelt.png?raw=true",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "attackSize": 10
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620df466b213745a28e0ebc"
  },
  "id": "L7s",
  "name": "Sailor Style Robes",
  "legend": "A fine robe made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleRobes.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 17,
      "attackSize": 14
    },
    {
      "level": 110,
      "power": 18,
      "attackSize": 16
    },
    {
      "level": 120,
      "power": 21,
      "attackSize": 18
    },
    {
      "level": 130,
      "power": 22,
      "attackSize": 19
    },
    {
      "level": 140,
      "power": 24,
      "attackSize": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620dfae6b213745a28e0ebf"
  },
  "id": "Cl7",
  "name": "Sailor Style Chestplate",
  "legend": "A heavy metal chestplate with exposed arms for freedom of movement, made to compliment sailor style users' strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleChestplate.png",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 5,
      "attackSize": 14,
      "intensity": 15,
      "piercing": 25
    },
    {
      "level": 110,
      "power": 5,
      "attackSize": 16,
      "intensity": 16,
      "piercing": 27
    },
    {
      "level": 120,
      "power": 6,
      "attackSize": 18,
      "intensity": 18,
      "piercing": 30
    },
    {
      "level": 130,
      "power": 6,
      "attackSize": 19,
      "intensity": 19,
      "piercing": 32
    },
    {
      "level": 140,
      "power": 7,
      "attackSize": 20,
      "intensity": 21,
      "piercing": 35
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e33dc16cb91be4088767"
  },
  "id": "a3e",
  "name": "Basic Combat Greaves",
  "legend": "A set of heavy metal greaves made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatGreaves.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "intensity": 21,
      "piercing": 18
    },
    {
      "level": 110,
      "power": 3,
      "intensity": 24,
      "piercing": 20
    },
    {
      "level": 120,
      "power": 4,
      "intensity": 26,
      "piercing": 22
    },
    {
      "level": 130,
      "power": 4,
      "intensity": 28,
      "piercing": 24
    },
    {
      "level": 140,
      "power": 5,
      "intensity": 30,
      "piercing": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e4a9c16cb91be408876b"
  },
  "id": "zKb",
  "name": "Basic Combat Headband",
  "legend": "A long headband made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatHeadband.png?raw=true",
  "deleted": false,
  "subType": "Head",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "intensity": 10
    },
    {
      "level": 110,
      "power": 13,
      "intensity": 12
    },
    {
      "level": 120,
      "power": 15,
      "intensity": 13
    },
    {
      "level": 130,
      "power": 16,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 18,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620eb5a771f6db942a8c4d5"
  },
  "id": "DuG",
  "name": "Perfect Fire Opal",
  "legend": "Armor Piercing Gem.",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "",
  "deleted": false,
  "piercing": 15
},
{
  "_id": {
    "$oid": "6620f5522d2b29aa81b9b9c7"
  },
  "id": "A3V",
  "name": "Boxing Belt",
  "legend": "A thick belt made for boxing users, designed to compliment the style's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "agility": 10,
      "resistance": 10
    },
    {
      "level": 110,
      "defense": 114,
      "agility": 12,
      "resistance": 12
    },
    {
      "level": 120,
      "defense": 124,
      "agility": 13,
      "resistance": 13
    },
    {
      "level": 130,
      "defense": 135,
      "agility": 14,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 145,
      "agility": 15,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622895f9f42b3d85c26614d"
  },
  "id": "CX3",
  "name": "Ravenna Apostle Bracelets [Carina]",
  "legend": "Colorful metal bracelets that were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm. They were stolen from her after she was defeated in the Shining Plains of Ravenna.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Carina/carinaBracelets.jpg",
  "deleted": false,
  "subType": "Arms",
  "statType": "None",
  "gemNo": 2,
  "minLevel": 90,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 90,
      "power": 11,
      "attackSpeed": 13
    },
    {
      "level": 100,
      "power": 13,
      "attackSpeed": 15
    },
    {
      "level": 110,
      "power": 14,
      "attackSpeed": 16
    },
    {
      "level": 120,
      "power": 15,
      "attackSpeed": 18
    },
    {
      "level": 130,
      "power": 17,
      "attackSpeed": 19
    },
    {
      "level": 140,
      "power": 18,
      "attackSpeed": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "6622c3d2974d7a9c334ac2fb"
  },
  "id": "B99",
  "name": "Explosion Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct explosion magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c42a974d7a9c334ac2fe"
  },
  "id": "q8I",
  "name": "Ice Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct ice magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 26,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 13,
      "defense": 28,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c500974d7a9c334ac301"
  },
  "id": "AeT",
  "name": "Magma Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct magma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224848048870396005/image.png?ex=663170a3&is=661efba3&hm=2cf9f5320af5f49882400650c94b67d019b28bbdbeed65c847b2d88947611235&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "attackSize": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c9696e76aad14a8dd671"
  },
  "id": "ejh",
  "name": "Crystal Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct crystal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "defense": 71,
      "intensity": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c9926e76aad14a8dd672"
  },
  "id": "lg8",
  "name": "Earth Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct earth magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 16,
      "defense": 107,
      "attackSize": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c9d26e76aad14a8dd674"
  },
  "id": "M5W",
  "name": "Fire Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct fire magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232481878460858378/image.png?ex=66299db2&is=66284c32&hm=ebc0515fb4aded526e348c284b583eaa03c8217389f13d2b9a342342aeb09c24&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 26,
      "attackSize": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622caf96e76aad14a8dd678"
  },
  "id": "q1Q",
  "name": "Lightning Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct lightning magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229975433806610482/image.png?ex=6631a2e3&is=661f2de3&hm=b366a76d2a5827e2ff35cb569ff1cba2117e2cf98266c74fd06db88a6365bf43&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "agility": 9,
      "attackSpeed": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d013faf9f0151a1ef127"
  },
  "id": "JyP",
  "name": "Acid Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct acid magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "piercing": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d2bbfaf9f0151a1ef130"
  },
  "id": "918",
  "name": "Metal Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct metal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "defense": 107,
      "agility": -7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d2edfaf9f0151a1ef131"
  },
  "id": "9ap",
  "name": "Plasma Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct plasma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1223699836575154336/1223699837384523847/Plasmamancer.png?ex=66367dc8&is=662408c8&hm=245ff30ea424df423464c10373255233e2fe4083be0184894a50903c89c6ba80&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 19,
      "intensity": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d34afaf9f0151a1ef133"
  },
  "id": "c6f",
  "name": "Sand Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct sand magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 27,
      "attackSize": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236c2bb494f76ed0de5727"
  },
  "id": "hyu",
  "name": "Acid Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct acid magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "piercing": 28,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236c49b494f76ed0de5728"
  },
  "id": "x3d",
  "name": "Ash Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct ash magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "attackSize": 21,
      "intensity": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236cbdb494f76ed0de572b"
  },
  "id": "Oi4",
  "name": "Explosion Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct explosion magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "attackSize": 28,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236e41b494f76ed0de5733"
  },
  "id": "ndw",
  "name": "Plasma Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct plasma magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "defense": 48,
      "intensity": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236e5ab494f76ed0de5734"
  },
  "id": "Bio",
  "name": "Poison Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct poison magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "defense": 48,
      "piercing": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236ee6b494f76ed0de5738"
  },
  "id": "ndB",
  "name": "Water Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct water magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232481248660951183/waterhat3.png?ex=66299d1c&is=66284b9c&hm=1a73268c0e76bf1e26a781eafc63030d7a6bebdeebd5d603670d4fb3bcbb9356&",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "attackSize": 21,
      "intensity": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237c5b1320aac9348867c5"
  },
  "id": "upT",
  "name": "Acid Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct acid magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 64,
      "piercing": 38,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237c9c1320aac9348867c7"
  },
  "id": "rYz",
  "name": "Crystal Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct crystal magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 136,
      "intensity": 19,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237cfc1320aac9348867ca"
  },
  "id": "cAw",
  "name": "Fire Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct fire magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232481878695477429/image.png?ex=66299db2&is=66284c32&hm=086c574b09a600f2197ef65c2bc9b9549203c36fd01bdb1e048c3233f14633ff&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "defense": 64,
      "attackSize": 9,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237d1d1320aac9348867cb"
  },
  "id": "dXh",
  "name": "Glass Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct glass magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://forum.arcaneodyssey.dev/uploads/default/original/3X/b/0/b04300ce906b061d3f6ea55b489f0ac68ea80a66.png",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "defense": 58,
      "resistance": 15
    },
    {
      "level": 110,
      "power": 14,
      "defense": 64,
      "resistance": 16
    },
    {
      "level": 120,
      "power": 15,
      "defense": 69,
      "resistance": 18
    },
    {
      "level": 130,
      "power": 16,
      "defense": 76,
      "resistance": 19
    },
    {
      "level": 140,
      "power": 17,
      "defense": 82,
      "resistance": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237d731320aac9348867ce"
  },
  "id": "ZYq",
  "name": "Lightning Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct lightning magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 64,
      "agility": 9,
      "attackSpeed": 28,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237da91320aac9348867d0"
  },
  "id": "fMj",
  "name": "Metal Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct metal magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 207,
      "agility": -9,
      "resistance": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237e891320aac9348867d5"
  },
  "id": "NTB",
  "name": "Snow Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct snow magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 64,
      "attackSpeed": 9,
      "attackSize": 28,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238e1bf3ba5df4ea33d84f"
  },
  "id": "OSd",
  "name": "Poison Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct poison magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "defense": 48,
      "piercing": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238ec3f3ba5df4ea33d853"
  },
  "id": "So0",
  "name": "Water Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct water magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480556546134046/waterpants3.png?ex=66299c77&is=66284af7&hm=64bc672d00bf5789d80927a548670801006aaf603ac3b33735e2b0bfe7aa149e&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "attackSize": 21,
      "intensity": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238efff3ba5df4ea33d854"
  },
  "id": "jON",
  "name": "Wind Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct wind magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 84,
      "attackSpeed": 14,
      "intensity": 14,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 90,
      "attackSpeed": 15,
      "intensity": 15,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623982f76f3b6b8c31e5c47"
  },
  "id": "iYu",
  "name": "Crystal Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct crystal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 53,
      "agility": 14,
      "intensity": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "662398fd76f3b6b8c31e5c4b"
  },
  "id": "GeS",
  "name": "Explosion Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct explosion magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSize": 28,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623999276f3b6b8c31e5c4f"
  },
  "id": "MQC",
  "name": "Ice Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct ice magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 27,
      "agility": 14,
      "intensity": 24,
      "resistance": 21
    },
    {
      "level": 140,
      "defense": 28,
      "agility": 15,
      "intensity": 26,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239a3376f3b6b8c31e5c55"
  },
  "id": "p8f",
  "name": "Magma Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct magma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224842061149241354/image.png?ex=66316b0f&is=661ef60f&hm=5e54ea48e3814b7f8bd0fceae96482eb54c544aa7407b1ed44ba8f7ec10179a6&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 5,
      "agility": 14,
      "attackSize": 14,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239a9c76f3b6b8c31e5c59"
  },
  "id": "uzw",
  "name": "Plasma Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct plasma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "agility": 14,
      "intensity": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239b3276f3b6b8c31e5c5e"
  },
  "id": "ram",
  "name": "Sand Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct sand magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 27,
      "agility": 14,
      "attackSize": 21,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239b6776f3b6b8c31e5c5f"
  },
  "id": "JgU",
  "name": "Shadow Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct shadow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224860648391970897/image.png?ex=6626479f&is=6624f61f&hm=bb8f91a5f850def3fade4bc4fee74d51331be5e0cced81a3133bb360404f4f80&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 5,
      "agility": 14,
      "attackSpeed": 14,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239bd476f3b6b8c31e5c64"
  },
  "id": "Qyc",
  "name": "Water Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct water magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480515043623074/waterpants2.png?ex=66299c6d&is=66284aed&hm=501e7f86fc15fd88d203ff4074ff455a93858d48ebf489cd9c9db1afaecb921a&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSize": 21,
      "intensity": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239d8c76f3b6b8c31e5c69"
  },
  "id": "gko",
  "name": "Fire Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct fire magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232481899025535157/image.png?ex=66299db7&is=66284c37&hm=02e84307f884383222c5fc23f6175806d209848fc8abd091e4a03c285324675b&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "agility": 14,
      "attackSize": 7,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a577295d8ce86984397e"
  },
  "id": "rfZ",
  "name": "Crystal Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct crystal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 71,
      "agility": 19,
      "intensity": 51
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a66f295d8ce869843981"
  },
  "id": "3zV",
  "name": "Fire Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct fire magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232483636075434104/magecoat.png?ex=66299f55&is=66284dd5&hm=dd48f67e90e55950cb6810d0b0d97f3c5251efc43e5385b48d4dab89e752a72c&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "agility": 19,
      "attackSize": 9,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a6e3295d8ce869843982"
  },
  "id": "86O",
  "name": "Glass Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct glass magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "defense": -28,
      "agility": 15,
      "intensity": 25
    },
    {
      "level": 110,
      "power": 14,
      "defense": -31,
      "agility": 16,
      "intensity": 27
    },
    {
      "level": 120,
      "power": 15,
      "defense": -34,
      "agility": 18,
      "intensity": 30
    },
    {
      "level": 130,
      "power": 16,
      "defense": -36,
      "agility": 19,
      "intensity": 32
    },
    {
      "level": 140,
      "power": 17,
      "defense": -39,
      "agility": 21,
      "intensity": 35
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a76e295d8ce869843983"
  },
  "id": "fzd",
  "name": "Ice Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct ice magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 27,
      "agility": 15,
      "intensity": 25,
      "resistance": 22
    },
    {
      "level": 110,
      "defense": 30,
      "agility": 16,
      "intensity": 27,
      "resistance": 24
    },
    {
      "level": 120,
      "defense": 33,
      "agility": 18,
      "intensity": 30,
      "resistance": 26
    },
    {
      "level": 130,
      "defense": 35,
      "agility": 19,
      "intensity": 32,
      "resistance": 29
    },
    {
      "level": 140,
      "defense": 38,
      "agility": 21,
      "intensity": 35,
      "resistance": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a8a0295d8ce869843989"
  },
  "id": "bLo",
  "name": "Poison Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct poison magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 10,
      "agility": 19,
      "intensity": 32,
      "piercing": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623ad5888c58e83573a9135"
  },
  "id": "9ij",
  "name": "Reinforced Helmet",
  "legend": "A basic helmet layered in thick dyed leather and other fabrics. This helmet is often worn by hunters and explorers.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Helmet",
  "statType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 96
    },
    {
      "level": 140,
      "defense": 103
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623ad9f88c58e83573a9138"
  },
  "id": "WIv",
  "name": "Reinforced Gauntlets",
  "legend": "A basic set of gauntlets made out of thick dyed leather.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arms",
  "statType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 96
    },
    {
      "level": 140,
      "defense": 103
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623b0b11f4662b0cd6ecc70"
  },
  "id": "1AL",
  "name": "Resistance Amulet [Fair]",
  "legend": "Five azurite gemstone embedded in a bronze chain necklace. The gemstones seem to give a decent amount of resistance.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Resistance/amuletResistance.png?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "statType": "None",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "resistance": 74
    },
    {
      "level": 110,
      "resistance": 82
    },
    {
      "level": 120,
      "resistance": 89
    },
    {
      "level": 130,
      "resistance": 97
    },
    {
      "level": 140,
      "resistance": 104
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6612a27a5434689fb1c88210"
  },
  "id": "AAC",
  "name": "None",
  "legend": "Yep, big nothing pants over here nothing to see.",
  "mainType": "Pants",
  "rarity": "None",
  "imageId": "https://i.imgur.com/U9Z0chG.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 0,
  "minLevel": 0,
  "maxLevel": 0,
  "statsPerLevel": [],
  "validModifiers": [],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66166a769c6ca51167a76fc2"
  },
  "id": "AAK",
  "name": "Lion of Ravenna Leggings [Argos]",
  "legend": "A pair of scarlet leggings trimmed in bronze, emblazoned with the symbol of the Ravenna Realm. These leggings were specifically made for General Argos, the Lion of Old Ravenna, and were stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Argos/argosBoots.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 80,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 188,
      "intensity": 26
    },
    {
      "level": 140,
      "defense": 202,
      "intensity": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66166e292dda1dfa35490636"
  },
  "id": "AAN",
  "name": "Cape of Ravenna Loyalty [Argos]",
  "legend": "A cape made out of fine orange cloth, emblazoned with the symbol of the Ravenna Realm. It was specifically made for General Argos, the Lion of Old Ravenna, and was stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Argos/argosCape.jpg",
  "deleted": false,
  "subType": "Back",
  "gemNo": 2,
  "minLevel": 80,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 80,
      "agility": 16,
      "intensity": 26
    },
    {
      "level": 90,
      "agility": 18,
      "intensity": 29
    },
    {
      "level": 100,
      "agility": 20,
      "intensity": 32
    },
    {
      "level": 110,
      "agility": 22,
      "intensity": 35
    },
    {
      "level": 120,
      "agility": 24,
      "intensity": 39
    },
    {
      "level": 130,
      "agility": 26,
      "intensity": 42
    },
    {
      "level": 140,
      "agility": 28,
      "intensity": 46
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616708e64045b65b82dbbc4"
  },
  "id": "AAS",
  "name": "Theurgist Cloak",
  "legend": "A cloak once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Theurgist/theurgistCloak.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 3,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "attackSpeed": 26,
      "warding": 1
    },
    {
      "level": 130,
      "attackSpeed": 29,
      "warding": 1
    },
    {
      "level": 140,
      "attackSpeed": 42,
      "warding": 1
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616729264045b65b82dbbc6"
  },
  "id": "AAU",
  "name": "Sunken Warrior Armor",
  "legend": "A set of green and gold armor made out of arcanium metal that has spent hundreds of years underwater, causing its properties to change. It seems to constantly produce water.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Sunken%20Warrior/sunkenWarriorChestplate.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 237,
      "attackSpeed": 22
    },
    {
      "level": 110,
      "defense": 261,
      "attackSpeed": 24
    },
    {
      "level": 120,
      "defense": 285,
      "attackSpeed": 27
    },
    {
      "level": 130,
      "defense": 308,
      "attackSpeed": 29
    },
    {
      "level": 140,
      "defense": 332,
      "attackSpeed": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616760264045b65b82dbbcb"
  },
  "id": "AAZ",
  "name": "Aereus Hat",
  "legend": "A dark purple hat lined with bronze, obtained from a Dark Sealed Chest.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Aereus/aereusHat.jpg",
  "deleted": false,
  "subType": "Hat",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "attackSize": 39,
      "intensity": 26
    },
    {
      "level": 130,
      "attackSize": 42,
      "intensity": 29
    },
    {
      "level": 140,
      "attackSize": 45,
      "intensity": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66167aa064045b65b82dbbd1"
  },
  "id": "AAf",
  "name": "Vatrachos Cape",
  "legend": "A brightly colored cape imbued with some strange kind of power, it seems to grant the wearer great power... at a price.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Vatrachos/vatrachosCape.jpg",
  "deleted": false,
  "subType": "Back",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "power": 28,
      "defense": 89,
      "drawback": 2
    },
    {
      "level": 130,
      "power": 30,
      "defense": 96,
      "drawback": 2
    },
    {
      "level": 140,
      "power": 33,
      "defense": 103,
      "drawback": 2
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66167ce69761b5babd2b2b67"
  },
  "id": "AAi",
  "name": "Agility Amulet [Fair]",
  "legend": "A rugged, amazonite gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of agility.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Amulets/Agility/amuletAgility.jpg",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 74
    },
    {
      "level": 110,
      "agility": 82
    },
    {
      "level": 120,
      "agility": 89
    },
    {
      "level": 130,
      "agility": 97
    },
    {
      "level": 140,
      "agility": 104
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66167d529761b5babd2b2b69"
  },
  "id": "AAk",
  "name": "Attack Speed Amulet [Fair]",
  "legend": "A rugged, emerald gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Attack speed.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Amulets/Attack%20Speed/amuletAttackSpeed.jpg",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSpeed": 74
    },
    {
      "level": 110,
      "attackSpeed": 82
    },
    {
      "level": 120,
      "attackSpeed": 89
    },
    {
      "level": 130,
      "attackSpeed": 97
    },
    {
      "level": 140,
      "attackSpeed": 104
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661680e12c8f15f2b8aa40c8"
  },
  "id": "AAm",
  "name": "Dark Bronze Boots",
  "legend": "A set of finely crafted black iron boots with trims of bronze, obtained from a Dark Sealed Chest.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Dark%20Bronze/darkBronzeBoots.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "defense": 89,
      "attackSpeed": 36
    },
    {
      "level": 130,
      "defense": 96,
      "attackSpeed": 39
    },
    {
      "level": 140,
      "defense": 103,
      "attackSpeed": 42
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661684fcd52529101cc209c4"
  },
  "id": "AAr",
  "name": "Cernyx's Faulds",
  "legend": "Long faulds of green cloth worn around the waist. They were taken from Cernyx, the Archon of the Greenwish Cult, after he was defeated in combat.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Cernyx/cernyxFaulds.jpg",
  "deleted": false,
  "subType": "Waist",
  "gemNo": 2,
  "minLevel": 60,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 60,
      "defense": 86,
      "attackSpeed": 9
    },
    {
      "level": 70,
      "defense": 101,
      "attackSpeed": 10
    },
    {
      "level": 80,
      "defense": 115,
      "attackSpeed": 12
    },
    {
      "level": 90,
      "defense": 130,
      "attackSpeed": 13
    },
    {
      "level": 100,
      "defense": 144,
      "attackSpeed": 15
    },
    {
      "level": 110,
      "defense": 159,
      "attackSpeed": 16
    },
    {
      "level": 120,
      "defense": 173,
      "attackSpeed": 18
    },
    {
      "level": 130,
      "defense": 188,
      "attackSpeed": 19
    },
    {
      "level": 140,
      "defense": 202,
      "attackSpeed": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6617fcc7064e17ecf40354ad"
  },
  "id": "Awv",
  "name": "Ravenna Apostle Leggings [Carina]",
  "legend": "A pair of sturdy, metal-capped boots with red metal greaves. These leggings were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Carina/carinaBoots.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 90,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 90,
      "power": 11,
      "attackSpeed": 13
    },
    {
      "level": 100,
      "power": 13,
      "attackSpeed": 15
    },
    {
      "level": 110,
      "power": 14,
      "attackSpeed": 16
    },
    {
      "level": 120,
      "power": 15,
      "attackSpeed": 18
    },
    {
      "level": 130,
      "power": 17,
      "attackSpeed": 19
    },
    {
      "level": 140,
      "power": 18,
      "attackSpeed": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6617ff5b064e17ecf40354b0"
  },
  "id": "uPA",
  "name": "Ravenna Apostle Pauldrons [Carina]",
  "legend": "Lightweight metal pauldrons that were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Carina/carinaPauldrons.jpg?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "gemNo": 2,
  "minLevel": 90,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 90,
      "power": 11,
      "attackSpeed": 13
    },
    {
      "level": 100,
      "power": 13,
      "attackSpeed": 15
    },
    {
      "level": 110,
      "power": 14,
      "attackSpeed": 16
    },
    {
      "level": 120,
      "power": 15,
      "attackSpeed": 18
    },
    {
      "level": 130,
      "power": 17,
      "attackSpeed": 19
    },
    {
      "level": 140,
      "power": 18,
      "attackSpeed": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6618070aa6a84c315db6a365"
  },
  "id": "Pzw",
  "name": "Wolf Pelt Cloak",
  "legend": "A wolf's pelt fashioned into a thick cape, usually worn by bandits or outdoorsmen.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/wolfPeltCloat.jpg?raw=true",
  "deleted": false,
  "subType": "Back",
  "gemNo": 1,
  "minLevel": 80,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 80,
      "agility": 12,
      "intensity": 20
    },
    {
      "level": 90,
      "agility": 13,
      "intensity": 22
    },
    {
      "level": 100,
      "agility": 15,
      "intensity": 25
    },
    {
      "level": 110,
      "agility": 17,
      "intensity": 27
    },
    {
      "level": 120,
      "agility": 18,
      "intensity": 30
    },
    {
      "level": 130,
      "agility": 19,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180c8f4c1cd43e002d1e2a"
  },
  "id": "hrn",
  "name": "Mercenary Boots",
  "legend": "A ragged pair of boots usually worn by mercenaries.",
  "mainType": "Pants",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/mercenaryBoots.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 1,
  "minLevel": 50,
  "maxLevel": 100,
  "statsPerLevel": [
    {
      "level": 50,
      "agility": 11
    },
    {
      "level": 60,
      "agility": 13
    },
    {
      "level": 70,
      "agility": 15
    },
    {
      "level": 80,
      "agility": 18
    },
    {
      "level": 90,
      "agility": 20
    },
    {
      "level": 100,
      "agility": 22
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180e524c1cd43e002d1e2c"
  },
  "id": "Jpy",
  "name": "Elite Noble's Pauldrons",
  "legend": "An ornate set of pauldrons with a white cape, usually worn by renowned nobles.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/eliteNoblePauldrons.jpg?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 16,
      "attackSize": 28
    },
    {
      "level": 110,
      "agility": 18,
      "attackSize": 30
    },
    {
      "level": 120,
      "agility": 20,
      "attackSize": 33
    },
    {
      "level": 130,
      "agility": 21,
      "attackSize": 36
    },
    {
      "level": 140,
      "agility": 23,
      "attackSize": 39
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180ef84c1cd43e002d1e2e"
  },
  "id": "2nD",
  "name": "Caped Silver Pauldrons",
  "legend": "An ornate set of silver pauldrons with a cape.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/capedSilverPauldrons.jpg?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 16,
      "attackSpeed": 28
    },
    {
      "level": 110,
      "agility": 18,
      "attackSpeed": 30
    },
    {
      "level": 120,
      "agility": 20,
      "attackSpeed": 33
    },
    {
      "level": 130,
      "agility": 21,
      "attackSpeed": 36
    },
    {
      "level": 140,
      "agility": 23,
      "attackSpeed": 39
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661813314c1cd43e002d1e36"
  },
  "id": "lU4",
  "name": "Defense Amulet [Poor]",
  "legend": "A rugged, grey agate gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of defense.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Defense/amuletDefensePoor.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 10,
  "maxLevel": 50,
  "statsPerLevel": [
    {
      "level": 10,
      "defense": 19
    },
    {
      "level": 20,
      "defense": 39
    },
    {
      "level": 30,
      "defense": 59
    },
    {
      "level": 40,
      "defense": 79
    },
    {
      "level": 50,
      "defense": 98
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6618170b3dcf3d2abe1ac42d"
  },
  "id": "T3B",
  "name": "Agility Amulet [Dull]",
  "legend": "A rugged, amazonite gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of agility.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Agility/amuletAgilityDull.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 50,
  "maxLevel": 100,
  "statsPerLevel": [
    {
      "level": 50,
      "agility": 30
    },
    {
      "level": 60,
      "agility": 36
    },
    {
      "level": 70,
      "agility": 42
    },
    {
      "level": 80,
      "agility": 48
    },
    {
      "level": 90,
      "agility": 54
    },
    {
      "level": 100,
      "agility": 60
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661821b5dfa6a4bffd8c9d73"
  },
  "id": "kCA",
  "name": "Attack Size Amulet [Dull]",
  "legend": "A rugged, peridot gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Attack size.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Attack%20Size/amuletAttackSizeDull.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 50,
  "maxLevel": 100,
  "statsPerLevel": [
    {
      "level": 50,
      "attackSize": 30
    },
    {
      "level": 60,
      "attackSize": 36
    },
    {
      "level": 70,
      "attackSize": 42
    },
    {
      "level": 80,
      "attackSize": 48
    },
    {
      "level": 90,
      "attackSize": 54
    },
    {
      "level": 100,
      "attackSize": 60
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66182bbb5e52c44e3cb4a489"
  },
  "id": "fXr",
  "name": "Hasty",
  "legend": "+1.41 points of Attack Speed for every 10 levels +1.41 points of Agility for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantHasty.jpg?raw=true",
  "deleted": false,
  "agilityIncrement": 1.40625,
  "attackSpeedIncrement": 1.40625,
  "enchantTypes": {
    "gear": {
      "agilityIncrement": 1.40625,
      "attackSpeedIncrement": 1.40625
    }
  }
},
{
  "_id": {
    "$oid": "66182c845e52c44e3cb4a48d"
  },
  "id": "W7S",
  "name": "Hard",
  "legend": "+5.5 points of Defense for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Rare/enchantDefense.jpg?raw=true",
  "deleted": false,
  "defenseIncrement": 5.5,
  "enchantTypes": {
    "gear": {
      "defenseIncrement": 5.5
    },
    "ship": {
      "ram": {
        "durability": 400,
        "ramDefense": 300
      },
      "hull": {
        "durability": 300,
        "ramDefense": 100
      },
      "sail": {
        "durability": 100
      }
    }
  }
},
{
  "_id": {
    "$oid": "66182ecb5e52c44e3cb4a499"
  },
  "id": "XUx",
  "name": "Agate",
  "legend": "Agaga goo goo gaa gaa",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectAgate.jpg?raw=true",
  "deleted": false,
  "defense": 38,
  "attackSize": 5
},
{
  "_id": {
    "$oid": "66182ee55e52c44e3cb4a49a"
  },
  "id": "NU7",
  "name": "Power Gem",
  "legend": "Max Power Gem Innit",
  "mainType": "Gem",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/gemPowerMaxPlaceholder.jpg?raw=true",
  "deleted": false,
  "power": 3
},
{
  "_id": {
    "$oid": "66182f385e52c44e3cb4a49c"
  },
  "id": "qGg",
  "name": "Defense Gem",
  "legend": "Max Defense Gem Innit",
  "mainType": "Gem",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/gemDefenseMaxPlaceholder.jpg?raw=true",
  "deleted": false,
  "defense": 38
},
{
  "_id": {
    "$oid": "6618e335f5f0699a1af64e96"
  },
  "id": "giu",
  "name": "Archaic",
  "legend": "Adds Attack Size for each 10 levels",
  "mainType": "Modifier",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Modifiers/modifierArchaic.jpg",
  "deleted": false,
  "attackSizeIncrement": 1.5
},
{
  "_id": {
    "$oid": "6618e410f5f0699a1af64e99"
  },
  "id": "Pun",
  "name": "Superheated",
  "legend": "Adds low power and intensity for each 10 levels",
  "mainType": "Modifier",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Modifiers/modifierSuperheated.jpg",
  "deleted": false,
  "powerIncrement": 0.25,
  "intensityIncrement": 0.6666666666666667
},
{
  "_id": {
    "$oid": "661c420ef8ee17deeb3f5851"
  },
  "id": "Nis",
  "name": "Explosion Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting explosion magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "attackSize": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c434cf8ee17deeb3f5856"
  },
  "id": "lqV",
  "name": "Lightning Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting lightning magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 7,
      "agility": 7,
      "attackSpeed": 22
    },
    {
      "level": 130,
      "power": 9,
      "agility": 9,
      "attackSpeed": 29
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c4374f8ee17deeb3f5857"
  },
  "id": "RMO",
  "name": "Magma Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting magma magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1160490093308563498/1232084553020211221/magmasphere.png?ex=66282ba8&is=6626da28&hm=29fe53974bbc8756ffa0bb3aa264f9ce8b20d265b60fa2e4d2df50f98214a6c0&",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 15,
      "attackSize": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c442af8ee17deeb3f585a"
  },
  "id": "yIS",
  "name": "Poison Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting poison magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 19,
      "piercing": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c44c7f8ee17deeb3f585d"
  },
  "id": "G7X",
  "name": "Snow Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting snow magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "attackSpeed": 9,
      "attackSize": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661d5fcb65d40067fa05a4de"
  },
  "id": "em2",
  "name": "Samurai Leggings",
  "legend": "A set of lightweight leggings worn by samurai from the Ryujin Dynasty, a kingdom in the southern War Seas. ",
  "mainType": "Pants",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Samurai/samuraiLeggings.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 111,
      "resistance": 11
    },
    {
      "level": 110,
      "defense": 122,
      "resistance": 12
    },
    {
      "level": 120,
      "defense": 133,
      "resistance": 13
    },
    {
      "level": 130,
      "defense": 144,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 155,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6620d9b577dc529bca6e4e55"
  },
  "id": "ju6",
  "name": "Cannon Fist Shoulderpads",
  "legend": "A set of lightweight shoulderpads made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Shoulder",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "intensity": 10,
      "piercing": 10
    },
    {
      "level": 110,
      "defense": 114,
      "intensity": 12,
      "piercing": 12
    },
    {
      "level": 120,
      "defense": 124,
      "intensity": 13,
      "piercing": 13
    },
    {
      "level": 130,
      "defense": 135,
      "intensity": 14,
      "piercing": 14
    },
    {
      "level": 140,
      "defense": 145,
      "intensity": 15,
      "piercing": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620de5b6b213745a28e0eb8"
  },
  "id": "P0Y",
  "name": "Sailor Style Armor",
  "legend": "A set of lightweight armor made for sailor style users, designed to compliment the style's strengths. ",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleArmor.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 5,
      "defense": 138,
      "attackSize": 14
    },
    {
      "level": 110,
      "power": 5,
      "defense": 152,
      "attackSize": 16
    },
    {
      "level": 120,
      "power": 6,
      "defense": 166,
      "attackSize": 18
    },
    {
      "level": 130,
      "power": 6,
      "defense": 128,
      "attackSize": 19
    },
    {
      "level": 140,
      "power": 7,
      "defense": 194,
      "attackSize": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e206c16cb91be4088762"
  },
  "id": "zMG",
  "name": "Basic Combat Armor",
  "legend": "A set of lightweight armor made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatArmor.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 5,
      "defense": 138,
      "intensity": 14
    },
    {
      "level": 110,
      "power": 5,
      "defense": 152,
      "intensity": 16
    },
    {
      "level": 120,
      "power": 6,
      "defense": 166,
      "intensity": 18
    },
    {
      "level": 130,
      "power": 6,
      "defense": 180,
      "intensity": 19
    },
    {
      "level": 140,
      "power": 7,
      "defense": 194,
      "intensity": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e249c16cb91be4088763"
  },
  "id": "QDL",
  "name": "Basic Combat Chestplate",
  "legend": "A set of heavy metal chestplate with exposed arms for freedom of movement, made for basic combat users, made to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatChestplate.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 5,
      "intensity": 29,
      "piercing": 25
    },
    {
      "level": 110,
      "power": 5,
      "intensity": 32,
      "piercing": 27
    },
    {
      "level": 120,
      "power": 6,
      "intensity": 36,
      "piercing": 30
    },
    {
      "level": 130,
      "power": 6,
      "intensity": 38,
      "piercing": 32
    },
    {
      "level": 140,
      "power": 7,
      "intensity": 41,
      "piercing": 35
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e27cc16cb91be4088764"
  },
  "id": "KOh",
  "name": "Basic Combat Robes",
  "legend": "A fine robe made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatRobes.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 17,
      "intensity": 14
    },
    {
      "level": 110,
      "power": 18,
      "intensity": 16
    },
    {
      "level": 120,
      "power": 21,
      "intensity": 18
    },
    {
      "level": 130,
      "power": 22,
      "intensity": 19
    },
    {
      "level": 140,
      "power": 24,
      "intensity": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e2fbc16cb91be4088766"
  },
  "id": "u2X",
  "name": "Basic Combat Leggings",
  "legend": "A set of lightweight armored leggings made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatLeggings.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "intensity": 10
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "intensity": 12
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "intensity": 13
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e47fc16cb91be408876a"
  },
  "id": "h6d",
  "name": "Basic Combat Handwraps",
  "legend": "A set of hand wrappings made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatHandwraps.png?raw=true",
  "deleted": false,
  "subType": "Arms",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "attackSpeed": 28,
      "intensity": 10
    },
    {
      "level": 110,
      "power": 3,
      "attackSpeed": 30,
      "intensity": 12
    },
    {
      "level": 120,
      "power": 4,
      "attackSpeed": 33,
      "intensity": 13
    },
    {
      "level": 130,
      "power": 4,
      "attackSpeed": 36,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 5,
      "attackSpeed": 39,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620f5732d2b29aa81b9b9c8"
  },
  "id": "3Zm",
  "name": "Boxing Shoulderpads",
  "legend": "A set of lightweight shoulderpads made for boxing users, designed to compliment the style's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Shoulder",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "agility": 10,
      "resistance": 10
    },
    {
      "level": 110,
      "defense": 114,
      "agility": 12,
      "resistance": 12
    },
    {
      "level": 120,
      "defense": 124,
      "agility": 13,
      "resistance": 13
    },
    {
      "level": 130,
      "defense": 135,
      "agility": 14,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 145,
      "agility": 15,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620f5f82d2b29aa81b9b9cb"
  },
  "id": "zIw",
  "name": "Boxing Greaves",
  "legend": "A set of heavy metal greaves made for boxing users, designed to compliment the style's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 10,
      "intensity": 11,
      "piercing": 18,
      "resistance": 10
    },
    {
      "level": 110,
      "agility": 12,
      "intensity": 12,
      "piercing": 20,
      "resistance": 12
    },
    {
      "level": 120,
      "agility": 13,
      "intensity": 13,
      "piercing": 22,
      "resistance": 13
    },
    {
      "level": 130,
      "agility": 14,
      "intensity": 14,
      "piercing": 24,
      "resistance": 14
    },
    {
      "level": 140,
      "agility": 15,
      "intensity": 15,
      "piercing": 26,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620f928307d3dfa8ad6ff21"
  },
  "id": "iCb",
  "name": "Boxing Chestplate",
  "legend": "A heavy metal chestplate with exposed arms for freedom of movement, made to compliment boxing user's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 14,
      "intensity": 15,
      "piercing": 25,
      "resistance": 14
    },
    {
      "level": 110,
      "agility": 16,
      "intensity": 16,
      "piercing": 27,
      "resistance": 16
    },
    {
      "level": 120,
      "agility": 18,
      "intensity": 18,
      "piercing": 30,
      "resistance": 18
    },
    {
      "level": 130,
      "agility": 19,
      "intensity": 19,
      "piercing": 32,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "scaling": {
    "intensity": 0.3,
    "piercing": 0.5
  }
},
{
  "_id": {
    "$oid": "6622c2c8974d7a9c334ac2f7"
  },
  "id": "I3T",
  "name": "Acid Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct acid magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "piercing": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c402974d7a9c334ac2fd"
  },
  "id": "H3c",
  "name": "Glass Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct glass magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 18,
      "defense": -21
    },
    {
      "level": 110,
      "power": 20,
      "defense": -24
    },
    {
      "level": 120,
      "power": 22,
      "defense": -26
    },
    {
      "level": 130,
      "power": 24,
      "defense": -27
    },
    {
      "level": 140,
      "power": 25,
      "defense": -30
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c49a974d7a9c334ac300"
  },
  "id": "b4x",
  "name": "Lightning Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct lightning magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229975546008436777/image.png?ex=6631a2fe&is=661f2dfe&hm=ed87916473ab4316e8373306975a8aa0703e9024067a4f5db5fc57c252cca52e&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "agility": 7,
      "attackSpeed": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c51b974d7a9c334ac302"
  },
  "id": "GPh",
  "name": "Metal Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct metal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 107,
      "agility": -7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c589974d7a9c334ac304"
  },
  "id": "BUK",
  "name": "Poison Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct poison magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 19,
      "piercing": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c5b5974d7a9c334ac305"
  },
  "id": "9Wi",
  "name": "Sand Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct sand magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 27,
      "attackSize": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c60e974d7a9c334ac307"
  },
  "id": "5SF",
  "name": "Snow Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct snow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 7,
      "attackSize": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c630974d7a9c334ac308"
  },
  "id": "9le",
  "name": "Water Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct water magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480516981260298/waterhat1.png?ex=66299c6d&is=66284aed&hm=12c5b1e958999329736d44380ac62045b153cd003e89ab20c4532495bece4b2b&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 21,
      "intensity": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c64b974d7a9c334ac309"
  },
  "id": "Zqc",
  "name": "Wind Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct wind magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 14,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 13,
      "attackSpeed": 15,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c9256e76aad14a8dd66f"
  },
  "id": "H5l",
  "name": "Acid Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct acid magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "piercing": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cace6e76aad14a8dd677"
  },
  "id": "6ev",
  "name": "Light Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct light magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 16,
      "attackSpeed": 48,
      "attackSize": -10
    },
    {
      "level": 140,
      "power": 17,
      "attackSpeed": 52,
      "attackSize": -11
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cc866e76aad14a8dd67e"
  },
  "id": "xkA",
  "name": "Shadow Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct shadow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224861150508879942/image.png?ex=66264817&is=6624f697&hm=785572cd0adf5e656cffb9000302a962c6b42360bf17f9da33af627457e9927f&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 23,
      "attackSpeed": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622ccaa6e76aad14a8dd67f"
  },
  "id": "zid",
  "name": "Snow Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct snow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "attackSpeed": 9,
      "attackSize": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622ceb3ef298b29583d0442"
  },
  "id": "YJm",
  "name": "Water Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct water magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480516276617327/waterchest1.png?ex=66299c6d&is=66284aed&hm=305a25a86ac3b559ebc2a4f4376c9f0be75d714be9c562cecff3e30bd000f31d&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "attackSize": 28,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cee5ef298b29583d0443"
  },
  "id": "jbZ",
  "name": "Wind Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct wind magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 16,
      "attackSpeed": 19,
      "intensity": 19
    },
    {
      "level": 140,
      "power": 17,
      "attackSpeed": 20,
      "intensity": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d309faf9f0151a1ef132"
  },
  "id": "MUP",
  "name": "Poison Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct poison magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 19,
      "piercing": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d3b4faf9f0151a1ef137"
  },
  "id": "kYV",
  "name": "Wind Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct wind magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 14,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 13,
      "attackSpeed": 15,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236c69b494f76ed0de5729"
  },
  "id": "vZg",
  "name": "Crystal Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct crystal magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 101,
      "intensity": 14,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236d3ab494f76ed0de572d"
  },
  "id": "3wR",
  "name": "Glass Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct glass magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "defense": 43,
      "resistance": 11
    },
    {
      "level": 110,
      "power": 10,
      "defense": 47,
      "resistance": 12
    },
    {
      "level": 120,
      "power": 11,
      "defense": 51,
      "resistance": 13
    },
    {
      "level": 130,
      "power": 12,
      "defense": 57,
      "resistance": 14
    },
    {
      "level": 140,
      "power": 12,
      "defense": 60,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236d87b494f76ed0de572f"
  },
  "id": "OK6",
  "name": "Light Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct light magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 84,
      "attackSpeed": 36,
      "attackSize": -8,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 90,
      "attackSpeed": 39,
      "attackSize": -9,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236e1bb494f76ed0de5732"
  },
  "id": "1XY",
  "name": "Metal Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct metal magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 191,
      "agility": -8,
      "resistance": 20
    },
    {
      "level": 140,
      "defense": 205,
      "agility": -9,
      "resistance": 22
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236e79b494f76ed0de5735"
  },
  "id": "jlf",
  "name": "Sand Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct sand magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 75,
      "attackSize": 21,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236f00b494f76ed0de5739"
  },
  "id": "ToV",
  "name": "Wind Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct wind magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 84,
      "attackSpeed": 14,
      "intensity": 14,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 90,
      "attackSpeed": 15,
      "intensity": 15,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237d331320aac9348867cc"
  },
  "id": "Nkt",
  "name": "Ice Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct ice magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 113,
      "resistance": 37
    },
    {
      "level": 110,
      "defense": 125,
      "resistance": 40
    },
    {
      "level": 120,
      "defense": 136,
      "resistance": 44
    },
    {
      "level": 130,
      "defense": 147,
      "resistance": 48
    },
    {
      "level": 140,
      "defense": 159,
      "resistance": 52
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237dd81320aac9348867d1"
  },
  "id": "hSi",
  "name": "Plasma Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct plasma magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224397160771223563/1224397161332998184/image.png?ex=662fccb7&is=661d57b7&hm=b635cff151daf134dbfe44b1b866c3f56df819eabb4799a16ea530ec28ac6626&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 10,
      "defense": 64,
      "intensity": 9,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237df21320aac9348867d2"
  },
  "id": "hep",
  "name": "Poison Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct poison magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 10,
      "defense": 64,
      "piercing": 9,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237e2e1320aac9348867d4"
  },
  "id": "Ne7",
  "name": "Shadow Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct shadow magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224861257744646246/image.png?ex=66317cf0&is=661f07f0&hm=693f2fd30f4f6b391a2613cbc8d37f3d46213f24c7d551ee20cdd5b5b8b09e7c&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 6,
      "defense": 64,
      "attackSpeed": 19,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238b80f3ba5df4ea33d843"
  },
  "id": "wNU",
  "name": "Ash Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct ash magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "attackSize": 21,
      "intensity": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238d01f3ba5df4ea33d849"
  },
  "id": "jdc",
  "name": "Ice Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct ice magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "defense": 101,
      "resistance": 32
    },
    {
      "level": 130,
      "defense": 110,
      "resistance": 35
    },
    {
      "level": 140,
      "defense": 118,
      "resistance": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238d94f3ba5df4ea33d84c"
  },
  "id": "EE4",
  "name": "Magma Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct magma magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224847411550097409/image.png?ex=6631700b&is=661efb0b&hm=cafdc67ccb282c49c641484e2b36ffede4b6737a86508c38e7e741133338cc18&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 5,
      "defense": 48,
      "attackSize": 14,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238e76f3ba5df4ea33d851"
  },
  "id": "uNB",
  "name": "Shadow Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct shadow magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224861366691565568/image.png?ex=6626484a&is=6624f6ca&hm=b8f62b97ec8d482c02254dc6a27200a0e6a6fe224231a7c720c58db22543592a&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 5,
      "defense": 48,
      "attackSpeed": 14,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "662397a076f3b6b8c31e5c42"
  },
  "id": "0ok",
  "name": "Acid Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct acid magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "intensity": 24,
      "piercing": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "662397c576f3b6b8c31e5c43"
  },
  "id": "C4q",
  "name": "Acid Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct acid magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "intensity": 24,
      "piercing": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623980076f3b6b8c31e5c45"
  },
  "id": "gjC",
  "name": "Ash Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct ash magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSize": 21,
      "intensity": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "662398e976f3b6b8c31e5c4a"
  },
  "id": "EwF",
  "name": "Explosion Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct explosion magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSize": 28,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623991f76f3b6b8c31e5c4c"
  },
  "id": "9RL",
  "name": "Fire Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct fire magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232481877693300736/image.png?ex=66299db2&is=66284c32&hm=cba8f0526f8d901fbe2d114aa73907ae1e5d1db787e0e389343fabb45871d3e2&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "agility": 14,
      "attackSize": 7,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623994a76f3b6b8c31e5c4d"
  },
  "id": "Pkm",
  "name": "Glass Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct glass magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "defense": -21,
      "agility": 11,
      "intensity": 18
    },
    {
      "level": 110,
      "power": 10,
      "defense": -24,
      "agility": 12,
      "intensity": 20
    },
    {
      "level": 120,
      "power": 11,
      "defense": -26,
      "agility": 13,
      "intensity": 22
    },
    {
      "level": 130,
      "power": 12,
      "defense": -27,
      "agility": 14,
      "intensity": 24
    },
    {
      "level": 140,
      "power": 12,
      "defense": -30,
      "agility": 15,
      "intensity": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239a0676f3b6b8c31e5c53"
  },
  "id": "D9a",
  "name": "Lightning Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct lightning magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229974448489365554/image.png?ex=6631a1f8&is=661f2cf8&hm=50e23a208d4f3d7cfe8da833983430c421e708e7aaa30b784534f90f741f1a53&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 21,
      "attackSpeed": 21,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239a3c76f3b6b8c31e5c56"
  },
  "id": "gTL",
  "name": "Magma Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct magma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224844175585968199/image.png?ex=66263847&is=6624e6c7&hm=ccf7be94b328b22f5fd5cb04710e3d83c403225d13ce18a5948bdde367f72c46&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 5,
      "agility": 14,
      "attackSize": 14,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239a7776f3b6b8c31e5c58"
  },
  "id": "6A2",
  "name": "Metal Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct metal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 107,
      "agility": 7,
      "intensity": 24,
      "resistance": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239af576f3b6b8c31e5c5b"
  },
  "id": "NR3",
  "name": "Poison Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct poison magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "agility": 14,
      "intensity": 24,
      "piercing": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239b1d76f3b6b8c31e5c5d"
  },
  "id": "r1X",
  "name": "Sand Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct sand magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 27,
      "agility": 14,
      "attackSize": 21,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239bfb76f3b6b8c31e5c66"
  },
  "id": "m6o",
  "name": "Wind Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct wind magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSpeed": 14,
      "intensity": 38
    },
    {
      "level": 140,
      "agility": 15,
      "attackSpeed": 15,
      "intensity": 41
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a559295d8ce86984397d"
  },
  "id": "CEz",
  "name": "Ash Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct ash magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232118266860797952/1232119868908900403/image.png?ex=66284c8c&is=6626fb0c&hm=07334100ecc5b09f51aa014b157050a6ca6511f53df83e4790bc3d49e1f8e169&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 19,
      "attackSize": 29,
      "intensity": 41
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a627295d8ce86984397f"
  },
  "id": "k2i",
  "name": "Earth Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct earth magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 107,
      "agility": 19,
      "attackSize": 9,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a812295d8ce869843985"
  },
  "id": "meC",
  "name": "Lightning Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct lightning magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229974212475621487/image.png?ex=6631a1c0&is=661f2cc0&hm=769ad8a2da15a95e9aa02b2b6576a70a55d77c522e50c062dbd11168f6c60031&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 28,
      "attackSpeed": 28,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a83c295d8ce869843986"
  },
  "id": "BLt",
  "name": "Magma Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct magma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224843371768447058/image.png?ex=66263788&is=6624e608&hm=9e6503b56ab0a5be5b49a3552b2499eb6db18d445dc81c82290ab8241f739bd6&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 6,
      "agility": 19,
      "attackSize": 19,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a8de295d8ce86984398b"
  },
  "id": "kxs",
  "name": "Shadow Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct shadow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224861075644747887/image.png?ex=66317cc5&is=661f07c5&hm=49c32781fc8654473f01df3f3fd7608eb18585d2ce66bdeb76c804c1d684af76&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 6,
      "agility": 19,
      "attackSpeed": 19,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66166dad2dda1dfa35490635"
  },
  "id": "AAM",
  "name": "Lion of Ravenna Helmet [Argos]",
  "legend": "A heavy bronze helmet specifically made for General Argos, the Lion of Old Ravenna, and was stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Argos/argosHelm.jpg",
  "deleted": false,
  "subType": "Helmet",
  "gemNo": 2,
  "minLevel": 80,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 188,
      "intensity": 26
    },
    {
      "level": 140,
      "defense": 202,
      "intensity": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66166eca2dda1dfa35490637"
  },
  "id": "AAO",
  "name": "Bronze Chainmail Shirt",
  "legend": "A chainmail shirt made out of bronze metal. It was specifically made for General Argos, the Lion of Old Ravenna.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Argos/bronzeChainmail.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 80,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 36,
      "intensity": 58
    },
    {
      "level": 140,
      "agility": 39,
      "intensity": 62
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616735a64045b65b82dbbc8"
  },
  "id": "AAW",
  "name": "Sunken Iron Boots",
  "legend": "A set of boots made out of arcanium metal that have spent hundreds of years underwater, causing their properties to change. They seem to constantly produce water.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Sunken%20Iron/sunkenBoots.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 50,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "defense": 196,
      "attackSize": 18
    },
    {
      "level": 120,
      "defense": 213,
      "attackSize": 20
    },
    {
      "level": 130,
      "defense": 231,
      "attackSize": 21
    },
    {
      "level": 140,
      "defense": 249,
      "attackSize": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None",
  "scaling": {
    "defense": 0.54,
    "attackSize": 0.3375
  }
},
{
  "_id": {
    "$oid": "661676c564045b65b82dbbcd"
  },
  "id": "AAb",
  "name": "Aereus Pants",
  "legend": "A set of black robe bottoms line with bronze, obtained from a Dark Sealed Chest.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Aereus/aereusPants.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "attackSize": 39,
      "intensity": 26
    },
    {
      "level": 130,
      "attackSize": 42,
      "intensity": 29
    },
    {
      "level": 140,
      "attackSize": 45,
      "intensity": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616791464045b65b82dbbce"
  },
  "id": "AAc",
  "name": "Vatrachos Boots",
  "legend": "A set of brightly colored boots imbued with some strange kind of power, it seems to grant the wearer great power... at a price.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Vatrachos/vatrachosBoots.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "power": 28,
      "defense": 89,
      "drawback": 2
    },
    {
      "level": 130,
      "power": 30,
      "defense": 96,
      "drawback": 2
    },
    {
      "level": 140,
      "power": 33,
      "defense": 103,
      "drawback": 2
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661679f264045b65b82dbbcf"
  },
  "id": "AAd",
  "name": "Vatrachos Armor",
  "legend": "A set of brightly colored armor imbued with some strange kind of power, it seems to grant the wearer great power... at a price.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Vatrachos/vatrachosChestplate.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "power": 37,
      "defense": 118,
      "drawback": 3
    },
    {
      "level": 130,
      "power": 39,
      "defense": 128,
      "drawback": 3
    },
    {
      "level": 140,
      "power": 44,
      "defense": 138,
      "drawback": 3
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661681592c8f15f2b8aa40ca"
  },
  "id": "AAo",
  "name": "Dark Bronze Helmet",
  "legend": "A finely crafted helmet made of black iron with trims of bronze, obtained from a Dark Sealed Chest.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Dark%20Bronze/darkBronzeHelmet.jpg",
  "deleted": false,
  "subType": "Helmet",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "defense": 89,
      "attackSpeed": 36
    },
    {
      "level": 130,
      "defense": 96,
      "attackSpeed": 39
    },
    {
      "level": 140,
      "defense": 103,
      "attackSpeed": 42
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661682652c8f15f2b8aa40cb"
  },
  "id": "AAp",
  "name": "Cernyx's Boots",
  "legend": "A pair of rough grey pants with sturdy black boots, made to be worn in the muddy swamp of the Forest of Cernunno. They were taken from Cernyx, the Archon of the Greenwish Cult, after he was defeated in Combat.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Cernyx/cernyxBoots.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 60,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 60,
      "defense": 86,
      "attackSpeed": 9
    },
    {
      "level": 70,
      "defense": 101,
      "attackSpeed": 10
    },
    {
      "level": 80,
      "defense": 115,
      "attackSpeed": 12
    },
    {
      "level": 90,
      "defense": 130,
      "attackSpeed": 13
    },
    {
      "level": 100,
      "defense": 144,
      "attackSpeed": 15
    },
    {
      "level": 110,
      "defense": 159,
      "attackSpeed": 16
    },
    {
      "level": 120,
      "defense": 173,
      "attackSpeed": 18
    },
    {
      "level": 130,
      "defense": 188,
      "attackSpeed": 19
    },
    {
      "level": 140,
      "defense": 202,
      "attackSpeed": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6617caf213a70c9f2796a1e3"
  },
  "id": "AAt",
  "name": "Powerful",
  "legend": "Le powerful scroller",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Enchants/Exotic/enchantPowerful.jpg",
  "deleted": false,
  "powerIncrement": 0.875,
  "enchantTypes": {
    "gear": {
      "powerIncrement": 10,
      "defenseIncrement": 10
    },
    "ship": {
      "ram": {
        "ramStrength": 900
      },
      "hull": {
        "ramStrength": 900,
        "stability": 20
      }
    }
  }
},
{
  "_id": {
    "$oid": "6617cb3613a70c9f2796a1e4"
  },
  "id": "AAu",
  "name": "Atlantean Essence",
  "legend": "Le atlantean sus",
  "mainType": "Modifier",
  "rarity": "Exotic",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Modifiers/atlanteanEssence.jpg",
  "deleted": false,
  "powerIncrement": 1,
  "defenseIncrement": 11.07,
  "agilityIncrement": 3,
  "attackSpeedIncrement": 3,
  "attackSizeIncrement": 3,
  "intensityIncrement": 3,
  "insanity": 1
},
{
  "_id": {
    "$oid": "6618010e064e17ecf40354b3"
  },
  "id": "M79",
  "name": "Shroud [Elius]",
  "legend": "A bandana made out of fine cloth.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Elius/eliusShroud.jpg?raw=true",
  "deleted": false,
  "subType": "Face",
  "gemNo": 2,
  "minLevel": 60,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 60,
      "power": 7,
      "agility": 9
    },
    {
      "level": 70,
      "power": 9,
      "agility": 10
    },
    {
      "level": 80,
      "power": 10,
      "agility": 12
    },
    {
      "level": 90,
      "power": 11,
      "agility": 13
    },
    {
      "level": 100,
      "power": 13,
      "agility": 15
    },
    {
      "level": 110,
      "power": 14,
      "agility": 16
    },
    {
      "level": 120,
      "power": 15,
      "agility": 18
    },
    {
      "level": 130,
      "power": 17,
      "agility": 19
    },
    {
      "level": 140,
      "power": 18,
      "agility": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661802c0064e17ecf40354b7"
  },
  "id": "VQE",
  "name": "Golden Armbands",
  "legend": "Two armbands made out of gold, usually worn to show status or wealth.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Siren/goldenArmbands.jpg?raw=true",
  "deleted": false,
  "subType": "Arms",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 11,
      "attackSpeed": 18
    },
    {
      "level": 110,
      "agility": 12,
      "attackSpeed": 20
    },
    {
      "level": 120,
      "agility": 13,
      "attackSpeed": 22
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661802fb064e17ecf40354b8"
  },
  "id": "or9",
  "name": "Golden Bracelets",
  "legend": "Two bracelets made out of gold, usually worn to show status or wealth.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Siren/sirenArmbands.jpg?raw=true",
  "deleted": false,
  "subType": "Arms",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 11,
      "attackSpeed": 18
    },
    {
      "level": 110,
      "agility": 12,
      "attackSpeed": 20
    },
    {
      "level": 120,
      "agility": 13,
      "attackSpeed": 22
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661809a54c1cd43e002d1e25"
  },
  "id": "EOO",
  "name": "Steel Pauldrons",
  "legend": "A set of pauldrons out of fine steel, providing a decent amount of protection.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/steelPauldrons.jpg?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "gemNo": 1,
  "minLevel": 70,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 70,
      "defense": 103
    },
    {
      "level": 80,
      "defense": 118
    },
    {
      "level": 90,
      "defense": 133
    },
    {
      "level": 100,
      "defense": 148
    },
    {
      "level": 110,
      "defense": 163
    },
    {
      "level": 120,
      "defense": 178
    },
    {
      "level": 130,
      "defense": 193
    },
    {
      "level": 140,
      "defense": 207
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180ff04c1cd43e002d1e30"
  },
  "id": "c7a",
  "name": "Deluxe Iron Boots",
  "legend": "A sturdy pair of boots reinforced with iron, usually worn by renowned knights.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/deulxeIronBoots.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 111,
      "resistance": 11
    },
    {
      "level": 110,
      "defense": 122,
      "resistance": 12
    },
    {
      "level": 120,
      "defense": 133,
      "resistance": 13
    },
    {
      "level": 130,
      "defense": 144,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 155,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661810af4c1cd43e002d1e32"
  },
  "id": "PTf",
  "name": "Deluxe Iron Helmet",
  "legend": "An iron helmet with a colored trim, usually worn by renowned knights.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/deulxeIronHelmet.jpg?raw=true",
  "deleted": false,
  "subType": "Helmet",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 140,
      "defense": 155,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Archaic",
    "Blasted",
    "Crystalline",
    "Drowned",
    "Frozen",
    "Sandy",
    "Superheated"
  ],
  "statType": "None",
  "scaling": {
    "defense": 0.3375,
    "resistance": 0.225
  }
},
{
  "_id": {
    "$oid": "661812ac4c1cd43e002d1e35"
  },
  "id": "7dO",
  "name": "Defense Amulet [Dull]",
  "legend": "A rugged, grey agate gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of defense.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Defense/amuletDefenseDull.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 50,
  "maxLevel": 100,
  "statsPerLevel": [
    {
      "level": 50,
      "defense": 108
    },
    {
      "level": 60,
      "defense": 130
    },
    {
      "level": 70,
      "defense": 152
    },
    {
      "level": 80,
      "defense": 174
    },
    {
      "level": 90,
      "defense": 196
    },
    {
      "level": 100,
      "defense": 217
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661817453dcf3d2abe1ac42e"
  },
  "id": "9py",
  "name": "Agility Amulet [Poor]",
  "legend": "A rugged, amazonite gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of agility.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Agility/amuletAgilityPoor.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 10,
  "maxLevel": 50,
  "statsPerLevel": [
    {
      "level": 10,
      "agility": 5
    },
    {
      "level": 20,
      "agility": 10
    },
    {
      "level": 30,
      "agility": 15
    },
    {
      "level": 40,
      "agility": 20
    },
    {
      "level": 50,
      "agility": 25
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661818003dcf3d2abe1ac42f"
  },
  "id": "NgS",
  "name": "Intensity Amulet [Dull]",
  "legend": "A rugged, goshenite gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Intensity.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Intensity/amuletIntensityDull.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 50,
  "maxLevel": 100,
  "statsPerLevel": [
    {
      "level": 50,
      "intensity": 30
    },
    {
      "level": 60,
      "intensity": 36
    },
    {
      "level": 70,
      "intensity": 42
    },
    {
      "level": 80,
      "intensity": 48
    },
    {
      "level": 90,
      "intensity": 54
    },
    {
      "level": 100,
      "intensity": 60
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661818403dcf3d2abe1ac430"
  },
  "id": "3qt",
  "name": "Intensity Amulet [Poor]",
  "legend": "A rugged, goshenite gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Intensity.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Intensity/amuletIntensityPoor.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 10,
  "maxLevel": 50,
  "statsPerLevel": [
    {
      "level": 10,
      "intensity": 5
    },
    {
      "level": 20,
      "intensity": 10
    },
    {
      "level": 30,
      "intensity": 15
    },
    {
      "level": 40,
      "intensity": 20
    },
    {
      "level": 50,
      "intensity": 25
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66182b745e52c44e3cb4a487"
  },
  "id": "Z1a",
  "name": "Enhanced",
  "legend": "+2.625 points of Intensity for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantEnhanced.jpg?raw=true",
  "deleted": false,
  "intensityIncrement": 2.625,
  "enchantTypes": {
    "gear": {
      "intensityIncrement": 2.625
    }
  }
},
{
  "_id": {
    "$oid": "66182b925e52c44e3cb4a488"
  },
  "id": "hD4",
  "name": "Explosive",
  "legend": "+2.625 points of Attack Size for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantExplosive.jpg?raw=true",
  "deleted": false,
  "attackSizeIncrement": 2.625,
  "enchantTypes": {
    "gear": {
      "attackSizeIncrement": 2.625
    }
  }
},
{
  "_id": {
    "$oid": "66182c625e52c44e3cb4a48c"
  },
  "id": "AVS",
  "name": "Nimble",
  "legend": "+1.5 points of Agility for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Rare/enchantNimble.jpg?raw=true",
  "deleted": false,
  "agilityIncrement": 1.5,
  "enchantTypes": {
    "gear": {
      "agilityIncrement": 1.5
    }
  }
},
{
  "_id": {
    "$oid": "66182ca45e52c44e3cb4a48e"
  },
  "id": "jv5",
  "name": "Swift",
  "legend": "+1.5 points of Attack Speed for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Rare/enchantSwift.jpg?raw=true",
  "deleted": false,
  "attackSpeedIncrement": 1.5,
  "enchantTypes": {
    "gear": {
      "attackSpeedIncrement": 1.5
    },
    "ship": {
      "hull": {
        "speed": 5,
        "turning": 10
      },
      "sail": {
        "speed": 10
      }
    }
  }
},
{
  "_id": {
    "$oid": "66182ccc5e52c44e3cb4a48f"
  },
  "id": "yAq",
  "name": "Amplified",
  "legend": "+1.5 points of Intensity for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Rare/enchantAmplified.jpg?raw=true",
  "deleted": false,
  "intensityIncrement": 1.5,
  "enchantTypes": {
    "gear": {
      "intensityIncrement": 1.5
    }
  }
},
{
  "_id": {
    "$oid": "66182d665e52c44e3cb4a491"
  },
  "id": "GYC",
  "name": "Variscite",
  "legend": "An exotic gem - Xtremev13 was here. Hello xtremev13, Bob here. Please fix this ASAP.",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectVariscite.jpg?raw=true",
  "deleted": false,
  "agility": 7,
  "attackSize": 7
},
{
  "_id": {
    "$oid": "66182e855e52c44e3cb4a497"
  },
  "id": "91q",
  "name": "Kyanite",
  "legend": "We have cyan at home.",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectCyanite.jpg?raw=true",
  "deleted": false,
  "agility": 7,
  "intensity": 7
},
{
  "_id": {
    "$oid": "66182ea55e52c44e3cb4a498"
  },
  "id": "XpP",
  "name": "Candelaria",
  "legend": "Sounds like that one pokemon",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectCandaleria.jpg?raw=true",
  "deleted": false,
  "power": 3,
  "attackSpeed": 5
},
{
  "_id": {
    "$oid": "6618e2fff5f0699a1af64e95"
  },
  "id": "wpg",
  "name": "Frozen",
  "legend": "Adds extra defense for each 10 levels",
  "mainType": "Modifier",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Modifiers/modifierFrozen.jpg",
  "deleted": false,
  "defenseIncrement": 5.5
},
{
  "_id": {
    "$oid": "6618e3d6f5f0699a1af64e98"
  },
  "id": "b13",
  "name": "Sandy",
  "legend": "Adds Intensity for each 10 levels",
  "mainType": "Modifier",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Modifiers/modifierSandy.jpg",
  "deleted": false,
  "intensityIncrement": 1.5
},
{
  "_id": {
    "$oid": "6618e459f5f0699a1af64e9a"
  },
  "id": "LoL",
  "name": "Drowned",
  "legend": "Adds low defense and attack size for each 10 levels",
  "mainType": "Modifier",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Modifiers/modifierDrowned.jpg",
  "deleted": false,
  "defenseIncrement": 2.73,
  "attackSizeIncrement": 0.75
},
{
  "_id": {
    "$oid": "661c107d5641d0bb5fa2460a"
  },
  "id": "Fx8",
  "name": "Ash Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting ash magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "attackSize": 28,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c41d6f8ee17deeb3f5850"
  },
  "id": "ecu",
  "name": "Earth Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting earth magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 110,
      "power": 7,
      "defense": 91,
      "attackSize": 8
    },
    {
      "level": 130,
      "power": 9,
      "defense": 107,
      "attackSize": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c4496f8ee17deeb3f585c"
  },
  "id": "0cI",
  "name": "Shadow Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting shadow magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224860869305827399/image.png?ex=66317c94&is=661f0794&hm=1b8958ee6a5a1fb5aa1366e76255e561ee07563e46c907b81e2041a3f97e8aaf&",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 15,
      "attackSpeed": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c4513f8ee17deeb3f585f"
  },
  "id": "RqN",
  "name": "Wind Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting wind magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "attackSpeed": 19,
      "intensity": 19
    },
    {
      "level": 140,
      "power": 9,
      "attackSpeed": 20,
      "intensity": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661d6f3f4b446b950b23ff34"
  },
  "id": "hSy",
  "name": "Juggernaut Armor",
  "legend": "An armored chestpiece for protection, with exposed arms for ease of motion. it can be enchanted by an Alchemist in  order to increase it's stats.",
  "mainType": "Chestplate",
  "rarity": "Common",
  "imageId": "https://static.wikia.nocookie.net/roblox-arcane-odyssey/images/9/91/Black_Juggernaut_Armor.png",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 128,
      "piercing": 32
    },
    {
      "level": 140,
      "defense": 138,
      "piercing": 35
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661d6f5e4b446b950b23ff35"
  },
  "id": "OAM",
  "name": "Juggernaut Boots",
  "legend": "A pair of heavy metal boots. It can be enchanted by an Alchemist in order to increase it's stats.",
  "mainType": "Pants",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Juggernaut/juggernautBoots.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 64,
      "piercing": 24
    },
    {
      "level": 140,
      "defense": 69,
      "piercing": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6620da0077dc529bca6e4e56"
  },
  "id": "T0v",
  "name": "Cannon Fist Robes",
  "legend": "A fine robe made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "intensity": 14,
      "piercing": 14
    },
    {
      "level": 110,
      "power": 13,
      "intensity": 16,
      "piercing": 16
    },
    {
      "level": 120,
      "power": 15,
      "intensity": 18,
      "piercing": 18
    },
    {
      "level": 130,
      "power": 16,
      "intensity": 19,
      "piercing": 19
    },
    {
      "level": 140,
      "power": 17,
      "intensity": 20,
      "piercing": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620da4e77dc529bca6e4e57"
  },
  "id": "EXS",
  "name": "Cannon Fist Boots",
  "legend": "A set of lightweight boots made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "intensity": 10,
      "piercing": 10
    },
    {
      "level": 110,
      "power": 10,
      "intensity": 12,
      "piercing": 12
    },
    {
      "level": 120,
      "power": 11,
      "intensity": 13,
      "piercing": 13
    },
    {
      "level": 130,
      "power": 12,
      "intensity": 14,
      "piercing": 14
    },
    {
      "level": 140,
      "power": 13,
      "intensity": 15,
      "piercing": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620dae177dc529bca6e4e58"
  },
  "id": "Squ",
  "name": "Cannon Fist Chestplate",
  "legend": "A heavy metal chestplate with exposed arms for freedom of movement, made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "intensity": 29,
      "piercing": 39
    },
    {
      "level": 110,
      "intensity": 32,
      "piercing": 43
    },
    {
      "level": 120,
      "intensity": 36,
      "piercing": 48
    },
    {
      "level": 130,
      "intensity": 38,
      "piercing": 51
    },
    {
      "level": 140,
      "intensity": 41,
      "piercing": 55
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620de9e6b213745a28e0ebb"
  },
  "id": "MDz",
  "name": "Sailor Style Shoulderpads",
  "legend": "A set of lightweight shoulderpads made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleShoulderpads.png?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "attackSize": 10
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620df646b213745a28e0ebd"
  },
  "id": "DMh",
  "name": "Sailor Style Boots",
  "legend": "A set of lightweight boots made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleBoots.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "attackSize": 10
    },
    {
      "level": 110,
      "power": 13,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 15,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 16,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 18,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620df7b6b213745a28e0ebe"
  },
  "id": "S37",
  "name": "Sailor Style Headband",
  "legend": "A long headband made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleHeadband.png?raw=true",
  "deleted": false,
  "subType": "Head",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "attackSize": 10
    },
    {
      "level": 110,
      "power": 13,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 15,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 16,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 18,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e2d6c16cb91be4088765"
  },
  "id": "c84",
  "name": "Basic Combat Boots",
  "legend": "A set of lightweight boots made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatBoots.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "intensity": 10
    },
    {
      "level": 110,
      "power": 13,
      "intensity": 12
    },
    {
      "level": 120,
      "power": 15,
      "intensity": 13
    },
    {
      "level": 130,
      "power": 16,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 18,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e35cc16cb91be4088768"
  },
  "id": "dbo",
  "name": "Basic Combat Balteus",
  "legend": "A balteus made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatBalteus.png?raw=true",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "intensity": 21,
      "piercing": 18
    },
    {
      "level": 110,
      "power": 3,
      "intensity": 24,
      "piercing": 20
    },
    {
      "level": 120,
      "power": 4,
      "intensity": 26,
      "piercing": 22
    },
    {
      "level": 130,
      "power": 4,
      "intensity": 28,
      "piercing": 24
    },
    {
      "level": 140,
      "power": 5,
      "intensity": 30,
      "piercing": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e4cfc16cb91be408876c"
  },
  "id": "9Ri",
  "name": "Basic Combat Shoulderpads",
  "legend": "A set of lightweight shoulderpads made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatShoulderpads.png?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "intensity": 10
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "intensity": 12
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "intensity": 13
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620eb87771f6db942a8c4d6"
  },
  "id": "nca",
  "name": "Perfect Aventurine",
  "legend": "Its adventure time!!!",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "",
  "deleted": false,
  "regeneration": 15
},
{
  "_id": {
    "$oid": "6620ebb5771f6db942a8c4d7"
  },
  "id": "CBH",
  "name": "Perfect Azurite",
  "legend": "Ultraman Azul",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "",
  "deleted": false,
  "resistance": 15
},
{
  "_id": {
    "$oid": "6620f5a22d2b29aa81b9b9c9"
  },
  "id": "Bwe",
  "name": "Boxing Leggings",
  "legend": "A set of lightweight armored leggings made for boxing users, designed to compliment the style's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "agility": 10,
      "resistance": 10
    },
    {
      "level": 110,
      "defense": 114,
      "agility": 12,
      "resistance": 12
    },
    {
      "level": 120,
      "defense": 124,
      "agility": 13,
      "resistance": 13
    },
    {
      "level": 130,
      "defense": 135,
      "agility": 14,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 145,
      "agility": 15,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620f5bf2d2b29aa81b9b9ca"
  },
  "id": "nrQ",
  "name": "Boxing Boots",
  "legend": "A set of lightweight boots made for boxing users, designed to compliment te style's strengths. It can enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "agility": 10,
      "resistance": 10
    },
    {
      "level": 110,
      "power": 10,
      "agility": 12,
      "resistance": 12
    },
    {
      "level": 120,
      "power": 11,
      "agility": 13,
      "resistance": 13
    },
    {
      "level": 130,
      "power": 12,
      "agility": 14,
      "resistance": 14
    },
    {
      "level": 140,
      "power": 13,
      "agility": 15,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c5e8974d7a9c334ac306"
  },
  "id": "hut",
  "name": "Shadow Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct shadow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224860746257797140/image.png?ex=66317c76&is=661f0776&hm=bdb55c8d6448564e81967b438979aa99ba2e3a18e30fcc99a4c67ba04f456d19&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "attackSpeed": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c6fc974d7a9c334ac30a"
  },
  "id": "Xje",
  "name": "Wood Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct wood magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 14,
      "defense": 80
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c9436e76aad14a8dd670"
  },
  "id": "WcK",
  "name": "Ash Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct ash magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "attackSize": 28,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c9af6e76aad14a8dd673"
  },
  "id": "ltw",
  "name": "Explosion Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct explosion magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "attackSize": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cb3c6e76aad14a8dd679"
  },
  "id": "0ce",
  "name": "Magma Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct magma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224848691232247923/image.png?ex=66263c7c&is=6624eafc&hm=6b3b8b64baca01a46691b8d024c539d5bbf30df70fa4aa4e3950c0217750fca4&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 23,
      "attackSize": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cb7f6e76aad14a8dd67b"
  },
  "id": "uiz",
  "name": "Plasma Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct plasma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224397160771223563/1224397161978920981/image.png?ex=662fccb7&is=661d57b7&hm=f921c024e53107af9a53c9432099263d8d0fedba0e5aef1a4311fcc7a5e67ac6&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 27,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cf05faf9f0151a1ef126"
  },
  "id": "Pf8",
  "name": "Wood Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct wood magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 20,
      "defense": 107
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d09efaf9f0151a1ef12a"
  },
  "id": "kAe",
  "name": "Earth Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct earth magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 80,
      "attackSize": 6
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d0c0faf9f0151a1ef12b"
  },
  "id": "gSD",
  "name": "Explosion Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct explosion magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d12ffaf9f0151a1ef12c"
  },
  "id": "fE8",
  "name": "Fire Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct fire magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232481878934814771/image.png?ex=66299db2&is=66284c32&hm=7fef337010f173096a879c15ec814711ca40c2cad67b991c9a3f524caee350ac&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 19,
      "attackSize": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d213faf9f0151a1ef12d"
  },
  "id": "XTQ",
  "name": "Glass Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct glass magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 18,
      "defense": -21
    },
    {
      "level": 110,
      "power": 20,
      "defense": -24
    },
    {
      "level": 120,
      "power": 22,
      "defense": -26
    },
    {
      "level": 130,
      "power": 24,
      "defense": -27
    },
    {
      "level": 140,
      "power": 25,
      "defense": -30
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d29bfaf9f0151a1ef12f"
  },
  "id": "WlU",
  "name": "Magma Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct magma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224849376053166130/image.png?ex=663171df&is=661efcdf&hm=a563cc764381b1481677776d501712d3a2e3d08e13d8b67ff3145f7f64544527&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "attackSize": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d363faf9f0151a1ef134"
  },
  "id": "MRr",
  "name": "Shadow Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct shadow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224861509872517171/image.png?ex=6626486c&is=6624f6ec&hm=6419a842e0730e21cccc5d9ddfab9c89331995ebdf252522142405abbd3b95b6&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "attackSpeed": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d39ffaf9f0151a1ef136"
  },
  "id": "pS3",
  "name": "Water Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct water magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480515349676103/waterpants1.png?ex=66299c6d&is=66284aed&hm=5b0f3811d42c3cda3e238fe9281926e9d5dafb420b73ae4110efc4504055a93e&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 21,
      "intensity": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236c84b494f76ed0de572a"
  },
  "id": "Pbx",
  "name": "Earth Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct earth magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 128,
      "attackSize": 6,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236cf5b494f76ed0de572c"
  },
  "id": "sTC",
  "name": "Fire Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct fire magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232481877978251274/image.png?ex=66299db2&is=66284c32&hm=cdcea4f7a3a746a499df040f01b10527879c426a8dc11914f4b5c3d028a43480&",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "defense": 48,
      "attackSize": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236d5bb494f76ed0de572e"
  },
  "id": "XAZ",
  "name": "Ice Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct ice magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "defense": 101,
      "resistance": 32
    },
    {
      "level": 130,
      "defense": 110,
      "resistance": 35
    },
    {
      "level": 140,
      "defense": 118,
      "resistance": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236ed1b494f76ed0de5737"
  },
  "id": "RM0",
  "name": "Snow Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct snow magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "attackSpeed": 7,
      "attackSize": 21,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237cbb1320aac9348867c8"
  },
  "id": "lTs",
  "name": "Earth Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct earth magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 171,
      "attackSize": 9,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237d901320aac9348867cf"
  },
  "id": "680",
  "name": "Magma Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct magma magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224846321895211058/image.png?ex=66316f07&is=661efa07&hm=ec23639c2648464c156dac8f27697d899ccc91f7c36cb1d12c33a17f1a97190b&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 6,
      "defense": 64,
      "attackSize": 19,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237ec61320aac9348867d7"
  },
  "id": "oZr",
  "name": "Wind Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct wind magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 112,
      "attackSpeed": 19,
      "intensity": 19,
      "resistance": 19
    },
    {
      "level": 140,
      "defense": 121,
      "attackSpeed": 20,
      "intensity": 20,
      "resistance": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237edd1320aac9348867d8"
  },
  "id": "haw",
  "name": "Wood Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct wood magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 3,
      "defense": 171,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238c31f3ba5df4ea33d846"
  },
  "id": "HSV",
  "name": "Explosion Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct explosion magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "attackSize": 28,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238c81f3ba5df4ea33d847"
  },
  "id": "MJN",
  "name": "Fire Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct fire magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232481899323068547/image.png?ex=66299db7&is=66284c37&hm=498ac9dbd097f0250bbfce0e0d87456098382570919ae347269ba40df3c2369c&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "defense": 48,
      "attackSize": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238d78f3ba5df4ea33d84b"
  },
  "id": "sJm",
  "name": "Lightning Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct lightning magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229973814775906394/image.png?ex=6631a161&is=661f2c61&hm=1135f8d9dd1414fee2b357f75c4d550d3a4e13fdaf8e293b43c2dce1dd020273&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "agility": 7,
      "attackSpeed": 21,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623986876f3b6b8c31e5c48"
  },
  "id": "K4u",
  "name": "Earth Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct earth magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 80,
      "agility": 14,
      "attackSize": 6,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623999d76f3b6b8c31e5c50"
  },
  "id": "R98",
  "name": "Ice Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct ice magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 27,
      "agility": 14,
      "intensity": 24,
      "resistance": 21
    },
    {
      "level": 140,
      "defense": 28,
      "agility": 15,
      "intensity": 26,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "662399de76f3b6b8c31e5c52"
  },
  "id": "art",
  "name": "Light Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct light magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSpeed": 36,
      "attackSize": -7,
      "intensity": 24
    },
    {
      "level": 140,
      "agility": 15,
      "attackSpeed": 39,
      "attackSize": -9,
      "intensity": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239a1576f3b6b8c31e5c54"
  },
  "id": "dCL",
  "name": "Lightning Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct lightning magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229974336945782885/image.png?ex=6631a1dd&is=661f2cdd&hm=0c10117b7ed572d41a243fd1f22b48dc140d48a95ee528b068aad4171beae037&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 21,
      "attackSpeed": 21,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239a6a76f3b6b8c31e5c57"
  },
  "id": "1kL",
  "name": "Metal Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct metal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 107,
      "agility": 7,
      "intensity": 24,
      "resistance": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239aaa76f3b6b8c31e5c5a"
  },
  "id": "Umm",
  "name": "Plasma Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct plasma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1223699836575154336/1223699837095247912/PlasmaMage.png?ex=66367dc8&is=662408c8&hm=7227ad83af4448c60bf5ca535812ad10b6ba65cd1713bba7f8e5b0c55f0bbb37&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "agility": 14,
      "intensity": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239b9976f3b6b8c31e5c61"
  },
  "id": "6FY",
  "name": "Snow Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct snow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSpeed": 7,
      "attackSize": 21,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239c2576f3b6b8c31e5c68"
  },
  "id": "rDD",
  "name": "Wood Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct wood magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 2,
      "defense": 80,
      "agility": 14,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a887295d8ce869843988"
  },
  "id": "rsl",
  "name": "Plasma Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct plasma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224397160771223563/1224397161685323817/image.png?ex=662fccb7&is=661d57b7&hm=0809f17af2b996a33a359a6279bf153ef2192c622880ba562a338facd0b2eeab&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 10,
      "agility": 19,
      "intensity": 41
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a8c7295d8ce86984398a"
  },
  "id": "Y3G",
  "name": "Sand Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct sand magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 36,
      "agility": 19,
      "attackSize": 28,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a8fc295d8ce86984398c"
  },
  "id": "0Ec",
  "name": "Snow Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct snow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 19,
      "attackSpeed": 9,
      "attackSize": 28,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a913295d8ce86984398d"
  },
  "id": "q1d",
  "name": "Water Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct water magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480516012507216/waterchest2.png?ex=66299c6d&is=66284aed&hm=47ba8ffd416de45c1589c4ea222f0f6fc7b37b0d9695cc38bcbb849c529b1c45&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 19,
      "attackSize": 28,
      "intensity": 41
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a93c295d8ce86984398f"
  },
  "id": "dHq",
  "name": "Wood Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct wood magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1223400671102107668/1223400671596908554/image.png?ex=66356729&is=6622f229&hm=a20e474d08fd1a8a4993fafee2b45143f9682117b55e78cb617127e6b298b15b&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 3,
      "defense": 107,
      "agility": 19,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623ad7e88c58e83573a9137"
  },
  "id": "RH9",
  "name": "Reinforced Pants",
  "legend": "A full set of leg armor layered in thick dyed leather and other fabrics.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 144
    },
    {
      "level": 140,
      "defense": 155
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623adb388c58e83573a9139"
  },
  "id": "WOz",
  "name": "Reinforced Armor",
  "legend": "A full set of upper body armor layered in thick dyed leather and other fabrics.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 193
    },
    {
      "level": 140,
      "defense": 207
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6612affd98bf37e76f23cb60"
  },
  "id": "AAD",
  "name": "None",
  "legend": "Nope nothing enchanting about this at all",
  "mainType": "Enchant",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/enchant/0.jpg",
  "deleted": false,
  "enchantTypes": {
    "gear": {}
  }
},
{
  "_id": {
    "$oid": "6612bc67bed16ee376001b7d"
  },
  "id": "AAF",
  "name": "None",
  "legend": "Shine bright like a NOTHING",
  "mainType": "Gem",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/gem/0.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "661657f769ec18efb31335af"
  },
  "id": "AAH",
  "name": "Ravenna Fallen King Armor [Calvus]",
  "legend": "A set of bronze armor with an ornate scarlet trim. This armor was specifically made for King Calvus IV.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Calvus/calvusChestplate.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 17,
      "agility": 15,
      "attackSize": 15
    },
    {
      "level": 110,
      "power": 19,
      "agility": 16,
      "attackSize": 16
    },
    {
      "level": 120,
      "power": 21,
      "agility": 18,
      "attackSize": 18
    },
    {
      "level": 130,
      "power": 22,
      "agility": 19,
      "attackSize": 19
    },
    {
      "level": 140,
      "power": 24,
      "agility": 21,
      "attackSize": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66166d0d2dda1dfa35490634"
  },
  "id": "AAL",
  "name": "Lion of Ravenna Armor [Argos]",
  "legend": "A hulking set of scarlet armor trimmed in bronze, emblazoned with the symbol of the Ravenna Realm. This armor was specifically made for General Argos, the Lion of Old Ravenna, and was stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Argos/argosChestplate.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 80,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 250,
      "intensity": 34
    },
    {
      "level": 140,
      "defense": 270,
      "intensity": 37
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66166fd364045b65b82dbbc1"
  },
  "id": "AAP",
  "name": "Theurgist Pants",
  "legend": "The lower part of a robe once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Theurgist/theurgistPants.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 3,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "attackSpeed": 37,
      "warding": 1
    },
    {
      "level": 130,
      "attackSpeed": 39,
      "warding": 1
    },
    {
      "level": 140,
      "attackSpeed": 42,
      "warding": 1
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6616701964045b65b82dbbc2"
  },
  "id": "AAQ",
  "name": "Theurgist Robes",
  "legend": "A robe once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Theurgist/theurgistRobe.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 3,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "attackSpeed": 52,
      "warding": 1
    },
    {
      "level": 130,
      "attackSpeed": 56,
      "warding": 1
    },
    {
      "level": 140,
      "attackSpeed": 60,
      "warding": 1
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661672fb64045b65b82dbbc7"
  },
  "id": "AAV",
  "name": "Sunken Warrior Helmet",
  "legend": "A green and gold helmet made out of arcanium metal that has spent hundreds of years underwater, causing it's properties to change. It seems to constantly produce water.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Sunken%20Warrior/sunkenWarriorHelmet.jpg",
  "deleted": false,
  "subType": "Helmet",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 178,
      "attackSpeed": 16
    },
    {
      "level": 110,
      "defense": 196,
      "attackSpeed": 18
    },
    {
      "level": 120,
      "defense": 213,
      "attackSpeed": 20
    },
    {
      "level": 130,
      "defense": 231,
      "attackSpeed": 21
    },
    {
      "level": 140,
      "defense": 249,
      "attackSpeed": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66167c149761b5babd2b2b65"
  },
  "id": "AAg",
  "name": "Power Amulet [Fair]",
  "legend": "A rugged, orange zircon gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Amulets/Power/amuletPower.jpg",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 25
    },
    {
      "level": 110,
      "power": 27
    },
    {
      "level": 120,
      "power": 30
    },
    {
      "level": 130,
      "power": 32
    },
    {
      "level": 140,
      "power": 35
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66167c7a9761b5babd2b2b66"
  },
  "id": "AAh",
  "name": "Defense Amulet [Fair]",
  "legend": "A rugged, grey agate gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of defense.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Amulets/Defense/amuletDefense.jpg",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 273
    },
    {
      "level": 110,
      "defense": 300
    },
    {
      "level": 120,
      "defense": 327
    },
    {
      "level": 130,
      "defense": 355
    },
    {
      "level": 140,
      "defense": 382
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66167d1e9761b5babd2b2b68"
  },
  "id": "AAj",
  "name": "Intensity Amulet [Fair]",
  "legend": "A rugged, goshenite gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of Intensity.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Amulets/Intensity/amuletIntensity.jpg",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "intensity": 74
    },
    {
      "level": 110,
      "intensity": 82
    },
    {
      "level": 120,
      "intensity": 89
    },
    {
      "level": 130,
      "intensity": 97
    },
    {
      "level": 140,
      "intensity": 104
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6617fee0064e17ecf40354af"
  },
  "id": "v2U",
  "name": "Ravenna Apostle Faulds [Carina]",
  "legend": "Faulds of fine cloth to be worn around the wasit. They were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Carina/carinaFaulds.jpg?raw=true",
  "deleted": false,
  "subType": "Waist",
  "gemNo": 2,
  "minLevel": 90,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 90,
      "power": 11,
      "attackSpeed": 13
    },
    {
      "level": 100,
      "power": 13,
      "attackSpeed": 15
    },
    {
      "level": 110,
      "power": 14,
      "attackSpeed": 16
    },
    {
      "level": 120,
      "power": 15,
      "attackSpeed": 18
    },
    {
      "level": 130,
      "power": 17,
      "attackSpeed": 19
    },
    {
      "level": 140,
      "power": 18,
      "attackSpeed": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661800a1064e17ecf40354b2"
  },
  "id": "b4B",
  "name": "Ravenna Noble Armor [Elius]",
  "legend": "A finely crafted set of bronze armor trimmed in gold, with ornate fabric and golden chainmail. This armor was specifically made to be worn by the nobles of the Ravenna Realm, and was stolen from Lord Elius after he was defeated in the sky of the Bronze Sea.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Elius/eliusChestplate.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 60,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 60,
      "power": 10,
      "agility": 12
    },
    {
      "level": 70,
      "power": 12,
      "agility": 14
    },
    {
      "level": 80,
      "power": 14,
      "agility": 16
    },
    {
      "level": 90,
      "power": 15,
      "agility": 18
    },
    {
      "level": 100,
      "power": 17,
      "agility": 20
    },
    {
      "level": 110,
      "power": 19,
      "agility": 22
    },
    {
      "level": 120,
      "power": 21,
      "agility": 24
    },
    {
      "level": 130,
      "power": 22,
      "agility": 26
    },
    {
      "level": 140,
      "power": 24,
      "agility": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661808e54c1cd43e002d1e23"
  },
  "id": "fuY",
  "name": "Titanium Armor",
  "legend": "A bulky set of armor made out of titanium metal, usually worn by powerful warriors.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/titaniumArmor.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 197
    },
    {
      "level": 110,
      "defense": 217
    },
    {
      "level": 120,
      "defense": 237
    },
    {
      "level": 130,
      "defense": 257
    },
    {
      "level": 140,
      "defense": 277
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661809254c1cd43e002d1e24"
  },
  "id": "L41",
  "name": "Titanium Helmet",
  "legend": "A heavy helmet made out of titanium metal, usually worn by powerful warriors.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/titaniumHelmet.jpg?raw=true",
  "deleted": false,
  "subType": "Helmet",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 148
    },
    {
      "level": 110,
      "defense": 163
    },
    {
      "level": 120,
      "defense": 178
    },
    {
      "level": 130,
      "defense": 193
    },
    {
      "level": 140,
      "defense": 207
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180b774c1cd43e002d1e28"
  },
  "id": "zlp",
  "name": "Sorcerer Hat",
  "legend": "A hat made out of finely knitted fabric, usually worn by experienced magic-users.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/sorcererHat.jpg?raw=true",
  "deleted": false,
  "subType": "Hat",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 13
    },
    {
      "level": 110,
      "power": 14
    },
    {
      "level": 120,
      "power": 15
    },
    {
      "level": 130,
      "power": 17
    },
    {
      "level": 140,
      "power": 18
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180c224c1cd43e002d1e29"
  },
  "id": "qPf",
  "name": "Mountaineer's Boots",
  "legend": "A set of boots normally worn by hikers or mountain bandits.",
  "mainType": "Pants",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/mountaineerBoots.jpg?raw=true",
  "deleted": false,
  "subType": "None",
  "gemNo": 1,
  "minLevel": 50,
  "maxLevel": 100,
  "statsPerLevel": [
    {
      "level": 50,
      "agility": 11,
      "intensity": 18
    },
    {
      "level": 60,
      "agility": 13,
      "intensity": 22
    },
    {
      "level": 70,
      "agility": 15,
      "intensity": 26
    },
    {
      "level": 80,
      "agility": 18,
      "intensity": 30
    },
    {
      "level": 90,
      "agility": 20,
      "intensity": 33
    },
    {
      "level": 100,
      "agility": 22,
      "intensity": 37
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66180d474c1cd43e002d1e2b"
  },
  "id": "xsy",
  "name": "Large Jacket/Large Cloak",
  "legend": "A large jacket usually worn as a cape. / A large cloak made out of fur. usually worn by adventures.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/lowlevel/largeCloakCape.gif?raw=true",
  "deleted": false,
  "subType": "Shoulder",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 18
    },
    {
      "level": 110,
      "agility": 20
    },
    {
      "level": 120,
      "agility": 22
    },
    {
      "level": 130,
      "agility": 24
    },
    {
      "level": 140,
      "agility": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661811534c1cd43e002d1e33"
  },
  "id": "gpg",
  "name": "Power Amulet [Dull]",
  "legend": "A rugged, orange zircon gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of power.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Power/amuletPowerDull.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 50,
  "maxLevel": 100,
  "statsPerLevel": [
    {
      "level": 50,
      "power": 10
    },
    {
      "level": 60,
      "power": 12
    },
    {
      "level": 70,
      "power": 14
    },
    {
      "level": 80,
      "power": 16
    },
    {
      "level": 90,
      "power": 18
    },
    {
      "level": 100,
      "power": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6618119a4c1cd43e002d1e34"
  },
  "id": "aMW",
  "name": "Power Amulet [Poor]",
  "legend": "A rugged, orange zircon gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of power.",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Power/amuletPowerPoor.jpg?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "gemNo": 0,
  "minLevel": 10,
  "maxLevel": 50,
  "statsPerLevel": [
    {
      "level": 10,
      "power": 1
    },
    {
      "level": 20,
      "power": 3
    },
    {
      "level": 30,
      "power": 5
    },
    {
      "level": 40,
      "power": 7
    },
    {
      "level": 50,
      "power": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "66182ad25e52c44e3cb4a483"
  },
  "id": "e9N",
  "name": "Agile",
  "legend": "+2.625 points of Agility for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantAgile.jpg?raw=true",
  "deleted": false,
  "agilityIncrement": 2.625,
  "enchantTypes": {
    "gear": {
      "agilityIncrement": 2.625
    }
  }
},
{
  "_id": {
    "$oid": "66182af55e52c44e3cb4a484"
  },
  "id": "Mod",
  "name": "Armored",
  "legend": "+9.625 points of Defense for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantArmored.jpg?raw=true",
  "deleted": false,
  "defenseIncrement": 9.625,
  "enchantTypes": {
    "gear": {
      "defenseIncrement": 9.625
    },
    "ship": {
      "ram": {
        "durability": 1200,
        "ramDefense": 900
      },
      "hull": {
        "durability": 3000,
        "ramDefense": 900
      },
      "sail": {
        "durability": 2400
      }
    }
  }
},
{
  "_id": {
    "$oid": "66182cf05e52c44e3cb4a490"
  },
  "id": "97d",
  "name": "Bursting",
  "legend": "+1.5 points of Attack Size for every 10 levels",
  "mainType": "Enchant",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Rare/enchantBursting.jpg?raw=true",
  "deleted": false,
  "attackSizeIncrement": 1.5,
  "enchantTypes": {
    "gear": {
      "attackSizeIncrement": 1.5
    }
  }
},
{
  "_id": {
    "$oid": "66182dd75e52c44e3cb4a493"
  },
  "id": "sKB",
  "name": "Morenci",
  "legend": "Ngl this reminds me of mordecai from the regular show.",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectMorenci.jpg?raw=true",
  "deleted": false,
  "power": 3,
  "agility": 5
},
{
  "_id": {
    "$oid": "66182dfd5e52c44e3cb4a494"
  },
  "id": "CTP",
  "name": "Malachite",
  "legend": "Malachi was a mostly-anonymous prophet whose ministry occurred in Jerusalem during the era of Nehemiah and Ezra. Although he spoke primarily to a specific time and place in history, Malachi also prophesied of the messianic “forerunner” who would announce the appearance of Christ more than 400 years after his lifetime.",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectMalachite.jpg?raw=true",
  "deleted": false,
  "power": 3,
  "attackSize": 5
},
{
  "_id": {
    "$oid": "66182e455e52c44e3cb4a495"
  },
  "id": "N9w",
  "name": "Larimar",
  "legend": "LAMAR FROM GTA V !?????",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectLarimar.jpg?raw=true",
  "deleted": false,
  "attackSpeed": 7,
  "intensity": 7
},
{
  "_id": {
    "$oid": "66182e625e52c44e3cb4a496"
  },
  "id": "ozh",
  "name": "Lapiz Lazuli",
  "legend": "MINECRAFT REFERENCE?!!?!?@112",
  "mainType": "Gem",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/perfectLapisLazuli.jpg?raw=true",
  "deleted": false,
  "agility": 7,
  "attackSpeed": 7
},
{
  "_id": {
    "$oid": "66182efd5e52c44e3cb4a49b"
  },
  "id": "aZ2",
  "name": "Intensity Gem",
  "legend": "Max Intensity Gem Innit",
  "mainType": "Gem",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/gemIntensityMaxPlaceholder.jpg?raw=true",
  "deleted": false,
  "intensity": 10
},
{
  "_id": {
    "$oid": "66182f8a5e52c44e3cb4a49e"
  },
  "id": "2ST",
  "name": "Attack Size Gem",
  "legend": "Max Attack Size Gem Innit",
  "mainType": "Gem",
  "rarity": "Rare",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Gems/gemAttackSizeMaxPlaceholder.jpg?raw=true",
  "deleted": false,
  "attackSize": 10
},
{
  "_id": {
    "$oid": "6618e47ef5f0699a1af64e9b"
  },
  "id": "sC6",
  "name": "Blasted",
  "legend": "Adds power for each 10 levels",
  "mainType": "Modifier",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Modifiers/modifierBlasted.jpg",
  "deleted": false,
  "powerIncrement": 0.5
},
{
  "_id": {
    "$oid": "6618e498f5f0699a1af64e9c"
  },
  "id": "faX",
  "name": "Crystalline",
  "legend": "Adds Attack Speed for each 10 levels",
  "mainType": "Modifier",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Modifiers/modifierCrystalline.jpg",
  "deleted": false,
  "attackSpeedIncrement": 1.5
},
{
  "_id": {
    "$oid": "661c10575641d0bb5fa24609"
  },
  "id": "IvE",
  "name": "Acid Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting acid magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "piercing": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c41a3f8ee17deeb3f584f"
  },
  "id": "McN",
  "name": "Crystal Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting crystal magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 9,
      "defense": 71,
      "intensity": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661c452df8ee17deeb3f5860"
  },
  "id": "2Q6",
  "name": "Wood Arcsphere",
  "legend": "An arcanium-glass dome capable of conducting wood magic, meant to be worn on the head.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Head",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 107
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "Magic"
},
{
  "_id": {
    "$oid": "661d5d5c65d40067fa05a4d9"
  },
  "id": "ubQ",
  "name": "Captain Maria's Cloak",
  "legend": "A Black cloak lined with gold and trims of red and purple, representing the colors of Pirate Lord Duke De'Roy. It was taken by Captain Maria after she was defeated in the Nimbus Sea.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Captain%20Maria/captainMariaCloak.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 110,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "power": 19,
      "resistance": 13
    },
    {
      "level": 130,
      "power": 22,
      "resistance": 26
    },
    {
      "level": 140,
      "power": 24,
      "resistance": 17
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661d5ed965d40067fa05a4dc"
  },
  "id": "RFp",
  "name": "Samurai Helmet",
  "legend": "A helmet worn by samurai from the Ryujin Dynasty, a kingdom in the southern War Seas. ",
  "mainType": "Accessory",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Samurai/samuraiHelmet.jpg",
  "deleted": false,
  "subType": "Helmet",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 111,
      "resistance": 11
    },
    {
      "level": 110,
      "defense": 122,
      "resistance": 12
    },
    {
      "level": 120,
      "defense": 133,
      "resistance": 13
    },
    {
      "level": 130,
      "defense": 144,
      "resistance": 14
    },
    {
      "level": 140,
      "defense": 155,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "661d5f6b65d40067fa05a4dd"
  },
  "id": "h0h",
  "name": "Samurai Armor",
  "legend": "A set of lightweight armor worn by samurai from the Ryujin Dynasty, a kingdom in the southern War Seas. ",
  "mainType": "Chestplate",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/typescript/static/assets/images/Armor/Samurai/samuraiArmor.jpg",
  "deleted": false,
  "subType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 148,
      "resistance": 15
    },
    {
      "level": 110,
      "defense": 163,
      "resistance": 16
    },
    {
      "level": 120,
      "defense": 178,
      "resistance": 18
    },
    {
      "level": 130,
      "defense": 193,
      "resistance": 19
    },
    {
      "level": 140,
      "defense": 207,
      "resistance": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "statType": "None"
},
{
  "_id": {
    "$oid": "6620d95677dc529bca6e4e53"
  },
  "id": "Apd",
  "name": "Cannon Fist Balteus",
  "legend": "A balteus made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "intensity": 21,
      "piercing": 28
    },
    {
      "level": 110,
      "intensity": 24,
      "piercing": 32
    },
    {
      "level": 120,
      "intensity": 26,
      "piercing": 35
    },
    {
      "level": 130,
      "intensity": 28,
      "piercing": 38
    },
    {
      "level": 140,
      "intensity": 30,
      "piercing": 41
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620db0377dc529bca6e4e59"
  },
  "id": "VC2",
  "name": "Cannon Fist Greaves",
  "legend": "A set of heavy metal greaves made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "intensity": 21,
      "piercing": 28
    },
    {
      "level": 110,
      "intensity": 24,
      "piercing": 32
    },
    {
      "level": 120,
      "intensity": 26,
      "piercing": 35
    },
    {
      "level": 130,
      "intensity": 28,
      "piercing": 38
    },
    {
      "level": 140,
      "intensity": 30,
      "piercing": 41
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620dfd16b213745a28e0ec0"
  },
  "id": "kUH",
  "name": "Sailor Style Greaves",
  "legend": "A set of heavy metal greaves made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleGreaves.png?raw=true",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "attackSize": 10,
      "intensity": 11,
      "piercing": 18
    },
    {
      "level": 110,
      "power": 3,
      "attackSize": 12,
      "intensity": 12,
      "piercing": 20
    },
    {
      "level": 120,
      "power": 4,
      "attackSize": 13,
      "intensity": 13,
      "piercing": 22
    },
    {
      "level": 130,
      "power": 4,
      "attackSize": 14,
      "intensity": 14,
      "piercing": 24
    },
    {
      "level": 140,
      "power": 5,
      "attackSize": 15,
      "intensity": 15,
      "piercing": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e0076b213745a28e0ec1"
  },
  "id": "7Iv",
  "name": "Sailor Style Balteus",
  "legend": "A balteus made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleBalteus.png?raw=true",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "attackSize": 10,
      "intensity": 11,
      "piercing": 18
    },
    {
      "level": 110,
      "power": 3,
      "attackSize": 12,
      "intensity": 12,
      "piercing": 20
    },
    {
      "level": 120,
      "power": 4,
      "attackSize": 13,
      "intensity": 13,
      "piercing": 22
    },
    {
      "level": 130,
      "power": 4,
      "attackSize": 14,
      "intensity": 14,
      "piercing": 24
    },
    {
      "level": 140,
      "power": 5,
      "attackSize": 15,
      "intensity": 15,
      "piercing": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620e37ac16cb91be4088769"
  },
  "id": "Q6n",
  "name": "Basic Combat Belt",
  "legend": "A thick belt made for basic combat users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Basic%20Combat/basicCombatBelt.png?raw=true",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "intensity": 10
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "intensity": 12
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "intensity": 13
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620f4fb2d2b29aa81b9b9c5"
  },
  "id": "H2x",
  "name": "Boxing Handwraps",
  "legend": "A set of hand wrappings made for boxing users, designed to compliment the style's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arms",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 10,
      "attackSpeed": 28,
      "resistance": 10
    },
    {
      "level": 110,
      "agility": 12,
      "attackSpeed": 30,
      "resistance": 12
    },
    {
      "level": 120,
      "agility": 13,
      "attackSpeed": 33,
      "resistance": 13
    },
    {
      "level": 130,
      "agility": 14,
      "attackSpeed": 36,
      "resistance": 14
    },
    {
      "level": 140,
      "agility": 15,
      "attackSpeed": 39,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620f5212d2b29aa81b9b9c6"
  },
  "id": "Sep",
  "name": "Boxing Headband",
  "legend": "A long headband made for boxing users, designed to compliment the style's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "agility": 10,
      "resistance": 10
    },
    {
      "level": 110,
      "power": 10,
      "agility": 12,
      "resistance": 12
    },
    {
      "level": 120,
      "power": 11,
      "agility": 13,
      "resistance": 13
    },
    {
      "level": 130,
      "power": 12,
      "agility": 14,
      "resistance": 14
    },
    {
      "level": 140,
      "power": 13,
      "agility": 15,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620f94b307d3dfa8ad6ff22"
  },
  "id": "aBK",
  "name": "Boxing Robes",
  "legend": "A fine robe made for boxing users, designed to compliment the style's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "agility": 14,
      "resistance": 14
    },
    {
      "level": 110,
      "power": 13,
      "agility": 16,
      "resistance": 16
    },
    {
      "level": 120,
      "power": 15,
      "agility": 18,
      "resistance": 18
    },
    {
      "level": 130,
      "power": 16,
      "agility": 19,
      "resistance": 19
    },
    {
      "level": 140,
      "power": 17,
      "agility": 20,
      "resistance": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6620f968307d3dfa8ad6ff23"
  },
  "id": "rIt",
  "name": "Boxing Armor",
  "legend": "A set of lightweight armor made for boxing users, designed to compliment the style's strengths. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 138,
      "agility": 14,
      "resistance": 14
    },
    {
      "level": 110,
      "defense": 152,
      "agility": 16,
      "resistance": 16
    },
    {
      "level": 120,
      "defense": 166,
      "agility": 18,
      "resistance": 18
    },
    {
      "level": 130,
      "defense": 180,
      "agility": 19,
      "resistance": 19
    },
    {
      "level": 140,
      "defense": 194,
      "agility": 20,
      "resistance": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c2fc974d7a9c334ac2f8"
  },
  "id": "sFA",
  "name": "Ash Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct ash magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 21,
      "intensity": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c333974d7a9c334ac2f9"
  },
  "id": "jip",
  "name": "Crystal Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct crystal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 53,
      "intensity": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c388974d7a9c334ac2fa"
  },
  "id": "ty7",
  "name": "Earth Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct earth magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 80,
      "attackSize": 6
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c3eb974d7a9c334ac2fc"
  },
  "id": "Q9J",
  "name": "Fire Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct fire magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232481877458161755/image.png?ex=66299db1&is=66284c31&hm=2843740e8ec4d05273ca76afa916581a9962d5ce42fbb70f2cc6feb0d9e9a981&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 18,
      "attackSize": 6
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "scaling": {
    "power": 0.28125
  }
},
{
  "_id": {
    "$oid": "6622c45d974d7a9c334ac2ff"
  },
  "id": "uqD",
  "name": "Light Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct light magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 36,
      "attackSize": -7
    },
    {
      "level": 140,
      "power": 13,
      "attackSpeed": 39,
      "attackSize": -9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c54f974d7a9c334ac303"
  },
  "id": "Nss",
  "name": "Plasma Arcmancer Hat",
  "legend": "An arcanium-fabric hat made to conduct plasma magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 19,
      "intensity": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622c9ea6e76aad14a8dd675"
  },
  "id": "wdv",
  "name": "Glass Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct glass magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 24,
      "defense": -28
    },
    {
      "level": 110,
      "power": 27,
      "defense": -31
    },
    {
      "level": 120,
      "power": 30,
      "defense": -34
    },
    {
      "level": 130,
      "power": 32,
      "defense": -36
    },
    {
      "level": 140,
      "power": 34,
      "defense": -39
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622ca486e76aad14a8dd676"
  },
  "id": "2Uw",
  "name": "Ice Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct ice magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "defense": 27,
      "resistance": 22
    },
    {
      "level": 110,
      "power": 13,
      "defense": 30,
      "resistance": 24
    },
    {
      "level": 120,
      "power": 15,
      "defense": 33,
      "resistance": 26
    },
    {
      "level": 130,
      "power": 17,
      "defense": 36,
      "resistance": 29
    },
    {
      "level": 140,
      "power": 17,
      "defense": 38,
      "resistance": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cb5c6e76aad14a8dd67a"
  },
  "id": "onQ",
  "name": "Metal Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct metal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "defense": 143,
      "agility": -9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cba66e76aad14a8dd67c"
  },
  "id": "LIe",
  "name": "Poison Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct poison magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 27,
      "piercing": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622cbc86e76aad14a8dd67d"
  },
  "id": "NRo",
  "name": "Sand Arcmancer Robes",
  "legend": "A set of arcanium-fabric robes made to conduct sand magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 17,
      "defense": 36,
      "attackSize": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d043faf9f0151a1ef128"
  },
  "id": "nHn",
  "name": "Ash Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct ash magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 21,
      "intensity": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d084faf9f0151a1ef129"
  },
  "id": "A4e",
  "name": "Crystal Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct crystal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 53,
      "intensity": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d234faf9f0151a1ef12e"
  },
  "id": "MyT",
  "name": "Ice Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct ice magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 26,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 13,
      "defense": 28,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d389faf9f0151a1ef135"
  },
  "id": "fvl",
  "name": "Snow Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct snow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 7,
      "attackSize": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6622d3cbfaf9f0151a1ef138"
  },
  "id": "5eh",
  "name": "Wood Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct wood magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 14,
      "defense": 80
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236dabb494f76ed0de5730"
  },
  "id": "9ii",
  "name": "Lightning Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct lightning magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229973961853505628/image.png?ex=66266cc4&is=66251b44&hm=8f819778b008acf95f61e9208f7508ae38ab16b50e0421c15e441974460bd658&",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "agility": 7,
      "attackSpeed": 21,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236dd3b494f76ed0de5731"
  },
  "id": "ZkZ",
  "name": "Magma Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct magma magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224845524331401316/image.png?ex=66316e49&is=661ef949&hm=a74aff073b3f7a218a2715b7674eb6d0d165430ad6c073af8e09fda78b04b4fa&",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 5,
      "defense": 48,
      "attackSize": 14,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236ea4b494f76ed0de5736"
  },
  "id": "QAl",
  "name": "Shadow Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct shadow magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224860974620610640/image.png?ex=66317cad&is=661f07ad&hm=8bbc64483d166cc836d53cbf848f587e2c3484248328ece034ab639554a004e5&",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 5,
      "defense": 48,
      "attackSpeed": 14,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66236f1ab494f76ed0de573a"
  },
  "id": "ykz",
  "name": "Wood Arcanium Helmet",
  "legend": "An arcanium metal helmet made to conduct wood magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 2,
      "defense": 128,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237c7d1320aac9348867c6"
  },
  "id": "3hv",
  "name": "Ash Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct ash magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 64,
      "attackSize": 28,
      "intensity": 9,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237cdc1320aac9348867c9"
  },
  "id": "OtN",
  "name": "Explosion Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct explosion magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 64,
      "attackSize": 38,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237d581320aac9348867cd"
  },
  "id": "8R2",
  "name": "Light Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct light magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1230256677807194203/1230256840991051857/Screenshot_2024-04-16_at_17.00.11.png?ex=6632a8f7&is=662033f7&hm=534260eedd4ea484cb4504f735745e4cff70fbe69633e22af29d4621d7546d62&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 64,
      "attackSpeed": 48,
      "attackSize": -9,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237e161320aac9348867d3"
  },
  "id": "Z1U",
  "name": "Sand Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct sand magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 100,
      "attackSize": 28,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66237eac1320aac9348867d6"
  },
  "id": "7jl",
  "name": "Water Arcanium Armor",
  "legend": "A set of plated arcanium armor made to conduct water magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480515735425054/waterchest3.png?ex=66299c6d&is=66284aed&hm=eaec822b44c08a8a71daa12f171d7d97f9097f3e51905966c117245325726acb&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 64,
      "attackSize": 28,
      "intensity": 9,
      "resistance": 19
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238b5cf3ba5df4ea33d842"
  },
  "id": "TxH",
  "name": "Acid Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct acid magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "piercing": 28,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238bcdf3ba5df4ea33d844"
  },
  "id": "IBj",
  "name": "Crystal Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct crystal magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 101,
      "intensity": 14,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238c07f3ba5df4ea33d845"
  },
  "id": "US7",
  "name": "Earth Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct earth magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 128,
      "attackSize": 6,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238cacf3ba5df4ea33d848"
  },
  "id": "g0A",
  "name": "Glass Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct glass magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "defense": 43,
      "resistance": 11
    },
    {
      "level": 110,
      "power": 10,
      "defense": 47,
      "resistance": 12
    },
    {
      "level": 120,
      "power": 11,
      "defense": 51,
      "resistance": 13
    },
    {
      "level": 130,
      "power": 12,
      "defense": 57,
      "resistance": 14
    },
    {
      "level": 140,
      "power": 12,
      "defense": 60,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238d50f3ba5df4ea33d84a"
  },
  "id": "gTt",
  "name": "Light Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct light magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 140,
      "defense": 90,
      "attackSpeed": 39,
      "attackSize": -9,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238de2f3ba5df4ea33d84d"
  },
  "id": "Nzz",
  "name": "Metal Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct metal magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 155,
      "agility": -7,
      "resistance": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238e05f3ba5df4ea33d84e"
  },
  "id": "73R",
  "name": "Plasma Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct plasma magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1223699836575154336/1223699836742795296/PlasmaBoots.png?ex=66367dc8&is=662408c8&hm=b2d2cbcb40253d2884c62cfc3cf1f583fa568410a37a8d042d299a16c80730c9&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "defense": 48,
      "intensity": 7,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238e36f3ba5df4ea33d850"
  },
  "id": "Jb7",
  "name": "Sand Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct sand magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 75,
      "attackSize": 21,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238e94f3ba5df4ea33d852"
  },
  "id": "WAX",
  "name": "Snow Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct snow magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 48,
      "attackSpeed": 7,
      "attackSize": 21,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66238f1af3ba5df4ea33d855"
  },
  "id": "9Lm",
  "name": "Wood Arcanium Boots",
  "legend": "A set of plated arcanium metal boots made to conduct wood magic, usually worn by mages for protection as well as amplifying certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 2,
      "defense": 128,
      "resistance": 14
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "662397e876f3b6b8c31e5c44"
  },
  "id": "6MS",
  "name": "Ash Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct ash magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSize": 21,
      "intensity": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623981f76f3b6b8c31e5c46"
  },
  "id": "VvT",
  "name": "Crystal Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct crystal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 53,
      "agility": 14,
      "intensity": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623987576f3b6b8c31e5c49"
  },
  "id": "7Wm",
  "name": "Earth Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct earth magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 80,
      "agility": 14,
      "attackSize": 6,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623997576f3b6b8c31e5c4e"
  },
  "id": "uiC",
  "name": "Glass Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct glass magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "defense": -21,
      "agility": 11,
      "intensity": 18
    },
    {
      "level": 110,
      "power": 10,
      "defense": -24,
      "agility": 12,
      "intensity": 20
    },
    {
      "level": 120,
      "power": 11,
      "defense": -26,
      "agility": 13,
      "intensity": 22
    },
    {
      "level": 130,
      "power": 12,
      "defense": -27,
      "agility": 14,
      "intensity": 24
    },
    {
      "level": 140,
      "power": 12,
      "defense": -30,
      "agility": 15,
      "intensity": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "662399d076f3b6b8c31e5c51"
  },
  "id": "BlG",
  "name": "Light Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct light magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSpeed": 36,
      "attackSize": -7,
      "intensity": 24
    },
    {
      "level": 140,
      "agility": 15,
      "attackSpeed": 39,
      "attackSize": -9,
      "intensity": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239afe76f3b6b8c31e5c5c"
  },
  "id": "pYW",
  "name": "Poison Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct poison magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 7,
      "agility": 14,
      "intensity": 24,
      "piercing": 7
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239b7176f3b6b8c31e5c60"
  },
  "id": "mb5",
  "name": "Shadow Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct shadow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1224861437118120008/image.png?ex=66317d1b&is=661f081b&hm=6d61ec96f918687c36839fe84ac2f1cda9888330337ee3f4f13d6bcf64fad61b&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 5,
      "agility": 14,
      "attackSpeed": 14,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239ba476f3b6b8c31e5c62"
  },
  "id": "pdq",
  "name": "Snow Arcanium Mage Pants",
  "legend": "A set of arcanium-fabric pants made to conduct snow magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSpeed": 7,
      "attackSize": 21,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239bbf76f3b6b8c31e5c63"
  },
  "id": "QbS",
  "name": "Water Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct water magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480516759093279/waterhat2.png?ex=66299c6d&is=66284aed&hm=57bf420bd03d0b765de5216f950813b9f3034d2674dece4671e2e143cce7aa72&",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSize": 21,
      "intensity": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239bf176f3b6b8c31e5c65"
  },
  "id": "xBa",
  "name": "Wind Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct wind magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 14,
      "attackSpeed": 14,
      "intensity": 38
    },
    {
      "level": 140,
      "agility": 15,
      "attackSpeed": 15,
      "intensity": 41
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66239c1776f3b6b8c31e5c67"
  },
  "id": "5ab",
  "name": "Wood Arcanium Mage Hat",
  "legend": "An arcanium-fabric hat made to conduct wood magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 2,
      "defense": 80,
      "agility": 14,
      "intensity": 24
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a50f295d8ce86984397c"
  },
  "id": "2NT",
  "name": "Acid Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct acid magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 19,
      "intensity": 32,
      "piercing": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a64b295d8ce869843980"
  },
  "id": "Yji",
  "name": "Explosion Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct explosion magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 19,
      "attackSize": 38,
      "intensity": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a7ee295d8ce869843984"
  },
  "id": "trv",
  "name": "Light Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct light magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 19,
      "attackSpeed": 48,
      "attackSize": -9,
      "intensity": 32
    },
    {
      "level": 140,
      "agility": 21,
      "attackSpeed": 52,
      "attackSize": -11,
      "intensity": 35
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a85f295d8ce869843987"
  },
  "id": "VBo",
  "name": "Metal Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct metal magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 143,
      "agility": 10,
      "intensity": 32,
      "resistance": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623a927295d8ce86984398e"
  },
  "id": "wIy",
  "name": "Wind Arcanium Mage Coat",
  "legend": "An arcanium-fabric coat made to conduct wind magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "agility": 19,
      "attackSpeed": 19,
      "intensity": 51
    },
    {
      "level": 140,
      "agility": 21,
      "attackSpeed": 20,
      "intensity": 55
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623ad6e88c58e83573a9136"
  },
  "id": "uSe",
  "name": "Reinforced Shoulderpads",
  "legend": "A basic set of shoulderpads made out of thick leather.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Shoulder",
  "statType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 144
    },
    {
      "level": 140,
      "defense": 155
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623ae0988c58e83573a913a"
  },
  "id": "EXn",
  "name": "Armor Piercing Amulet [Fair]",
  "legend": "Five fire opal gemstones embedded in a bronze chain necklace. The gemstones seem to give a decent amount of armor piercing.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Piercing/amuletPiercing.png?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "statType": "None",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "piercing": 74
    },
    {
      "level": 110,
      "piercing": 82
    },
    {
      "level": 120,
      "piercing": 89
    },
    {
      "level": 130,
      "piercing": 97
    },
    {
      "level": 140,
      "piercing": 104
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623b1b31f4662b0cd6ecc73"
  },
  "id": "8Tw",
  "name": "Oracle Leggings",
  "legend": "An old set of armored leggings that were enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "regeneration": 12
    },
    {
      "level": 120,
      "regeneration": 13
    },
    {
      "level": 130,
      "defense": 193,
      "regeneration": 14
    },
    {
      "level": 140,
      "defense": 207,
      "regeneration": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623b1e01f4662b0cd6ecc74"
  },
  "id": "iHM",
  "name": "Oracle Armor",
  "legend": "An old set of heavy armor that was enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ],
  "scaling": {
    "defense": 0.6,
    "regeneration": 0.3
  }
},
{
  "_id": {
    "$oid": "6623b3a00ca216afe66e5c1d"
  },
  "id": "I13",
  "name": "Piercing",
  "legend": "A scroll containing the Piercing enchantment. When clicked in the inventory, it can be applied to one compatible item, causing it to be used up. The Piercing enchantment increases armor piercing.",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantPiercing.png?raw=true",
  "deleted": false,
  "piercingIncrement": 2.625,
  "enchantTypes": {
    "gear": {
      "piercingIncrement": 2.625
    }
  }
},
{
  "_id": {
    "$oid": "6623b4d10ca216afe66e5c20"
  },
  "id": "GHh",
  "name": "Oracle Robes",
  "legend": "A set of old robes that were enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "power": 19,
      "regeneration": 16
    },
    {
      "level": 120,
      "regeneration": 18
    },
    {
      "level": 130,
      "power": 22,
      "regeneration": 19
    },
    {
      "level": 140,
      "power": 24,
      "regeneration": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623bca55fbbaf48a1470d44"
  },
  "id": "gag",
  "name": "Thermo Fist Headband",
  "legend": "A long headband made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "attackSpeed": 16,
      "attackSize": -6,
      "intensity": 10
    },
    {
      "level": 110,
      "power": 10,
      "attackSpeed": 18,
      "attackSize": -7,
      "intensity": 12
    },
    {
      "level": 120,
      "power": 11,
      "attackSpeed": 19,
      "attackSize": -8,
      "intensity": 13
    },
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 21,
      "attackSize": -8,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 13,
      "attackSpeed": 23,
      "attackSize": -9,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623c0125fbbaf48a1470d4b"
  },
  "id": "xBo",
  "name": "Iron Leg Robes",
  "legend": "A fine robe made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 17,
      "agility": -8,
      "resistance": 22
    },
    {
      "level": 110,
      "power": 18,
      "agility": -9,
      "resistance": 24
    },
    {
      "level": 120,
      "power": 21,
      "agility": -10,
      "resistance": 26
    },
    {
      "level": 130,
      "power": 22,
      "agility": -10,
      "resistance": 29
    },
    {
      "level": 140,
      "power": 24,
      "agility": -11,
      "resistance": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623c1605fbbaf48a1470d4f"
  },
  "id": "Je4",
  "name": "Iron Leg Boots",
  "legend": "A set of lightweight boots made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "agility": -6,
      "resistance": 16
    },
    {
      "level": 110,
      "power": 13,
      "agility": -7,
      "resistance": 18
    },
    {
      "level": 120,
      "power": 15,
      "agility": -8,
      "resistance": 19
    },
    {
      "level": 130,
      "power": 16,
      "agility": -8,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 18,
      "agility": -9,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623c1c15fbbaf48a1470d51"
  },
  "id": "sE6",
  "name": "Iron Leg Leggings",
  "legend": "A set of lightweight armored leggings made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "agility": -6,
      "resistance": 16
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "agility": -7,
      "resistance": 18
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "agility": -8,
      "resistance": 19
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "agility": -8,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "agility": -9,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623c1e25fbbaf48a1470d52"
  },
  "id": "VSl",
  "name": "Iron Leg Belt",
  "legend": "A thick belt made for iron leg users, designed to compliment the style's strenghts.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "agility": -6,
      "resistance": 16
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "agility": -7,
      "resistance": 18
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "agility": -8,
      "resistance": 19
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "agility": -8,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "agility": -9,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6624849add9c3bd4b7d440ec"
  },
  "id": "gFi",
  "name": "Light Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct light magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 36,
      "attackSize": -8
    },
    {
      "level": 140,
      "power": 13,
      "attackSpeed": 39,
      "attackSize": -9
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "662563b5889d18b4c84d39f2"
  },
  "id": "QEM",
  "name": "Wood Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 15,
      "defense": 107,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "6625640b53244521e3b27fdb"
  },
  "id": "aSQ",
  "name": "Wind Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 19,
      "intensity": 28
    },
    {
      "level": 140,
      "power": 13,
      "attackSpeed": 20,
      "intensity": 30
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "6625669837b151cd3d2bd01e"
  },
  "id": "ggg",
  "name": "Sand Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 36,
      "attackSize": 28,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256a4ec13f2b468c37a0a4"
  },
  "id": "2iB",
  "name": "Metal Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 143,
      "agility": -9,
      "intensity": 9,
      "resistance": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256a7ac13f2b468c37a0a5"
  },
  "id": "7U7",
  "name": "Magma Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224842060830343239/1224851574413721640/image.png?ex=663173eb&is=661efeeb&hm=1ccd0b1deaf6af5b695e2da5df6c7d5511648229ae3bbee089019aced9bde967&",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 18,
      "attackSize": 19,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256c5fefc455d6a37c730e"
  },
  "id": "qco",
  "name": "Crystal Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 71,
      "intensity": 28
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "6623b3950ca216afe66e5c1c"
  },
  "id": "iVI",
  "name": "Resilience",
  "legend": "A scroll containing the Resilience enchantment. When clicked in the inventory, it can be applied to one compatible item, causing it to be used up. The Resilience enchantment increases resistance.",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantResilience.png?raw=true",
  "deleted": false,
  "resistanceIncrement": 2.625,
  "enchantTypes": {
    "gear": {
      "resistanceIncrement": 2.625
    }
  }
},
{
  "_id": {
    "$oid": "6623b4b40ca216afe66e5c1f"
  },
  "id": "eoR",
  "name": "Oracle Hat",
  "legend": "A set of old robes that was enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "power": 14,
      "regeneration": 12
    },
    {
      "level": 120,
      "power": 15,
      "regeneration": 13
    },
    {
      "level": 130,
      "power": 17,
      "regeneration": 14
    },
    {
      "level": 140,
      "power": 18,
      "regeneration": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623b5550ca216afe66e5c22"
  },
  "id": "dRj",
  "name": "Alitheia Hat",
  "legend": "A mysterious old hat that was enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "Hat",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 120,
      "intensity": 26,
      "regeneration": 26
    },
    {
      "level": 130,
      "intensity": 29,
      "regeneration": 29
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623b57a0ca216afe66e5c23"
  },
  "id": "AmC",
  "name": "Alitheia Pants",
  "legend": "The lower part of a set of mysterious robes that were enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 120,
      "intensity": 26,
      "regeneration": 26
    },
    {
      "level": 130,
      "intensity": 29,
      "regeneration": 29
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623bcca5fbbaf48a1470d45"
  },
  "id": "lVx",
  "name": "Thermo Fist Boots",
  "legend": "A set of lightweight boots made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "attackSpeed": 16,
      "attackSize": -6,
      "intensity": 10
    },
    {
      "level": 110,
      "power": 10,
      "attackSpeed": 18,
      "attackSize": -7,
      "intensity": 12
    },
    {
      "level": 120,
      "power": 11,
      "attackSpeed": 19,
      "attackSize": -8,
      "intensity": 13
    },
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 21,
      "attackSize": -8,
      "intensity": 14
    },
    {
      "level": 140,
      "power": 13,
      "attackSpeed": 23,
      "attackSize": -9,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623bcfd5fbbaf48a1470d46"
  },
  "id": "FzT",
  "name": "Thermo Fist Robes",
  "legend": "A fine robe made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "attackSpeed": 22,
      "attackSize": -8,
      "intensity": 14
    },
    {
      "level": 110,
      "power": 13,
      "attackSpeed": 24,
      "attackSize": -9,
      "intensity": 16
    },
    {
      "level": 120,
      "power": 15,
      "attackSpeed": 26,
      "attackSize": -10,
      "intensity": 18
    },
    {
      "level": 130,
      "power": 16,
      "attackSpeed": 29,
      "attackSize": -10,
      "intensity": 19
    },
    {
      "level": 140,
      "power": 17,
      "attackSpeed": 31,
      "attackSize": -11,
      "intensity": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623bfd55fbbaf48a1470d49"
  },
  "id": "WAI",
  "name": "Iron Leg Balteus",
  "legend": "A balteus made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "agility": -6,
      "intensity": 11,
      "piercing": 18,
      "resistance": 16
    },
    {
      "level": 110,
      "power": 3,
      "agility": -7,
      "intensity": 12,
      "piercing": 20,
      "resistance": 18
    },
    {
      "level": 120,
      "power": 4,
      "agility": -8,
      "intensity": 13,
      "piercing": 22,
      "resistance": 19
    },
    {
      "level": 130,
      "power": 4,
      "agility": -8,
      "intensity": 14,
      "piercing": 24,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 5,
      "agility": -9,
      "intensity": 15,
      "piercing": 26,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623bff45fbbaf48a1470d4a"
  },
  "id": "AEY",
  "name": "Iron Leg Headband",
  "legend": "A long headband made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 12,
      "agility": -6,
      "resistance": 16
    },
    {
      "level": 110,
      "power": 13,
      "agility": -7,
      "resistance": 18
    },
    {
      "level": 120,
      "power": 15,
      "agility": -8,
      "resistance": 19
    },
    {
      "level": 130,
      "power": 16,
      "agility": -8,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 18,
      "agility": -9,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623c0455fbbaf48a1470d4c"
  },
  "id": "KbI",
  "name": "Iron Leg Chestplate",
  "legend": "A heavy metal chestplate with exposed arms for freedom of movement, made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 5,
      "agility": -8,
      "intensity": 15,
      "piercing": 25,
      "resistance": 22
    },
    {
      "level": 110,
      "power": 5,
      "agility": -9,
      "intensity": 16,
      "piercing": 27,
      "resistance": 24
    },
    {
      "level": 120,
      "power": 6,
      "agility": -10,
      "intensity": 18,
      "piercing": 30,
      "resistance": 26
    },
    {
      "level": 130,
      "power": 6,
      "agility": -10,
      "intensity": 19,
      "piercing": 32,
      "resistance": 29
    },
    {
      "level": 140,
      "power": 7,
      "agility": -11,
      "intensity": 21,
      "piercing": 35,
      "resistance": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623c0dc5fbbaf48a1470d4d"
  },
  "id": "X7J",
  "name": "Iron Leg Shoulderpads",
  "legend": "A set of lightweight shoulderpads made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Shoulder",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "defense": 103,
      "agility": -6,
      "resistance": 16
    },
    {
      "level": 110,
      "power": 3,
      "defense": 114,
      "agility": -7,
      "resistance": 18
    },
    {
      "level": 120,
      "power": 4,
      "defense": 124,
      "agility": -8,
      "resistance": 19
    },
    {
      "level": 130,
      "power": 4,
      "defense": 135,
      "agility": -8,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 5,
      "defense": 145,
      "agility": -9,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6624807af1d958f5e07bdf91"
  },
  "id": "geZ",
  "name": "Lightning Arcmancer Pants",
  "legend": "The lower part of arcanium-fabric robes made to conduct lightning magic, usually worn by mages to amplify certain aspects of their magic.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229975729924608090/image.png?ex=66266e69&is=66251ce9&hm=ce2f1c1f1d352a05d245083e55331fa5ef48506d98a548d8f4bc2cf0a1b24f2f&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "agility": 6,
      "attackSpeed": 21
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6625644efc22b19be951ce8a"
  },
  "id": "A5b",
  "name": "Water Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232475550984179884/1232480517190848522/waterlet.png?ex=66299c6d&is=66284aed&hm=cea3fcc6c921acf18d6fd449c2cb01b13e131fe8ca4c80b7a47e1f42dee1b2e3&",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 28,
      "intensity": 18
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256b1c889d18b4c84d39f7"
  },
  "id": "Cvl",
  "name": "Light Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1230256677807194203/1231718200647876638/Screenshot_2024-04-21_at_17.25.05.png?ex=66277f37&is=66262db7&hm=52c4cc02250b231c3a06ef3ac2413f30d41ef2fb4c6820f63f194aed8654fc3c&",
  "deleted": false,
  "subType": "None",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 48,
      "attackSize": -9,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256bb0c13f2b468c37a0a6"
  },
  "id": "Hkd",
  "name": "Fire Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1232474610042409021/1232483176811728917/fireclet.png?ex=66299ee7&is=66284d67&hm=9f45a976fb2cb77b6e1291bf409b9ffe02911a47e197b16b4656467c6f349b8d&",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 21,
      "attackSize": 9,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256c31889d18b4c84d39fa"
  },
  "id": "Kqb",
  "name": "Earth Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 107,
      "attackSize": 9,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256cbcdc23fe40fcb46684"
  },
  "id": "ZeB",
  "name": "Acid Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "intensity": 9,
      "piercing": 38
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "6623b18d1f4662b0cd6ecc72"
  },
  "id": "ceB",
  "name": "Oracle Helmet",
  "legend": "An old helmet that was enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "Helmet",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "regeneration": 12
    },
    {
      "level": 120,
      "regeneration": 13
    },
    {
      "level": 130,
      "defense": 193,
      "regeneration": 14
    },
    {
      "level": 140,
      "defense": 207,
      "regeneration": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623b37a0ca216afe66e5c1b"
  },
  "id": "8SI",
  "name": "Healing",
  "legend": "A scroll containing the Healing enchantment. When clicked in the inventory, it can be applied to one compatible item, causing it to be used up. The Healing enchantment increases regeneration.",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Enchants/Exotic/enchantHealing.JPG?raw=true",
  "deleted": false,
  "regenerationIncrement": 2.625,
  "enchantTypes": {
    "gear": {
      "regenerationIncrement": 2.625
    }
  }
},
{
  "_id": {
    "$oid": "6623b46a0ca216afe66e5c1e"
  },
  "id": "cig",
  "name": "Oracle Bracelet",
  "legend": "An old bracelet that was enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Accessory",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "Arms",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "attackSpeed": 16,
      "regeneration": 32
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623bd4f5fbbaf48a1470d47"
  },
  "id": "3P3",
  "name": "Thermo Fist Chestplate",
  "legend": "A heavy metal chestplate with exposed arms for freedom of movement, made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSpeed": 22,
      "attackSize": -8,
      "intensity": 29,
      "piercing": 25
    },
    {
      "level": 110,
      "attackSpeed": 24,
      "attackSize": -9,
      "intensity": 32,
      "piercing": 27
    },
    {
      "level": 120,
      "attackSpeed": 26,
      "attackSize": -10,
      "intensity": 36,
      "piercing": 30
    },
    {
      "level": 130,
      "attackSpeed": 29,
      "attackSize": -10,
      "intensity": 38,
      "piercing": 32
    },
    {
      "level": 140,
      "attackSpeed": 31,
      "attackSize": -11,
      "intensity": 41,
      "piercing": 35
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623caefe3d3bf56767a5f5b"
  },
  "id": "HGp",
  "name": "Sailor Style Handwraps",
  "legend": "A set of handwraps made for sailor style users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Fighting/Sailor%20Fist/sailorStyleHandwraps.png?raw=true",
  "deleted": false,
  "subType": "Arms",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "attackSpeed": 28,
      "attackSize": 10
    },
    {
      "level": 110,
      "power": 3,
      "attackSpeed": 30,
      "attackSize": 12
    },
    {
      "level": 120,
      "power": 4,
      "attackSpeed": 33,
      "attackSize": 13
    },
    {
      "level": 130,
      "power": 4,
      "attackSpeed": 36,
      "attackSize": 14
    },
    {
      "level": 140,
      "power": 5,
      "attackSpeed": 39,
      "attackSize": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66256b7d889d18b4c84d39f9"
  },
  "id": "HHw",
  "name": "Glass Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "NO_IMAGE",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 120,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 120,
      "power": 26,
      "defense": -34,
      "intensity": 9
    },
    {
      "level": 130,
      "power": 28,
      "defense": -36,
      "intensity": 9
    },
    {
      "level": 140,
      "power": 30,
      "defense": -39,
      "intensity": 10
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256c88efc455d6a37c730f"
  },
  "id": "uJX",
  "name": "Ash Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 28,
      "intensity": 18
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "6623b0c61f4662b0cd6ecc71"
  },
  "id": "2aQ",
  "name": "Regeneration Amulet [Fair]",
  "legend": "Five aventurine gemstone embedded in a bronze chain necklace. The gemstones seem to give a decent amount of regeneration.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://github.com/BobbyNooby/AOGearBuilder/blob/typescript/static/assets/images/Armor/Amulets/Regeneration/amuletRegeneration.png?raw=true",
  "deleted": false,
  "subType": "Amulet",
  "statType": "None",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "regeneration": 74
    },
    {
      "level": 110,
      "regeneration": 82
    },
    {
      "level": 120,
      "regeneration": 89
    },
    {
      "level": 130,
      "regeneration": 97
    },
    {
      "level": 140,
      "regeneration": 104
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623b5080ca216afe66e5c21"
  },
  "id": "91R",
  "name": "Oracle Pants",
  "legend": "The lower part of a set of old robes that were enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Pants",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 110,
      "power": 14,
      "regeneration": 12
    },
    {
      "level": 120,
      "regeneration": 13
    },
    {
      "level": 130,
      "power": 17,
      "regeneration": 14
    },
    {
      "level": 140,
      "power": 18,
      "regeneration": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623b59f0ca216afe66e5c24"
  },
  "id": "Zm2",
  "name": "Alitheia Robes",
  "legend": "A set of mysterious old robes that were enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. Oracles can store or call upon spirit energy from the robes to boost the power of their spirit weapons.",
  "mainType": "Chestplate",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Vitality",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "intensity": 39,
      "regeneration": 39
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623bc6b5fbbaf48a1470d43"
  },
  "id": "Q5a",
  "name": "Thermo Fist Balteus",
  "legend": "A balteus made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSpeed": 16,
      "attackSize": -6,
      "intensity": 21,
      "piercing": 18
    },
    {
      "level": 110,
      "attackSpeed": 18,
      "attackSize": -7,
      "intensity": 24,
      "piercing": 20
    },
    {
      "level": 120,
      "attackSpeed": 19,
      "attackSize": -8,
      "intensity": 26,
      "piercing": 22
    },
    {
      "level": 130,
      "attackSpeed": 21,
      "attackSize": -8,
      "intensity": 28,
      "piercing": 24
    },
    {
      "level": 140,
      "attackSpeed": 23,
      "attackSize": -9,
      "intensity": 30,
      "piercing": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623bd9d5fbbaf48a1470d48"
  },
  "id": "bRB",
  "name": "Thermo Fist Handwraps",
  "legend": "A set of hand wrappings made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arms",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSpeed": 44,
      "attackSize": -6,
      "intensity": 10
    },
    {
      "level": 110,
      "attackSpeed": 48,
      "attackSize": -7,
      "intensity": 12
    },
    {
      "level": 120,
      "attackSpeed": 52,
      "attackSize": -8,
      "intensity": 13
    },
    {
      "level": 130,
      "attackSpeed": 57,
      "attackSize": -8,
      "intensity": 14
    },
    {
      "level": 140,
      "attackSpeed": 62,
      "attackSize": -9,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623c1265fbbaf48a1470d4e"
  },
  "id": "zUw",
  "name": "Iron Leg Armor",
  "legend": "A set of lightweight armor made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 5,
      "defense": 138,
      "agility": -8,
      "resistance": 22
    },
    {
      "level": 110,
      "power": 5,
      "defense": 152,
      "agility": -9,
      "resistance": 24
    },
    {
      "level": 120,
      "power": 6,
      "defense": 166,
      "agility": -10,
      "resistance": 26
    },
    {
      "level": 130,
      "power": 6,
      "defense": 180,
      "agility": -10,
      "resistance": 29
    },
    {
      "level": 140,
      "power": 7,
      "defense": 194,
      "agility": -11,
      "resistance": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6623c1965fbbaf48a1470d50"
  },
  "id": "4HH",
  "name": "Iron Leg Greaves",
  "legend": "A set of heavy metal greaves made for iron leg users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "agility": -6,
      "intensity": 11,
      "piercing": 18,
      "resistance": 16
    },
    {
      "level": 110,
      "power": 3,
      "agility": -7,
      "intensity": 12,
      "piercing": 20,
      "resistance": 18
    },
    {
      "level": 120,
      "power": 4,
      "agility": -8,
      "intensity": 13,
      "piercing": 22,
      "resistance": 19
    },
    {
      "level": 130,
      "power": 4,
      "agility": -8,
      "intensity": 14,
      "piercing": 24,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 5,
      "agility": -9,
      "intensity": 15,
      "piercing": 26,
      "resistance": 23
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "66256491889d18b4c84d39f3"
  },
  "id": "5f7",
  "name": "Snow Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSpeed": 9,
      "attackSize": 28,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256575a49be90c3dd1fc1d"
  },
  "id": "8FB",
  "name": "Shadow Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1224860425695526955/1225135251156762685/image.png?ex=66327c1d&is=6620071d&hm=5c41abaea89573ec28a0ab0d6df691cd2a9bba22a20abf4496c988820f123efa&",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 18,
      "attackSpeed": 19,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256881889d18b4c84d39f4"
  },
  "id": "3Ly",
  "name": "Poison Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 22,
      "intensity": 9,
      "piercing": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256a12889d18b4c84d39f5"
  },
  "id": "JJ3",
  "name": "Plasma Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arms",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 22,
      "intensity": 18
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256ad5889d18b4c84d39f6"
  },
  "id": "Vub",
  "name": "Lightning Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "https://cdn.discordapp.com/attachments/1229946552173330474/1229973241297375242/image.png?ex=6631a0d8&is=661f2bd8&hm=f495a44b42aa9cb0f4ecbc38bcce27ffa7ebaff2a845c02e21905cd4816ef276&",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "agility": 9,
      "attackSpeed": 28,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256b50889d18b4c84d39f8"
  },
  "id": "KyL",
  "name": "Ice Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "defense": 36,
      "intensity": 9,
      "resistance": 29
    },
    {
      "level": 140,
      "power": 13,
      "defense": 38,
      "intensity": 10,
      "resistance": 31
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66256c08efc455d6a37c730d"
  },
  "id": "KaZ",
  "name": "Explosion Arcanium Bracelet",
  "legend": "A bracelet made out of arcanium metal, capable of conducting some magic. It can be worn on the wrist to increase the wearer's power.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arm",
  "statType": "Magic",
  "gemNo": 2,
  "minLevel": 130,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 12,
      "attackSize": 38,
      "intensity": 9
    }
  ],
  "validModifiers": [
    "Atlantean Essence"
  ]
},
{
  "_id": {
    "$oid": "66435f2dfa8f8f5439717d38"
  },
  "id": "b49",
  "name": "None",
  "legend": "None Cannon Innit",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Miscellaneous/shipplaceholders/cannonPlaceholder.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "664361f8fa8f8f5439717d3b"
  },
  "id": "u9G",
  "name": "None",
  "legend": "This human does NOT exist",
  "mainType": "Deckhand",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Miscellaneous/shipplaceholders/deckhandPlaceholder.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "665a231d6b6d71f1e5d381c5"
  },
  "id": "Ng7",
  "name": "None",
  "legend": "Aint no hull thick enoughh",
  "mainType": "Hull Armor",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Miscellaneous/shipplaceholders/hullArmorPlaceholder.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "665a233b6b6d71f1e5d381c6"
  },
  "id": "pmb",
  "name": "None",
  "legend": "Aint no quartermaster bruv",
  "mainType": "Quartermaster",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Miscellaneous/shipplaceholders/quartermasterPlaceholder.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "665a234c6b6d71f1e5d381c7"
  },
  "id": "m2t",
  "name": "None",
  "legend": "No ramming boi >:(",
  "mainType": "Ram",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Miscellaneous/shipplaceholders/ramPlaceholder.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "665a23666b6d71f1e5d381c8"
  },
  "id": "nIB",
  "name": "None",
  "legend": "No sailing today too",
  "mainType": "Sail Material",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Miscellaneous/shipplaceholders/sailMaterialPlaceholder.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "665a23806b6d71f1e5d381c9"
  },
  "id": "DC4",
  "name": "None",
  "legend": "No ship crew here buddy.. Nope",
  "mainType": "Ship Crew",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Miscellaneous/shipplaceholders/shipCrewPlaceholder.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "665a24256b6d71f1e5d381ca"
  },
  "id": "i5y",
  "name": "None",
  "legend": "Nope no sieging",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Miscellaneous/shipplaceholders/mortarPlaceholder.jpg",
  "deleted": false
},
{
  "_id": {
    "$oid": "665c82592281f7be681f2004"
  },
  "id": "g5t",
  "name": "Oracle Amulet [Poor]",
  "legend": "An old gemstone necklace that was enchanted to store spirit energy, something only a very skilled enchanter and oracle can do. ",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Amulet",
  "statType": "Vitality",
  "gemNo": 0,
  "minLevel": 90,
  "maxLevel": 130,
  "statsPerLevel": [
    {
      "level": 130,
      "defense": 160,
      "regeneration": 81
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6669a2cd9817a90a6d8d29e7"
  },
  "id": "K4h",
  "name": "Wooden Trim",
  "legend": "A wooden trim added to the hull of a ship, allowing it to move through the sea easier and increasing its durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/woodenTrim.jpg",
  "deleted": false,
  "speed": 5,
  "durability": 900,
  "stability": 3
},
{
  "_id": {
    "$oid": "6669bcdd9817a90a6d8d29e8"
  },
  "id": "Ehk",
  "name": "Rugged Trim",
  "legend": "A trim of thin rugged metal added to the hull of a ship, increasing its maneuverability and durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/ruggedTrim.jpg",
  "deleted": false,
  "durability": 1350,
  "stability": 1,
  "turning": 11
},
{
  "_id": {
    "$oid": "6669bdf69817a90a6d8d29e9"
  },
  "id": "iNa",
  "name": "Wooden Framing",
  "legend": "A double layered wooden framing added to the hull of a ship, providing a decent amount of durability and ram defense.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/woodenFraming.jpg",
  "deleted": false,
  "durability": 1800,
  "ramDefense": 138,
  "stability": 6
},
{
  "_id": {
    "$oid": "6669c3839817a90a6d8d29ea"
  },
  "id": "isv",
  "name": "Reinforced Wooden Framing",
  "legend": "A framing of wood and thin rugged metal added to the hull of a ship, allowing to move through the sea easier and increasing its durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/reinforcedWoodenFraming.jpg",
  "deleted": false,
  "durability": 1500,
  "speed": 6,
  "stability": 3
},
{
  "_id": {
    "$oid": "6669c40c9817a90a6d8d29eb"
  },
  "id": "uJL",
  "name": "Light Rugged Framing",
  "legend": "A framing of wood and thin rugged metal and wood added to the hull of a ship, increasing its maneuverability and durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/lightRuggedFraming.jpg",
  "deleted": false,
  "durability": 2250,
  "stability": 2,
  "turning": 12
},
{
  "_id": {
    "$oid": "6669c5139817a90a6d8d29ec"
  },
  "id": "B8a",
  "name": "Light Bronze Framing",
  "legend": "A framing of wood and thin bronze metal and wood added to the hull of a ship, providing a decent amount of durability and ram defense.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/lightBronzeFraming.jpg",
  "deleted": false,
  "durability": 3000,
  "ramDefense": 230,
  "stability": 7
},
{
  "_id": {
    "$oid": "6669c5419817a90a6d8d29ed"
  },
  "id": "8bX",
  "name": "Wooden Hull",
  "legend": "Various layers of wood added to the hull of a ship, allowing it to move through the sea easier and increasing its durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/woodenHull.jpg",
  "deleted": false,
  "durability": 2100,
  "speed": 7,
  "stability": 4
},
{
  "_id": {
    "$oid": "6669c57c9817a90a6d8d29ee"
  },
  "id": "WqY",
  "name": "Rugged Framing",
  "legend": "A framing of thin rugged metal added to the hull of a ship, increasing its maneuverability and durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/ruggedFraming.jpg",
  "deleted": false,
  "durability": 3150,
  "stability": 2,
  "turning": 12
},
{
  "_id": {
    "$oid": "6669c5aa9817a90a6d8d29ef"
  },
  "id": "EDy",
  "name": "Trimmed Wooden Hull",
  "legend": "A wooden frame and trims of wood and thin rugged metal added to the hull of a ship, providing a decent amount of durability and ram defense.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/trimmedWoodenHull.jpg",
  "deleted": false,
  "durability": 4200,
  "ramDefense": 322,
  "stability": 8
},
{
  "_id": {
    "$oid": "6669c5e39817a90a6d8d29f0"
  },
  "id": "vHX",
  "name": "Reinforced Wooden Hull",
  "legend": "A wooden frame with thin rugged metal and wooden trims added to the hull of a ship, allowing it to move through the sea easier and increasing its durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/reinforcedWoodenHull.jpg",
  "deleted": false,
  "durability": 2700,
  "speed": 7,
  "stability": 4
},
{
  "_id": {
    "$oid": "6669c6c69817a90a6d8d29f1"
  },
  "id": "Ds0",
  "name": "Light Rugged Hull",
  "legend": "A thing rugged metal frame with trims of wood added to the hull of a ship, increasing its maneuverability and durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/lightRuggedHull.jpg",
  "deleted": false,
  "durability": 4050,
  "stability": 2,
  "turning": 13
},
{
  "_id": {
    "$oid": "6669c7889817a90a6d8d29f2"
  },
  "id": "FAG",
  "name": "Bronze Framing",
  "legend": "A framing of thin rugged metal and bronze added to the hull of a ship, providing a decent amount of durability and ram defense.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/bronzeFraming.jpg",
  "deleted": false,
  "durability": 5400,
  "ramDefense": 414,
  "stability": 9
},
{
  "_id": {
    "$oid": "6669c7b49817a90a6d8d29f3"
  },
  "id": "a38",
  "name": "Ruined Archaic Hull",
  "legend": "A set of hull armor that is decades old, but made of unknown metals which still seem to provide great protection, despite their appearance. It has a light weight to it, increasing its maneuverability and durability slightly.",
  "mainType": "Hull Armor",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Hull/ruinedArchaicHull.jpg",
  "deleted": false,
  "durability": 5400,
  "speed": 2,
  "stability": 5,
  "turning": 14
},
{
  "_id": {
    "$oid": "666adedeb16fc20b6ca9e518"
  },
  "id": "93A",
  "name": "Dapper Witch Hat",
  "legend": "A dapper hat for dapper people. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 130,
      "power": 13,
      "agility": 12
    },
    {
      "level": 140,
      "power": 14,
      "agility": 13
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "666c9dc397af8c8548816473"
  },
  "id": "4Lz",
  "name": "Trimmed Cape",
  "legend": "A tailored cape with a trimmed border that exudes regalness.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Back",
  "statType": "None",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSpeed": 16,
      "piercing": 28
    },
    {
      "level": 110,
      "attackSpeed": 18,
      "piercing": 30
    },
    {
      "level": 120,
      "attackSpeed": 20,
      "piercing": 33
    },
    {
      "level": 130,
      "attackSpeed": 21,
      "piercing": 36
    },
    {
      "level": 140,
      "attackSpeed": 23,
      "piercing": 39
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6678af00697b022f80cfb692"
  },
  "id": "bG8",
  "name": "Thermo Fist Belt",
  "legend": "A thick belt made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "attackSpeed": 16,
      "attackSize": -6,
      "intensity": 10
    },
    {
      "level": 110,
      "defense": 114,
      "attackSpeed": 18,
      "attackSize": -7,
      "intensity": 12
    },
    {
      "level": 120,
      "defense": 124,
      "attackSpeed": 19,
      "attackSize": -8,
      "intensity": 13
    },
    {
      "level": 130,
      "defense": 135,
      "attackSpeed": 21,
      "attackSize": -8,
      "intensity": 14
    },
    {
      "level": 140,
      "defense": 145,
      "attackSpeed": 23,
      "attackSize": -9,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6678afd6697b022f80cfb693"
  },
  "id": "tRD",
  "name": "Thermo Fist Shoulderpads",
  "legend": "A set of lightweight shoulderpads made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Shoulder",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "attackSpeed": 16,
      "attackSize": -6,
      "intensity": 10
    },
    {
      "level": 110,
      "defense": 114,
      "attackSpeed": 18,
      "attackSize": -7,
      "intensity": 12
    },
    {
      "level": 120,
      "defense": 124,
      "attackSpeed": 19,
      "attackSize": -8,
      "intensity": 13
    },
    {
      "level": 130,
      "defense": 135,
      "attackSpeed": 21,
      "attackSize": -8,
      "intensity": 14
    },
    {
      "level": 140,
      "defense": 145,
      "attackSpeed": 23,
      "attackSize": -9,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6678b0ed697b022f80cfb694"
  },
  "id": "juO",
  "name": "Thermo Fist Armor",
  "legend": "A set of lightweight armor made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Chestplate",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 138,
      "attackSpeed": 22,
      "attackSize": -8,
      "intensity": 14
    },
    {
      "level": 110,
      "defense": 152,
      "attackSpeed": 24,
      "attackSize": -9,
      "intensity": 16
    },
    {
      "level": 120,
      "defense": 166,
      "attackSpeed": 26,
      "attackSize": -10,
      "intensity": 18
    },
    {
      "level": 130,
      "defense": 180,
      "attackSpeed": 29,
      "attackSize": -10,
      "intensity": 19
    },
    {
      "level": 140,
      "defense": 194,
      "attackSpeed": 31,
      "attackSize": -11,
      "intensity": 20
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6678b196aad0db8e2ddc83fb"
  },
  "id": "tNX",
  "name": "Thermo Fist Leggings",
  "legend": "A set of lightweight armored leggings made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "defense": 103,
      "attackSpeed": 16,
      "attackSize": -6,
      "intensity": 10
    },
    {
      "level": 110,
      "defense": 114,
      "attackSpeed": 18,
      "attackSize": -7,
      "intensity": 12
    },
    {
      "level": 120,
      "defense": 124,
      "attackSpeed": 19,
      "attackSize": -8,
      "intensity": 13
    },
    {
      "level": 130,
      "defense": 135,
      "attackSpeed": 21,
      "attackSize": -8,
      "intensity": 14
    },
    {
      "level": 140,
      "defense": 145,
      "attackSpeed": 23,
      "attackSize": -9,
      "intensity": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "6678b25eaad0db8e2ddc83fc"
  },
  "id": "LHL",
  "name": "Thermo Fist Greaves",
  "legend": "A set of heavy metal greaves made for thermo fist users, designed to compliment the style's strengths.",
  "mainType": "Pants",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "None",
  "statType": "Strength",
  "gemNo": 0,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "attackSpeed": 16,
      "attackSize": -6,
      "intensity": 21,
      "piercing": 18
    },
    {
      "level": 110,
      "attackSpeed": 18,
      "attackSize": -7,
      "intensity": 24,
      "piercing": 20
    },
    {
      "level": 120,
      "attackSpeed": 19,
      "attackSize": -8,
      "intensity": 26,
      "piercing": 22
    },
    {
      "level": 130,
      "attackSpeed": 21,
      "attackSize": -8,
      "intensity": 28,
      "piercing": 24
    },
    {
      "level": 140,
      "attackSpeed": 23,
      "attackSize": -9,
      "intensity": 30,
      "piercing": 26
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "667cae3f03b1ee98c778aa8f"
  },
  "id": "wUi",
  "name": "Iron Leg Handwraps",
  "legend": "A set of hand wrappings made for iron leg users, designed to complument the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Arms",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 3,
      "agility": -6,
      "attackSpeed": 28,
      "resistance": 16
    },
    {
      "level": 110,
      "power": 3,
      "agility": -7,
      "attackSpeed": 30,
      "resistance": 18
    },
    {
      "level": 120,
      "power": 4,
      "agility": -8,
      "attackSpeed": 33,
      "resistance": 19
    },
    {
      "level": 130,
      "power": 4,
      "agility": -8,
      "attackSpeed": 36,
      "resistance": 21
    },
    {
      "level": 140,
      "power": 5,
      "agility": -9,
      "attackSpeed": 39,
      "resistance": 23
    }
  ],
  "validModifiers": []
},
{
  "_id": {
    "$oid": "667e0955e925e91551c0eb3d"
  },
  "id": "NnZ",
  "name": "Boxing Balteus",
  "legend": "A balteus made for boxing users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Waist",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "agility": 10,
      "intensity": 11,
      "piercing": 18,
      "resistance": 10
    },
    {
      "level": 110,
      "agility": 12,
      "intensity": 12,
      "piercing": 20,
      "resistance": 12
    },
    {
      "level": 120,
      "agility": 13,
      "intensity": 13,
      "piercing": 22,
      "resistance": 13
    },
    {
      "level": 130,
      "agility": 14,
      "intensity": 14,
      "piercing": 24,
      "resistance": 14
    },
    {
      "level": 140,
      "agility": 15,
      "intensity": 15,
      "piercing": 26,
      "resistance": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "667f2cc71f52862ec91e6dfb"
  },
  "id": "d0C",
  "name": "Cannon Fist Headband",
  "legend": "A long headband made for cannon fist users, designed to compliment the style's strengths.",
  "mainType": "Accessory",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "subType": "Head",
  "statType": "Strength",
  "gemNo": 2,
  "minLevel": 100,
  "maxLevel": 140,
  "statsPerLevel": [
    {
      "level": 100,
      "power": 9,
      "intensity": 10,
      "piercing": 10
    },
    {
      "level": 110,
      "power": 10,
      "intensity": 12,
      "piercing": 12
    },
    {
      "level": 120,
      "power": 11,
      "intensity": 13,
      "piercing": 13
    },
    {
      "level": 130,
      "power": 12,
      "intensity": 14,
      "piercing": 14
    },
    {
      "level": 140,
      "power": 13,
      "intensity": 15,
      "piercing": 15
    }
  ],
  "validModifiers": [
    "Atlantean Essence",
    "Frozen",
    "Archaic",
    "Sandy",
    "Superheated",
    "Drowned",
    "Blasted",
    "Crystalline"
  ]
},
{
  "_id": {
    "$oid": "668df94d325a329909b7a22e"
  },
  "id": "tPg",
  "name": "Sturdy",
  "legend": "Im sturdy rn",
  "mainType": "Enchant",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Enchants/Rare/enchantSturdy.jpg",
  "deleted": false,
  "enchantTypes": {
    "ship": {
      "sail": {
        "resilience": 10,
        "speed": 5
      }
    }
  }
},
{
  "_id": {
    "$oid": "668e0345325a329909b7a22f"
  },
  "id": "kmI",
  "name": "Reinforced",
  "legend": "Reinforced innit",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Enchants/Exotic/enchantReinforced.jpg",
  "deleted": false,
  "enchantTypes": {
    "ship": {
      "sail": {
        "resilience": 20,
        "speed": 8
      }
    }
  }
},
{
  "_id": {
    "$oid": "668e040b325a329909b7a230"
  },
  "id": "KhY",
  "name": "Warship",
  "legend": "Warrrrr",
  "mainType": "Enchant",
  "rarity": "Exotic",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Enchants/Exotic/enchantWarship.jpg",
  "deleted": false,
  "enchantTypes": {
    "ship": {
      "ram": {
        "ramDefense": -450,
        "ramStrength": 1200
      },
      "hull": {
        "durability": 4000,
        "ramDefense": 900,
        "ramStrength": 450,
        "speed": -7,
        "stability": 20
      },
      "sail": {
        "durability": -4000,
        "resilience": 10,
        "speed": 25,
        "turning": 10
      }
    }
  }
},
{
  "_id": {
    "$oid": "668e0681325a329909b7a231"
  },
  "id": "mx1",
  "name": "Edward Kenton, the Exiled Captain",
  "legend": "A twenty-seven year old man who served in the Grand Navy since he was twenty, Edward Kenton has seen everything from naval blockades to bandit camp raiding. He deserted the Grand Navy in pursuit of a simplier life, and joined your crew so that he might feel adventure again. Since then, he has embraced the role of quartermaster and has enjoyed sailing with you, but his bounty is ever increasing as the Grand Navy pursues him for desertion.",
  "mainType": "Quartermaster",
  "rarity": "Rare",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Quartermaster/edward2.jpg",
  "deleted": false,
  "durability": 300,
  "resilience": 5,
  "stability": 5
},
{
  "_id": {
    "$oid": "668e06b6325a329909b7a232"
  },
  "id": "UJV",
  "name": "Enizor, the Visionary",
  "legend": "A sixty-eight year old man who is a renowned alchemist in the Bronze Sea, Enzior left his home of Frostmill Island in pursuit of one last adventure that would complete his life's work. Since then, he has revealed to you that his research involves a very old, powerful artifact of some kind, and that he would share it with you if he manages to succeed in researching it. The hardships of the Dark Sea caused him to awaken his latent magic potential, and he now knows how to use Snow Magic.",
  "mainType": "Quartermaster",
  "rarity": "None",
  "imageId": "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/Ship%20Parts/Quartermaster/enizor2.jpg",
  "deleted": false,
  "durability": 100,
  "magicStorage": 500,
  "stability": 5
},
{
  "_id": {
    "$oid": "66913834c26d8225bb9a62ca"
  },
  "id": "aFt",
  "name": "+7 Speed",
  "legend": "+7 Speed Deckhand",
  "mainType": "Deckhand",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "speed": 7
},
{
  "_id": {
    "$oid": "6695f585894018a5973a0631"
  },
  "id": "IIV",
  "name": "Silver Framing",
  "legend": "A framing of thin rugged metal and silver added to the hull of a ship, providing a fair amount of durability and ram defense. It can be enchanted by an Alchemist in order to increase its stats.",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 7800,
  "ramDefense": 598,
  "stability": 11
},
{
  "_id": {
    "$oid": "6695f5c4894018a5973a0632"
  },
  "id": "9lv",
  "name": "Light Silver Framing",
  "legend": "A framing of wood and thin silver metal added to the hull of a ship, allowing it to move through the sea easier and increasing its durability slightly. ",
  "mainType": "Hull Armor",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 3900,
  "ramDefense": 598,
  "speed": 8
},
{
  "_id": {
    "$oid": "6695f7f6894018a5973a0633"
  },
  "id": "e3d",
  "name": "Wool Sailcloth",
  "legend": "A sailcloth made out of wool fabric, providing a toughness which increases your ship's durability and resilience slightly.",
  "mainType": "Sail Material",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 60,
  "resilience": 10
},
{
  "_id": {
    "$oid": "6695f810894018a5973a0634"
  },
  "id": "yUJ",
  "name": "Flax Sailcloth",
  "legend": "A sailcloth made out of flax fabric, allowing it to catch more wind and increase your ship's speed slightly.",
  "mainType": "Sail Material",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": 6
},
{
  "_id": {
    "$oid": "6695f84b894018a5973a0635"
  },
  "id": "SW6",
  "name": "Cotton Sailcloth",
  "legend": "A sailcloth made out of cotton fabric, providing a toughness which increases your ship's durability and resilience slightly.",
  "mainType": "Sail Material",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 160,
  "resilience": 12
},
{
  "_id": {
    "$oid": "6695f869894018a5973a0636"
  },
  "id": "ADt",
  "name": "Hemp Sailcloth",
  "legend": "A sailcloth made out of hemp fabric, allowing it to catch more wind and increase your ship's speed slightly.",
  "mainType": "Sail Material",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": 9
},
{
  "_id": {
    "$oid": "6695f88c894018a5973a0637"
  },
  "id": "fsx",
  "name": "Archaic Sailcloth",
  "legend": "An old sailcloth made out of a strange material, which seems to be in remarkably good condition. Its thickness provides improved durability and resilience, while also catching a lot of wind.",
  "mainType": "Sail Material",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 60,
  "resilience": 3,
  "speed": 11
},
{
  "_id": {
    "$oid": "6695f8ad894018a5973a0638"
  },
  "id": "kTu",
  "name": "Willow Sailcloth",
  "legend": "[pls fix]",
  "mainType": "Sail Material",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": 12
},
{
  "_id": {
    "$oid": "6695f8c1894018a5973a0639"
  },
  "id": "Bu6",
  "name": "Reinforced Sailcloth",
  "legend": "[plz fix]",
  "mainType": "Sail Material",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 260,
  "resilience": 13
},
{
  "_id": {
    "$oid": "669725098cfb8d42be08fecd"
  },
  "id": "8Pu",
  "name": "Light Cannons",
  "legend": "A set of lightweight, cheap cannons.",
  "mainType": "Cannon",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "speed": -5,
  "damageMultiplier": 0.8,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "669725308cfb8d42be08fece"
  },
  "id": "zTZ",
  "name": "Standard Cannons",
  "legend": "A set of standard ship cannons.",
  "mainType": "Cannon",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1,
  "rangeMultiplier": 1,
  "fuseLength": 2,
  "reloadTime": 6
},
{
  "_id": {
    "$oid": "669725518cfb8d42be08fecf"
  },
  "id": "QaE",
  "name": "Heavy Cannons",
  "legend": "A set of heavy expensive cannons.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.2,
  "rangeMultiplier": 1.2,
  "fuseLength": 2,
  "reloadTime": 7
},
{
  "_id": {
    "$oid": "669725918cfb8d42be08fed0"
  },
  "id": "5Th",
  "name": "Bronze Cannons",
  "legend": "A set of cannons reinforced with bronze metal, increasing their damage.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.4,
  "rangeMultiplier": 1,
  "fuseLength": 2,
  "reloadTime": 6
},
{
  "_id": {
    "$oid": "669726c08cfb8d42be08fed1"
  },
  "id": "TKr",
  "name": "Heavy Bronze Cannons",
  "legend": "A set of heavy cannons reinforced with bronze metal, increasing their damage.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.6,
  "rangeMultiplier": 1.2,
  "fuseLength": 2,
  "reloadTime": 7
},
{
  "_id": {
    "$oid": "669726e98cfb8d42be08fed2"
  },
  "id": "Xt7",
  "name": "Carronades",
  "legend": "A set of cannons built for firing powerful shots at a close range.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.8,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 8
},
{
  "_id": {
    "$oid": "669727198cfb8d42be08fed3"
  },
  "id": "jgm",
  "name": "Bronze Carronades",
  "legend": "A set of reinforced bronze cannons built for firing powerful shots at a close range.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.9,
  "rangeMultiplier": 0.9,
  "fuseLength": 2,
  "reloadTime": 8
},
{
  "_id": {
    "$oid": "669728098cfb8d42be08fed4"
  },
  "id": "gnG",
  "name": "Culverins",
  "legend": "A set of cannons built for firing at long range.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.1,
  "rangeMultiplier": 1.6,
  "fuseLength": 2,
  "reloadTime": 6
},
{
  "_id": {
    "$oid": "669728248cfb8d42be08fed5"
  },
  "id": "vmj",
  "name": "Bronze Culverins",
  "legend": "A set of bronze reinforced cannons built for firing at a long range.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.2,
  "rangeMultiplier": 1.6,
  "fuseLength": 2,
  "reloadTime": 6
},
{
  "_id": {
    "$oid": "669728848cfb8d42be08fed6"
  },
  "id": "62S",
  "name": "Iron Culverins",
  "legend": "A set of bronze-reinforced iron cannons built for firing at long range.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.4,
  "rangeMultiplier": 1.6,
  "fuseLength": 2,
  "reloadTime": 6
},
{
  "_id": {
    "$oid": "669728d78cfb8d42be08fed7"
  },
  "id": "xQr",
  "name": "Heavy Iron Cannons",
  "legend": "[plz fix]",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 1.8,
  "rangeMultiplier": 1.2,
  "fuseLength": 2,
  "reloadTime": 7
},
{
  "_id": {
    "$oid": "669728f58cfb8d42be08fed8"
  },
  "id": "M8Q",
  "name": "Iron Carronades",
  "legend": "A set of bronze-reinforced iron cannons built for firing powerful shots at close range.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -7,
  "damageMultiplier": 2.1,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 7
},
{
  "_id": {
    "$oid": "669729288cfb8d42be08fed9"
  },
  "id": "21y",
  "name": "Dragonfire Carronades",
  "legend": "A set of cannons with a unique mechanism built in which causes flames to spew from the barrel for a short duration after they are fired, dealing additional damage to nearby ships.",
  "mainType": "Cannon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -10,
  "damageMultiplier": 2,
  "rangeMultiplier": 0.7,
  "fuseLength": 2,
  "reloadTime": 8
},
{
  "_id": {
    "$oid": "66972ad68cfb8d42be08feda"
  },
  "id": "4El",
  "name": "Lesser Arcanium Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct some magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "speed": -5,
  "damageMultiplier": 1.3,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 5,
  "magicStorage": 135
},
{
  "_id": {
    "$oid": "66972afa8cfb8d42be08fedb"
  },
  "id": "ciJ",
  "name": "Lesser Acid Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct acid magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972b2f8cfb8d42be08fedc"
  },
  "id": "sXk",
  "name": "Lesser Ash Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct ash magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.7,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972b498cfb8d42be08fedd"
  },
  "id": "9tn",
  "name": "Lesser Crystal Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct crystal magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 1,
  "rangeMultiplier": 0.6,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972b7a8cfb8d42be08fede"
  },
  "id": "X6X",
  "name": "Lesser Cataclysm Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct cataclysm magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Seasonal",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 5.6,
  "rangeMultiplier": 1,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972b928cfb8d42be08fedf"
  },
  "id": "xom",
  "name": "Lesser Earth Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct earth magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 1.8,
  "rangeMultiplier": 0.5,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972bb38cfb8d42be08fee0"
  },
  "id": "FRG",
  "name": "Lesser Explosion Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct explosion magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.6,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972bcd8cfb8d42be08fee1"
  },
  "id": "squ",
  "name": "Lesser Fire Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct fire magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972be08cfb8d42be08fee2"
  },
  "id": "OUh",
  "name": "Lesser Glass Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct glass magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972bfd8cfb8d42be08fee3"
  },
  "id": "Tvq",
  "name": "Lesser Ice Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct ice magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.6,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972c1d8cfb8d42be08fee4"
  },
  "id": "XDe",
  "name": "Lesser Light Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct light magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 1.4,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972c338cfb8d42be08fee5"
  },
  "id": "Eut",
  "name": "Lesser Lightning Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct lightning magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 1.2,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972c598cfb8d42be08fee6"
  },
  "id": "LQ7",
  "name": "Lesser Magma Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct magma magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.6,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972c848cfb8d42be08fee7"
  },
  "id": "5GX",
  "name": "Lesser Metal Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct metal magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 1.8,
  "rangeMultiplier": 0.4,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972ca18cfb8d42be08fee8"
  },
  "id": "rhx",
  "name": "Lesser Plasma Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct plasma magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 1,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972cb88cfb8d42be08fee9"
  },
  "id": "BW1",
  "name": "Lesser Poison Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct poison magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972cd18cfb8d42be08feea"
  },
  "id": "CrG",
  "name": "Lesser Sand Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct sand magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 1.4,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972ced8cfb8d42be08feeb"
  },
  "id": "gyP",
  "name": "Lesser Shadow Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct shadow magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 1,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972d078cfb8d42be08feec"
  },
  "id": "yPI",
  "name": "Lesser Snow Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct snow magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 0.9,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972d208cfb8d42be08feed"
  },
  "id": "HK0",
  "name": "Lesser Water Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct water magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 1.3,
  "rangeMultiplier": 0.8,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972d368cfb8d42be08feee"
  },
  "id": "ilb",
  "name": "Lesser Wind Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct wind magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 0.9,
  "rangeMultiplier": 1.1,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66972d4c8cfb8d42be08feef"
  },
  "id": "Xv7",
  "name": "Lesser Wood Cannons",
  "legend": "A set of cannons made out of lesser arcanium metal, forged to conduct wood magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.",
  "mainType": "Cannon",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "magicStorage": 135,
  "speed": -5,
  "damageMultiplier": 1.3,
  "rangeMultiplier": 0.6,
  "fuseLength": 2,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "669731568cfb8d42be08fef0"
  },
  "id": "l6m",
  "name": "Iron Spiked Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 200,
  "ramDefense": 184,
  "ramStrength": 1330,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "6697316a8cfb8d42be08fef1"
  },
  "id": "sMF",
  "name": "Iron Battering Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 200,
  "ramDefense": 92,
  "ramStrength": 1690,
  "ramSpeed": 1.4
},
{
  "_id": {
    "$oid": "6697319e8cfb8d42be08fef2"
  },
  "id": "erc",
  "name": "Iron Blade Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 400,
  "ramStrength": 1330,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669731b78cfb8d42be08fef3"
  },
  "id": "P87",
  "name": "Rugged Axe Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 250,
  "ramStrength": 925,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669731d18cfb8d42be08fef4"
  },
  "id": "S67",
  "name": "Iron Reinforced Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 100,
  "ramDefense": 368,
  "ramStrength": 970,
  "ramSpeed": 1.6
},
{
  "_id": {
    "$oid": "669732b48cfb8d42be08fef5"
  },
  "id": "ZRP",
  "name": "Iron Axe Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 400,
  "ramStrength": 1330,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669732d08cfb8d42be08fef6"
  },
  "id": "mbk",
  "name": "Rugged Blade Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 250,
  "ramStrength": 925,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669733058cfb8d42be08fef7"
  },
  "id": "YYt",
  "name": "Rugged Cleaving Ram ",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 125,
  "ramDefense": 57,
  "ramStrength": 1150,
  "ramSpeed": 1.4
},
{
  "_id": {
    "$oid": "6697331f8cfb8d42be08fef8"
  },
  "id": "2j2",
  "name": "Rugged Battering Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 125,
  "ramDefense": 57,
  "ramStrength": 1150,
  "ramSpeed": 1.4
},
{
  "_id": {
    "$oid": "669733368cfb8d42be08fef9"
  },
  "id": "ClS",
  "name": "Iron Cleaving Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 200,
  "ramDefense": 92,
  "ramStrength": 1690,
  "ramSpeed": 1.4
},
{
  "_id": {
    "$oid": "6697334e8cfb8d42be08fefa"
  },
  "id": "jdN",
  "name": "Rugged Spiked Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 125,
  "ramDefense": 115,
  "ramStrength": 925,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "6697337f8cfb8d42be08fefb"
  },
  "id": "t62",
  "name": "Reinforced Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Common",
  "imageId": "",
  "deleted": false,
  "durability": 62,
  "ramDefense": 230,
  "ramStrength": 700,
  "ramSpeed": 1.6
},
{
  "_id": {
    "$oid": "669733a48cfb8d42be08fefc"
  },
  "id": "ipc",
  "name": "Hammerhead Ram",
  "legend": "[plz fix]",
  "mainType": "Ram",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "durability": 600,
  "ramStrength": 2086,
  "ramSpeed": 1.7
},
{
  "_id": {
    "$oid": "669734a68cfb8d42be08fefd"
  },
  "id": "ZfS",
  "name": "Lesser Acid Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct acid magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1271,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669734c48cfb8d42be08fefe"
  },
  "id": "zoh",
  "name": "Lesser Arcanium Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct some magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1870,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669734dd8cfb8d42be08feff"
  },
  "id": "0mW",
  "name": "Lesser Ash Ram ",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct ash magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1256,
  "ramSpeed": 1.4
},
{
  "_id": {
    "$oid": "669734f38cfb8d42be08ff00"
  },
  "id": "qEc",
  "name": "Lesser Crystal Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct crystal magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1331,
  "ramSpeed": 1.4
},
{
  "_id": {
    "$oid": "669735148cfb8d42be08ff01"
  },
  "id": "EME",
  "name": "Lesser Earth Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct earth magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1944,
  "ramSpeed": 1.3
},
{
  "_id": {
    "$oid": "669735328cfb8d42be08ff02"
  },
  "id": "lcV",
  "name": "Lesser Explosion Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct explosion magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1301,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "6697354a8cfb8d42be08ff03"
  },
  "id": "R75",
  "name": "Lesser Fire Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct fire magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1241,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669735658cfb8d42be08ff04"
  },
  "id": "Xci",
  "name": "Lesser Glass Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct glass magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1271,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669735828cfb8d42be08ff05"
  },
  "id": "eS4",
  "name": "Lesser Ice Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct ice magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1316,
  "ramSpeed": 1.4
},
{
  "_id": {
    "$oid": "669735a88cfb8d42be08ff06"
  },
  "id": "N0n",
  "name": "Lesser Light Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct light magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1256,
  "ramSpeed": 1.8
},
{
  "_id": {
    "$oid": "669735bf8cfb8d42be08ff07"
  },
  "id": "BEg",
  "name": "Lesser Lightning Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct lightning magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1271,
  "ramSpeed": 1.7
},
{
  "_id": {
    "$oid": "669735d88cfb8d42be08ff08"
  },
  "id": "jqu",
  "name": "Lesser Magma Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct magma magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1286,
  "ramSpeed": 1.3
},
{
  "_id": {
    "$oid": "669735f48cfb8d42be08ff09"
  },
  "id": "98J",
  "name": "Lesser Metal Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct metal magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 2004,
  "ramSpeed": 1.2
},
{
  "_id": {
    "$oid": "6697360e8cfb8d42be08ff0a"
  },
  "id": "Du4",
  "name": "Lesser Plasma Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct plasma magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1226,
  "ramSpeed": 1.6
},
{
  "_id": {
    "$oid": "669736308cfb8d42be08ff0b"
  },
  "id": "eyK",
  "name": "Lesser Poison Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct poison magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1196,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "6697367c8cfb8d42be08ff0c"
  },
  "id": "nSv",
  "name": "Lesser Sand Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct sand magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1331,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "6697368f8cfb8d42be08ff0d"
  },
  "id": "4fu",
  "name": "Lesser Shadow Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct shadow magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1316,
  "ramSpeed": 1.6
},
{
  "_id": {
    "$oid": "669736a58cfb8d42be08ff0e"
  },
  "id": "W9L",
  "name": "Lesser Snow Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct snow magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1301,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669736b48cfb8d42be08ff0f"
  },
  "id": "Nb5",
  "name": "Lesser Water Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct water magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1301,
  "ramSpeed": 1.5
},
{
  "_id": {
    "$oid": "669736cc8cfb8d42be08ff10"
  },
  "id": "2Wa",
  "name": "Lesser Wind Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct wind magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1271,
  "ramSpeed": 1.7
},
{
  "_id": {
    "$oid": "669736dd8cfb8d42be08ff11"
  },
  "id": "lPJ",
  "name": "Lesser Wood Ram",
  "legend": "A basic ram made out of lesser arcanium metal, forged to conduct wood magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.",
  "mainType": "Ram",
  "rarity": "Uncommon",
  "imageId": "",
  "deleted": false,
  "durability": 225,
  "magicStorage": 360,
  "ramDefense": 103,
  "ramStrength": 1316,
  "ramSpeed": 1.4
},
{
  "_id": {
    "$oid": "6697383e8cfb8d42be08ff12"
  },
  "id": "Fwo",
  "name": "Redwake Warriors",
  "legend": "A group of trained warriors armed with shark-bone swords that you hired on Redwake in the Bronze Sea. They aren't the greatest crew, but they do their jobs well enough.",
  "mainType": "Ship Crew",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "stability": 5
},
{
  "_id": {
    "$oid": "669738588cfb8d42be08ff13"
  },
  "id": "bCd",
  "name": "Sailors",
  "legend": "A group of skilled sailors with cutlasses that you hired in Sailor's Lodge in the Bronze Sea. They aren't a particularly strong crew, but they have fair knowledge of the sea and the workings of a ship, increasing the strength of its sails and reinforcing the ship to take less damage when ramming.",
  "mainType": "Ship Crew",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "ramDefense": 300,
  "resilience": 10
},
{
  "_id": {
    "$oid": "669738788cfb8d42be08ff14"
  },
  "id": "Oag",
  "name": "Ravenna Deserters",
  "legend": "A batallion of former Bronze Legion warriors that you saved in the Shining Plains of Ravenna, in the Bronze Sea. They deserted the kingdom after being forced by their superiors to execute innocent people. They are a somewhat strong crew with scraps of armor and rugged weapons, and have fair knowledge of the sea and the workings of a ship.",
  "mainType": "Ship Crew",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 300,
  "resilience": 5
},
{
  "_id": {
    "$oid": "669738b18cfb8d42be08ff15"
  },
  "id": "RZw",
  "name": "+6% Stability",
  "legend": "lol",
  "mainType": "Deckhand",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "stability": 6
},
{
  "_id": {
    "$oid": "669738c48cfb8d42be08ff16"
  },
  "id": "IjV",
  "name": "+1050 Durability",
  "legend": "+1050 Durability",
  "mainType": "Deckhand",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 1050
},
{
  "_id": {
    "$oid": "669738cf8cfb8d42be08ff17"
  },
  "id": "uSS",
  "name": "+10 Turning Speed",
  "legend": "+10 Turning Speed",
  "mainType": "Deckhand",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "turning": 10
},
{
  "_id": {
    "$oid": "669738e08cfb8d42be08ff18"
  },
  "id": "ItZ",
  "name": "+9% Resilience",
  "legend": "+9% Resilience",
  "mainType": "Deckhand",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "resilience": 9
},
{
  "_id": {
    "$oid": "669738f08cfb8d42be08ff19"
  },
  "id": "JHF",
  "name": "+600 Ram Strength",
  "legend": "+600 Ram Strength",
  "mainType": "Deckhand",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "ramStrength": 600
},
{
  "_id": {
    "$oid": "669738fb8cfb8d42be08ff1a"
  },
  "id": "I4z",
  "name": "+300 Ram Defense",
  "legend": "+300 Ram Defense",
  "mainType": "Deckhand",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "ramDefense": 300
},
{
  "_id": {
    "$oid": "6697390a8cfb8d42be08ff1b"
  },
  "id": "zPX",
  "name": "+475 Magic Storage",
  "legend": "+475 Magic Storage",
  "mainType": "Deckhand",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "magicStorage": 475
},
{
  "_id": {
    "$oid": "66973d0b8cfb8d42be08ff1c"
  },
  "id": "rBU",
  "name": "Mortar",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -3,
  "damageMultiplier": 1.5,
  "rangeMultiplier": 1,
  "spreadMultiplier": 1,
  "fuseLength": 1,
  "reloadTime": 10
},
{
  "_id": {
    "$oid": "66973d218cfb8d42be08ff1d"
  },
  "id": "8GU",
  "name": "Heavy Mortars",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -5,
  "damageMultiplier": 1.7,
  "rangeMultiplier": 0.8,
  "spreadMultiplier": 1.5,
  "fuseLength": 1,
  "reloadTime": 12
},
{
  "_id": {
    "$oid": "66973d3f8cfb8d42be08ff1e"
  },
  "id": "sRl",
  "name": "Ruined Archaic Mortars",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -5,
  "damageMultiplier": 1.2,
  "rangeMultiplier": 0.8,
  "spreadMultiplier": 1.5,
  "fuseLength": 1,
  "reloadTime": 15
},
{
  "_id": {
    "$oid": "66973d568cfb8d42be08ff1f"
  },
  "id": "M2t",
  "name": "Howitzers",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -3,
  "damageMultiplier": 1.4,
  "rangeMultiplier": 2,
  "spreadMultiplier": 0.5,
  "fuseLength": 1,
  "reloadTime": 10
},
{
  "_id": {
    "$oid": "66973d728cfb8d42be08ff20"
  },
  "id": "I5M",
  "name": "Coehorns",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -1,
  "damageMultiplier": 1,
  "rangeMultiplier": 0.8,
  "spreadMultiplier": 0.5,
  "fuseLength": 0.5,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66973df18cfb8d42be08ff21"
  },
  "id": "a2s",
  "name": "Bronze Coehorns",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -1,
  "damageMultiplier": 1.2,
  "rangeMultiplier": 0.8,
  "spreadMultiplier": 0.5,
  "fuseLength": 0.5,
  "reloadTime": 5
},
{
  "_id": {
    "$oid": "66973e068cfb8d42be08ff22"
  },
  "id": "yDz",
  "name": "Bronze Mortars",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -3,
  "damageMultiplier": 1.7,
  "rangeMultiplier": 1,
  "spreadMultiplier": 1,
  "fuseLength": 1,
  "reloadTime": 10
},
{
  "_id": {
    "$oid": "66973e288cfb8d42be08ff23"
  },
  "id": "NTt",
  "name": "Heavy Bronze Mortars",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -5,
  "damageMultiplier": 2,
  "rangeMultiplier": 0.8,
  "spreadMultiplier": 1.5,
  "fuseLength": 1,
  "reloadTime": 12
},
{
  "_id": {
    "$oid": "66973e438cfb8d42be08ff24"
  },
  "id": "GEO",
  "name": "Bronze Howitzers",
  "legend": "[plz fix]",
  "mainType": "Siege Weapon",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "speed": -3,
  "damageMultiplier": 1.6,
  "rangeMultiplier": 2,
  "spreadMultiplier": 0.5,
  "fuseLength": 1,
  "reloadTime": 10
},
{
  "_id": {
    "$oid": "66b331d90b8cda8d71dc8d59"
  },
  "id": "t1G",
  "name": "Rowboat",
  "legend": "Robot Innit",
  "mainType": "Ship",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 350,
  "speed": 30,
  "stability": 10,
  "turning": 100,
  "hullArmorSlot": 1,
  "deckhandSlot": 1
},
{
  "_id": {
    "$oid": "66b3343a0b8cda8d71dc8d5a"
  },
  "id": "155",
  "name": "Saiboat",
  "legend": "Sailboat innit",
  "mainType": "Ship",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 1200,
  "resilience": 65,
  "speed": 50,
  "stability": 30,
  "turning": 80,
  "hullArmorSlot": 1,
  "cannonSlot": 1,
  "sailMaterialSlot": 1,
  "shipCrewSlot": 1,
  "deckhandSlot": 1,
  "quartermasterSlot": 1
},
{
  "_id": {
    "$oid": "66b3352d0b8cda8d71dc8d5b"
  },
  "id": "j9o",
  "name": "Caravel",
  "legend": "Craaaave",
  "mainType": "Ship",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 2500,
  "resilience": 65,
  "speed": 60,
  "stability": 45,
  "turning": 70,
  "hullArmorSlot": 1,
  "cannonSlot": 1,
  "sailMaterialSlot": 1,
  "shipCrewSlot": 1,
  "ramSlot": 1,
  "deckhandSlot": 2,
  "quartermasterSlot": 1
},
{
  "_id": {
    "$oid": "66b337300b8cda8d71dc8d5c"
  },
  "id": "yb7",
  "name": "Ketch",
  "legend": "gethc",
  "mainType": "Ship",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 4000,
  "resilience": 65,
  "speed": 70,
  "stability": 50,
  "turning": 50,
  "hullArmorSlot": 1,
  "cannonSlot": 1,
  "sailMaterialSlot": 1,
  "shipCrewSlot": 1,
  "deckhandSlot": 4,
  "quartermasterSlot": 2
},
{
  "_id": {
    "$oid": "66b3375a0b8cda8d71dc8d5d"
  },
  "id": "JuN",
  "name": "Brig",
  "legend": "briggy",
  "mainType": "Ship",
  "rarity": "None",
  "imageId": "",
  "deleted": false,
  "durability": 12000,
  "ramStrength": 1200,
  "resilience": 65,
  "speed": 75,
  "stability": 75,
  "turning": 50,
  "hullArmorSlot": 1,
  "cannonSlot": 1,
  "siegeWeaponSlot": 1,
  "sailMaterialSlot": 1,
  "shipCrewSlot": 1,
  "ramSlot": 1,
  "deckhandSlot": 4,
  "quartermasterSlot": 2
},
{
  "_id": {
    "$oid": "66a19c3724437bcc643fa229"
  },
  "id": "8fN",
  "name": "Abyssal",
  "legend": "Adds low defense and medium resistance for each 10 levels",
  "mainType": "Modifier",
  "rarity": "Rare",
  "imageId": "",
  "deleted": false,
  "defenseIncrement": 2.78571429,
  "resistanceIncrement": 1.57142857
}]
</script>
    
<Tabs.Root value="items" class="flex flex-col w-full h-screen h-max-screen p-5 align-top">
    <Tabs.List class="w-full">
        <Tabs.Trigger value="overview" class="w-full data-[state=active]:text-white">Overview</Tabs.Trigger>
        <Tabs.Trigger value="items" class="w-full data-[state=active]:text-white">Items</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="overview">
        <Card.Root class="h-full bg-neutral-900">
            <Card.Content class="h-full grid grid-cols-2 gap-5">
                <Card.Root class="h-full">
                    <Card.Header>
                        <Card.Title>Items</Card.Title>
                        <Card.Description>
                        Make changes to your account here. Click save when you're done.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content class="space-y-2">
                        <p>test</p>
                    </Card.Content>
                    <Card.Footer>
                        <p>testing</p>
                    </Card.Footer>
                </Card.Root>
                <Card.Root class="h-full">
                    <Card.Header>
                        <Card.Title>Stats</Card.Title>
                        <Card.Description>
                        Make changes to your account here. Click save when you're done.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content class="space-y-2">
                        <p>test</p>
                    </Card.Content>
                    <Card.Footer>
                        <p>testing</p>
                    </Card.Footer>
                </Card.Root>
            </Card.Content>
        </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="items" class="h-1/2 flex-grow">
        <Card.Root class="h-full bg-neutral-900">
            <Card.Content class="h-full">
                <div class="h-full flex flex-col">
                    <input class="mb-2 rounded p-1" placeholder="Search" />
                    <ScrollArea class="h-full flex-grow">
                        <div class="h-full flex flex-wrap justify-center">
                            {#each listItems as item}
                              <Dialog.Root>
                                <Dialog.Trigger class="flex flex-col m-1">
                                  <Card.Root class="border-0 rounded-none">
                                    <!--<Card.Header class="p-0 px-1 text-center">
                                        {item.name}
                                    </Card.Header>-->
                                    <Card.Content class="p-0 h-full">
                                      <img class="w-full" src={item.imageId} alt="Item" />
                                    </Card.Content>
                                  </Card.Root>
                                </Dialog.Trigger>

                                <Dialog.Content class="sm:max-w-[425px] bg-white">
                                  <Dialog.Header>
                                   <Dialog.Title><input value={item.name} /></Dialog.Title>
                                   <Dialog.Description>
                                    Make changes to your profile here. Click save when you're done.
                                   </Dialog.Description>
                                  </Dialog.Header>
                                  <div class="grid gap-4 py-4">
                                   <div class="grid grid-cols-4 items-center gap-4">
                                    <p>test1</p>
                                   </div>
                                   <div class="grid grid-cols-4 items-center gap-4">
                                    <p>test2</p>
                                   </div>
                                  </div>
                                  <Dialog.Footer>
                                    <Button>Sumbit</Button>
                                  </Dialog.Footer>
                                </Dialog.Content>
                              </Dialog.Root>
                            {/each}
                        </div>
                    </ScrollArea>
                </div>
            </Card.Content>
        </Card.Root>
    </Tabs.Content>
</Tabs.Root>