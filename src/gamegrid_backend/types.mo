module {
  //Type Collectibles
  public type Collectibles = {
    name : Text;
    worth : Float;
    category: Text;
    image_url : Text;
    grade_lv : Grade;
  };

  //Type Rating
  public type Grade = {
    #five;
    #four;
    #three;
    #two;
    #one;
  };

  // Level of character [Private Type]
  type characterLevel = Nat;


  //Type User
  public type User = {
    name :?Text;
    passkey:Nat;
    gg: Nat;
    lv_point:characterLevel;
    last_loggedin:Text;
    joined:Text;
    class_:Text;
    race:Text;
    gender:Text;
    background:Text;
    nft_image:Text;
  };

  //Type Games
  public type Game = {
    name : Text;
    description: Text;
    developer:Text;
    players:[User]
  };

};