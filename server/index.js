const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
const port = 3000;

//mongodb database connection
mongoose
  .connect("mongodb://localhost:27017/dharati")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define a User schema
const User = mongoose.model("users", {
  username: String,
  email: String,
  password: String,
});

app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    let register = false;

    try {
      //register user detailse
      const user = User({ username, email, password });
      await user.save();
    } catch (error) {
      console.error(error);
    }

    register = true;

    res.json(register);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let login = false;

    const existingUser = await User.findOne({ username, email, password });

    if (existingUser) {
      login = true;
    } else {
      console.log(" user not exist");
    }
    res.json(login);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const catagories = [
  {
    Name: "Tomato",
    Category: "Vegetables",
    Src: "https://tse1.mm.bing.net/th?id=OIP.KrZ08nsOv-R0dHo5QV3RCgHaE8&pid=Api&rs=1&c=1&qlt=95&w=174&h=116",
    Description:
      "The tomato ( or) is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America. The Nahuatl word gave rise to the Spanish word, from which the English word tomato derives. Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.",
  },
  {
    Name: "potato",
    Category: "Vegetables",
    Src: "https://cdn.britannica.com/08/194708-050-56FF816A/potatoes.jpg",
    Description:
      "The potato is a starchy, tuberous crop from the perennial nightshade Solanum tuberosum.",
  },
  {
    Name: "onion",
    Category: "Vegetables",
    Src: "https://m.media-amazon.com/images/I/71GUFttn0jL._AC_UF1000,1000_QL80_.jpg",
    Description:
      "The onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.",
  },
  {
    Name: "carrot",
    Category: "Vegetables",
    Src: "https://static.toiimg.com/photo/105672842.cms",
    Description:
      "The carrot is a root vegetable, typically orange in color, though purple, black, red, white, and yellow cultivars exist.",
  },
  {
    Name: "broccoli",
    Category: "Vegetables",
    Src: "https://cdn.mos.cms.futurecdn.net/r8NK24bmcMgSib5zWKKQkW-1200-80.jpg",
    Description:
      "Broccoli is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head, stalk, and small associated leaves are eaten as a vegetable.",
  },
  {
    Name: "eggplant",
    Category: "Vegetables",
    Src: "https://www.producegrower.com/remote/aHR0cHM6Ly9naWVjZG4uYmxvYi5jb3JlLndpbmRvd3MubmV0L2ZpbGV1cGxvYWRzL3B1YmxpY2F0aW9ucy8zNS9pc3N1ZXMvMTA0MDUwL2FydGljbGVzL2ltYWdlcy9lZ2dwbGFudC1yZXNpemUucG5n.oej5-U1sQxg.png?w=948&h=533&format=webp&mode=pad&anchor=middlecenter&scale=both&bgcolor=F0F1F2",
    Description:
      "Eggplant, aubergine, or brinjal is a plant species in the nightshade family Solanaceae, Solanum melongena, grown for its often purple edible fruit.",
  },
  {
    Name: "peas",
    Category: "Vegetables",
    Src: "https://images.healthshots.com/healthshots/en/uploads/2021/08/23133154/Peas.jpg",
    Description:
      "Peas are small, round green seeds that come from pods produced by the Pisum sativum plant.",
  },
  {
    Name: "beetroot",
    Category: "Vegetables",
    Src: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/02/20130540/shutterstock_1282068550-1-4.jpg",
    Description:
      "The beetroot is the taproot portion of the beet plant, usually known in North America as the beet, and also known as the table beet, garden beet, red beet, dinner beet, or golden beet.",
  },
  {
    Name: "asparagus",
    Category: "Vegetables",
    Src: "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Asparagus-spears-57ba27e.jpg?quality=90&resize=440,400",
    Description:
      "Asparagus, or garden asparagus, folk name sparrow grass, scientific name Asparagus officinalis, is a perennial flowering plant species in the genus Asparagus.",
  },
  {
    Name: "apple",
    Category: "Trees",
    Src: "https://i.pinimg.com/736x/46/59/10/465910dfb32ce73e94f211582fd257cd.jpg",
    Description:
      "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple.",
  },
  {
    Name: "Mango",
    Category: "Trees",
    Src: "https://kadiyamnursery.com/cdn/shop/products/alphonso-mango-plant-ratnagiri-grafted-1-healthy-live-plant-kadiyam-nursery-3_1050x700.jpg?v=1662731278",
    Description:
      "Mango, botanically known as Mangifera indica, is a tropical fruit that belongs to the Anacardiaceae family.",
  },
  {
    Name: "guava",
    Category: "Trees",
    Src: "https://m.media-amazon.com/images/I/714q8hi9FwL._AC_UF1000,1000_QL80_.jpg",
    Description:
      "The guava is a sweet and fragrant fruit that belongs to the Myrtaceae family.",
  },
  {
    Name: "oranges",
    Category: "Trees",
    Src: "https://cdn.mos.cms.futurecdn.net/zrsvE4HDMQHj9TNMCPvRBW-1200-80.jpg",
    Description:
      "The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange.",
  },
  {
    Name: "neem",
    Category: "Trees",
    Src: "https://ezgrogarden.com/wp-content/uploads/2010/07/Neem-Tree1-1024x675.jpg",
    Description:
      "Neem is a tree in the mahogany family Meliaceae. It is native to the Indian subcontinent and most parts of the Indian Ocean territories. Neem is a fast-growing tree that can reach a height of up to 15–20 meters, rarely up to 35–40 meters. It is evergreen but can shed most of its leaves under dry conditions.",
  },
  {
    Name: "lemon",
    Category: "Trees",
    Src: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/a/02/a0260612-7fd8-5693-9373-33aca46ba4d3/56ea1f1fa59fa.image.jpg",
    Description:
      "The lemon, Citrus limon, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North Eastern India. The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, though the pulp and rind (zest) are also used in cooking and baking.",
  },
  {
    Name: "coconut",
    Category: "Trees",
    Src: "https://www.cocofina.com/cdn/shop/articles/Coconut_tree_2048x.jpg?v=1549888135",
    Description:
      "The coconut tree, Cocos nucifera, is a member of the palm tree family and the only known living species of the genus Cocos. The term 'coconut' can refer to the entire coconut palm, the seed, or the fruit, which botanically is a drupe, not a nut. The coconut is known for its great versatility as seen in the many uses of its different parts.",
  },
  {
    Name: "cocoa",
    Category: "Trees",
    Src: "https://m.media-amazon.com/images/I/81R1xuDH-pL._AC_UF1000,1000_QL80_.jpg",
    Description:
      "The cocoa tree, Theobroma cacao, is a small evergreen tree in the family Malvaceae, native to the deep tropical regions of Central and South America. Its seeds, cocoa beans, are used to make cocoa mass, cocoa powder, and chocolate.",
  },
  {
    Name: "custurdapple",
    Category: "Trees",
    Src: "https://5.imimg.com/data5/SELLER/Default/2021/2/KW/UJ/JL/47864737/grafted-custard-apple-plant.jpg",
    Description:
      "The custard apple, Annona reticulata, is a deciduous or semi-evergreen shrub or small tree native to the tropical Americas and West Indies. It is widely cultivated for its sweet and edible fruit, also called custard apple.",
  },
  {
    Name: "Christmas tree",
    Category: "Trees",
    Src: "https://abanahomes.com/wp-content/uploads/2022/09/christmas-tree-plant-1.png",
    Description:
      "A Christmas tree is a decorated tree, usually an evergreen conifer, such as a spruce, pine, or fir, or an artificial tree of similar appearance, associated with the celebration of Christmas, originating in Germany associated with Saint Boniface.",
  },
  {
    Name: "rose",
    Category: "Flowers",
    Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bridal_pink_-_morwell_rose_garden.jpg/640px-Bridal_pink_-_morwell_rose_garden.jpg",
    Description:
      "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.",
  },
  {
    Name: "lotus",
    Category: "Flowers",
    Src: "https://www.floraqueen.com/blog/wp-content/uploads/2020/01/shutterstock_1006750006.jpg",
    Description:
      "The lotus is a symbol of purity, enlightenment, self-regeneration, and rebirth in various cultures. It is a type of water lily that grows in ponds and lakes, emerging from the water each day to bloom.",
  },
  {
    Name: "jasmin",
    Category: "Flowers",
    Src: "https://www.thespruce.com/thmb/TolkPzwTIRAu5a2aUO8ZSAoimm8=/683x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1518339001-fc6c5847f258415ca36403be6e813d5d.jpg",
    Description:
      "Jasmine is a genus of shrubs and vines in the olive family. It contains around 200 species native to tropical and warm temperate regions of Eurasia, Australasia, and Oceania. Jasmines are widely cultivated for the characteristic fragrance of their flowers.",
  },
  {
    Name: "lily",
    Category: "Flowers",
    Src: "https://www.gardendesign.com/pictures/images/675x529Max/site_3/asiatic-lily-cappuccino-lily-creative-commons_11653.jpg",
    Description:
      "Lilies are a group of flowering plants that are important in culture and literature in much of the world. Most species are native to the temperate northern hemisphere, though their range extends into the northern subtropics.",
  },
  {
    Name: "daisy",
    Category: "Flowers",
    Src: "https://cdn.britannica.com/68/123068-050-00390894/Crown-daisy.jpg",
    Description:
      "Daisies are a diverse group of flowering plants in the Asteraceae family. They are characterized by the composite flower heads made up of many small florets, surrounded by ray florets.",
  },

  {
    Name: "orchid",
    Category: "Flowers",
    Src: "https://imgs.mongabay.com/wp-content/uploads/sites/30/2023/07/03103000/Foxtail_orchids_from_dandeli-e1688360454513.jpg",
    Description:
      "Orchids are a diverse and widespread family of flowering plants, with blooms that are often colorful and fragrant, commonly known as the orchid family. Orchids are easily distinguished from other plants, as they have a unique reproductive structure called a column. Orchids can be found in almost every habitat and are among the world's most diverse plant families, with over 28,000 species.",
  },
  {
    Name: "sunflower",
    Category: "Flowers",
    Src: "https://hips.hearstapps.com/hmg-prod/images/sunflowers-63fe51093f04d.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    Description:
      "The sunflower, Helianthus annuus, is an annual plant in the daisy family, native to the Americas. It has a large flowering head, typically with bright yellow ray florets around a central disk composed of many tiny flowers. Sunflowers are cultivated for their edible seeds, which are an important source of oil and food.",
  },
  {
    Name: "marigold",
    Category: "Flowers",
    Src: "https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg",
    Description:
      "Marigolds are annual flowering plants in the daisy family, native to Mexico and Central America. They are prized for their vibrant yellow, orange, and red flowers. Marigolds are often grown in gardens as ornamental plants and are also used in traditional medicine and as a natural pest repellent in agriculture.",
  },
  {
    Name: "poppy",
    Category: "Flowers",
    Src: "https://assets.highcountrygardens.com/media/catalog/product/p/a/papaver-orientale-brilliant-oriental-poppy.jpg?quality=85&fit=bounds&height=&width=3840&auto=webp&format=pjpg",
    Description:
      "Poppies are herbaceous plants in the Papaveraceae family, native to Europe, Asia, and North Africa. They are known for their colorful flowers, which can be red, orange, pink, yellow, or white. Poppies are cultivated for their ornamental value and also for their seeds, which are used in cooking and baking.",
  },
  {
    Name: "pansy",
    Category: "Flowers",
    Src: "https://m.media-amazon.com/images/I/51Cug2n6f7L._AC_UF1000,1000_QL80_.jpg",
    Description:
      "Pansies are hybrid flowers derived from several species in the Viola genus. They are known for their cheerful 'faces,' which feature a dark center and five distinct petals. Pansies are popular ornamental plants, valued for their bright colors and ability to bloom throughout the cooler months.",
  },
  {
    Name: "avocado",
    Category: "Fruits",
    Src: "https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg",
    Description:
      "The avocado, Persea americana, is a tree native to south-central Mexico, classified as a member of the flowering plant family Lauraceae. Avocado fruit varies in weight from 220 grams to 1.4 kilograms. The fruit is not sweet but distinctly and subtly flavored, with smooth texture. It is used in both savory and sweet dishes, including smoothies, sushi, salads, and desserts.",
  },
  {
    Name: "banana",
    Category: "Fruits",
    Src: "https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-99478112.jpg",
    Description:
      "The banana is an elongated, edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa. Bananas are among the most popular fruits in the world. They are cultivated in over 135 countries and are consumed by people of all ages and cultures.",
  },
  {
    Name: "Mango",
    Category: "Fruits",
    Src: "https://rukminim2.flixcart.com/image/850/1000/l16rde80/plant-sapling/a/1/w/no-annual-yes-glenn-grafted-mango-plant-1-exotica-glenn-original-imagcsh2gpnhwrk3.jpeg?q=90&crop=false",
    Description:
      "The mango, Mangifera indica, is a tropical fruit that belongs to the Anacardiaceae family. It is native to South Asia, where it has been cultivated for over 4,000 years. Mangoes are known for their sweet, juicy flesh and are consumed fresh or used in cooking, baking, and making beverages.",
  },
  {
    Name: "kiwi",
    Category: "Fruits",
    Src: "https://www.health.com/thmb/YjD1m861zN2cGF4q9bbeu6now64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Kiwi-a2e9888bfab6474f8d12d2ae0287b356.jpg",
    Description:
      "The kiwi, or kiwifruit, is the edible berry of several species of woody vines in the genus Actinidia. Kiwifruit is native to central and eastern China. The fruit has a fibrous, dull greenish-brown skin and bright green or golden flesh with rows of tiny, black, edible seeds. Kiwifruit is a rich source of vitamin C and dietary fiber.",
  },
  {
    Name: "oranges",
    Category: "Fruits",
    Src: "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png",
    Description:
      "The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange. Oranges are among the world's most popular fruits, grown in tropical and subtropical climates. They are known for their sweet, juicy flesh and high vitamin C content.",
  },
  {
    Name: "watermelon",
    Category: "Fruits",
    Src: " https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg?crop=1xw:0.84296xh;center,top&resize=1200:*",
    Description:
      "Watermelon, Citrullus lanatus, is a vine-like flowering plant originally from southern Africa. It is grown for its large edible fruit, also known as a watermelon, which is a special kind of berry with a hard rind and no internal divisions, botanically called a pepo. The sweet, juicy flesh of watermelon is typically deep red to pink, with many black seeds, although seedless varieties exist.",
  },
  {
    Name: "blueberry",
    Category: "Fruits",
    Src: "https://www.plantingtree.com/cdn/shop/products/misty-blueberry.jpg?v=1625073654",
    Description:
      "Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Blueberries are native to North America and are widely cultivated for their fruit, which is often consumed fresh or used in cooking and baking. They are known for their antioxidant properties and health benefits.",
  },
  {
    Name: "papaya",
    Category: "Fruits",
    Src: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/papaya-benefits-732x549-thumbnail.jpg",
    Description:
      "The papaya, Carica papaya, is a tropical fruit tree native to Mexico and northern South America. It is now cultivated in many tropical regions around the world. Papayas are known for their sweet, orange flesh and black seeds, which are edible but bitter. The fruit is commonly eaten fresh, juiced, or used in salads, desserts, and savory dishes.",
  },
  {
    Name: "strawberry",
    Category: "Fruits",
    Src: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2022/06/GRT-harvesting-strawberries-732x549-thumb-732x549.jpg",
    Description:
      "The strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. Strawberries are consumed in large quantities, either fresh or in prepared foods such as jam, juice, pies, ice cream, milkshakes, and chocolates.",
  },
  {
    Name: "holy basil",
    Category: "Herbs",
    Src: "http://t3.gstatic.com/images?q=tbn:ANd9GcQ3vYSjRVLtOxQ1je3_lPPPnUrhvQHkaMat7YM5xMxAaaljxnrF",
    Description:
      "Holy basil, also known as tulsi, is an aromatic perennial plant in the family Lamiaceae, native to the Indian subcontinent. It is widely revered in Hinduism and is considered a sacred plant. Holy basil is used in Ayurvedic medicine for its purported health benefits and is also used in cooking, teas, and essential oils.",
  },
  {
    Name: "dill",
    Category: "Herbs",
    Src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Illustration_Anethum_graveolens_clean.jpg",
    Description:
      "Dill, Anethum graveolens, is an annual herb in the celery family Apiaceae. It is native to Eurasia and is widely cultivated for its edible leaves and seeds. Dill is commonly used as a culinary herb, particularly in pickling and for flavoring fish, potatoes, soups, and salads.",
  },
  {
    Name: "mint",
    Category: "Herbs",
    Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mentha_piperita_-_Flickr_-_aspidoscelis_%281%29.jpg/250px-Mentha_piperita_-_Flickr_-_aspidoscelis_%281%29.jpg",
    Description:
      "Mint is a genus of plants in the family Lamiaceae. It is a herbaceous perennial known for its aromatic properties, with fresh, bright green leaves. Mint is used as a flavoring or garnish in various dishes, particularly in Middle Eastern, Mediterranean, Indian, and Southeast Asian cuisines.",
  },
  {
    Name: "fenugreek",
    Category: "Herbs",
    Src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clicbrics.com%2Fblog%2Fmedical-plants-at-home&psig=AOvVaw3kdsg1bLdRX1hF3tEgpmaG&ust=1711595365013000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDvj7a8k4UDFQAAAAAdAAAAABAY",
    Description:
      "Fenugreek is an annual plant in the family Fabaceae, with leaves consisting of three small obovate to oblong leaflets. It is cultivated worldwide as a semiarid crop. Its seeds and leaves are common ingredients in dishes from the Indian subcontinent. Fenugreek is known for its medicinal properties and is also used as a culinary spice and in traditional medicine.",
  },
  {
    Name: "coriander",
    Category: "Herbs",
    Src: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS-opjT9kGJHNEEwcKE_I1Ohq9zpsueDFH5IbvdEibn-7NtKiXUFf8Te2CM1eJhAUJh",
    Description:
      "Coriander, also known as cilantro or Chinese parsley, is an annual herb in the family Apiaceae. All parts of the plant are edible, but the fresh leaves and the dried seeds are most commonly used in cooking. Coriander is widely used in various cuisines, particularly in Asian, Middle Eastern, Mediterranean, Latin American, and Indian cuisines.",
  },
  {
    Name: "ginger",
    Category: "Herbs",
    Src: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqAWsSnUumAzgKrko7wrYtZHb1dYyhlN8wrnIAHwYUce0LEELkMI9y6-bhLwjfeHqo",
    Description:
      "Ginger is a flowering plant whose rhizome, ginger root, or simply ginger, is widely used as a spice and a folk medicine. It is a herbaceous perennial that grows annual pseudostems about one meter tall bearing narrow leaf blades. Ginger is a common ingredient in Asian, Indian, Caribbean, and Arabic cuisines, and it is used for its aromatic, spicy flavor and medicinal properties.",
  },
  {
    Name: "ashwagandha",
    Category: "Herbs",
    Src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIntC0zhGfvkcSV-u-_Dha7Q5Zr0i1DWqcIoXj4XHMUJoDde1",
    Description:
      "Ashwagandha, Withania somnifera, is an evergreen shrub native to India and North Africa. It is also known as Indian ginseng or winter cherry. Ashwagandha has a long history of use in traditional medicine, particularly in Ayurveda, where it is believed to promote vitality and longevity. It is used to reduce stress, improve cognitive function, and boost overall health.",
  },
  {
    Name: "turmeric",
    Category: "Herbs",
    Src: "http://t1.gstatic.com/images?q=tbn:ANd9GcR6SPppVEdbzGqRGBFrDmRsZ32wDk0TO2DhIKqqTUjfIRsBx6IsQMIT10KKReyQ-bLWgCsb",
    Description:
      "Turmeric, Curcuma longa, is a flowering plant of the ginger family, Zingiberaceae, native to the Indian subcontinent and Southeast Asia. It is widely cultivated for its rhizomes, which are used as a spice, dye, and in traditional medicine. Turmeric is known for its bright yellow color and warm, bitter taste. It is a key ingredient in many Indian and Southeast Asian dishes and is also valued for its potential health benefits.",
  },
  {
    Name: "aloe vera",
    Category: "Herbs",
    Src: "https://m-i7.fnp.com/assets/images/custom/articles/14-june-2019/aloe-vera-14-june-2019.jpg",
    Description:
      "Aloe vera is a succulent plant species of the genus Aloe, native to the Arabian Peninsula. It has been widely cultivated for centuries for its medicinal and cosmetic properties. Aloe vera gel, found in the inner part of the leaves, is used topically to soothe burns, moisturize skin, and treat various skin conditions. It is also consumed in juice form for its potential health benefits.",
  },
  {
    Name: "garlic",
    Category: "Herbs",
    Src: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRpR512TWrhheBzBDl1EEwngFofrco_ZpT7ELqePS4uFAF2KRdQhe1EHof7gseRvoIG",
    Description:
      "Garlic, Allium sativum, is a species in the onion genus, Allium. It is native to Central Asia and northeastern Iran and has long been a staple in Mediterranean, Asian, and African cuisines. Garlic is widely used for its pungent flavor as a seasoning or condiment and for its medicinal properties. It is believed to have various health benefits, including boosting the immune system and reducing the risk of heart disease.",
  },
];

app.get("/api/categories", (req, res) => {
  res.json(catagories);
});

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
