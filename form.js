class Form {
    constructor(){
        this.name = createInput('name');
        this.email = createInput('email');
        this.greeting1 = createElement('h2');
        this.greeting2 = createElement('h2');
        this.title = createElement('h1');
        this.register = createButton('Register');
        this.image = loadImage('ThanksgivingImage.png');
    }
    hide(){
        this.register.hide();
        this.name.hide();
        this.email.hide();
    }
    
    display(){
        this.title.html('Study for Exams, Learn for Life');
        image(this.image,displayWidth-50,0,50,50);
        this.title.position(displayWidth/2-50, 0);
        this.name.position(displayWidth/2-40, displayHeight/2-80);
        this.register.position(displayWidth/2+30, displayHeight/2);
        this.email.position(displayWidth/2-40, displayHeight/2-50);
        this.register.mousePressed(()=>{
            this.register.hide();
            this.name.hide();
            this.email.hide();
            name = this.name.value();
            email = this.email.value();
            console.log(name);
            console.log(email);
            this.greeting1.html("Welcome "+ name);
            this.greeting2.html("Choose your examination paper from the given list");
            this.greeting1.position(displayWidth/2+100, 50);
            this.greeting2.position(displayWidth/2-100, 70);
            paper1 = createCheckbox('Paper1');
            paper2 = createCheckbox('Paper2');
            paper3 = createCheckbox('Paper3');
            paper4 = createCheckbox('Paper4');
            paper1.position(displayWidth/2-40, displayHeight/2);
            paper2.position(displayWidth/2-40,displayHeight/2+20);
            paper3.position(displayWidth/2-40,displayHeight/2+40);
            paper4.position(displayWidth/2-40,displayHeight/2+60);
            var paper1_checked = document.getElementById(paper1);
            console.log(document.querySelector('#paper1:checked')!==null);
            
            if(paper1_checked === true){
            done = createButton('Done');
            done.position(displayWidth/2-40,displayHeight/2+100);
            }
        }) 
    }
}