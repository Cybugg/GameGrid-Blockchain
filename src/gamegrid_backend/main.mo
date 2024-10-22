import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Option "mo:base/Option";
import Trie "mo:base/Trie";
import Nat32 "mo:base/Nat32";
import Types "./types";
import Utils "./utils";
import Array "mo:base/Array";
import Principal "mo:base/Principal";
import Buffer "mo:base/Buffer";



actor{


  /**
   * Types
   */

  // The type of a user identifier.
  public type userId = Nat32;

// Level of character
  type characterLevel = Nat;


  //  Games in store
  stable var games:[Types.Game] = [];


  // Get Games List

  public query func getGames(): async [Types.Game]{
        games;
  };
  

  // Get Total Number of users online
public query func onlineUsers(): async Text{
        "1 user";
  };

//  Lists of collectables
public query func getCollectiblesList(): async [Text]{
  [""];
};
// get principal
public shared (msg) func whoami():async Principal{
  msg.caller;
};


 /**
   * Application State using Array
   */
  // Stores the platform players details 
  private stable var players:[Types.User] = [];

  // Get the total number of players registered on the platform
  public query func totalRegisteredPlayers(): async Nat {
      let population = Array.size(players);
     population;
  };

  //  name :Text;
  //   passkey:Nat;
  //   gg: Nat;
  //   lv_point:characterLevel;
  //   last_loggedin:Text;
  //   joined:Text;
  //   class_:Text;
  //   race:Text;
  //   gender:Text;
  //   background:Text;
  //   nft_image:Text;
  //   id:?Principal

  public shared (msg) func registerPlayer(passkey:Nat,name:Text,gg:Text,lv_point:Text,last_loggedin:Text,joined:Text,class_:Text,race:Text,gender:Text,background:Text,nft_image:Text): async Text{
   
    let principalText = Principal.toText(msg.caller);
    let principal_ = Principal.fromText(principalText);
    let isAnon = Principal.isAnonymous(principal_);
    let playerProfile:Types.User = {
        id=principal_;
        passkey=passkey;
        gg=gg;
        name = name;
        lv_point = lv_point;
        last_loggedin = last_loggedin;
        joined = joined;
        class_ = class_;
        race = race;
        gender=gender;
        background=background;
        nft_image=nft_image;
      };
    
    if(isAnon){
      return "not authenticated";
    }else{
    let playersBuff = Buffer.fromArray<Types.User>(players);
        playersBuff.add(playerProfile);
        players := Buffer.toArray(playersBuff);
      return "User has been registered"
    }
  };

  // Get all the  players profile
  public query func getPlayers():async [Types.User]{
    players;
  };

  // Get a player's profile


 public shared (msg) func getPlayer():async [Types.User]{
  let principalText = Principal.toText(msg.caller);
    let principal_ = Principal.fromText(principalText);
    let playersBuff = Buffer.fromArray<Types.User>(players);
    
    let playersSet = await getPlayers();
 

  };






  /**
   * Application State using Trie [Experimental but in use]
   */

 
  // The user data store.
  private stable var users : Trie.Trie<userId, Types.User> = Trie.empty();

  /**
   * High-Level API
   */

  // Read all users data
  public query func ReadAllUsers() : async [Types.User] {
    let array = Trie.toArray<userId,Types.User,Types.User>(
  users,
  func (k, v) = v
);
    array;
  };


 // Create a user.
  public func createUser(user : Types.User) : async userId {
    let userId = Nat32.fromNat(user.passkey);
    users := Trie.replace(
      users,
      key(userId),
      Nat32.equal,
      ?user,
    ).0;
    return userId;
  };

  // Read a user.
  public query func readUser(user_id : Nat) : async ?Types.User {
     let userId = Nat32.fromNat(user_id);
    let result = Trie.find(users, key(userId), Nat32.equal);
    return result;
  };

  // Update a user.
  public func updateUser(user_Id : Nat, user : Types.User) : async Bool {
    let userId = Nat32.fromNat(user_Id);
    let result = Trie.find(users, key(userId), Nat32.equal);
    let exists = Option.isSome(result);
    if (exists) {
      users := Trie.replace(
        users,
        key(userId),
        Nat32.equal,
        ?user,
      ).0;
    };
    return exists;
  };

  // Delete a user.
  public func deleteUser(user_id : Nat) : async Bool {
    let userId = Nat32.fromNat(user_id);
    let result = Trie.find(users, key(userId), Nat32.equal);
    let exists = Option.isSome(result);
    if (exists) {
      users := Trie.replace(
        users,
        key(userId),
        Nat32.equal,
        null,
      ).0;
    };
    return exists;
  };

  /**
   * Utilities
   */
  // Create a trie key from a user identifier.
  private func key(x : userId) : Trie.Key<userId> {
    return { hash = x; key = x };
  }
}
