  // JavaScript array with the story paragraphs
  const storyData = [
    {
      paragraph:
        "In the mystical land of Drakonia, there lived a young girl named Iqra. Unlike ordinary children, Iqra was born with a special gift - she had beautiful, iridescent wings like a dragon. Her wings shimmered with all the colors of the rainbow, and she could soar through the skies with grace and majesty, just like the dragons of legend.",
      imageSrc: "assets/frame1.png"
    },
    {
      paragraph:
        "Iqra's birthday was fast approaching, and her friends Samir, Aurin, Raad, Arjun, Nilormi and Prapti wanted to make this day unforgettable for their beloved dragon girl. They knew Iqra loved adventure and magic, so they decided to plan a surprise celebration in the enchanted forest.",
      imageSrc: "assets/frame2.png"
    },
    {
      paragraph:
        "Samir, being the clever and resourceful one, took charge of organizing the event. Aurin, the artistic and creative girl, designed colorful decorations and a birthday banner that sparkled like Iqra's wings. Raad, who had a talent for cooking, prepared an assortment of delicious dragon-themed treats and sweets.",
      imageSrc: "assets/frame3.png"
    },
    {
      paragraph:
        "Arjun, the adventurous spirit of the group, sought out the help of the magical creatures in the forest. He asked the fairies to sprinkle pixie dust to create an enchanting atmosphere, and the wise old tree-dwellers to provide music with their ancient instruments. Prapti, known for her wisdom and kindness, wrote a heartfelt poem to read to Iqra during the celebration.",
      imageSrc: "assets/frame4.png"
    },
    {
      paragraph:
        "On the day of the celebration, Iqra was surprised to find her friends eagerly waiting for her near the forest entrance. They encourage her to close her eyes and follow the magic light.",
      imageSrc: "assets/frame5.png"
    },
    {
      paragraph:
        "When the blindfold was finally removed, Iqra gasped in awe at the breathtaking sight before her. The glade was transformed into a magical wonderland filled with twinkling lights, colorful flowers. The fairy lights danced in harmony with the gentle breeze, creating an ethereal ambiance.",
      imageSrc: "assets/frame6.png"
    },
    {
      paragraph:
        "The dragon girl's heart swelled with joy as her friends led her to the center of the glade. They all shouted in unison, 'Happy birthday, Iqra!' Tears of happiness welled up in her eyes as she embraced each of her friends, feeling grateful for their thoughtfulness.",
      imageSrc: "assets/frame7.png"
    },
    {
      paragraph:
        "The celebration began, and Iqra and her friends danced and laughed under the moonlit sky. They feasted on the dragon-themed treats Raad had prepared, and the forest creatures joined in the merriment, making the night even more magical.",
      imageSrc: "assets/frame8.png"
    },
    {
      paragraph:
        "As the night drew to a close, Prapti and Nilormi stepped forward and recited her heartfelt poem, expressing their love and admiration for Iqra. The dragon girl's heart was filled with warmth, knowing how lucky she was to have such wonderful friends.",
      imageSrc: "assets/frame9.png"
    },
    {
      paragraph:
        "In that enchanted forest glade, surrounded by the love and companionship of her dearest friends, Iqra felt like the happiest dragon girl in all of Drakonia. She knew she would cherish this special birthday celebration forever, and the memories of her friends' love and efforts would forever remain etched in her heart, just like the beautiful wings she bore upon her back.",
      imageSrc: "assets/frame10.png"
    }
  ];


  // Get the container where the story paragraphs with images will be added
  const storyContainer = document.getElementById("story-container");

  // Loop through the storyData array and add each paragraph with an image to the container
  storyData.forEach(data => {
    // Create a div for the image and text container
    const paragraphDiv = document.createElement("div");

    // Create an image element
    const imageElement = document.createElement("img");
    imageElement.src = data.imageSrc;
    imageElement.alt = "main frame";
    imageElement.classList.add("image");
    paragraphDiv.appendChild(imageElement);

    // Create a paragraph element
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = data.paragraph;
    paragraphDiv.appendChild(paragraphElement);

    // Add the entire div containing image and paragraph to the main story container
    storyContainer.appendChild(paragraphDiv);
  });
