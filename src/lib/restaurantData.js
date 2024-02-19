export let restaurantData = [
  {
    id: 1,
    slug: "SantaClara",
    title: "Santa Clara",
    // title: "Kabab and Curry's\nSanta Clara",
    imageTitle: "Santa Clara",
    description: "Creating wonderful desi culinary\nmemories in popular Santa Clara",
    backgroundImageUrl: "/location/Santa-Clara.jpg",
    backgroundImageLandscapeUrl: "/location/Santa-Clara-Landscape.jpg",
    bannerBackgroundImageUrl: "/location/banner.jpg",
    mapAddress: "1498%20Isabella%20St,%20Santa%20Clara%20CA%2095050",
    overlayData: {
      backgroundImageUrl: "url(/location/Santa-Clara.jpg)",
      overlayTitle: "Opening Hours",
      column1TopText: "K&C Santa Clara",
      column1MiddleText: "1498 Isabella St, Santa Clara, CA 95050",
      column1BottomText: "(408) 247-0745",
      column2TopText: "Tuesday to Friday \n11:30 am to 10 pm",
      column2MiddleText: "",
      column2BottomText: "Weekends \n12 pm - 2:30 pm, 5:30 pm to 10:30 pm",
      email: "steph@curry.com",
      // timingOne: 'Tuesday - Thursday 11:30 AM - 2:30 PM, 5:30 PM - 10 PM',
      // timingTwo: 'Friday 11:30 AM - 2:30 PM, 5:30 PM - 10:30 PM',
      // timingThree: 'Weekends 11:30 AM - 3:00 PM, 5:30 PM - 10:30 PM',
    },
    menu: [
      {
        category: "Tandoori, From Clay Oven",
        src: "/MyImage.png",
        items: [
          {
            title: "Beef Seekh Kabab",
            description: "Tender minced beef, blended with aromatic herbs and spices, grilled the South Asian way.",
            cost: "$4.50",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chaat",
            description: "Lentil balls soaked in creamy yogurt with a host of tangy spices & served with chutney.",
            cost: "$9.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Barha (Half / Full)",
            description: "House-spiced chicken, marinated with classic South Asian flavors & traditional spices, cooked to perfection.",
            cost: "$16.00/$30.00",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Boti Kabab",
            description: "Boneless chicken cubes marinated in a blend of spices and grilled to preserve the South Asian tenderness.",
            cost: "$14.99",
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Seekh Kabab",
            description: "Succulent chicken mince, infused with spices, grilled on skewers over an open charcoal flame. ",
            cost: "$4.50",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Wing Masala",
            description: "Juicy chicken wings marinated in a variety of spices & cooked in a clay oven for maximum flavor.",
            cost: "$16.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Haray Bharay Kabab",
            description: "Delicious blend of green peas and potato packed onto a skewer and grilled to perfection for a mouthwatering delight.",
            cost: "$4.50",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Lamb Chops",
            description: "Tender lamb chops marinated in herbs and spices, cooked over an open grill to charcoaled perfection.",
            cost: "$17.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Malai Tikka",
            description: "Succulent cubes of chicken breast marinated in cream and skewered over a charcoal grill.",
            cost: "$16.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Murgh Malai",
            description: "Chicken marinated in creamy spices and grilled to smoky perfection for a mouthwatering taste.",
            cost: "$15.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mushroom Tikka",
            description: "Juicy mushrooms prepared in a clay oven after being marinated in spices & served with grilled vegetables",
            cost: "$14.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Salmon Tikka",
            description: " The Salmon Tikka is a perfect blend of smoky and Spicy Flavors",
            cost: "$19.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Samosa",
            description: "Crispy pastry stuffed with spiced vegetables or meat, served with chutney.",
            cost: "$1.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Chicken Breast",
            description: "Chicken breast piece soaked in homemade spices and cooked to satisfaction over a charcoal grill.",
            cost: "$7.50",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Chicken Leg",
            description: "A juicy leg quarter infused with house-made spices and grilled over charcoal for a traditional flavor.",
            cost: "$6.25",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Fish",
            description: "Succulent fish marinated in aromatic spices, grilled over charcoal & served with rice and special sauce.",
            cost: "$16.99",
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Shrimps",
            description: "Jumbo shrimp marinated in South Asian spices, grilled till smoked & served with rice and special sauce.",
            cost: "$16.99",
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tikka Paneer",
            description: "Cottage cheese cubes marinated in traditional spices, cooked in a clay oven & served piping hot.",
            cost: "$14.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Veggie Cutlet",
            description: "Spicy vegetable patty made with potatoes, carrots, and green peas. A South Asian special.",
            cost: "$7.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Lamb Delicacies",
        src: "/tandoori.jpg",
        image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/dinner-min-1-1024x256-1.jpg",
        items: [
          {
            title: "Lamb Korma",
            description: "Succulent pieces of lamb cooked in a rich, creamy sauce of yogurt, spices and onion gravy.",
            cost: "$14.25",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Saag Lamb",
            description: "Tender lamb chunks cooked together with spinach, topped off with butter to create the perfect blend of taste.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Lamb Stew",
            description: "A hearty and aromatic stew of tender lamb cooked with onions spices and simmered slowly to perfection.",
            cost: "$14.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Lamb Kadai",
            description: "Tender lamb cooked with fresh bell peppers, tomatoes, onions, and garlic in a tomato-based sauce.",
            cost: "$15.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Bhuna Gosht",
            description: "Tender lamb cooked in a tomato-based sauce with chili peppers and black pepper till rich and thick.",
            cost: "$15.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Beef Keema Aaloo",
            description: "A classic South Asian dish made with spiced minced beef and potatoes, evoking the warm, hearty feeling of home.",
            cost: "$14.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Lamb Nihaari",
            description: "Lamb nihaari is slow-cooked made with succulent lamb meat and blend of aromatic spices",
            cost: "$16.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Rogan Josh",
            description: "Lamb cooked in a creamy tomato gravy with a heady combination of intense spices, straight out of the Kashmir Valley.",
            cost: "$18.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Chicken Delicacies",
        src: "/chickenkarahi.jpg",
        items: [
          {
            title: "Chicken Tikka Masala",
            description: "Juicy grilled chicken cooked in a creamy tomato-based sauce with a blend of aromatic spices.",
            cost: "$14.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Butter Chicken",
            description: "Tender boneless chicken leg pieces marinated in spices & cooked in a tomato and onion sauce with cream.",
            cost: "$14.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Korma",
            description: "Tender chicken pieces cooked in a rich, creamy sauce with yogurt, onion gravy & aromatic spices.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Saag Chicken",
            description: "Tender chicken cooked in a creamy spinach sauce with a blend of aromatic spices.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Murgh Choley",
            description: "chicken cooked with chickpeas in a spicy tomato-based sauce infused with aromatic spices.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Kadai ",
            description: "Juicy chicken pieces cooked with bell peppers, onions, sautéed garlic & aromatic spices in a thick tomato-based sauce.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Achari Chicken",
            description: "Tender chicken marinated in a tangy blend of pickling spices prepared in an earthen clay pot.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Kofta",
            description: "Chicken kofta is a delicious and savory dish made with chicken, herbs, and spices, formed into balls and then grilled or baked to perfection.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chilli Chicken",
            description: "Crispy fried chicken cooked in a house-special batter & served with our signature sauce.",
            cost: "$17.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },

          {
            title: "CTM Sauce",
            description: "Creamy and flavorful sauce made with tomatoes, cream, and a variety of spices",
            cost: "$7.00",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "BTR Sauce",
            description: "",
            cost: "$7.00",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Vegetarian Delights",
        src: "/veggidelight.jpg",
        image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/mozzarella-1575066_1920.jpg",
        items: [
          {
            title: "Aaloo Palak",
            description: "Tender potatoes and spinach cooked in a creamy tomato and onion sauce with a blend of aromatic spices.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Aaloo Baigun",
            description: "Potatoes and eggplant come together in a wonderful mix of tomato and onion sauce to create a delicious veg offering.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Aaloo Gobi",
            description: "Fresh potatoes and cauliflower prepared in a creamy tomato and onion sauce. A vegetarian delight.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Aaloo Mutter",
            description: "The classic dish of potatoes and peas, made with our special blend of tomato and onion sauce.",
            cost: "$11.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Nav Ratan Korma",
            description: "The best of the vegetable kingdom comes together in this mixed dish that's equal parts exquisite and delicious.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Choley",
            description: "Chickpeas prepared in a tomato and onion sauce with a combination of aromatic spices. ",
            cost: "$11.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Daal Fry",
            description: "A lentil-based vegetarian dish with a crispy texture prepared with tomato and onions & sautéed with garlic.",
            cost: "$10.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Daal Makhni",
            description: "A creamy lentil-based vegetarian dish, slow-cooked with aromatic spices and finished with a touch of cream.",
            cost: "$11.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Bhindi Masala",
            description: "Okra cooked in a blend of spices with onions and tomatoes for a flavorful vegetarian dish.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Palak Paneer",
            description: "Cottage cheese cubes cooked in a creamy spinach sauce with a blend of aromatic spices.",
            cost: "$13.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Paneer Tikka Masala",
            description: "Homemade cottage cheese cooked in a creamy tomato-based sauce with sautéed bell peppers, onion and mushrooms.",
            cost: "$14.25",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mutter Paneer",
            description: "Mutter paneer is a creamy, flavorful vegetarian dish featuring soft paneer cheese ",
            cost: "$14.25",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mushroom Mutter",
            description: "Mushrooms, green peas and onions come together to create a veg dish that's a unique brand of delicious.",
            cost: "$14.25",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Kadee Pakoda",
            description: "Kadee Pakoda is a tangy and flavorful North Indian dish featuring deep-fried vegetable fritters in a yogurt-based sauce.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Baigun Bharta",
            description: "Baigun Bharta is a smoky and flavorful North Indian dish made with roasted eggplant and spices.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Palak",
            description: "A simple vegetarian dish made with creamy spinach and a blend of aromatic spices. Prepared using our special recipe.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Dum Biryaani",
        src: "/DumBiryani.jpg",
        items: [
          {
            title: "Lamb Biryaani",
            description: "Lamb pieces mixed with aromatic spices and rice, slow-cooked in a sealed pot till the flavor sets in.",
            cost: "$15.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Goat Biryaani",
            description: "A rich blend of rice, traditional spices and mutton that reaches perfection through a slow-cooking process.",
            cost: "$19.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Biryaani",
            description: "The classic biryani made with chicken cooked in layers of rice and flavor-filled spices. Slow-cooked to perfection within a sealed utensil.",
            cost: "$15.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "vegetable Biryaani",
            description: "Potatoes dominate this special mix of biryaani, prepared with the same blend of spices and rice.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Breads & Rice",
        src: "/bread.jpg",
        items: [
          {
            title: "Jeera Rice",
            description: "Basmati rice cooked the South Asian way with a unique blend of jeera and spices to complement any dish.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Naan",
            description: "The classic all-purpose flour flatbread of the South Asian region. A staple with most dishes.",
            cost: "$1.99",
            //Done,
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Butter Naan",
            description: "A butter-soaked version of the famous flatbread, adding more to any meal it's paired with.",
            cost: "$2.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Onion Naan",
            description: "Classic flatbread topped with chopped onions and baked in a traditional clay oven.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Garlic Naan",
            description: "A mouthwatering infusion of garlic paste & herbs dominate your food palette with this flatbread.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Qeema Naan",
            description: "A delicious naan bread stuffed with minced chicken and cooked to perfection in a traditional clay oven.",
            cost: "$6.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Beef Qeema Naan",
            description: "A delicious naan bread stuffed with minced beef and cooked to perfection in a traditional clay oven.",
            cost: "$6.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Paneer Naan",
            description: "Flatbread prepared with a generous helping of cottage cheese that melts in your mouth.",
            cost: "$5.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Roti",
            description: "Flatbread that is crispy on the outside while being soft and plump on the inside.",
            cost: "$2.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },

          {
            title: "Butter Roti",
            description: "A variation of the flatbread made with whole wheat flour and topped off by a brushing of melted butter.",
            cost: "$3.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Garlic Roti",
            description: "Whole wheat flatbread mixed with a fine garlic paste to complement any and every meal.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Onion Roti",
            description: "Classic whole wheat flatbread topped with chopped onions for a delicious crunch.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Paneer Roti",
            description: "A delicious flatbread that houses rich cottage cheese that is cooked to perfection.",
            cost: "$5.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Laccha Parantha",
            description: "Laccha Parantha is a delicious and flaky North Indian bread made with layers of dough and ghee.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Beverages",
        src: "/Beverages.jpg",
        items: [
          {
            title: "Mango Lassi",
            description: "A refreshing yogurt-based drink blended with fresh mango pulp for a sweet and tangy flavor.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Salt Lassi",
            description: "A refreshing yogurt-based drink blended with a pinch of salt and roasted cumin for a savory and refreshing taste.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Sweet Lassi",
            description: "A sweet and refreshing yogurt-based drink blended with sugar and flavored with rosewater or cardamom.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Soda Can",
            description: "Choose from our selection of carbonated drinks to quench your thirst.",
            cost: "$2.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mineral Bottled Water",
            description: "",
            //Done
            cost: "$3.00",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Sparkling Water (flavored / Non flavored)",
            description: "",
            cost: "$5.00",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Non-Alcoholic Beverages",
            description: "",
            cost: "$6.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tea / Chai",
            description: "A classic South Asian tea brewed with a blend of aromatic spices and served with milk and sugar.",
            cost: "$3.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Sides",
        src: "/sides.jpg",
        items: [
          {
            title: "Salad",
            description: "A variety of vegetables including tomatoes, cucumbers, onions, etc. that go great with many dishes.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Raita",
            description: "A yogurt-based condiment that is popular with everything from meat to rice dishes.",
            cost: "$2.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Pickle",
            description: "The traditional 'achaar' from South Asia prepared in oils & renowned for its unique tangy flavor.",
            cost: "$1.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Dessert",
        src: "/desert.jpg",
        items: [
          {
            title: "Gulab Jamun",
            description: "The classic South Asian dessert that's as regal as it is sweet. A delight for your taste buds.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Bread Pudding",
            description: "A well-loved dessert that's both delicious and comforting, our bread pudding is an absolute classic.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Fruit Custard",
            description: "Enjoy the taste of fresh fruits in a creamy custard made with heart. A treat for your palette.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Gajar Halwa",
            description: "Made from fresh carrots and the finest ingredients, this flavorful dessert leaves you with a warm feeling.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Kheer",
            description: "The staple dessert made from fresh dairy and topped off with a garnishing of pistachios.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mango Mousse",
            description: "An extravagant blend of fruity richness & creamy goodness, our mango mousse is pure bliss in a bowl.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Shahi Tukda",
            description: "A royal affair of bread, milk, nuts & more, no one should pass on this delectable dessert.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
    ],
    // menu: [
    //   {
    //     category: "Tandoori, From Clay Oven",
    //     src: "/MyImage.png",
    //     items: [
    //       {
    //         title: "Beef Seekh Kabab",
    //         description: "Tender minced beef, blended with aromatic herbs and spices, grilled the South Asian way.",
    //         cost: "$4.50",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Chaat",
    //         description: "Lentil balls soaked in creamy yogurt with a host of tangy spices & served with chutney.",
    //         cost: "$9.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Chicken Barha (Half/Full)",
    //         description: "House-spiced chicken, marinated with classic South Asian flavors & traditional spices, cooked to perfection.",
    //         cost: "$16.00/$30.00",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Chicken Boti Kabab",
    //         description: "Boneless chicken cubes marinated in a blend of spices and grilled to preserve the South Asian tenderness.",
    //         cost: "$14.99",
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Chicken Seekh Kabab",
    //         description: "Succulent chicken mince, infused with spices, grilled on skewers over an open charcoal flame. ",
    //         cost: "$4.50",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Lamb Chops",
    //         description: "Tender lamb chops marinated in herbs and spices, cooked over an open grill to charcoaled perfection.",
    //         cost: "$17.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Malai Tikka",
    //         description: "Succulent cubes of chicken breast marinated in cream and skewered over a charcoal grill.",
    //         cost: "$16.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Murgh Malai",
    //         description: "Chicken marinated in creamy spices and grilled to smoky perfection for a mouthwatering taste.",
    //         cost: "$15.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Mushroom Tikka",
    //         description: "Juicy mushrooms prepared in a clay oven after being marinated in spices & served with grilled vegetables",
    //         cost: "$14.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },

    //       {
    //         title: "Samosa",
    //         description: "Crispy pastry stuffed with spiced vegetables or meat, served with chutney.",
    //         cost: "$1.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Tandoori Chicken Breast",
    //         description: "Chicken breast piece soaked in homemade spices and cooked to satisfaction over a charcoal grill.",
    //         cost: "$7.50",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Tandoori Chicken Leg",
    //         description: "A juicy leg quarter infused with house-made spices and grilled over charcoal for a traditional flavor.",
    //         cost: "$6.25",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Tandoori Fish",
    //         description: "Succulent fish marinated in aromatic spices, grilled over charcoal & served with rice and special sauce.",
    //         cost: "$16.99",
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Tandoori Shrimps",
    //         description: "Jumbo shrimp marinated in South Asian spices, grilled till smoked & served with rice and special sauce.",
    //         cost: "$16.99",
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Tikka Paneer",
    //         description: "Cottage cheese cubes marinated in traditional spices, cooked in a clay oven & served piping hot.",
    //         cost: "$14.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Veggie Cutlet",
    //         description: "Spicy vegetable patty made with potatoes, carrots, and green peas. A South Asian special.",
    //         cost: "$7.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Lamb Delicacies",
    //     src: "/tandoori.jpg",
    //     image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/dinner-min-1-1024x256-1.jpg",
    //     items: [
    //       {
    //         title: "Lamb Korma",
    //         description: "Succulent pieces of lamb cooked in a rich, creamy sauce of yogurt, spices and onion gravy.",
    //         cost: "$14.25",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Saag Lamb",
    //         description: "Tender lamb chunks cooked together with spinach, topped off with butter to create the perfect blend of taste.",
    //         cost: "$15.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Lamb Stew",
    //         description: "A hearty and aromatic stew of tender lamb cooked with onions spices and simmered slowly to perfection.",
    //         cost: "$14.99",
    //         //Done
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Lamb Kadai",
    //         description: "Tender lamb cooked with fresh bell peppers, tomatoes, onions, and garlic in a tomato-based sauce.",
    //         cost: "$15.99",
    //         //Done
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Bhuna Gosht",
    //         description: "Tender lamb cooked in a tomato-based sauce with chili peppers and black pepper till rich and thick.",
    //         cost: "$15.99",
    //         //Done
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Beef Keema Aaloo",
    //         description: "A classic South Asian dish made with spiced minced lamb and potatoes, evoking the warm, hearty feeling of home.",
    //         cost: "$14.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Lamb Nihaari",
    //         description: "Lamb nihaari is slow-cooked made with succulent lamb meat and blend of aromatic spices",
    //         cost: "$16.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Rogan Rosh",
    //         description: "Lamb cooked in a creamy tomato gravy with a heady combination of intense spices, straight out of the Kashmir Valley.",
    //         cost: "$18.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Chicken Delicacies",
    //     src: "/chickenkarahi.jpg",
    //     items: [
    //       {
    //         title: "Chicken Tikka Masala",
    //         description: "Juicy grilled chicken cooked in a creamy tomato-based sauce with a blend of aromatic spices.",
    //         cost: "$14.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Butter Chicken",
    //         description: "Tender boneless chicken leg pieces marinated in spices & cooked in a tomato and onion sauce with cream.",
    //         cost: "$14.99",
    //         //Done
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Chicken Korma",
    //         description: "Tender chicken pieces cooked in a rich, creamy sauce with yogurt, onion gravy & aromatic spices.",
    //         cost: "$13.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Saag Chicken",
    //         description: "Tender chicken cooked in a creamy spinach sauce with a blend of aromatic spices.",
    //         cost: "$15.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Murgh Choley",
    //         description: "chicken cooked with chickpeas in a spicy tomato-based sauce infused with aromatic spices.",
    //         cost: "$15.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Chicken Kadai ",
    //         description: "Juicy chicken pieces cooked with bell peppers, onions, sautéed garlic & aromatic spices in a thick tomato-based sauce.",
    //         cost: "$15.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Achari Chicken",
    //         description: "Tender chicken marinated in a tangy blend of pickling spices prepared in an earthen clay pot.",
    //         cost: "$15.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },

    //       {
    //         title: "Chilli Chicken",
    //         description: "Crispy fried chicken cooked in a house-special batter & served with our signature sauce.",
    //         cost: "$17.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },

    //       {
    //         title: "CTM Sauce",
    //         description: "Creamy and flavorful sauce made with tomatoes, cream, and a variety of spices",
    //         cost: "$7.00",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "BTR Sauce",
    //         description: "",
    //         cost: "$7.00",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Vegetarian Delights",
    //     src: "/veggidelight.jpg",
    //     image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/mozzarella-1575066_1920.jpg",
    //     items: [
    //       {
    //         title: "Aaloo Palak",
    //         description: "Tender potatoes and spinach cooked in a creamy tomato and onion sauce with a blend of aromatic spices.",
    //         cost: "$12.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Aaloo Baigun",
    //         description: "Potatoes and eggplant come together in a wonderful mix of tomato and onion sauce to create a delicious veg offering.",
    //         cost: "$12.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Aaloo Gobi",
    //         description: "Fresh potatoes and cauliflower prepared in a creamy tomato and onion sauce. A vegetarian delight.",
    //         cost: "$12.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Aaloo Mutter",
    //         description: "The classic dish of potatoes and peas, made with our special blend of tomato and onion sauce.",
    //         cost: "$11.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Nav Ratan Korma",
    //         description: "The best of the vegetable kingdom comes together in this mixed dish that's equal parts exquisite and delicious.",
    //         cost: "$12.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Choley",
    //         description: "Chickpeas prepared in a tomato and onion sauce with a combination of aromatic spices. ",
    //         cost: "$11.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Daal Fry",
    //         description: "A lentil-based vegetarian dish with a crispy texture prepared with tomato and onions & sautéed with garlic.",
    //         cost: "$10.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Daal Makhni",
    //         description: "A creamy lentil-based vegetarian dish, slow-cooked with aromatic spices and finished with a touch of cream.",
    //         cost: "$11.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Bhindi Masala",
    //         description: "Okra cooked in a blend of spices with onions and tomatoes for a flavorful vegetarian dish.",
    //         cost: "$13.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Palak Paneer",
    //         description: "Cottage cheese cubes cooked in a creamy spinach sauce with a blend of aromatic spices.",
    //         cost: "$13.99",
    //         //Done
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Paneer Tikka Masala",
    //         description: "Homemade cottage cheese cooked in a creamy tomato-based sauce with sautéed bell peppers, onion and mushrooms.",
    //         cost: "$14.25",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Mutter Paneer",
    //         description: "Mutter paneer is a creamy, flavorful vegetarian dish featuring soft paneer cheese ",
    //         cost: "$14.25",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Mushroom mutter",
    //         description: "Mushrooms, green peas and onions come together to create a veg dish that's a unique brand of delicious.",
    //         cost: "$14.25",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Palak",
    //         description: "A simple vegetarian dish made with creamy spinach and a blend of aromatic spices. Prepared using our special recipe.",
    //         cost: "$13.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Dum Biryaani",
    //     src: "/DumBiryani.jpg",
    //     items: [
    //       {
    //         title: "Lamb Biryaani",
    //         description: "Lamb pieces mixed with aromatic spices and rice, slow-cooked in a sealed pot till the flavor sets in.",
    //         cost: "$15.99",
    //         //Done
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Chicken Biryaani",
    //         description: "The classic biryani made with chicken cooked in layers of rice and flavor-filled spices. Slow-cooked to perfection within a sealed utensil.",
    //         cost: "$15.99",
    //         //Done
    //         class: "large",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Breads & Rice",
    //     src: "/bread.jpg",
    //     items: [
    //       {
    //         title: "Jeera Rice",
    //         description: "Basmati rice cooked the South Asian way with a unique blend of jeera and spices to complement any dish.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Naan",
    //         description: "The classic all-purpose flour flatbread of the South Asian region. A staple with most dishes.",
    //         cost: "$1.99",
    //         //Done,
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Butter Naan",
    //         description: "A butter-soaked version of the famous flatbread, adding more to any meal it's paired with.",
    //         cost: "$2.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Onion Naan",
    //         description: "Classic flatbread topped with chopped onions and baked in a traditional clay oven.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Garlic Naan",
    //         description: "A mouthwatering infusion of garlic paste & herbs dominate your food palette with this flatbread.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Chicken Qeema Naan",
    //         description: "A delicious naan bread stuffed with minced chicken and cooked to perfection in a traditional clay oven.",
    //         cost: "$6.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Beef Qeema Naan",
    //         description: "A delicious naan bread stuffed with minced beef and cooked to perfection in a traditional clay oven.",
    //         cost: "$6.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Paneer Naan",
    //         description: "Flatbread prepared with a generous helping of cottage cheese that melts in your mouth.",
    //         cost: "$5.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Tandoori Roti",
    //         description: "Flatbread that is crispy on the outside while being soft and plump on the inside.",
    //         cost: "$2.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },

    //       {
    //         title: "Butter Roti",
    //         description: "A variation of the flatbread made with whole wheat flour and topped off by a brushing of melted butter.",
    //         cost: "$3.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Garlic Roti",
    //         description: "Whole wheat flatbread mixed with a fine garlic paste to complement any and every meal.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Onion Roti",
    //         description: "Classic whole wheat flatbread topped with chopped onions for a delicious crunch.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Paneer Roti",
    //         description: "A delicious flatbread that houses rich cottage cheese that is cooked to perfection.",
    //         cost: "$5.99",
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Laccha Parantha",
    //         description: "Laccha Parantha is a delicious and flaky North Indian bread made with layers of dough and ghee.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Beverages",
    //     src: "/Beverages.jpg",
    //     items: [
    //       {
    //         title: "Mango Lassi",
    //         description: "A refreshing yogurt-based drink blended with fresh mango pulp for a sweet and tangy flavor.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Salt Lassi",
    //         description: "A refreshing yogurt-based drink blended with a pinch of salt and roasted cumin for a savory and refreshing taste.",
    //         cost: "$4.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Sweet Lassi",
    //         description: "A sweet and refreshing yogurt-based drink blended with sugar and flavored with rosewater or cardamom.",
    //         cost: "$4.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Soda Can",
    //         description: "Choose from our selection of carbonated drinks to quench your thirst.",
    //         cost: "$2.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Mineral Bottled Water",
    //         description: "",
    //         //Done
    //         cost: "$3.00",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Sparkling Water (flavored/Non flavored)",
    //         description: "",
    //         cost: "$5.00",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Non-Alcoholic Beverages",
    //         description: "",
    //         cost: "$6.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Tea / Chai",
    //         description: "A classic South Asian tea brewed with a blend of aromatic spices and served with milk and sugar.",
    //         cost: "$3.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Sides",
    //     src: "/sides.jpg",
    //     items: [
    //       {
    //         title: "Salad",
    //         description: "A variety of vegetables including tomatoes, cucumbers, onions, etc. that go great with many dishes.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Raita",
    //         description: "A yogurt-based condiment that is popular with everything from meat to rice dishes.",
    //         cost: "$2.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Pickle",
    //         description: "The traditional 'achaar' from South Asia prepared in oils & renowned for its unique tangy flavor.",
    //         cost: "$1.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Dessert",
    //     src: "/desert.jpg",
    //     items: [
    //       {
    //         title: "Gulab Jamun",
    //         description: "The classic South Asian dessert that's as regal as it is sweet. A delight for your taste buds.",
    //         cost: "$4.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Bread Pudding",
    //         description: "A well-loved dessert that's both delicious and comforting, our bread pudding is an absolute classic.",
    //         cost: "$4.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Fruit Custard",
    //         description: "Enjoy the taste of fresh fruits in a creamy custard made with heart. A treat for your palette.",
    //         cost: "$4.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Gajar Halwa",
    //         description: "Made from fresh carrots and the finest ingredients, this flavorful dessert leaves you with a warm feeling.",
    //         cost: "$4.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Kheer",
    //         description: "The staple dessert made from fresh dairy and topped off with a garnishing of pistachios.",
    //         cost: "$4.50",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Mango Mousse",
    //         description: "An extravagant blend of fruity richness & creamy goodness, our mango mousse is pure bliss in a bowl.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //       {
    //         title: "Shahi Tukda",
    //         description: "A royal affair of bread, milk, nuts & more, no one should pass on this delectable dessert.",
    //         cost: "$4.99",
    //         //Done
    //         class: "small",
    //         img: " /location/deliveryCourier.png",
    //         src: " /location/cutlery.png",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 2,
    slug: "Cupertino",
    title: "Cupertino",
    // title: "Kabab and Curry\nCupertino - Coming Soon",
    imageTitle: "Cupertino",
    description: "Creating wonderful desi culinary\nmemories in popular Cupertino",
    backgroundImageUrl: "/location/Cupertino.jpg",
    backgroundImageLandscapeUrl: "/location/Cupertino-Landscape.jpg",
    bannerBackgroundImageUrl: "/location/banner.jpg",
    mapAddress: "20007%20Stevens%20Creek%20Blvd,%20Cupertino%20CA%2095014",
    overlayData: {
      backgroundImageUrl: "url(/location/overlay-banner.jpg)",
      overlayTitle: "Opening Hours",
      column1TopText: "K&C Cupertino",
      column1MiddleText: "20007 Stevens Creek Blvd, Cupertino, CA 95014",
      column1BottomText: "",
      column2TopText: "Monday to Friday \n11 am - 11 pm",
      column2MiddleText: "",
      column2BottomText: "Weekends \n11 am - 12 am",
      email: "steph@curry.com",
      // timingOne: 'Tuesday - Thursday 11:30 AM - 2:30 PM, 5:30 PM - 10 PM',
      // timingTwo: 'Friday 11:30 AM - 2:30 PM, 5:30 PM - 10:30 PM',
      // timingThree: 'Weekends 11:30 AM - 3:00 PM, 5:30 PM - 10:30 PM',
    },
    menu: [
      {
        category: "Tandoori, From Clay Oven",
        src: "/MyImage.png",
        items: [
          {
            title: "Beef Seekh Kabab",
            description: "Tender minced beef, blended with aromatic herbs and spices, grilled the South Asian way.",
            cost: "$4.50",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chaat",
            description: "Lentil balls soaked in creamy yogurt with a host of tangy spices & served with chutney.",
            cost: "$9.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Barha (Half / Full)",
            description: "House-spiced chicken, marinated with classic South Asian flavors & traditional spices, cooked to perfection.",
            cost: "$16.00/$30.00",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Boti Kabab",
            description: "Boneless chicken cubes marinated in a blend of spices and grilled to preserve the South Asian tenderness.",
            cost: "$14.99",
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Seekh Kabab",
            description: "Succulent chicken mince, infused with spices, grilled on skewers over an open charcoal flame. ",
            cost: "$4.50",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Wing Masala",
            description: "Juicy chicken wings marinated in a variety of spices & cooked in a clay oven for maximum flavor.",
            cost: "$16.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Haray Bharay Kabab",
            description: "Delicious blend of green peas and potato packed onto a skewer and grilled to perfection for a mouthwatering delight.",
            cost: "$4.50",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Lamb Chops",
            description: "Tender lamb chops marinated in herbs and spices, cooked over an open grill to charcoaled perfection.",
            cost: "$17.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Malai Tikka",
            description: "Succulent cubes of chicken breast marinated in cream and skewered over a charcoal grill.",
            cost: "$16.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Murgh Malai",
            description: "Chicken marinated in creamy spices and grilled to smoky perfection for a mouthwatering taste.",
            cost: "$15.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mushroom Tikka",
            description: "Juicy mushrooms prepared in a clay oven after being marinated in spices & served with grilled vegetables",
            cost: "$14.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Salmon Tikka",
            description: " The Salmon Tikka is a perfect blend of smoky and Spicy Flavors",
            cost: "$19.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Samosa",
            description: "Crispy pastry stuffed with spiced vegetables or meat, served with chutney.",
            cost: "$1.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Chicken Breast",
            description: "Chicken breast piece soaked in homemade spices and cooked to satisfaction over a charcoal grill.",
            cost: "$7.50",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Chicken Leg",
            description: "A juicy leg quarter infused with house-made spices and grilled over charcoal for a traditional flavor.",
            cost: "$6.25",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Fish",
            description: "Succulent fish marinated in aromatic spices, grilled over charcoal & served with rice and special sauce.",
            cost: "$16.99",
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Shrimps",
            description: "Jumbo shrimp marinated in South Asian spices, grilled till smoked & served with rice and special sauce.",
            cost: "$16.99",
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tikka Paneer",
            description: "Cottage cheese cubes marinated in traditional spices, cooked in a clay oven & served piping hot.",
            cost: "$14.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Veggie Cutlet",
            description: "Spicy vegetable patty made with potatoes, carrots, and green peas. A South Asian special.",
            cost: "$7.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Lamb Delicacies",
        src: "/tandoori.jpg",
        image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/dinner-min-1-1024x256-1.jpg",
        items: [
          {
            title: "Lamb Korma",
            description: "Succulent pieces of lamb cooked in a rich, creamy sauce of yogurt, spices and onion gravy.",
            cost: "$14.25",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Saag Lamb",
            description: "Tender lamb chunks cooked together with spinach, topped off with butter to create the perfect blend of taste.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Lamb Stew",
            description: "A hearty and aromatic stew of tender lamb cooked with onions spices and simmered slowly to perfection.",
            cost: "$14.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Lamb Kadai",
            description: "Tender lamb cooked with fresh bell peppers, tomatoes, onions, and garlic in a tomato-based sauce.",
            cost: "$15.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Bhuna Gosht",
            description: "Tender lamb cooked in a tomato-based sauce with chili peppers and black pepper till rich and thick.",
            cost: "$15.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Beef Keema Aaloo",
            description: "A classic South Asian dish made with spiced minced beef and potatoes, evoking the warm, hearty feeling of home.",
            cost: "$14.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Lamb Nihaari",
            description: "Lamb nihaari is slow-cooked made with succulent lamb meat and blend of aromatic spices",
            cost: "$16.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Rogan Josh",
            description: "Lamb cooked in a creamy tomato gravy with a heady combination of intense spices, straight out of the Kashmir Valley.",
            cost: "$18.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Chicken Delicacies",
        src: "/chickenkarahi.jpg",
        items: [
          {
            title: "Chicken Tikka Masala",
            description: "Juicy grilled chicken cooked in a creamy tomato-based sauce with a blend of aromatic spices.",
            cost: "$14.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Butter Chicken",
            description: "Tender boneless chicken leg pieces marinated in spices & cooked in a tomato and onion sauce with cream.",
            cost: "$14.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Korma",
            description: "Tender chicken pieces cooked in a rich, creamy sauce with yogurt, onion gravy & aromatic spices.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Saag Chicken",
            description: "Tender chicken cooked in a creamy spinach sauce with a blend of aromatic spices.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Murgh Choley",
            description: "chicken cooked with chickpeas in a spicy tomato-based sauce infused with aromatic spices.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Kadai ",
            description: "Juicy chicken pieces cooked with bell peppers, onions, sautéed garlic & aromatic spices in a thick tomato-based sauce.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Achari Chicken",
            description: "Tender chicken marinated in a tangy blend of pickling spices prepared in an earthen clay pot.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Kofta",
            description: "Chicken kofta is a delicious and savory dish made with chicken, herbs, and spices, formed into balls and then grilled or baked to perfection.",
            cost: "$15.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chilli Chicken",
            description: "Crispy fried chicken cooked in a house-special batter & served with our signature sauce.",
            cost: "$17.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },

          {
            title: "CTM Sauce",
            description: "Creamy and flavorful sauce made with tomatoes, cream, and a variety of spices",
            cost: "$7.00",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "BTR Sauce",
            description: "",
            cost: "$7.00",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Vegetarian Delights",
        src: "/veggidelight.jpg",
        image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/mozzarella-1575066_1920.jpg",
        items: [
          {
            title: "Aaloo Palak",
            description: "Tender potatoes and spinach cooked in a creamy tomato and onion sauce with a blend of aromatic spices.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Aaloo Baigun",
            description: "Potatoes and eggplant come together in a wonderful mix of tomato and onion sauce to create a delicious veg offering.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Aaloo Gobi",
            description: "Fresh potatoes and cauliflower prepared in a creamy tomato and onion sauce. A vegetarian delight.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Aaloo Mutter",
            description: "The classic dish of potatoes and peas, made with our special blend of tomato and onion sauce.",
            cost: "$11.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Nav Ratan Korma",
            description: "The best of the vegetable kingdom comes together in this mixed dish that's equal parts exquisite and delicious.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Choley",
            description: "Chickpeas prepared in a tomato and onion sauce with a combination of aromatic spices. ",
            cost: "$11.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Daal Fry",
            description: "A lentil-based vegetarian dish with a crispy texture prepared with tomato and onions & sautéed with garlic.",
            cost: "$10.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Daal Makhni",
            description: "A creamy lentil-based vegetarian dish, slow-cooked with aromatic spices and finished with a touch of cream.",
            cost: "$11.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Bhindi Masala",
            description: "Okra cooked in a blend of spices with onions and tomatoes for a flavorful vegetarian dish.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Palak Paneer",
            description: "Cottage cheese cubes cooked in a creamy spinach sauce with a blend of aromatic spices.",
            cost: "$13.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Paneer Tikka Masala",
            description: "Homemade cottage cheese cooked in a creamy tomato-based sauce with sautéed bell peppers, onion and mushrooms.",
            cost: "$14.25",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mutter Paneer",
            description: "Mutter paneer is a creamy, flavorful vegetarian dish featuring soft paneer cheese ",
            cost: "$14.25",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mushroom Mutter",
            description: "Mushrooms, green peas and onions come together to create a veg dish that's a unique brand of delicious.",
            cost: "$14.25",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Kadee Pakoda",
            description: "Kadee Pakoda is a tangy and flavorful North Indian dish featuring deep-fried vegetable fritters in a yogurt-based sauce.",
            cost: "$12.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Baigun Bharta",
            description: "Baigun Bharta is a smoky and flavorful North Indian dish made with roasted eggplant and spices.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Palak",
            description: "A simple vegetarian dish made with creamy spinach and a blend of aromatic spices. Prepared using our special recipe.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Dum Biryaani",
        src: "/DumBiryani.jpg",
        items: [
          {
            title: "Lamb Biryaani",
            description: "Lamb pieces mixed with aromatic spices and rice, slow-cooked in a sealed pot till the flavor sets in.",
            cost: "$15.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Goat Biryaani",
            description: "A rich blend of rice, traditional spices and mutton that reaches perfection through a slow-cooking process.",
            cost: "$19.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Biryaani",
            description: "The classic biryani made with chicken cooked in layers of rice and flavor-filled spices. Slow-cooked to perfection within a sealed utensil.",
            cost: "$15.99",
            //Done
            class: "large",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "vegetable Biryaani",
            description: "Potatoes dominate this special mix of biryaani, prepared with the same blend of spices and rice.",
            cost: "$13.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Breads & Rice",
        src: "/bread.jpg",
        items: [
          {
            title: "Jeera Rice",
            description: "Basmati rice cooked the South Asian way with a unique blend of jeera and spices to complement any dish.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Naan",
            description: "The classic all-purpose flour flatbread of the South Asian region. A staple with most dishes.",
            cost: "$1.99",
            //Done,
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Butter Naan",
            description: "A butter-soaked version of the famous flatbread, adding more to any meal it's paired with.",
            cost: "$2.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Onion Naan",
            description: "Classic flatbread topped with chopped onions and baked in a traditional clay oven.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Garlic Naan",
            description: "A mouthwatering infusion of garlic paste & herbs dominate your food palette with this flatbread.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Chicken Qeema Naan",
            description: "A delicious naan bread stuffed with minced chicken and cooked to perfection in a traditional clay oven.",
            cost: "$6.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Beef Qeema Naan",
            description: "A delicious naan bread stuffed with minced beef and cooked to perfection in a traditional clay oven.",
            cost: "$6.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Paneer Naan",
            description: "Flatbread prepared with a generous helping of cottage cheese that melts in your mouth.",
            cost: "$5.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tandoori Roti",
            description: "Flatbread that is crispy on the outside while being soft and plump on the inside.",
            cost: "$2.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },

          {
            title: "Butter Roti",
            description: "A variation of the flatbread made with whole wheat flour and topped off by a brushing of melted butter.",
            cost: "$3.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Garlic Roti",
            description: "Whole wheat flatbread mixed with a fine garlic paste to complement any and every meal.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Onion Roti",
            description: "Classic whole wheat flatbread topped with chopped onions for a delicious crunch.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Paneer Roti",
            description: "A delicious flatbread that houses rich cottage cheese that is cooked to perfection.",
            cost: "$5.99",
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Laccha Parantha",
            description: "Laccha Parantha is a delicious and flaky North Indian bread made with layers of dough and ghee.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Beverages",
        src: "/Beverages.jpg",
        items: [
          {
            title: "Mango Lassi",
            description: "A refreshing yogurt-based drink blended with fresh mango pulp for a sweet and tangy flavor.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Salt Lassi",
            description: "A refreshing yogurt-based drink blended with a pinch of salt and roasted cumin for a savory and refreshing taste.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Sweet Lassi",
            description: "A sweet and refreshing yogurt-based drink blended with sugar and flavored with rosewater or cardamom.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Soda Can",
            description: "Choose from our selection of carbonated drinks to quench your thirst.",
            cost: "$2.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mineral Bottled Water",
            description: "",
            //Done
            cost: "$3.00",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Sparkling Water (flavored / Non flavored)",
            description: "",
            cost: "$5.00",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Non-Alcoholic Beverages",
            description: "",
            cost: "$6.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Tea / Chai",
            description: "A classic South Asian tea brewed with a blend of aromatic spices and served with milk and sugar.",
            cost: "$3.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Sides",
        src: "/sides.jpg",
        items: [
          {
            title: "Salad",
            description: "A variety of vegetables including tomatoes, cucumbers, onions, etc. that go great with many dishes.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Raita",
            description: "A yogurt-based condiment that is popular with everything from meat to rice dishes.",
            cost: "$2.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Pickle",
            description: "The traditional 'achaar' from South Asia prepared in oils & renowned for its unique tangy flavor.",
            cost: "$1.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
      {
        category: "Dessert",
        src: "/desert.jpg",
        items: [
          {
            title: "Gulab Jamun",
            description: "The classic South Asian dessert that's as regal as it is sweet. A delight for your taste buds.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Bread Pudding",
            description: "A well-loved dessert that's both delicious and comforting, our bread pudding is an absolute classic.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Fruit Custard",
            description: "Enjoy the taste of fresh fruits in a creamy custard made with heart. A treat for your palette.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Gajar Halwa",
            description: "Made from fresh carrots and the finest ingredients, this flavorful dessert leaves you with a warm feeling.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Kheer",
            description: "The staple dessert made from fresh dairy and topped off with a garnishing of pistachios.",
            cost: "$4.50",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Mango Mousse",
            description: "An extravagant blend of fruity richness & creamy goodness, our mango mousse is pure bliss in a bowl.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
          {
            title: "Shahi Tukda",
            description: "A royal affair of bread, milk, nuts & more, no one should pass on this delectable dessert.",
            cost: "$4.99",
            //Done
            class: "small",
            img: " /location/deliveryCourier.png",
            src: " /location/cutlery.png",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    // slug: "",
    slug: "MCA",
    title: "MCA",
    // title: "Kabab and Curry\nMCA",
    imageTitle: "MCA",
    description: "Creating wonderful desi culinary\nmemories in popular MCA",
    backgroundImageUrl: "/location/MCA.jpg",
    backgroundImageLandscapeUrl: "/location/MCA-Landscape.jpg",
    bannerBackgroundImageUrl: "/location/banner.jpg",
    mapAddress: "3303%20Scott%20Blvd,%20Santa%20Clara,%20CA%2095054",
    overlayData: {
      backgroundImageUrl: "url(/location/overlay-banner.jpg)",
      overlayTitle: "Opening Hours",
      column1TopText: "K&C MCA",
      column1MiddleText: "3003 Scott Blvd, Santa Clara, CA 95054",
      column1BottomText: "",
      column2TopText: "Monday to Friday \n11 am - 11 pm",
      column2MiddleText: "",
      column2BottomText: "Weekends \n11 am - 12 am",
      email: "steph@curry.com",
      timingOne: "Monday - Thursday 11:30 AM - 10:00 PM",
      timingTwo: "Friday 11:30 AM - 2:30 PM, 5:30 PM - 10:30 PM",
      timingThree: "Weekends Noon - 2:30 PM, 5:30 PM - 10:30 PM",
    },
    menu: [
      {
        category: "Tandoori",
        items: [
          {
            title: "Chicken Barha (Half/Full)",
            description: "Chicken marinated in special house spices.",
            cost: "$16.00/$30.00",
          },
          {
            title: "Chicken Leg Quarter",
            description: "Leg quarter marinated in our homemade spices and baked over grill.",
            cost: "$6.25",
          },
          {
            title: "Chicken Breast Quarter",
            description: "Breast quarter with wing marinated in homemade spices and baked over Charcoal. ",
            cost: "$7.50",
          },
          {
            title: "Seekh Kabab Beef",
            description: "Beef minced along with spices and cooked on a skewer over charcoal.",
            cost: "$4.50",
          },
          {
            title: "Seekh Kabab Chicken",
            description: "Chicken minced with our spices and cooked on a skewer over charcoal. ",
            cost: "$4.50",
          },
          {
            title: "Chicken Boti Kabab",
            description: "Boneless breast of chicken cut into small bite size cubes abd marinated in spices and cooked over charcoal.",
            cost: "$14.99",
          },
          {
            title: "Tandoori Fish",
            description: "Fillet of sol marinated with spices bakes over charcoal and served with some rice and sauce over it. ",
            cost: "$16.99",
          },
          {
            title: "Tandoori Shrimps",
            description: "Imported shrimps marinated in spiced and baked over charcoal served with rice and sauce over it. ",
            cost: "$16.99",
          },

          {
            title: "Lamb Chops",
            description: "Tender pieces of lamb chops marinated in spices and baked over charcoal.",
            cost: "$17.99",
          },
          {
            title: "Chicken Wing Masal",
            description: "Chicken wings marinated and cooked in a clay oven",
            cost: "$16.99",
          },
          {
            title: "Malai Tikka Kabab",
            description: "Cubes of chicken breast marinated and served with onion and bell pepper",
            cost: "$16.99",
          },
          {
            title: "Murgh Malai",
            description: "",
            cost: "$15.99",
          },
          {
            title: "Paneer Tikka",
            description: "Chunks of Paneer marinated in spices and grilled in a Tandoor.",
            cost: "$14.99",
          },
          {
            title: "Mushroom Tikka",
            description: "Marinated Mushroom with grilled vegetables.",
            cost: "$14.99",
          },
          {
            title: "Haray Bharay Kabab",
            description: "Kababs made with green peas and potatoes in a tandoori oven",
            cost: "$4.50",
          },
          {
            title: "Samosa",
            description: "",
            cost: "$1.99",
          },
          {
            title: "Daahi Bhalle/Papri Chat/Bhalle Papri",
            description: "Lentil ball soaked in yogurt and chutney",
            cost: "$9.99",
          },
          {
            title: "Veggie Cutlet",
            description: "",
            cost: "$7.99",
          },
        ],
      },
      {
        category: "Lamb and Goat",
        image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/dinner-min-1-1024x256-1.jpg",
        items: [
          {
            title: "Lamb Korma",
            description: "Traditional Curry cooked with yogurt and onion gravy.",
            cost: "$14.25",
          },
          {
            title: "Saag Lamb",
            description: "Spinach cooked along with lamb gaves best of both worlds veg. and non-veg. ",
            cost: "$15.99",
          },
          {
            title: "Lamb Stew",
            description: "Lamb cooked with onions spices and simmered slowly over couple of hours to make it very tender and flavorful.",
            cost: "$14.99",
          },
          {
            title: "Lamb Kadai",
            description: "Traditional sauce of Pakistan Pathans. Lamb cooked in tomato sauce along with fresh bell peppers tomatoes and onion with finally sauté with fresh chopped garlic.  ",
            cost: "$15.99",
          },
          {
            title: "Bhuna Gosht",
            description: "Lamb cooked mostly using tomato base with chili peppers, black pepper and cooked until tomatoes becomes a thick paste.",
            cost: "$15.99",
          },
          {
            title: "Beef Keema Aaloo",
            description: "Minced beef cooked with potatoes.",
            cost: "$14.99",
          },
          {
            title: "Goat Rogan Rosh",
            description: "Aromatic curried meat dish originating from Kashmir.",
            cost: "$18.99",
          },
        ],
      },
      {
        category: "Chicken Curry's",
        items: [
          {
            title: "Achari Chicken",
            description: "Chicken with house special spices",
            cost: "$15.99",
          },
          {
            title: "Chikcen Tikka Masala",
            description: "BBQ Chicken Breat cooked in onion tomato's and cream.",
            cost: "$14.99",
          },
          {
            title: "Butter Chicken",
            description: "Boneless pieces of chicken leg marinated in spices; baked over charcoal and then cooked in onion & tomato sauces along with cream for smooth texture. ",
            cost: "$14.99",
          },
          {
            title: "Chicken Korma",
            description: "More traditional curry using chicken meat with bones cooked in yogurt and onion gravy.",
            cost: "$13.99",
          },
          {
            title: "Saag Chicken",
            description: "Spinach cooked with chicken given best of both worlds veg. and non-veg. ",
            cost: "$15.99",
          },
          {
            title: "Murgh Choley",
            description: "Garbanzo beans and chicken cooked using tomato and onion sauce.",
            cost: "$15.99",
          },
          {
            title: "Kadai Chicken",
            description: "Chicken cooked in tomato with bell peppers and onion and sauted garlic",
            cost: "$15.99",
          },
          {
            title: "Chilli Chicken",
            description: "Bonless thigh cooked house special batter and sauce.",
            cost: "$17.99",
          },
        ],
      },
      {
        category: "Veggie Delight",
        image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/mozzarella-1575066_1920.jpg",
        items: [
          {
            title: "Aaloo Palak",
            description: "Spinach cooked with potatoes using onion and tomato sauce with hint of cream.",
            cost: "$12.99",
          },
          {
            title: "Aaloo Gobi",
            description: "Cauliflower cooked with potato using onion and tomato sauce.",
            cost: "$12.99",
          },
          {
            title: "Aaloo Baigun",
            description: "Eggplant cooked with potato using onion and tomato sauce.",
            cost: "$12.99",
          },
          {
            title: "Aaloo Mutter",
            description: "Green peas cooked with potato with onions and tomato sauce.",
            cost: "$11.99",
          },
          {
            title: "Nav Ratan Korma",
            description: "Mix Vegetable cooked using onion and tomatoes and some hint of cream.",
            cost: "$12.99",
          },
          {
            title: "Choley",
            description: "Garbanzo beans cooked using onion and tomato sauce. ",
            cost: "$11.99",
          },
          {
            title: "Daal Fry",
            description: "Lentils cooked with tomato and onion sauce and sautéed with garlic. ",
            cost: "$10.99",
          },
          {
            title: "Daal Makhni",
            description: "Mixed Lentils cooked with tomato and onion sauce with hint of cream",
            cost: "$11.99",
          },
          {
            title: "Bhindi Masala",
            description: "Okra / Lady finger cooked using diced tomato and onions.",
            cost: "$13.99",
          },
          {
            title: "Palak Paneer",
            description: "Spinach cooked with homemade cottage cheese smooth texture and flavor with some hint of cream.",
            cost: "$13.99",
          },
          {
            title: "Paneer Tikka Masala",
            description: "Homemade cottage cheese cooked along with sautéed bell peppers, onion and mushrooms cooked in onion and tomato sauce with hint of cream. ",
            cost: "$14.25",
          },
          {
            title: "Mutton Paneer",
            description: "Homemade cottage cheese cooked with green peas and diced onions. ",
            cost: "$14.25",
          },
          {
            title: "Mushroom mutter",
            description: "Mushrooms cooked with green peas and diced onion. ",
            cost: "$14.25",
          },
          {
            title: "Palak",
            description: "Only Spinach cooked with hint of cream. ",
            cost: "$13.99",
          },
        ],
      },
      {
        category: "Dum Biryani",
        items: [
          {
            title: "Chicken Biryani",
            description:
              "Biryani is cooked with a special method known as 'Dum'. Making this delicacy requires chicken cooked in spices and later layered with rice. This utensil is than sealed to slow cook, making a perfect bowl of 'Dum Biryani'.",
            cost: "$15.99",
          },
          {
            title: "Lamb Biryani",
            description:
              "Biryani is cooked with a special method known as 'Dum'. Making this delicacy requires lamb cooked in spices and later layered with rice. This utensil is than sealed to slow cook, making a perfect bowl of 'Dum Biryani'.",
            cost: "$15.99",
          },
          {
            title: "Goat Biryani",
            description:
              "Biryani is cooked with a special method known as 'Dum'. Making this delicacy requires goat cooked in spices and later layered with rice. This utensil is than sealed to slow cook, making a perfect bowl of 'Dum Biryani'.",
            cost: "$19.99",
          },
          {
            title: "Veggie Biryani",
            description: "",
            cost: "$13.99",
          },
        ],
      },
      {
        category: "Breads and Rice",
        items: [
          {
            title: "Rice",
            description: "Basmati rice cooked with herbs and other spices.",
            cost: "$4.99",
          },
          {
            title: "Naan",
            description: "",
            cost: "$1.99",
          },
          {
            title: "Butter Naan",
            description: "",
            cost: "$2.99",
          },
          {
            title: "Onion Naan",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Garlic Naan",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Qeema Naan(Beef)",
            description: "",
            cost: "$6.99",
          },
          {
            title: "Qeema Naan(Chicken)",
            description: "",
            cost: "$6.99",
          },
          {
            title: "Paneer Naan",
            description: "",
            cost: "$5.99",
          },
          {
            title: "Tandoori Roti",
            description: "",
            cost: "$2.99",
          },
          {
            title: "Butter Roti",
            description: "",
            cost: "$4.50",
          },
          {
            title: "Garlic Roti",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Onion Roti",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Paneer stuffed Roti",
            description: "",
            cost: "$5.99",
          },
        ],
      },
      {
        category: "Beverages",
        items: [
          {
            title: "Mango Lassi",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Salt Lassi",
            description: "",
            cost: "$4.50",
          },
          {
            title: "Sweet Lassi",
            description: "",
            cost: "$4.50",
          },
          {
            title: "Soda",
            description: "",
            cost: "$2.50",
          },
          {
            title: "Tea",
            description: "",
            cost: "$3.99",
          },
          {
            title: "Kashmiri Chai",
            description: "",
            cost: "$5.99",
          },
          {
            title: "Mineral Water",
            description: "",
            cost: "$3.00",
          },
          {
            title: "Sparkling Water (flavored/Non flavored)",
            description: "",
            cost: "$5.00",
          },
          {
            title: "Non-Alcoholic Beverages (flavored/Non flavored)",
            description: "",
            cost: "$6.99",
          },
        ],
      },
      {
        category: "Sides",
        items: [
          {
            title: "Salad",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Raita",
            description: "",
            cost: "$2.50",
          },
          {
            title: "Pickle",
            description: "",
            cost: "$1.99",
          },
        ],
      },
    ],
    // menu: [
    //   {
    //     category: "Tandoori",
    //     src: "/imageMy.png",
    //     items: [
    //       {
    //         title: "Chicken Barha (Half/Full)",
    //         description: "House-spiced chicken, marinated with classic South Asian flavors & traditional spices, cooked to perfection.",
    //         cost: "$16.00/$30.00",
    //         class: "small",
    //       },
    //       {
    //         title: "Chicken Leg Quarter",
    //         description: "A juicy leg quarter infused with house-made spices and grilled over charcoal for a traditional flavor.",
    //         cost: "$6.25",
    //         class: "small",
    //       },
    //       {
    //         title: "Chicken Breast Quarter",
    //         description: "Chicken breast piece soaked in homemade spices and cooked to satisfaction over a charcoal grill.",
    //         cost: "$7.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Seekh Kabab Beef",
    //         description: "Tender minced beef, blended with aromatic herbs and spices, grilled the South Asian way.",
    //         cost: "$4.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Seekh Kabab Chicken",
    //         description: "Succulent chicken mince, infused with spices, grilled on skewers over an open charcoal flame. ",
    //         cost: "$4.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Chicken Boti Kabab",
    //         description: "Boneless chicken cubes marinated in a blend of spices and grilled to preserve the South Asian tenderness.",
    //         cost: "$14.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Tandoori Fish",
    //         description: "Succulent fish marinated in aromatic spices, grilled over charcoal & served with rice and special sauce.",
    //         cost: "$16.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Tandoori Shrimps",
    //         description: "Jumbo shrimp marinated in South Asian spices, grilled till smoked & served with rice and special sauce.",
    //         cost: "$16.99",
    //         class: "large",
    //       },

    //       {
    //         title: "Lamb Chops",
    //         description: "Tender lamb chops marinated in herbs and spices, cooked over an open grill to charcoaled perfection.",
    //         cost: "$17.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Chicken Wing Masala",
    //         description: "Juicy chicken wings marinated in a variety of spices & cooked in a clay oven for maximum flavor.",
    //         cost: "$16.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Malai Tikka Kabab",
    //         description: "Succulent cubes of chicken breast marinated in cream and skewered over a charcoal grill.",
    //         cost: "$16.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Murgh Malai",
    //         description: "Chicken marinated in creamy spices and grilled to smoky perfection for a mouthwatering taste.",
    //         cost: "$15.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Paneer Tikka",
    //         description: "Cottage cheese cubes marinated in traditional spices, cooked in a clay oven & served piping hot.",
    //         cost: "$14.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Mushroom Tikka",
    //         description: "Juicy mushrooms prepared in a clay oven after being marinated in spices & served with grilled vegetables",
    //         cost: "$14.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Haray Bharay Kabab",
    //         description: "Delicious blend of green peas and potato packed onto a skewer and grilled to perfection for a mouthwatering delight.",
    //         cost: "$4.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Samosa",
    //         description: "Crispy pastry stuffed with spiced vegetables or meat, served with chutney.",
    //         cost: "$1.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Daahi Bhalle / Papri Chat / Bhalle Papri",
    //         description: "Lentil balls soaked in creamy yogurt with a host of tangy spices & served with chutney.",
    //         cost: "$9.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Veggie Cutlet",
    //         description: "Spicy vegetable patty made with potatoes, carrots, and green peas. A South Asian special.",
    //         cost: "$7.99",
    //         class: "small",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Lamb and Goat",
    //     src: "/tandoori.jpg",
    //     image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/dinner-min-1-1024x256-1.jpg",
    //     items: [
    //       {
    //         title: "Lamb Korma",
    //         description: "Succulent pieces of lamb cooked in a rich, creamy sauce of yogurt, spices and onion gravy.",
    //         cost: "$14.25",
    //         class: "small",
    //       },
    //       {
    //         title: "Saag Lamb",
    //         description: "Tender lamb chunks cooked together with spinach, topped off with butter to create the perfect blend of taste.",
    //         cost: "$15.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Lamb Stew",
    //         description: "A hearty and aromatic stew of tender lamb cooked with onions spices and simmered slowly to perfection.",
    //         cost: "$14.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Lamb Kadai",
    //         description: "Tender lamb cooked with fresh bell peppers, tomatoes, onions, and garlic in a tomato-based sauce.",
    //         cost: "$15.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Bhuna Gosht",
    //         description: "Tender lamb cooked in a tomato-based sauce with chili peppers and black pepper till rich and thick.",
    //         cost: "$15.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Beef Keema Aaloo",
    //         description: "A classic South Asian dish made with spiced minced lamb and potatoes, evoking the warm, hearty feeling of home.",
    //         cost: "$14.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Mutton Rogan Rosh",
    //         description: "Lamb cooked in a creamy tomato gravy with a heady combination of intense spices, straight out of the Kashmir Valley.",
    //         cost: "$18.99",
    //         class: "small",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Chicken Curry's",

    //     src: "/chickenkarahi.jpg",
    //     items: [
    //       {
    //         title: "Achari Chicken",
    //         description: "Tender chicken marinated in a tangy blend of pickling spices prepared in an earthen clay pot.",
    //         cost: "$15.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Chikcen Tikka Masala",
    //         description: "Juicy grilled chicken cooked in a creamy tomato-based sauce with a blend of aromatic spices.",
    //         cost: "$14.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Butter Chicken",
    //         description: "Tender boneless chicken leg pieces marinated in spices & cooked in a tomato and onion sauce with cream.",
    //         cost: "$14.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Chicken Korma",
    //         description: "Tender chicken pieces cooked in a rich, creamy sauce with yogurt, onion gravy & aromatic spices.",
    //         cost: "$13.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Saag Chicken",
    //         description: "Tender chicken cooked in a creamy spinach sauce with a blend of aromatic spices.",
    //         cost: "$15.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Murgh Choley",
    //         description: "chicken cooked with chickpeas in a spicy tomato-based sauce infused with aromatic spices.",
    //         cost: "$15.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Kadai Chicken",
    //         description: "Juicy chicken pieces cooked with bell peppers, onions, sautéed garlic & aromatic spices in a thick tomato-based sauce.",
    //         cost: "$15.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Chilli Chicken",
    //         description: "Crispy fried chicken cooked in a house-special batter & served with our signature sauce.",
    //         cost: "$17.99",
    //         class: "small",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Veggie Delight",
    //     src: "/veggidelight.jpg",
    //     image: "https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/mozzarella-1575066_1920.jpg",
    //     items: [
    //       {
    //         title: "Aaloo Palak",
    //         description: "Tender potatoes and spinach cooked in a creamy tomato and onion sauce with a blend of aromatic spices.",
    //         cost: "$12.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Aaloo Gobi",
    //         description: "Fresh potatoes and cauliflower prepared in a creamy tomato and onion sauce. A vegetarian delight.",
    //         cost: "$12.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Aaloo Baigun",
    //         description: "Potatoes and eggplant come together in a wonderful mix of tomato and onion sauce to create a delicious veg offering.",
    //         cost: "$12.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Aaloo Mutter",
    //         description: "The classic dish of potatoes and peas, made with our special blend of tomato and onion sauce.",
    //         cost: "$11.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Nav Ratan Korma",
    //         description: "The best of the vegetable kingdom comes together in this mixed dish that's equal parts exquisite and delicious.",
    //         cost: "$12.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Choley",
    //         description: "Chickpeas prepared in a tomato and onion sauce with a combination of aromatic spices. ",
    //         cost: "$11.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Daal Fry",
    //         description: "A lentil-based vegetarian dish with a crispy texture prepared with tomato and onions & sautéed with garlic.",
    //         cost: "$10.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Daal Makhni",
    //         description: "A creamy lentil-based vegetarian dish, slow-cooked with aromatic spices and finished with a touch of cream.",
    //         cost: "$11.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Bhindi Masala",
    //         description: "Okra cooked in a blend of spices with onions and tomatoes for a flavorful vegetarian dish.",
    //         cost: "$13.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Palak Paneer",
    //         description: "Cottage cheese cubes cooked in a creamy spinach sauce with a blend of aromatic spices.",
    //         cost: "$13.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Paneer Tikka Masala",
    //         description: "Homemade cottage cheese cooked in a creamy tomato-based sauce with sautéed bell peppers, onion and mushrooms.",
    //         cost: "$14.25",
    //         class: "small",
    //       },
    //       {
    //         title: "Mutton Paneer",
    //         description: "Tender pieces of lamb broiled and cooked with cottage cheese to create a melt-in-your-mouth experience.",
    //         cost: "$14.25",
    //         class: "small",
    //       },
    //       {
    //         title: "Mushroom mutter",
    //         description: "Mushrooms, green peas and onions come together to create a veg dish that's a unique brand of delicious.",
    //         cost: "$14.25",
    //         class: "small",
    //       },
    //       {
    //         title: "Palak",
    //         description: "A simple vegetarian dish made with creamy spinach and a blend of aromatic spices. Prepared using our special recipe.",
    //         cost: "$13.99",
    //         class: "small",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Dum Biryani",
    //     src: "/DumBiryani.jpg",
    //     items: [
    //       {
    //         title: "Chicken Biryani",
    //         description: "The classic biryani made with chicken cooked in layers of rice and flavor-filled spices. Slow-cooked to perfection within a sealed utensil.",
    //         cost: "$15.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Lamb Biryani",
    //         description: "Lamb pieces mixed with aromatic spices and rice, slow-cooked in a sealed pot till the flavor sets in.",
    //         cost: "$15.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Mutton Biryani",
    //         description: "A rich blend of rice, traditional spices and mutton that reaches perfection through a slow-cooking process.",
    //         cost: "$19.99",
    //         class: "large",
    //       },
    //       {
    //         title: "Veggie Biryani",
    //         description: "Potatoes dominate this special mix of biryani, prepared with the same blend of spices and rice.",
    //         cost: "$13.99",
    //         class: "small",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Breads and Rice",
    //     src: "/bread.jpg",
    //     items: [
    //       {
    //         title: "Rice",
    //         description: "Basmati rice cooked the South Asian way with a unique blend of herbs and spices to complement any dish.",
    //         cost: "$4.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Naan",
    //         description: "The classic all-purpose flour flatbread of the South Asian region. A staple with most dishes.",
    //         cost: "$1.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Butter Naan",
    //         description: "A butter-soaked version of the famous flatbread, adding more to any meal it's paired with.",
    //         cost: "$2.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Onion Naan",
    //         description: "Classic flatbread topped with chopped onions and baked in a traditional clay oven.",
    //         cost: "$4.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Garlic Naan",
    //         description: "A mouthwatering infusion of garlic paste & herbs dominate your food palette with this flatbread.",
    //         cost: "$4.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Qeema Naan(Beef)",
    //         description: "A delicious naan bread stuffed with minced beef and cooked to perfection in a traditional clay oven.",
    //         cost: "$6.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Qeema Naan(Chicken)",
    //         description: "A delicious naan bread stuffed with minced chicken and cooked to perfection in a traditional clay oven.",
    //         cost: "$6.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Paneer Naan",
    //         description: "Flatbread prepared with a generous helping of cottage cheese that melts in your mouth.",
    //         cost: "$5.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Tandoori Naan",
    //         description: "Flatbread that is crispy on the outside while being soft and plump on the inside.",
    //         cost: "$2.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Butter Roti",
    //         description: "A variation of the flatbread made with whole wheat flour and topped off by a brushing of melted butter.",
    //         cost: "$4.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Garlic Roti",
    //         description: "Whole wheat flatbread mixed with a fine garlic paste to complement any and every meal.",
    //         cost: "$4.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Onion Roti",
    //         description: "Classic whole wheat flatbread topped with chopped onions for a delicious crunch.",
    //         cost: "$4.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Paneer stuffed Roti",
    //         description: "A delicious flatbread that houses rich cottage cheese that is cooked to perfection.",
    //         cost: "$5.99",
    //         class: "small",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Beverages",
    //     src: "/Beverages.jpg",
    //     items: [
    //       {
    //         title: "Mango Lassi",
    //         description: "A refreshing yogurt-based drink blended with fresh mango pulp for a sweet and tangy flavor.",
    //         cost: "$4.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Salt Lassi",
    //         description: "A refreshing yogurt-based drink blended with a pinch of salt and roasted cumin for a savory and refreshing taste.",
    //         cost: "$4.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Sweet Lassi",
    //         description: "A sweet and refreshing yogurt-based drink blended with sugar and flavored with rosewater or cardamom.",
    //         cost: "$4.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Soda",
    //         description: "Choose from our selection of carbonated drinks to quench your thirst.",
    //         cost: "$2.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Tea",
    //         description: "A classic South Asian tea brewed with a blend of aromatic spices and served with milk and sugar.",
    //         cost: "$3.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Kashmiri Chai",
    //         description: "A traditional Kashmiri tea brewed with green tea, nuts, and spices, including cardamom and cinnamon, for a rich and flavorful taste.",
    //         class: "small",
    //         cost: "$5.99",
    //       },
    //       {
    //         title: "Mineral Water",
    //         description: "",
    //         cost: "$3.00",
    //       },
    //       {
    //         title: "Sparkling Water (flavored/Non flavored)",
    //         description: "",
    //         cost: "$5.00",
    //         class: "small",
    //       },
    //       {
    //         title: "Non-Alcoholic Beverages (flavored/Non flavored)",
    //         description: "",
    //         cost: "$6.99",
    //         class: "small",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Sides",
    //     src: "/sides.jpg",
    //     items: [
    //       {
    //         title: "Salad",
    //         description: "A variety of vegetables including tomatoes, cucumbers, onions, etc. that go great with many dishes.",
    //         cost: "$4.99",
    //         class: "small",
    //       },
    //       {
    //         title: "Raita",
    //         description: "A yogurt-based condiment that is popular with everything from meat to rice dishes.",
    //         cost: "$2.50",
    //         class: "small",
    //       },
    //       {
    //         title: "Pickle",
    //         description: "The traditional 'achaar' from South Asia prepared in oils & renowned for its unique tangy flavor.",
    //         cost: "$1.99",
    //         class: "small",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 4,
    slug: "Ketlee",
    title: "Kettle'e",
    imageTitle: "Kettle'e",
    description: "Creating wonderful desi culinary\nmemories in popular Santa Clara",
    backgroundImageUrl: "/location/Kettlee.jpg",
    backgroundImageLandscapeUrl: "/location/Kettlee-Landscape.jpg",
    bannerBackgroundImageUrl: "/location/banner.jpg",
    mapAddress: "1610%20E%20El%20Camino%20Real,%20Santa%20Clara,%20CA%2095050",
    overlayData: {
      backgroundImageUrl: "url(/location/overlay-banner.jpg)",
      overlayTitle: "Opening Hours",
      column1TopText: "Kettle'e",
      column1MiddleText: "1610 E El Camino Real, Santa Clara, CA 95050",
      column1BottomText: "(408) 216-0890",
      column2TopText: "Monday to Friday \n11 am - 11 pm",
      column2MiddleText: "",
      column2BottomText: "Weekends \n11 am - 12 am",
      email: "steph@curry.com",
      timingOne: "Tuesday - Sunday 10:00 AM - 3:00 PM, 4 PM - 8 PM",
      timingTwo: "",
      timingThree: "",
    },
    menu: [
      {
        category: "Breakfast Delicacy",
        items: [
          {
            title: "Avacado & Egg Sandwich",
            description: "3 eggs and avacado on sliced bread",
            cost: "$12.99",
          },
          {
            title: "Veggie Loaded Omelet",
            description: "Stuffed with assorted vegetables",
            cost: "$11.99",
          },
          {
            title: "Crispy Bacon & Cheese",
            description: "Chunk of crispy beef bacon",
            cost: "$11.99",
          },
          {
            title: "Sliced Bread Omelet",
            description: "Stuffed with sautéed tomato and onion",
            cost: "$10.99",
          },
          {
            title: "Egg Bhujia & Paratha",
            description: "Indian style scrambled egg",
            cost: "$9.99",
          },
          {
            title: "Masala Egg & Paratha",
            description: "Boiled egg with dry masala",
            cost: "$9.99",
          },
          {
            title: "Shami Omelet",
            description: "Masala omelet served with shami kabab",
            cost: "$11.99",
          },
        ],
      },
      {
        category: "Specials",
        items: [
          {
            title: "Halwa Puri Choley",
            description: "Garbanzo bean, aloo sabzi with fried whole wheat bread and semolina sweet",
            cost: "$10.99",
          },
          {
            title: "Paya Roti",
            description: "Lamb soup cooked in spices served with bread",
            cost: "$9.99",
          },
          {
            title: "Qeema Paratha",
            description: "Fresh ground goat served with lachha paratha",
            cost: "$14.99",
          },
          {
            title: "Qeema Puri Halwa",
            description: "Fresh ground goat served with fried whole wheat bread and semolina sweet",
            cost: "$14.99",
          },
        ],
      },
      {
        category: "Parathas",
        items: [
          {
            title: "Lachha Paratha",
            description: "",
            cost: "$3.50",
          },
          {
            title: "Aloo Paratha",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Mooli Paratha",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Gobi Paratha",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Dal Paratha",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Paneer Paratha",
            description: "",
            cost: "$5.50",
          },
          {
            title: "Onion Paratha",
            description: "",
            cost: "$4.99",
          },
        ],
      },
      {
        category: "Rolls and Sandwiches",
        items: [
          {
            title: "Kathi Kabab Roll",
            description: "Boneless chicken breast wrapped in egg & paratha",
            cost: "$11.99",
          },
          {
            title: "Murgh Malai Roll",
            description: "Boneless chicken thigh served with lachha paratha",
            cost: "$15.99",
          },
          {
            title: "Kathi Paneer Roll",
            description: "Paneer wrapped in egg & paratha",
            cost: "$10.99",
          },
          {
            title: "Shami Kabab Roll",
            description: "Minced lamb wrapped in egg & paratha",
            cost: "$12.99",
          },
          {
            title: "Shami Kabab",
            description: "Minced lamb patties",
            cost: "$6.00",
          },
          {
            title: "Shami Kabab & Paratha",
            description: "Minced lamb patties served with paratha",
            cost: "$8.99",
          },
          {
            title: "BBQ Beef & Bacon Sandwich",
            description: "N/A",
            cost: "$12.99",
          },
          {
            title: "Beef Burger",
            description: "N/A",
            cost: "$10.99",
          },
          {
            title: "Bombay club Sandwich",
            description: "N/A",
            cost: "$12.99",
          },
          {
            title: "Beef Burger",
            description: "N/A",
            cost: "$10.99",
          },
          {
            title: "Bun Kabab",
            description: "N/A",
            cost: "$12.99",
          },
          {
            title: "Grilled Chicken",
            description: "N/A",
            cost: "$12.99",
          },
          {
            title: "Veggie Burger",
            description: "N/A",
            cost: "$11.99",
          },
          {
            title: "Veggie Sandwich",
            description: "N/A",
            cost: "$11.99",
          },
        ],
      },
      {
        category: "Delhi Wale Snacks",
        items: [
          {
            title: "Choley Bhature",
            description: "Puffy bread served with chickpeas and potatoes",
            cost: "$11.99",
          },
          {
            title: "Aaloo Ki Tikki",
            description: "Potato patties served with yogurt and chutney",
            cost: "$5.99",
          },

          {
            title: "Delhi Fried Chicken",
            description: "",
            cost: "$13.99",
          },
          {
            title: "Samosa Chat",
            description: "",
            cost: "$6.99",
          },
          {
            title: "Samosa Veg",
            description: "",
            cost: "$1.99",
          },
          {
            title: "Chicken Chowmein",
            description: "",
            cost: "$12.99",
          },

          {
            title: "Chilli Garlic Chicken",
            description: "",
            cost: "$15.99",
          },
          {
            title: "Chilli Paneer",
            description: "",
            cost: "$13.99",
          },
          {
            title: "Egg Noodles",
            description: "",
            cost: "$11.99",
          },
          {
            title: "Paneer Noodles",
            description: "",
            cost: "$14.99",
          },
          {
            title: "Schezwan Noodles",
            description: "",
            cost: "$13.99",
          },
          {
            title: "Veg Chowmein",
            description: "",
            cost: "$10.99",
          },
        ],
      },
      {
        category: "Chai",
        items: [
          {
            title: "Assam Spring",
            description: "",
            cost: "$3.50",
          },
          {
            title: "Cutting Chai",
            description: "",
            cost: "$4.25",
          },
          {
            title: "Masala Chai",
            description: "",
            cost: "$4.00",
          },
          {
            title: "Ginger Kadak Chai",
            description: "",
            cost: "$4.00",
          },
          {
            title: "Breakfast Black",
            description: "",
            cost: "$3.25",
          },
          {
            title: "Classic Earl Grey",
            description: "",
            cost: "$4.25",
          },
          {
            title: "Rose Mulethi",
            description: "",
            cost: "$5.00",
          },
          {
            title: "Irani Chai",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Masala Chai",
            description: "",
            cost: "$3.99",
          },
          {
            title: "Mint Chai",
            description: "",
            cost: "$2.50",
          },
          {
            title: "Rose Mulethi Medium",
            description: "",
            cost: "$4.25",
          },
        ],
      },
      {
        category: "Green Teas",
        items: [
          {
            title: "Moraccan Mint",
            description: "",
            cost: "$4.25",
          },
          {
            title: "Kashmiri Kahwa",
            description: "",
            cost: "$4.75",
          },
          {
            title: "Ginger Honey",
            description: "",
            cost: "$4.25",
          },
        ],
      },
      {
        category: "Coffee",
        items: [
          {
            title: "Delhi Espresso",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Expresso Short",
            description: "",
            cost: "$3.75",
          },
          {
            title: "Cappacino",
            description: "",
            cost: "$4.25",
          },
          {
            title: "Latte",
            description: "",
            cost: "$4.25",
          },
          {
            title: "Americano",
            description: "",
            cost: "$3.50",
          },
          {
            title: "Mocha",
            description: "",
            cost: "$4,25",
          },
          {
            title: "Macchiato",
            description: "",
            cost: "$4.75",
          },
          {
            title: "Hot Coco",
            description: "",
            cost: "$4.50",
          },
        ],
      },
      {
        category: "Shakes",
        items: [
          {
            title: "Oreo & Chocolate",
            description: "",
            cost: "$5.50",
          },
          {
            title: "Fresh Strawberry",
            description: "",
            cost: "$5.50",
          },
          {
            title: "Fresh Blueberry",
            description: "",
            cost: "$5.50",
          },
        ],
      },
      {
        category: "Lassi",
        items: [
          {
            title: "Mango Lassi",
            description: "",
            cost: "$4.99",
          },
          {
            title: "Strawberry Lassi",
            description: "",
            cost: "$5.50",
          },
          {
            title: "Plain Lassi",
            description: "",
            cost: "$4.50",
          },
        ],
      },
      {
        category: "Fresh Juice",
        items: [
          {
            title: "Orange Juice",
            description: "",
            cost: "$5.00",
          },
          {
            title: "Mint & Cucumber",
            description: "",
            cost: "$5.00",
          },
          {
            title: "Refreshing Carrot",
            description: "",
            cost: "$5.00",
          },
        ],
      },
      {
        category: "Cold Coffee",
        items: [
          {
            title: "Delhi Cold Coffee",
            description: "",
            cost: "$5.00",
          },
          {
            title: "Iced Black Coffee",
            description: "",
            cost: "$3.50",
          },
        ],
      },
      {
        category: "Roast (6 Hours in Advance)",
        items: [
          {
            title: "BBQ Roasted whole chicken",
            description: "",
            cost: "$25.00",
          },
          {
            title: "Chicken Barrah (Half/Full)",
            description: "Chicken marinated in special house spices.",
            cost: "$16.00/$30.00",
          },
          {
            title: "Chicken Chargah",
            description: "",
            cost: "$25.00",
          },
        ],
      },
    ],
  },
];
