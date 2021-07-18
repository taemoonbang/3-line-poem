function changeText(){
    let h3 = document.getElementsByTagName('h3');
    let texts = ["모든지","각잡고 모각코와 함께","코딩하자!"];

    document.getElementsByClassName('button')[0].addEventListener('click', function(){
        h3[0].innerHTML = texts[0];
    });
    document.getElementsByClassName('button')[1].addEventListener('click', function(){
        h3[1].innerHTML = texts[1];
    });
    document.getElementsByClassName('button')[2].addEventListener('click', function(){
        h3[2].innerHTML = texts[2];
    });
}