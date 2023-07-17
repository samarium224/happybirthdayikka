function PlaySound(audioname,loop){
    let sound = new Audio(audioname);
    sound.loop = loop;
    sound.play();

    let mainbody = document.getElementById("mainBodyMusic");
    mainbody.classList.add("soundstart");

    let storyboady = document.getElementById("story-container");
    storyboady.classList.add("story_start");
}
