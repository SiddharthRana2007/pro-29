class gun{
    constructor(x,y,r)
      {
          var options={
              isStatic:false,
              restitution:0.0,
              friction:0.5,
              density:1.2
  
              
              }
          this.x=x;
          this.y=y;
          this.r=r
          class ball{
            constructor(x,y,r)
              {
                  var options={
                      isStatic:false,
                      restitution:0.0,
                      friction:0.5,
                      density:1.2
          
                      
                      }
                  this.x=x;
                  this.y=y;
                  this.r=r
                  class ball{
                    constructor(x,y,r)
                      {
                          var options={
                              isStatic:false,
                              restitution:0.0,
                              friction:0.5,
                              density:1.2
                  
                              
                              }
                          this.x=x;
                          this.y=y;
                          this.r=r
                          this.body = Bodies.rectangle(x, y, width, height, options);
                          this.width = width;
                          this.height = height;
                          World.add(world, this.body);
                  
                      }
                      display()
                      {
                              
                              var paperpos=this.body.position;		
                  
                              push()
                              translate(paperpos.x, paperpos.y);
                              rectMode(CENTER)
                              strokeWeight(3);
                              fill(255,0,255)
                              ellipse(0,0,this.r, this.r);
                              pop()
                              
                      }
                  
                  }
                  World.add(world, this.body);
          
              }
              display()
              {
                      
                      var gunpos=this.body.position;		
          
                      push()
                      translate(gunpos.x, gunpos.y);
                      rectMode(CENTER)
                      strokeWeight(3);
                      fill(255,0,255)
                      ellipse(0,0,this.r, this.r);
                      pop()
                      
              }
          
          }
          World.add(world, this.body);
  
      }
      display()
      {
              
              var paperpos=this.body.position;		
  
              push()
              translate(paperpos.x, paperpos.y);
              rectMode(CENTER)
              strokeWeight(3);
              fill(255,0,255)
              ellipse(0,0,this.r, this.r);
              pop()
              
      }
  
  }