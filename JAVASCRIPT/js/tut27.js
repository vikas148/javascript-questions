console.log('this is tut27');
/*
object is an unique entity jis me properties or methods hote hai

constructor ek templete hoti hai jis s eobjects create kr skte hai

*/
//object litrals for    creating objects

let car={
    name: 'Maruti 800',
    topspeed: 89, 
   run: function (){
            console.log('car is running');
    }

}

console.log(car);

//we have alredy seen   constructors like  these:
// new Date();


//creating a constructor for thr car
function gencar(givenname,givenspeed){
    this.name=givenname;
    this.topspeed=givenspeed;

    this.run =function(){
        console.log(` ${this.name} is running`);
    }
this.anylise =function(){
    console.log(`this car is slower by ${ 200 - this.topspeed} mercedes`);
}

}

car1= new gencar('nissan',180)
car2= new gencar('Alto ',180)
console.log(car1 ); 